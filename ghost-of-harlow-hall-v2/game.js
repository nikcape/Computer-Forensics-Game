const { LOCATIONS, SUSPECTS, LOCATION_OBJECTIVES, LOCATION_HINTS, VERDICT_CARD_POSITIONS } = window.GHH_V2_SCENES;
const { EVIDENCE_LIBRARY, EVIDENCE_NOTES } = window.GHH_V2_EVIDENCE;
const { SoundEngine } = window.GHH_V2_SOUND;
const { buildReportHtml, buildCertificateHtml, openHtmlDocument, formatDate } = window.GHH_V2_CERTIFICATE;

const SAVE_KEY = 'ghost-of-harlow-hall-v2-save';
const SESSION_KEY = 'ghost-of-harlow-hall-v2-session';
const SAVE_VERSION = 1;
const NAME_REGEX = /^[A-Za-z][A-Za-z\s'-]*$/;
const STUDENT_ID_REGEX = /^[A-Za-z]{2}\d{8}$/;

const PHONE_APPS = [
  { id: 'locations', icon: '📍', label: 'Locations' },
  { id: 'evidence', icon: '🗂️', label: 'Evidence' },
  { id: 'journal', icon: '📓', label: 'Journal' },
  { id: 'export', icon: '📤', label: 'Export' },
  { id: 'help', icon: '❓', label: 'Help' }
];

const TUTORIAL_STEPS = {
  1: {
    label: 'Tutorial · Step 1 of 5',
    message: 'There are hidden clues in this room. Move your mouse across the scene — your cursor will change when it finds something.',
    target: () => document.querySelector('#scene-main .hotspot:not(.found)')
  },
  2: {
    label: 'Tutorial · Step 2 of 5',
    message: 'A faint glow means there is something here. Click to examine it.',
    target: () => document.querySelector('#scene-main .hotspot:not(.found)')
  },
  3: {
    label: 'Tutorial · Step 3 of 5',
    message: 'Read every detail carefully. Click Collect Evidence to add it to your case file.',
    target: () => document.querySelector('#modal .btn-collect')
  },
  4: {
    label: 'Tutorial · Step 4 of 5',
    message: 'Witnesses hold information evidence cannot reveal. Click to interview them — choose your questions carefully.',
    target: () => document.querySelector('#scene-main .npc-card')
  },
  5: {
    label: 'Tutorial · Step 5 of 5',
    message: 'Collected evidence appears in your case file. Gather everything in this location to move to the next.',
    target: () => document.querySelector('#phone-content .phone-evidence-list, #phone-content .phone-app-grid')
  }
};

const sounds = new SoundEngine();

const dom = {
  screens: () => document.querySelectorAll('.screen'),
  loginForm: document.getElementById('login-form'),
  playerName: document.getElementById('player-name'),
  studentId: document.getElementById('student-id'),
  playerNameError: document.getElementById('player-name-error'),
  studentIdError: document.getElementById('student-id-error'),
  loginSubmit: document.getElementById('login-submit'),
  titlePlayerLine: document.getElementById('title-player-line'),
  playerChip: document.getElementById('player-chip'),
  sceneLocationTitle: document.getElementById('scene-location-title'),
  sceneSubcopy: document.getElementById('scene-subcopy'),
  sceneProgress: document.getElementById('scene-progress'),
  sceneHint: document.getElementById('scene-hint'),
  sceneMain: document.getElementById('scene-main'),
  saveStatus: document.getElementById('save-status'),
  tutorialReplayBtn: document.getElementById('tutorial-replay-btn'),
  verdictPlayerLine: document.getElementById('verdict-player-line'),
  verdictEvidenceBoard: document.getElementById('verdict-evidence-board'),
  verdictSuspectList: document.getElementById('verdict-suspect-list'),
  verdictSummaryNote: document.getElementById('verdict-summary-note'),
  verdictBtn: document.getElementById('verdict-btn'),
  endingIcon: document.getElementById('ending-icon'),
  endingTitle: document.getElementById('ending-title'),
  endingBody: document.getElementById('ending-body'),
  endingPlayer: document.getElementById('ending-player'),
  endingScore: document.getElementById('ending-score'),
  scoreBreakdown: document.getElementById('score-breakdown'),
  certificateStatus: document.getElementById('certificate-status'),
  certificateBtn: document.getElementById('certificate-btn'),
  phoneShell: document.getElementById('phone-shell'),
  phoneTab: document.getElementById('phone-tab'),
  phoneHomeBtn: document.getElementById('phone-home-btn'),
  phoneCloseBtn: document.getElementById('phone-close-btn'),
  phoneSubtitle: document.getElementById('phone-subtitle'),
  phoneContent: document.getElementById('phone-content'),
  modal: document.getElementById('modal'),
  modalType: document.getElementById('modal-type'),
  modalTitle: document.getElementById('modal-title'),
  modalBody: document.getElementById('modal-body'),
  modalFooter: document.getElementById('modal-footer'),
  tutorialOverlay: document.getElementById('tutorial-overlay'),
  tutorialHighlight: document.getElementById('tutorial-highlight'),
  tutorialTooltip: document.getElementById('tutorial-tooltip'),
  tutorialStepLabel: document.getElementById('tutorial-step-label'),
  tutorialMessage: document.getElementById('tutorial-message'),
  tutorialNextBtn: document.getElementById('tutorial-next-btn'),
  tutorialSkipBtn: document.getElementById('tutorial-skip-btn')
};

let state = createInitialState();
let restoredSave = null;
let loginAttempted = false;
let lastHoverId = null;

function createInitialState() {
  return {
    version: SAVE_VERSION,
    currentLocation: 0,
    currentScreen: 'title-screen',
    evidence: [],
    dialogueProgress: {},
    ethicalChoice: null,
    selectedSuspect: null,
    finalOutcome: null,
    lastSavedAt: null,
    player: { name: '', studentId: '' },
    phone: {
      open: false,
      activeApp: 'home',
      notifications: { evidence: 0, locations: false }
    },
    tutorial: {
      step: 0,
      done: false,
      skipped: false,
      replaying: false
    },
    audio: {
      unlocked: false,
      masterVolume: 0.7,
      uiEnabled: true,
      ambientEnabled: true,
      muted: false
    }
  };
}

function cloneInitialState() {
  return JSON.parse(JSON.stringify(createInitialState()));
}

function getLocationById(id) {
  return LOCATIONS.find(location => location.id === id);
}

function getLocationIndexById(id) {
  return LOCATIONS.findIndex(location => location.id === id);
}

function getSuspectById(id) {
  return SUSPECTS.find(suspect => suspect.id === id);
}

function getEvidenceRecord(id) {
  return EVIDENCE_LIBRARY[id] || null;
}

function hasEvidence(id) {
  return state.evidence.includes(id);
}

function getInterviewProgress(location) {
  if (!location.npc) return { asked: 0, total: 0, complete: true };
  const askedMap = state.dialogueProgress[location.npc.id] || {};
  const asked = location.npc.questions.filter(question => askedMap[question.id]).length;
  return { asked, total: location.npc.questions.length, complete: asked === location.npc.questions.length };
}

function isEthicsComplete(location) {
  return !location.ethicalFlag || state.ethicalChoice !== null;
}

function isEthicsFlagged() {
  return state.ethicalChoice === 'flag';
}

function getEvidenceFoundCount(location) {
  return location.hotspots.filter(hotspot => hasEvidence(hotspot.id)).length;
}

function getLocationTaskStats(location) {
  const evidenceFound = getEvidenceFoundCount(location);
  const interview = getInterviewProgress(location);
  const evidenceTotal = location.hotspots.length;
  const totalTasks = evidenceTotal + (location.npc ? 1 : 0) + (location.ethicalFlag ? 1 : 0);
  const completedTasks = evidenceFound + (interview.complete ? 1 : 0) + (isEthicsComplete(location) ? 1 : 0);
  return { evidenceFound, evidenceTotal, interview, totalTasks, completedTasks };
}

function isLocationComplete(location) {
  const stats = getLocationTaskStats(location);
  return stats.completedTasks >= stats.totalTasks;
}

function isLocationUnlocked(index) {
  return index === 0 || isLocationComplete(LOCATIONS[index - 1]);
}

function getUnlockedCount() {
  return LOCATIONS.filter((_, index) => isLocationUnlocked(index)).length;
}

function getCurrentObjective(location) {
  const missingEvidence = location.hotspots.filter(hotspot => !hasEvidence(hotspot.id));
  const interview = getInterviewProgress(location);
  if (missingEvidence.length) {
    return `${LOCATION_OBJECTIVES[location.id]} Next: inspect ${missingEvidence[0].label.toLowerCase()}.`;
  }
  if (location.npc && !interview.complete) {
    return `${LOCATION_OBJECTIVES[location.id]} Next: finish interviewing ${location.npc.name}.`;
  }
  if (location.ethicalFlag && !isEthicsComplete(location)) {
    return `${LOCATION_OBJECTIVES[location.id]} Next: resolve the guest-network ethics concern.`;
  }
  if (location.isVerdict) {
    return 'Security briefing complete. Proceed to the final verdict board when ready.';
  }
  const nextLocation = LOCATIONS[getLocationIndexById(location.id) + 1];
  return nextLocation ? `Location cleared. Proceed to ${nextLocation.name}.` : 'All investigative steps cleared.';
}

function sanitizeSave(candidate) {
  if (!candidate || typeof candidate !== 'object') return null;
  if (candidate.version !== SAVE_VERSION) return null;
  const next = cloneInitialState();
  next.currentLocation = Number.isInteger(candidate.currentLocation) && candidate.currentLocation >= 0 && candidate.currentLocation < LOCATIONS.length ? candidate.currentLocation : 0;
  next.currentScreen = ['title-screen', 'game-screen', 'verdict-screen', 'ending-screen'].includes(candidate.currentScreen) ? candidate.currentScreen : 'title-screen';
  next.evidence = Array.isArray(candidate.evidence) ? [...new Set(candidate.evidence.filter(id => !!EVIDENCE_LIBRARY[id]))] : [];
  next.dialogueProgress = candidate.dialogueProgress && typeof candidate.dialogueProgress === 'object' ? candidate.dialogueProgress : {};
  next.ethicalChoice = ['flag', 'ignore'].includes(candidate.ethicalChoice) ? candidate.ethicalChoice : null;
  next.selectedSuspect = SUSPECTS.some(suspect => suspect.id === candidate.selectedSuspect) ? candidate.selectedSuspect : null;
  next.finalOutcome = candidate.finalOutcome && typeof candidate.finalOutcome === 'object' ? candidate.finalOutcome : null;
  next.lastSavedAt = typeof candidate.lastSavedAt === 'string' ? candidate.lastSavedAt : null;
  if (candidate.phone && typeof candidate.phone === 'object') {
    next.phone.open = !!candidate.phone.open;
    next.phone.activeApp = typeof candidate.phone.activeApp === 'string' ? candidate.phone.activeApp : 'home';
    next.phone.notifications = {
      evidence: Number.isFinite(candidate.phone.notifications?.evidence) ? candidate.phone.notifications.evidence : 0,
      locations: !!candidate.phone.notifications?.locations
    };
  }
  return next;
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return sanitizeSave(JSON.parse(raw));
  } catch (error) {
    return null;
  }
}

function saveState() {
  try {
    const payload = {
      version: SAVE_VERSION,
      currentLocation: state.currentLocation,
      currentScreen: state.currentScreen,
      evidence: state.evidence,
      dialogueProgress: state.dialogueProgress,
      ethicalChoice: state.ethicalChoice,
      selectedSuspect: state.selectedSuspect,
      finalOutcome: state.finalOutcome,
      phone: state.phone,
      lastSavedAt: new Date().toISOString()
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    state.lastSavedAt = payload.lastSavedAt;
    setSaveStatus(`Autosaved · ${new Date(payload.lastSavedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, true);
  } catch (error) {
    setSaveStatus('Autosave unavailable', false);
  }
}

function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (error) {
    // ignore
  }
}

function sanitizeSession(candidate) {
  if (!candidate || typeof candidate !== 'object') return null;
  const session = {
    player: null,
    tutorial: { done: false, skipped: false },
    audio: { masterVolume: 0.7, uiEnabled: true, ambientEnabled: true, muted: false }
  };
  if (candidate.player && NAME_REGEX.test(String(candidate.player.name || '').trim()) && STUDENT_ID_REGEX.test(String(candidate.player.studentId || '').trim())) {
    session.player = {
      name: String(candidate.player.name).trim(),
      studentId: String(candidate.player.studentId).trim().toUpperCase()
    };
  }
  if (candidate.tutorial && typeof candidate.tutorial === 'object') {
    session.tutorial.done = !!candidate.tutorial.done;
    session.tutorial.skipped = !!candidate.tutorial.skipped;
  }
  if (candidate.audio && typeof candidate.audio === 'object') {
    session.audio.masterVolume = typeof candidate.audio.masterVolume === 'number' ? Math.min(1, Math.max(0, candidate.audio.masterVolume)) : 0.7;
    session.audio.uiEnabled = candidate.audio.uiEnabled !== false;
    session.audio.ambientEnabled = candidate.audio.ambientEnabled !== false;
    session.audio.muted = !!candidate.audio.muted;
  }
  return session;
}

function loadSessionState() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return sanitizeSession(JSON.parse(raw));
  } catch (error) {
    return null;
  }
}

function saveSessionState() {
  try {
    const payload = {
      player: state.player,
      tutorial: { done: state.tutorial.done, skipped: state.tutorial.skipped },
      audio: {
        masterVolume: state.audio.masterVolume,
        uiEnabled: state.audio.uiEnabled,
        ambientEnabled: state.audio.ambientEnabled,
        muted: state.audio.muted
      }
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  } catch (error) {
    // ignore
  }
}

function clearSessionState() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch (error) {
    // ignore
  }
}

function setSaveStatus(message, saved = false) {
  dom.saveStatus.textContent = message;
  dom.saveStatus.classList.toggle('is-saved', saved);
}

function formatPlayerLabel() {
  return `${state.player.name || 'Unassigned Investigator'} · ${state.player.studentId || 'Pending ID'}`;
}

function updateTitleScreen() {
  dom.titlePlayerLine.textContent = state.player.name ? `Signed in as ${state.player.name} (${state.player.studentId})` : 'Sign in to begin your investigation.';
}

function showScreen(id, { persist = true } = {}) {
  dom.screens().forEach(screen => screen.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  state.currentScreen = id;
  updatePhoneVisibility();
  if (persist) saveState();
}

function updatePhoneVisibility() {
  const canShowPhone = state.currentScreen === 'game-screen';
  dom.phoneShell.classList.toggle('visible', canShowPhone);
  dom.phoneShell.setAttribute('aria-hidden', canShowPhone ? 'false' : 'true');
  if (!canShowPhone) {
    state.phone.open = false;
    dom.phoneShell.classList.remove('open');
  }
}

function validateName(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Full name is required.';
  if (!NAME_REGEX.test(trimmed)) return 'Use letters, spaces, hyphens, and apostrophes only.';
  return '';
}

function normalizeStudentId(value) {
  const compact = value.replace(/\s+/g, '').slice(0, 10);
  if (compact.length <= 2) return compact.toUpperCase();
  return `${compact.slice(0, 2).toUpperCase()}${compact.slice(2).replace(/[^0-9]/g, '')}`;
}

function validateStudentId(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'Student ID is required.';
  if (!STUDENT_ID_REGEX.test(trimmed)) return 'Use 2 letters followed by exactly 8 digits.';
  return '';
}

function renderLoginValidation() {
  const nameError = validateName(dom.playerName.value);
  const normalizedStudentId = normalizeStudentId(dom.studentId.value);
  if (dom.studentId.value !== normalizedStudentId) dom.studentId.value = normalizedStudentId;
  const studentError = validateStudentId(normalizedStudentId);
  dom.playerNameError.textContent = loginAttempted || dom.playerName.value ? nameError : '';
  dom.studentIdError.textContent = loginAttempted || dom.studentId.value ? studentError : '';
  dom.playerName.classList.toggle('invalid', !!nameError && (loginAttempted || !!dom.playerName.value));
  dom.studentId.classList.toggle('invalid', !!studentError && (loginAttempted || !!dom.studentId.value));
  dom.loginSubmit.disabled = !!nameError || !!studentError;
  return !nameError && !studentError;
}

function hydrateFromSave(save) {
  const base = cloneInitialState();
  const merged = save ? { ...base, ...save } : base;
  merged.player = { ...base.player, ...state.player };
  merged.tutorial = { ...base.tutorial, ...state.tutorial };
  merged.audio = { ...base.audio, ...state.audio };
  return merged;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  loginAttempted = true;
  if (!renderLoginValidation()) return;
  state.player = {
    name: dom.playerName.value.trim(),
    studentId: normalizeStudentId(dom.studentId.value.trim())
  };
  if (restoredSave) {
    state = hydrateFromSave(restoredSave);
  }
  updateTitleScreen();
  renderPhone();
  saveSessionState();
  showScreen('title-screen', { persist: false });
}

function renderChecklist(location) {
  const interview = getInterviewProgress(location);
  const items = location.hotspots.map(hotspot => {
    const found = hasEvidence(hotspot.id);
    return `
      <div class="checklist-item${found ? ' done' : ''}">
        <div class="checklist-icon">${found ? '✓' : '○'}</div>
        <div class="checklist-copy">
          <strong>${hotspot.label}</strong>
          <span>${found ? 'Evidence collected and logged in the case file.' : 'Inspect and collect this evidence.'}</span>
        </div>
      </div>`;
  });
  if (location.npc) {
    items.push(`
      <div class="checklist-item${interview.complete ? ' done' : ''}">
        <div class="checklist-icon">${interview.complete ? '✓' : '○'}</div>
        <div class="checklist-copy">
          <strong>Interview ${location.npc.name}</strong>
          <span>${interview.complete ? 'Interview completed.' : `${interview.asked}/${interview.total} questions asked.`}</span>
        </div>
      </div>`);
  }
  if (location.ethicalFlag) {
    const done = isEthicsComplete(location);
    items.push(`
      <div class="checklist-item${done ? ' done' : ''}">
        <div class="checklist-icon">${done ? '✓' : '○'}</div>
        <div class="checklist-copy">
          <strong>Resolve ethical concern</strong>
          <span>${done ? (isEthicsFlagged() ? 'Concern flagged in the report.' : 'Concern acknowledged but not flagged.') : 'Review and decide how to handle the guest network evidence.'}</span>
        </div>
      </div>`);
  }
  const stats = getLocationTaskStats(location);
  return `<div class="checklist-box">
    <div class="checklist-title">Location Checklist</div>
    <div class="checklist-sub">${stats.completedTasks}/${stats.totalTasks} tasks complete. Finish each task to fully clear this location.</div>
    <div class="checklist-grid">${items.join('')}</div>
  </div>`;
}

function getRecentEvidenceNotes(limit = 4) {
  return state.evidence.slice(-limit).reverse().map(id => ({
    id,
    label: getEvidenceRecord(id)?.label || id,
    note: EVIDENCE_NOTES[id]?.impact || 'Evidence collected and preserved for review.'
  }));
}

function renderPhone() {
  dom.phoneShell.classList.toggle('open', state.phone.open);
  const subtitleMap = {
    home: 'Select an app',
    locations: 'Travel between scenes',
    evidence: 'Review collected evidence',
    journal: 'Current objectives and suspect notes',
    export: 'Generate your paperwork',
    help: 'Tutorial and audio controls'
  };
  dom.phoneSubtitle.textContent = subtitleMap[state.phone.activeApp] || 'Select an app';
  if (state.phone.activeApp === 'home') {
    dom.phoneContent.innerHTML = `
      <div class="phone-identity">${formatPlayerLabel()}</div>
      <div class="phone-app-grid">
        ${PHONE_APPS.map(app => {
          const badge = app.id === 'evidence' && state.phone.notifications.evidence ? `<span class="phone-badge">${state.phone.notifications.evidence}</span>` : '';
          const pulse = app.id === 'locations' && state.phone.notifications.locations ? ' phone-app-pulse' : '';
          return `<button type="button" class="phone-app${pulse}" data-action="open-app" data-app="${app.id}">
            <span class="phone-app-icon">${app.icon}${badge}</span>
            <span class="phone-app-label">${app.label}</span>
          </button>`;
        }).join('')}
      </div>`;
      return;
  }
  if (state.phone.activeApp === 'locations') {
    state.phone.notifications.locations = false;
    dom.phoneContent.innerHTML = `
      <div class="phone-panel-title">Locations</div>
      <div class="phone-list">
        ${LOCATIONS.map((location, index) => {
          const unlocked = isLocationUnlocked(index);
          const complete = isLocationComplete(location);
          const active = state.currentLocation === index;
          return `<button type="button" class="phone-list-item${active ? ' active' : ''}${complete ? ' done' : ''}" data-action="goto-location" data-index="${index}" ${unlocked ? '' : 'disabled'}>
            <strong>${location.name}</strong>
            <span>${unlocked ? (complete ? 'Cleared' : active ? 'Current location' : 'Unlocked') : 'Locked'}</span>
          </button>`;
        }).join('')}
      </div>`;
    saveState();
    return;
  }
  if (state.phone.activeApp === 'evidence') {
    state.phone.notifications.evidence = 0;
    dom.phoneContent.innerHTML = `
      <div class="phone-panel-title">Evidence</div>
      <div class="phone-evidence-list">
        ${state.evidence.length
          ? state.evidence.map(id => {
              const record = getEvidenceRecord(id);
              return `<button type="button" class="phone-evidence-card" data-action="open-evidence" data-id="${id}">
                <strong>${record?.label || id}</strong>
                <span>${record?.objectLabel || 'Collected evidence'}</span>
              </button>`;
            }).join('')
          : '<div class="phone-empty-state">No evidence collected yet.</div>'}
      </div>`;
    saveState();
    return;
  }
  if (state.phone.activeApp === 'journal') {
    const location = LOCATIONS[state.currentLocation];
    const evidenceNotes = getRecentEvidenceNotes();
    dom.phoneContent.innerHTML = `
      <div class="phone-panel-title">Journal</div>
      <div class="journal-block compact">
        <div class="journal-block-title">Investigator</div>
        <div class="journal-objective-text">${formatPlayerLabel()}</div>
      </div>
      <div class="journal-block compact">
        <div class="journal-block-title">Current Objective</div>
        <div class="journal-objective-text">${getCurrentObjective(location)}</div>
      </div>
      <div class="journal-block compact">
        <div class="journal-block-title">Evidence Notes</div>
        <div class="journal-list">
          ${evidenceNotes.length
            ? evidenceNotes.map(entry => `<div class="journal-item"><strong>${entry.label}</strong><span>${entry.note}</span></div>`).join('')
            : '<div class="journal-item"><strong>No notes yet</strong><span>Collect evidence to populate your investigator notebook.</span></div>'}
        </div>
      </div>
      <div class="journal-block compact">
        <div class="journal-block-title">Suspect Notes</div>
        <div class="journal-list">${SUSPECTS.map(suspect => `<div class="journal-item"><strong>${suspect.name}</strong><span>${suspect.note}</span></div>`).join('')}</div>
      </div>`;
    return;
  }
  if (state.phone.activeApp === 'export') {
    const outcome = state.finalOutcome || calculateOutcomePreview();
    dom.phoneContent.innerHTML = `
      <div class="phone-panel-title">Export</div>
      <div class="journal-block compact">
        <div class="journal-block-title">Report Readiness</div>
        <div class="journal-objective-text">${state.evidence.length} evidence items collected. Current verdict posture: ${outcome.title}.</div>
      </div>
      <div class="phone-action-stack">
        <button type="button" class="phone-primary-btn" data-action="open-report">Open Print-ready Case Report</button>
        <button type="button" class="phone-secondary-btn" data-action="download-certificate" ${isCertificateEligible(state.finalOutcome || calculateOutcome()) ? '' : 'disabled'}>Open Certificate</button>
      </div>`;
    return;
  }
  dom.phoneContent.innerHTML = `
    <div class="phone-panel-title">Help</div>
    <div class="journal-block compact">
      <div class="journal-block-title">Controls</div>
      <div class="journal-objective-text">Inspect every scene, collect evidence, interview witnesses, and complete the checklist to unlock the next location.</div>
    </div>
    <div class="phone-action-stack">
      <button type="button" class="phone-secondary-btn" data-action="replay-tutorial">Replay Tutorial</button>
    </div>
    <div class="audio-controls">
      <label class="audio-row">
        <span>Master Volume</span>
        <input type="range" min="0" max="100" value="${Math.round(state.audio.masterVolume * 100)}" data-action="audio-volume">
      </label>
      <label class="audio-toggle"><input type="checkbox" data-action="audio-ui" ${state.audio.uiEnabled ? 'checked' : ''}> UI Sounds</label>
      <label class="audio-toggle"><input type="checkbox" data-action="audio-ambient" ${state.audio.ambientEnabled ? 'checked' : ''}> Ambient Atmosphere</label>
      <label class="audio-toggle"><input type="checkbox" data-action="audio-muted" ${state.audio.muted ? 'checked' : ''}> Mute</label>
    </div>`;
}

function togglePhone(force) {
  state.phone.open = typeof force === 'boolean' ? force : !state.phone.open;
  renderPhone();
  saveState();
}

function setActivePhoneApp(appId, { open = true } = {}) {
  state.phone.activeApp = appId;
  if (open) state.phone.open = true;
  renderPhone();
  saveState();
}

function renderSceneHint(location) {
  const hint = LOCATION_HINTS[location.id] || '';
  const allEvidenceFound = getEvidenceFoundCount(location) === location.hotspots.length;
  dom.sceneHint.textContent = !allEvidenceFound && hint ? hint : (location.id === 'security-office' ? 'Final briefing room — proceed once your case is complete.' : '');
  dom.sceneHint.classList.toggle('empty', !dom.sceneHint.textContent);
}

function renderSceneMeta(location) {
  dom.playerChip.textContent = formatPlayerLabel();
  dom.sceneLocationTitle.textContent = `${location.name} · ${location.subtitle}`;
  dom.sceneSubcopy.textContent = getCurrentObjective(location);
  const stats = getLocationTaskStats(location);
  dom.sceneProgress.textContent = location.isVerdict
    ? `${stats.completedTasks}/${stats.totalTasks} briefing tasks complete`
    : `${stats.completedTasks}/${stats.totalTasks} checklist tasks complete`;
  renderSceneHint(location);
}

function renderLocation(index, { persist = true, activateScreen = true } = {}) {
  if (!isLocationUnlocked(index)) return;
  state.currentLocation = index;
  const location = LOCATIONS[index];
  if (activateScreen) showScreen('game-screen', { persist: false });
  renderSceneMeta(location);
  const hotspotHtml = location.hotspots.map(hotspot => {
    const found = hasEvidence(hotspot.id);
    return `<button type="button" class="hotspot ${hotspot.class}${found ? ' found' : ''}" ${found ? 'disabled aria-disabled="true"' : ''} data-action="open-hotspot" data-id="${hotspot.id}" aria-label="${hotspot.label}">
      ${hotspot.innerHTML || ''}
      <div class="hotspot-label">${hotspot.label}</div>
    </button>`;
  }).join('');
  let html = `<div class="illustrated-scene ${location.sceneClass}">${location.sceneHTML}${hotspotHtml}</div>`;
  html += `<div class="scene-description">${location.description}</div>`;
  html += renderChecklist(location);
  if (location.ethicalFlag && !isEthicsComplete(location)) {
    html += `<div class="ethical-flag">
      <div class="ethical-flag-title">⚠ Ethical & Legal Flag</div>
      <p>Some evidence at this location was collected from the university guest network without a formal warrant. Under the Malaysian Communications and Multimedia Act 1998 and the university's data handling policy, formal proceedings may require additional authorisation.</p>
      <p style="margin-top:8px">Do you flag this concern in your report before proceeding?</p>
      <div style="margin-top:12px">
        <button type="button" class="flag-btn flag" data-action="ethics" data-flag="flag">Flag the concern (+15 pts)</button>
        <button type="button" class="flag-btn ignore" data-action="ethics" data-flag="ignore">Proceed without flagging</button>
      </div>
    </div>`;
  }
  if (location.npc) {
    html += `<div class="npc-section">
      <button type="button" class="npc-card" data-action="open-npc" data-location="${location.id}">
        <div class="npc-avatar" style="background:${location.npc.avatarBg};color:${location.npc.avatarColor}">${location.npc.avatar}</div>
        <div class="npc-info">
          <div class="npc-name">${location.npc.name}</div>
          <div class="npc-role">${location.npc.role}</div>
        </div>
        <div class="npc-cta">Interview →</div>
      </button>
    </div>`;
  }
  if (location.isVerdict) {
    const briefingDone = getInterviewProgress(location).complete;
    html += `<div class="verdict-cta-box">
      <h3>Submit Final Report</h3>
      <p>${briefingDone ? `You have ${state.evidence.length} pieces of evidence on record. The final briefing is complete — proceed to the verdict board.` : 'Interview Puan Suraya fully before the verdict board unlocks.'}</p>
      <button type="button" class="btn-verdict" style="max-width:320px" data-action="goto-verdict" ${briefingDone ? '' : 'disabled'}>Proceed to Final Verdict →</button>
    </div>`;
  }
  if (isLocationComplete(location) && location.unlockMessage && !location.isVerdict) {
    html += `<div class="unlock-banner">✓ ${location.unlockMessage}</div>`;
  }
  dom.sceneMain.innerHTML = html;
  renderPhone();
  if (persist) saveState();
  sounds.startAmbient(location.id);
  maybeStartTutorial();
}

function maybeMarkLocationNotification(previousUnlocked) {
  const nextUnlocked = getUnlockedCount();
  if (nextUnlocked > previousUnlocked) {
    state.phone.notifications.locations = true;
    sounds.play('unlock');
  }
}

function openEvidenceModal(evidenceId, { readOnly = false } = {}) {
  const record = getEvidenceRecord(evidenceId);
  if (!record) return;
  dom.modalType.textContent = record.modal.type;
  dom.modalTitle.textContent = readOnly ? `${record.modal.title} · Case File` : record.modal.title;
  dom.modalBody.innerHTML = record.modal.body;
  dom.modalFooter.innerHTML = readOnly
    ? `<button type="button" class="btn-dismiss" onclick="closeModal()">Close</button>`
    : `<button type="button" class="btn-dismiss" onclick="closeModal()">Close</button><button type="button" class="btn-collect" onclick="collectEvidence('${evidenceId}')">Collect Evidence</button>`;
  dom.modal.classList.add('open');
  sounds.play('modal');
  if (state.tutorial.step === 2) setTutorialStep(3);
}

function openHotspot(id) {
  openEvidenceModal(id, { readOnly: hasEvidence(id) });
}

function collectEvidence(id) {
  if (hasEvidence(id)) {
    closeModal();
    return;
  }
  const previousUnlocked = getUnlockedCount();
  state.evidence.push(id);
  state.phone.notifications.evidence += 1;
  sounds.play('collect');
  closeModal();
  maybeMarkLocationNotification(previousUnlocked);
  if (state.tutorial.step === 3) setTutorialStep(4);
  renderPhone();
  saveState();
}

function openNPC(locationId) {
  const location = getLocationById(locationId);
  if (!location || !location.npc) return;
  state.dialogueProgress[location.npc.id] = state.dialogueProgress[location.npc.id] || {};
  renderDialogue(location.npc, locationId);
  dom.modal.classList.add('open');
  sounds.play('dialogue');
}

function renderDialogue(npc, locationId) {
  const asked = state.dialogueProgress[npc.id] || {};
  const askedCount = npc.questions.filter(question => asked[question.id]).length;
  const questionsLeft = npc.questions.some(question => !asked[question.id]);
  dom.modalType.textContent = 'Interview';
  dom.modalTitle.textContent = npc.name;
  let body = `<div class="dialogue-npc">
    <div style="background:${npc.avatarBg};color:${npc.avatarColor};width:36px;height:36px;font-size:13px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'Special Elite',cursive;">${npc.avatar}</div>
    <div class="dialogue-bubble">${asked._lastResponse || npc.intro}</div>
  </div>`;
  body += `<p style="font-size:11px;color:var(--muted);margin-bottom:8px">${askedCount}/${npc.questions.length} interview questions completed.</p>`;
  if (questionsLeft) {
    body += `<div class="dialogue-choices">`;
    npc.questions.forEach(question => {
      const wasAsked = asked[question.id];
      body += `<button type="button" class="dialogue-choice${wasAsked ? ' asked' : ''}" ${wasAsked ? 'disabled aria-disabled="true"' : ''} onclick="${wasAsked ? '' : `askQuestion('${npc.id}','${question.id}','${locationId}')`}">${wasAsked ? '✓ ' : ''}${question.text}</button>`;
    });
    body += `</div>`;
  } else {
    body += `<p style="font-size:12px;color:var(--muted);margin-top:12px">You've asked everything relevant. The interview is complete.</p>`;
  }
  dom.modalBody.innerHTML = body;
  dom.modalFooter.innerHTML = `<button type="button" class="btn-dismiss" onclick="closeModal()">End Interview</button>`;
}

function askQuestion(npcId, questionId, locationId) {
  const location = getLocationById(locationId);
  const question = location?.npc?.questions.find(item => item.id === questionId);
  if (!location || !question) return;
  const previousUnlocked = getUnlockedCount();
  state.dialogueProgress[npcId] = state.dialogueProgress[npcId] || {};
  if (state.dialogueProgress[npcId][questionId]) return;
  state.dialogueProgress[npcId][questionId] = true;
  state.dialogueProgress[npcId]._lastResponse = question.response;
  sounds.play('dialogue');
  maybeMarkLocationNotification(previousUnlocked);
  renderDialogue(location.npc, locationId);
  renderPhone();
  saveState();
  if (state.tutorial.step === 4) {
    setActivePhoneApp('evidence', { open: true });
    setTutorialStep(5);
  }
}

function handleEthics(flagged) {
  const previousUnlocked = getUnlockedCount();
  state.ethicalChoice = flagged ? 'flag' : 'ignore';
  if (!flagged) sounds.play('warning');
  maybeMarkLocationNotification(previousUnlocked);
  renderLocation(state.currentLocation);
}

function renderVerdictScreen() {
  const evidenceCards = state.evidence.map((id, index) => {
    const record = getEvidenceRecord(id);
    const note = EVIDENCE_NOTES[id] || { tag: 'Evidence', impact: 'Recorded in the case file.' };
    const position = VERDICT_CARD_POSITIONS[index] || { top: 40 + index * 16, left: 40 + (index % 3) * 210, rotate: index % 2 ? -3 : 3 };
    return `<div class="verdict-note" style="top:${position.top}px;left:${position.left}px;transform:rotate(${position.rotate}deg)">
      <div class="verdict-note-type">${note.tag}</div>
      <div class="verdict-note-title">${record?.label || id}</div>
      <div class="verdict-note-text">${note.impact}</div>
    </div>`;
  }).join('');
  dom.verdictEvidenceBoard.innerHTML = evidenceCards || '<div class="verdict-note" style="top:42px;left:40px;transform:rotate(-2deg)"><div class="verdict-note-type">Evidence</div><div class="verdict-note-title">No evidence collected</div><div class="verdict-note-text">Return to the investigation before submitting a verdict.</div></div>';
  dom.verdictSuspectList.innerHTML = SUSPECTS.map(suspect => `
    <button type="button" class="suspect-card${state.selectedSuspect === suspect.id ? ' selected' : ''}" onclick="selectSuspect('${suspect.id}')">
      <div class="suspect-initial" style="background:${suspect.accentBg};color:${suspect.accentColor};">${suspect.initials}</div>
      <div class="suspect-copy">
        <div class="suspect-name">${suspect.name}</div>
        <div class="suspect-desc">${suspect.description}</div>
      </div>
    </button>`).join('');
  dom.verdictSummaryNote.innerHTML = `
    <strong style="display:block;color:var(--text);margin-bottom:8px">Case posture</strong>
    Investigator: <strong>${state.player.name}</strong><br>
    Student ID: <strong>${state.player.studentId}</strong><br><br>
    You currently have <strong>${state.evidence.length}</strong> evidence items on record.
    ${isEthicsFlagged()
      ? 'The ethics concern has been flagged in your report.'
      : state.ethicalChoice === 'ignore'
        ? 'You chose not to flag the ethics concern; that may affect admissibility.'
        : 'The ethics concern has not been resolved yet.'}
    ${state.selectedSuspect ? `<br><br><strong>Selected suspect:</strong> ${getSuspectById(state.selectedSuspect)?.name}` : '<br><br>No suspect selected yet.'}`;
  dom.verdictPlayerLine.textContent = formatPlayerLabel();
  dom.verdictBtn.disabled = !state.selectedSuspect;
}

function goToVerdict() {
  const location = LOCATIONS[state.currentLocation];
  if (location?.isVerdict && !getInterviewProgress(location).complete) return;
  renderVerdictScreen();
  showScreen('verdict-screen');
}

function selectSuspect(id) {
  state.selectedSuspect = id;
  renderVerdictScreen();
  saveState();
}

function calculateOutcome() {
  const correct = state.selectedSuspect === 'darren';
  const ethicalFlagged = isEthicsFlagged();
  const evidenceCount = state.evidence.length;
  const evidencePenalty = Math.max(0, (12 - evidenceCount) * 2);
  const ethicsDelta = ethicalFlagged ? 15 : 0;
  const verdictDelta = correct ? (ethicalFlagged ? 10 : -10) : -40;
  const score = Math.min(100, Math.max(0, 100 + ethicsDelta + verdictDelta - evidencePenalty));
  let title;
  let body;
  let icon;
  let scoreColor;
  if (correct && ethicalFlagged) {
    title = 'Case Closed — Exemplary Work';
    body = 'Darren Koh has been identified as the perpetrator. Your decision to flag the warrant concern ensured the case will hold up. The Disciplinary Board has been notified, legal counsel is reviewing the network evidence, and Nadia\'s account has been restored.';
    icon = '⭐';
    scoreColor = 'var(--success)';
  } else if (correct && !ethicalFlagged) {
    title = 'Case Solved — Procedural Issue';
    body = 'You correctly identified Darren Koh. However, the network evidence was not flagged for legal review. The defence challenged the guest network logs and the case was delayed while procedure was reviewed.';
    icon = '📋';
    scoreColor = 'var(--accent)';
  } else {
    title = 'Wrong Conclusion';
    body = `You accused ${getSuspectById(state.selectedSuspect)?.name || 'the wrong suspect'}, who was innocent. Darren Koh remained free to continue the harassment for weeks. The evidence trail existed — it simply was not followed to the right conclusion.`;
    icon = '❌';
    scoreColor = 'var(--danger)';
  }
  const breakdown = [
    { label: 'Base case score', value: '+100', className: 'neutral' },
    { label: 'Ethics handling', value: ethicsDelta ? `+${ethicsDelta}` : '+0', className: ethicsDelta ? 'positive' : 'neutral' },
    { label: 'Verdict accuracy', value: verdictDelta > 0 ? `+${verdictDelta}` : `${verdictDelta}`, className: verdictDelta > 0 ? 'positive' : 'negative' },
    { label: `Evidence completeness (${evidenceCount}/12 found)`, value: evidencePenalty ? `-${evidencePenalty}` : '0', className: evidencePenalty ? 'negative' : 'positive' }
  ];
  return { title, body, icon, score, scoreColor, correct, ethicalFlagged, evidenceCount, breakdown, scoreLabel: `${score} / 100` };
}

function calculateOutcomePreview() {
  if (!state.selectedSuspect) return { title: 'Investigation In Progress' };
  return calculateOutcome();
}

function getCertificateRank(score) {
  if (score === 100) return 'Master Investigator';
  if (score >= 95) return 'Senior Analyst';
  return null;
}

function isCertificateEligible(outcome = state.finalOutcome) {
  if (!outcome) return false;
  return outcome.correct && outcome.ethicalFlagged && outcome.score >= 95;
}

function renderEnding() {
  const outcome = state.finalOutcome || calculateOutcome();
  dom.endingIcon.textContent = outcome.icon;
  dom.endingTitle.textContent = outcome.title;
  dom.endingBody.textContent = outcome.body;
  dom.endingPlayer.textContent = `Investigator: ${state.player.name} · ${state.player.studentId}`;
  dom.endingScore.textContent = outcome.scoreLabel;
  dom.endingScore.style.color = outcome.scoreColor || 'var(--accent)';
  dom.scoreBreakdown.innerHTML = outcome.breakdown.map(item => `<div class="score-break-item"><span>${item.label}</span><span class="score-break-value ${item.className}">${item.value}</span></div>`).join('');
  const rank = getCertificateRank(outcome.score);
  const eligible = isCertificateEligible(outcome);
  dom.certificateBtn.hidden = !eligible;
  dom.certificateStatus.innerHTML = eligible
    ? `<strong>Certificate unlocked:</strong> ${rank} — you identified Darren, flagged the ethical concern, and scored at least 95.`
    : outcome.correct
      ? `<strong>No certificate issued:</strong> certificate eligibility requires the correct suspect, the ethics flag, and a score of at least 95.`
      : `<strong>Investigation incomplete:</strong> certificates are only awarded after a correct, ethical case resolution.`;
}

function submitVerdict() {
  if (!state.selectedSuspect) return;
  state.finalOutcome = calculateOutcome();
  renderEnding();
  showScreen('ending-screen');
  sounds.play('verdict');
  if (isCertificateEligible(state.finalOutcome)) sounds.play('certificate');
}

function buildReportPayload() {
  const outcome = state.finalOutcome || {
    title: 'Investigation In Progress',
    body: 'No final verdict has been submitted yet. Continue collecting evidence, finishing interviews, and resolving outstanding tasks before accusing a suspect.',
    scoreLabel: 'Pending'
  };
  return {
    player: state.player,
    outcome,
    ethicsLabel: isEthicsFlagged() ? 'Yes' : state.ethicalChoice === 'ignore' ? 'No' : 'Pending',
    evidenceLines: state.evidence.map(id => ({
      label: getEvidenceRecord(id)?.label || id,
      impact: EVIDENCE_NOTES[id]?.impact || 'Logged in the case file.'
    })),
    locationLines: LOCATIONS.map(location => {
      const stats = getLocationTaskStats(location);
      return { name: location.name, summary: `${stats.completedTasks}/${stats.totalTasks} tasks complete` };
    }),
    suspectLines: SUSPECTS.map(suspect => ({ name: suspect.name, note: suspect.note }))
  };
}

function openCaseReport() {
  const html = buildReportHtml(buildReportPayload());
  openHtmlDocument(html, `${state.player.studentId} · UTN Case Report`);
}

function openCertificate() {
  const outcome = state.finalOutcome || calculateOutcome();
  if (!isCertificateEligible(outcome)) return;
  const html = buildCertificateHtml({
    player: state.player,
    rank: getCertificateRank(outcome.score),
    scoreLabel: outcome.scoreLabel,
    issueDate: formatDate(new Date())
  });
  openHtmlDocument(html, `${state.player.studentId} · Certificate of Achievement`);
}

function closeModal() {
  dom.modal.classList.remove('open');
  if (state.currentScreen === 'game-screen') {
    renderLocation(state.currentLocation, { persist: false, activateScreen: false });
  }
}

function returnToInvestigation() {
  renderLocation(state.currentLocation, { activateScreen: true });
}

function resetInvestigation(requireConfirm = true) {
  if (requireConfirm && !window.confirm('Start a new investigation? Your saved progress will be cleared.')) return;
  clearSave();
  const preservedPlayer = { ...state.player };
  const preservedTutorial = { ...state.tutorial };
  const preservedAudio = { ...state.audio };
  state = createInitialState();
  state.player = preservedPlayer;
  state.tutorial = preservedTutorial;
  state.audio = preservedAudio;
  updateTitleScreen();
  renderPhone();
  saveSessionState();
  setSaveStatus('Autosave cleared', false);
  showScreen(preservedPlayer.name ? 'title-screen' : 'login-screen', { persist: false });
}

function startGame() {
  if (!state.player.name) {
    showScreen('login-screen', { persist: false });
    return;
  }
  renderLocation(state.currentLocation, { activateScreen: true });
}

function completeTutorial() {
  state.tutorial.step = 0;
  state.tutorial.done = true;
  state.tutorial.replaying = false;
  dom.tutorialOverlay.hidden = true;
  saveSessionState();
}

function skipTutorial() {
  state.tutorial.step = 0;
  state.tutorial.done = true;
  state.tutorial.skipped = true;
  state.tutorial.replaying = false;
  dom.tutorialOverlay.hidden = true;
  saveSessionState();
}

function startTutorial(replaying = false) {
  if (state.currentScreen !== 'game-screen') return;
  state.tutorial.replaying = replaying;
  state.tutorial.skipped = false;
  setTutorialStep(1);
}

function setTutorialStep(step) {
  state.tutorial.step = step;
  if (!step) {
    dom.tutorialOverlay.hidden = true;
    saveSessionState();
    return;
  }
  requestAnimationFrame(() => renderTutorialStep(step));
}

function renderTutorialStep(step) {
  const config = TUTORIAL_STEPS[step];
  if (!config || state.currentScreen !== 'game-screen') return;
  const target = config.target();
  if (!target) {
    setTimeout(() => renderTutorialStep(step), 100);
    return;
  }
  const rect = target.getBoundingClientRect();
  const padding = 12;
  const tooltipWidth = 320;
  const preferredLeft = Math.min(window.innerWidth - tooltipWidth - 20, Math.max(20, rect.left + rect.width + 20));
  const left = preferredLeft < rect.left ? preferredLeft : preferredLeft;
  const top = Math.min(window.innerHeight - 180, Math.max(20, rect.top));
  dom.tutorialOverlay.hidden = false;
  dom.tutorialStepLabel.textContent = config.label;
  dom.tutorialMessage.textContent = config.message;
  dom.tutorialHighlight.style.top = `${rect.top - padding}px`;
  dom.tutorialHighlight.style.left = `${rect.left - padding}px`;
  dom.tutorialHighlight.style.width = `${rect.width + padding * 2}px`;
  dom.tutorialHighlight.style.height = `${rect.height + padding * 2}px`;
  dom.tutorialTooltip.style.left = `${left}px`;
  dom.tutorialTooltip.style.top = `${top}px`;
  dom.tutorialNextBtn.hidden = step !== 5;
  dom.tutorialNextBtn.textContent = 'Finish Tutorial';
  saveSessionState();
}

function maybeStartTutorial() {
  if (state.currentLocation !== 0 || state.currentScreen !== 'game-screen') return;
  if (state.tutorial.step) return;
  if (state.tutorial.done && !state.tutorial.replaying) return;
  startTutorial(false);
}

function updateAudioSettings(partial) {
  state.audio = { ...state.audio, ...partial };
  sounds.applySettings(state.audio);
  saveSessionState();
  renderPhone();
  if (state.currentScreen === 'game-screen') sounds.startAmbient(LOCATIONS[state.currentLocation].id);
}

function handleSceneClick(event) {
  const hotspot = event.target.closest('[data-action="open-hotspot"]');
  if (hotspot) return openHotspot(hotspot.dataset.id);
  const npc = event.target.closest('[data-action="open-npc"]');
  if (npc) return openNPC(npc.dataset.location);
  const ethics = event.target.closest('[data-action="ethics"]');
  if (ethics) return handleEthics(ethics.dataset.flag === 'flag');
  if (event.target.closest('[data-action="goto-verdict"]')) return goToVerdict();
}

function handleSceneHover(event) {
  const hotspot = event.target.closest('.hotspot:not(.found)');
  if (!hotspot || hotspot.dataset.id === lastHoverId) return;
  lastHoverId = hotspot.dataset.id;
  sounds.play('hover');
  if (state.tutorial.step === 1) setTutorialStep(2);
}

function handlePhoneClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'open-app') return setActivePhoneApp(button.dataset.app);
  if (action === 'goto-location') {
    renderLocation(Number(button.dataset.index));
    return togglePhone(false);
  }
  if (action === 'open-evidence') return openEvidenceModal(button.dataset.id, { readOnly: true });
  if (action === 'open-report') return openCaseReport();
  if (action === 'download-certificate') return openCertificate();
  if (action === 'replay-tutorial') {
    togglePhone(false);
    return startTutorial(true);
  }
}

function handlePhoneInput(event) {
  const action = event.target.dataset.action;
  if (!action) return;
  if (action === 'audio-volume') return updateAudioSettings({ masterVolume: Number(event.target.value) / 100 });
  if (action === 'audio-ui') return updateAudioSettings({ uiEnabled: event.target.checked });
  if (action === 'audio-ambient') return updateAudioSettings({ ambientEnabled: event.target.checked });
  if (action === 'audio-muted') return updateAudioSettings({ muted: event.target.checked });
}

function unlockAudio() {
  sounds.unlock();
  state.audio.unlocked = sounds.unlocked;
  sounds.applySettings(state.audio);
  if (state.currentScreen === 'game-screen') sounds.startAmbient(LOCATIONS[state.currentLocation].id);
}

function bindGlobalEvents() {
  dom.loginForm.addEventListener('submit', handleLoginSubmit);
  dom.playerName.addEventListener('input', renderLoginValidation);
  dom.studentId.addEventListener('input', renderLoginValidation);
  dom.sceneMain.addEventListener('click', handleSceneClick);
  dom.sceneMain.addEventListener('pointerover', handleSceneHover);
  dom.phoneTab.addEventListener('click', () => togglePhone(true));
  dom.phoneHomeBtn.addEventListener('click', () => setActivePhoneApp('home'));
  dom.phoneCloseBtn.addEventListener('click', () => togglePhone(false));
  dom.phoneContent.addEventListener('click', handlePhoneClick);
  dom.phoneContent.addEventListener('input', handlePhoneInput);
  dom.modal.addEventListener('click', event => {
    if (event.target === dom.modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dom.modal.classList.contains('open')) closeModal();
  });
  dom.tutorialReplayBtn.addEventListener('click', () => startTutorial(true));
  dom.tutorialSkipBtn.addEventListener('click', skipTutorial);
  dom.tutorialNextBtn.addEventListener('click', completeTutorial);
  ['pointerdown', 'keydown', 'touchstart'].forEach(eventName => {
    document.addEventListener(eventName, unlockAudio, { once: true, passive: true });
  });
  window.addEventListener('resize', () => {
    if (state.tutorial.step) renderTutorialStep(state.tutorial.step);
  });
}

function bootstrap() {
  restoredSave = loadSavedState();
  const session = loadSessionState();
  state = restoredSave ? hydrateFromSave(restoredSave) : createInitialState();
  if (session?.player) {
    state.player = session.player;
    state.tutorial.done = session.tutorial.done;
    state.tutorial.skipped = session.tutorial.skipped;
    state.audio = { ...state.audio, ...session.audio };
  }
  sounds.applySettings(state.audio);
  dom.playerName.value = session?.player?.name || '';
  dom.studentId.value = session?.player?.studentId || '';
  renderLoginValidation();
  updateTitleScreen();
  renderPhone();
  bindGlobalEvents();
  if (session?.player) {
    setSaveStatus(state.lastSavedAt ? 'Autosave restored' : 'Autosave ready', !!state.lastSavedAt);
    if (state.currentScreen === 'game-screen') {
      renderLocation(state.currentLocation, { persist: false, activateScreen: true });
    } else if (state.currentScreen === 'verdict-screen') {
      renderVerdictScreen();
      showScreen('verdict-screen', { persist: false });
    } else if (state.currentScreen === 'ending-screen' && state.finalOutcome) {
      renderEnding();
      showScreen('ending-screen', { persist: false });
    } else {
      showScreen('title-screen', { persist: false });
    }
  } else {
    setSaveStatus(restoredSave ? 'Saved case ready after login' : 'Autosave ready', false);
    showScreen('login-screen', { persist: false });
  }
}

window.startGame = startGame;
window.collectEvidence = collectEvidence;
window.closeModal = closeModal;
window.askQuestion = askQuestion;
window.selectSuspect = selectSuspect;
window.submitVerdict = submitVerdict;
window.returnToInvestigation = returnToInvestigation;
window.resetInvestigation = resetInvestigation;
window.openCaseReport = openCaseReport;
window.openCertificate = openCertificate;

bootstrap();
