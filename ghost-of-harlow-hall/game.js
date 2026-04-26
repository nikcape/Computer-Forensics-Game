const GAME_CONTENT = {
  saveKey: 'ghost-of-harlow-hall-save',
  saveVersion: 2,
  suspects: [
    {
      id: 'faiz',
      initials: 'FH',
      name: 'Faiz Hairuddin',
      description: '3rd year · ex-admirer of Nadia',
      accentBg: 'rgba(127,179,211,0.15)',
      accentColor: '#7fb3d3',
      note: 'Had emotional motive, but library records and CCTV keep him inside the building during the posting window.'
    },
    {
      id: 'liyana',
      initials: 'LS',
      name: 'Liyana Suffian',
      description: '3rd year · academic rival',
      accentBg: 'rgba(200,169,110,0.15)',
      accentColor: '#c8a96e',
      note: 'Has technical ability and a tense history with Nadia, but no direct device or network trail links her to the fake account.'
    },
    {
      id: 'darren',
      initials: 'DK',
      name: 'Darren Koh',
      description: '2nd year · online connection',
      accentBg: 'rgba(192,57,43,0.15)',
      accentColor: '#c0392b',
      note: 'The online alias, Tuesday-night network pattern, browser history, notebook note, and phone metadata all converge on Darren.'
    }
  ],
  locations: [
  {
    id: 'victims-room',
    name: "Nadia's Dorm Room",
    subtitle: 'Block A · Room 108',
    description: "The room is tidy but clearly belongs to someone stressed. A laptop sits open on the desk, a phone next to it, and a printed screenshot is pinned to the noticeboard above. Nadia stands by the window, arms crossed.",
    sceneClass: 'scene-dorm-nadia',
    sceneHTML: `
      <div class="wall-pattern"></div>
      <div class="window"><div class="window-stars"></div></div>
      <div class="poster-n poster-1"></div>
      <div class="poster-n poster-2"></div>
      <div class="poster-n poster-3"></div>
      <div class="noticeboard">
        <div class="noticeboard-paper"></div>
        <div class="noticeboard-paper"></div>
        <div class="noticeboard-paper"></div>
        <div class="noticeboard-paper"></div>
      </div>
      <div class="floor-rug"></div>
      <div class="bed">
        <div class="bed-blanket"></div>
        <div class="pillow pillow-1"></div>
        <div class="pillow pillow-2"></div>
        <div class="plushie"></div>
      </div>
      <div class="desk-chair"></div>
      <div class="desk"></div>
      <div class="desk-leg desk-leg-1"></div>
      <div class="desk-leg desk-leg-2"></div>
      <div class="pc-monitor"></div>
      <div class="laptop-table"></div>
      <div class="pc-keyboard"></div>
      <div class="nadia-char">
        <div class="hair"></div>
        <div class="head"></div>
        <div class="brow-l"></div>
        <div class="brow-r"></div>
        <div class="eye-l"></div>
        <div class="eye-r"></div>
        <div class="mouth"></div>
        <div class="sweat"></div>
        <div class="body"></div>
        <div class="arm-l"></div>
        <div class="arm-r"></div>
        <div class="phone-held"></div>
        <div class="leg-l"></div>
        <div class="leg-r"></div>
        <div class="foot-l"></div>
        <div class="foot-r"></div>
      </div>
    `,
    hotspots: [
      { id: 'ev-laptop', class: 'hs-laptop', label: "Nadia's laptop",
        evidence: { id: 'ev-laptop', label: 'Fake account log', short: 'Fake account' },
        modal: { type: 'Digital Evidence', title: 'Fake profile — @nadia.razali.real',
          body: `<div class="ev-container"><div class="tw-profile">
      <div class="tw-header"><div class="tw-avatar">N</div></div>
      <div class="tw-info">
        <div class="tw-name">The Real Nadia <span class="tw-verified">FAKE</span></div>
        <div class="tw-handle">@nadia.razali.real · Created 14 days ago</div>
        <div class="tw-bio">The real Nadia — exposing the truth they don\'t want you to see.</div>
        <div class="tw-meta">📍 UTN Campus · Joined this month</div>
      </div>
      <div class="tw-stats"><span><strong>47</strong> Following</span><span><strong>312</strong> Followers</span></div>
      <div class="tw-tab-bar"><div class="tw-tab active">Posts</div><div class="tw-tab">Replies</div><div class="tw-tab">Media</div></div>
      <div class="tw-post">
        <div class="tw-post-header"><span class="tw-post-name">The Real Nadia</span><span class="tw-post-handle">@nadia.razali.real</span><span class="tw-post-time">· 3d</span></div>
        <div class="tw-post-body">Can\'t believe I said all those things to Prof. Azri. Guess the truth always comes out 🤷‍♀️</div>
        <div class="tw-post-stats"><span>💬 89</span><span>🔁 47</span><span>❤️ 134</span><span>🕐 11:48 PM</span></div>
      </div>
      <div class="tw-warning">⚠ Account flagged for impersonation. Creation IP unavailable on user-side — full network logs require IT department access.</div>
    </div></div><p>Nadia denies writing any of these posts. The account is clearly built to mimic her — same name, similar photo. You\'ll need to trace the creation IP through the IT department.</p>` } },
      { id: 'ev-phone', class: 'hs-phone-n', label: "Nadia's phone",
        evidence: { id: 'ev-phone', label: 'Gaming app chat log', short: 'Chat log' },
        modal: { type: 'Digital Evidence', title: 'GuildChat — anonymous user "D_Koh_88"',
          body: `<div class="ev-container"><div class="chat-app">
      <div class="chat-header">
        <div class="chat-app-icon">G</div>
        <div><div class="chat-title">D_Koh_88</div><div class="chat-sub">GuildChat · Last seen 3 months ago</div></div>
      </div>
      <div class="chat-body">
        <div class="chat-day">— SIX WEEKS AGO —</div>
        <div class="chat-msg them">Hey, you\'re really good at this game. Been watching you play for a while.</div>
        <div class="chat-time">10:42 PM</div>
        <div class="chat-msg me">Thanks! Do I know you?</div>
        <div class="chat-time">10:44 PM</div>
        <div class="chat-msg them">Just a fan. We could play together sometime?</div>
        <div class="chat-time">10:45 PM</div>
        <div class="chat-day">— THREE MONTHS AGO —</div>
        <div class="chat-msg me">Wait... you\'re Darren? From CS-2? I thought you were just an online friend.</div>
        <div class="chat-time">9:18 PM</div>
        <div class="chat-msg them">Does it matter who I am?</div>
        <div class="chat-time">9:21 PM</div>
        <div class="chat-msg me">I\'m sorry. I think we should stop talking. This feels weird now.</div>
        <div class="chat-time">9:25 PM</div>
        <div class="chat-msg them chat-final">You\'re going to regret making me invisible.</div>
        <div class="chat-time">9:31 PM</div>
      </div>
    </div></div><p>The username "D_Koh_88" — same naming pattern as the fake account email later traced from Darren\'s laptop. The pattern of obsession-then-rejection-then-threat is consistent across the timeline.</p>` } },
      { id: 'ev-printout', class: 'hs-printout', label: 'Printed screenshot',
        evidence: { id: 'ev-printout', label: 'Screenshot printout', short: 'Screenshot' },
        modal: { type: 'Physical Evidence', title: 'Screenshot — timestamp analysis',
          body: `<div class="ev-container"><div class="printout">
      <div class="printout-stamp">VICTIM EXHIBIT 01</div>
      <div class="printout-content">
        <div style="background:#000;color:#e7e9ea;padding:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;border-radius:3px">
          <div style="font-weight:500">The Real Nadia <span style="color:#888">@nadia.razali.real</span> · 3d</div>
          <div style="margin:6px 0">Can\'t believe I said all those things to Prof. Azri. Guess the truth always comes out 🤷‍♀️</div>
          <div style="color:#888;font-size:10px">11:48 PM · Tuesday · Twitter for Web</div>
        </div>
        <div class="printout-meta">
          <div><strong>Captured:</strong> 12:02 AM Wednesday (within 14 minutes of posting)</div>
          <div><strong>Captured by:</strong> Nadia Razali (victim)</div>
          <div><strong>Post timestamp:</strong> 23:48:14 Tuesday</div>
        </div>
      </div>
      <div class="printout-annotation">↗ this is when my study group meets!!</div>
    </div></div><p>Nadia\'s annotation is the key. Tuesday 11:48 PM is during her regular study group session in the library — meaning the perpetrator knew her routine and posted while she was guaranteed to be away from her room.</p>` } },
    ],
    npc: { id: 'nadia', name: 'Nadia Razali', role: 'Victim · Computer Science, Year 3', avatar: 'NR',
      avatarBg: 'rgba(200,169,110,0.2)', avatarColor: '#c8a96e',
      intro: "Thank you for coming. I've been trying to get someone to listen for three days. I have suspicions but no proof — that's your job.",
      questions: [
        { id: 'q1', text: 'Who has access to your daily schedule?', response: "My timetable is on the university portal. But my study group schedule? Only people in my circle knew about Tuesday nights. Faiz used to be in that group before things got awkward." },
        { id: 'q2', text: 'Tell me about Faiz Hairuddin.', response: "He confessed his feelings six months ago. I turned him down gently. He seemed to accept it, but lately I've seen him watching me across the library. I don't think it's him though — it doesn't feel like him." },
        { id: 'q3', text: 'Who is D_Koh_88?', response: "That username creeped me out the most. We talked for weeks on GuildWars Online before I realised I didn't actually know this person. When I found out it was a younger student named Darren, I stopped responding. He didn't take it well." },
      ] },
    unlockMessage: 'Victim interview complete. The library has been unlocked.',
  },
  {
    id: 'library',
    name: 'University Library',
    subtitle: 'Academic Block · Ground Floor',
    description: "Quiet at this hour. Rows of bookshelves line the walls, a study desk in the centre under a warm reading lamp. The sign-in logbook sits on the desk, and a CCTV terminal is mounted in the upper corner along with the Wi-Fi access point.",
    sceneClass: 'scene-library',
    sceneHTML: `
      <div class="shelf shelf-1">
        <div class="shelf-row"><div class="book" style="background:#c0392b"></div><div class="book" style="background:#1565c0"></div><div class="book" style="background:#2e7d32"></div></div>
        <div class="shelf-row"><div class="book" style="background:#6a1b9a"></div><div class="book" style="background:#00695c"></div><div class="book" style="background:#bf360c"></div></div>
        <div class="shelf-row"><div class="book" style="background:#e65100"></div><div class="book" style="background:#0d47a1"></div><div class="book" style="background:#4a148c"></div></div>
        <div class="shelf-row"><div class="book" style="background:#bf360c"></div><div class="book" style="background:#f57f17"></div><div class="book" style="background:#1565c0"></div></div>
        <div class="shelf-row"><div class="book" style="background:#1b5e20"></div><div class="book" style="background:#c0392b"></div><div class="book" style="background:#33691e"></div></div>
      </div>
      <div class="shelf shelf-2">
        <div class="shelf-row"><div class="book" style="background:#1b5e20"></div><div class="book" style="background:#0d47a1"></div><div class="book" style="background:#4a148c"></div></div>
        <div class="shelf-row"><div class="book" style="background:#c0392b"></div><div class="book" style="background:#1565c0"></div><div class="book" style="background:#f57f17"></div></div>
        <div class="shelf-row"><div class="book" style="background:#6a1b9a"></div><div class="book" style="background:#bf360c"></div><div class="book" style="background:#1b5e20"></div></div>
        <div class="shelf-row"><div class="book" style="background:#e65100"></div><div class="book" style="background:#4a148c"></div><div class="book" style="background:#33691e"></div></div>
        <div class="shelf-row"><div class="book" style="background:#0d47a1"></div><div class="book" style="background:#2e7d32"></div><div class="book" style="background:#c0392b"></div></div>
      </div>
      <div class="shelf shelf-3">
        <div class="shelf-row"><div class="book" style="background:#4a148c"></div><div class="book" style="background:#c0392b"></div><div class="book" style="background:#1565c0"></div></div>
        <div class="shelf-row"><div class="book" style="background:#2e7d32"></div><div class="book" style="background:#6a1b9a"></div><div class="book" style="background:#f57f17"></div></div>
        <div class="shelf-row"><div class="book" style="background:#bf360c"></div><div class="book" style="background:#1b5e20"></div><div class="book" style="background:#0d47a1"></div></div>
        <div class="shelf-row"><div class="book" style="background:#f57f17"></div><div class="book" style="background:#c0392b"></div><div class="book" style="background:#4a148c"></div></div>
        <div class="shelf-row"><div class="book" style="background:#1565c0"></div><div class="book" style="background:#33691e"></div><div class="book" style="background:#6a1b9a"></div></div>
      </div>
      <div class="shelf shelf-4">
        <div class="shelf-row"><div class="book" style="background:#1565c0"></div><div class="book" style="background:#c0392b"></div><div class="book" style="background:#2e7d32"></div></div>
        <div class="shelf-row"><div class="book" style="background:#bf360c"></div><div class="book" style="background:#1b5e20"></div><div class="book" style="background:#6a1b9a"></div></div>
        <div class="shelf-row"><div class="book" style="background:#f57f17"></div><div class="book" style="background:#0d47a1"></div><div class="book" style="background:#4a148c"></div></div>
        <div class="shelf-row"><div class="book" style="background:#c0392b"></div><div class="book" style="background:#33691e"></div><div class="book" style="background:#1565c0"></div></div>
        <div class="shelf-row"><div class="book" style="background:#2e7d32"></div><div class="book" style="background:#bf360c"></div><div class="book" style="background:#e65100"></div></div>
      </div>
      <div class="shelf shelf-5">
        <div class="shelf-row"><div class="book" style="background:#6a1b9a"></div><div class="book" style="background:#1565c0"></div><div class="book" style="background:#f57f17"></div></div>
        <div class="shelf-row"><div class="book" style="background:#2e7d32"></div><div class="book" style="background:#c0392b"></div><div class="book" style="background:#0d47a1"></div></div>
        <div class="shelf-row"><div class="book" style="background:#1b5e20"></div><div class="book" style="background:#4a148c"></div><div class="book" style="background:#bf360c"></div></div>
        <div class="shelf-row"><div class="book" style="background:#0d47a1"></div><div class="book" style="background:#f57f17"></div><div class="book" style="background:#1b5e20"></div></div>
        <div class="shelf-row"><div class="book" style="background:#c0392b"></div><div class="book" style="background:#6a1b9a"></div><div class="book" style="background:#2e7d32"></div></div>
      </div>
      <div class="shelf shelf-6">
        <div class="shelf-row"><div class="book" style="background:#0d47a1"></div><div class="book" style="background:#bf360c"></div><div class="book" style="background:#1b5e20"></div></div>
        <div class="shelf-row"><div class="book" style="background:#4a148c"></div><div class="book" style="background:#2e7d32"></div><div class="book" style="background:#c0392b"></div></div>
        <div class="shelf-row"><div class="book" style="background:#f57f17"></div><div class="book" style="background:#1565c0"></div><div class="book" style="background:#6a1b9a"></div></div>
        <div class="shelf-row"><div class="book" style="background:#33691e"></div><div class="book" style="background:#c0392b"></div><div class="book" style="background:#0d47a1"></div></div>
        <div class="shelf-row"><div class="book" style="background:#e65100"></div><div class="book" style="background:#4a148c"></div><div class="book" style="background:#f57f17"></div></div>
      </div>
      <div class="uni-sign">
        <div class="uni-sign-name">UNIVERSITI TEKNOLOGI<br>NUSANTARA</div>
        <div class="uni-sign-divider"></div>
        <div class="uni-sign-sub">LIBRARY & KNOWLEDGE CENTRE</div>
      </div>
      <div class="desk-lib"></div>
      <div class="desk-front-panel"></div>
      <div class="lamp-lib"></div>
      <div class="logbook-obj"></div>
      <div class="computer-desk"></div>
      <div class="librarian">
        <div class="hijab"></div>
        <div class="hijab-drape"></div>
        <div class="head"></div>
        <div class="eye-l"></div>
        <div class="eye-r"></div>
        <div class="mouth"></div>
        <div class="body"></div>
        <div class="arm-l"></div>
        <div class="arm-r"></div>
        <div class="leg-l"></div>
        <div class="leg-r"></div>
      </div>
    `,
    hotspots: [
      { id: 'ev-logbook', class: 'hs-logbook', label: 'Sign-in logbook',
        evidence: { id: 'ev-logbook', label: 'Library sign-in log', short: 'Sign-in log' },
        modal: { type: 'Physical Evidence', title: 'Circulation desk — sign-in register',
          body: `<div class="ev-container"><div class="logbook">
      <div class="logbook-title">UTN LIBRARY · NIGHT REGISTER</div>
      <div class="logbook-subtitle">Tuesday, 23rd · Page 4</div>
      <table class="logbook-table">
        <thead><tr><th>Name</th><th>Student ID</th><th>Time In</th><th>Time Out</th></tr></thead>
        <tbody>
          <tr><td>S. Aminah</td><td>2021-LW-018</td><td>20:15</td><td>22:30</td></tr>
          <tr><td>R. Devan</td><td>2022-EE-094</td><td>21:00</td><td>23:15</td></tr>
          <tr class="highlight"><td>Faiz Hairuddin</td><td>2022-CS-038</td><td>21:42</td><td>00:15+</td></tr>
          <tr><td>Liyana Suffian</td><td>2022-CS-041</td><td>21:45</td><td>22:50</td></tr>
          <tr><td>K. Tan</td><td>2023-CS-112</td><td>22:30</td><td>23:45</td></tr>
          <tr><td>M. Iqbal</td><td>2021-EE-007</td><td>22:55</td><td>00:30+</td></tr>
        </tbody>
      </table>
    </div></div><p>Faiz was physically present from 9:42 PM until 12:15 AM — over a full hour past the 11:48 PM fake post timestamp. His handwriting is verified by the assistant. <strong>Physical alibi confirmed.</strong></p><p>However, library guest Wi-Fi reaches outside the building. Proximity to the network doesn\'t rule out remote actors.</p>` } },
      { id: 'ev-cctv', class: 'hs-cctv', label: 'CCTV camera',
        innerHTML: '<div class="lens"></div><div class="rec-light"></div><div class="mount-arm"></div>',
        evidence: { id: 'ev-cctv', label: 'CCTV timestamp record', short: 'CCTV log' },
        modal: { type: 'Digital Evidence', title: 'CCTV system — motion log',
          body: `<div class="ev-container"><div class="cctv-screen">
      <div class="cctv-header"><span><span class="cctv-status"></span>REC · LIVE FEED</span><span>CAM-04 LIB-ENT</span></div>
      <div class="cctv-feed">
<div class="cctv-line">21:41:08 ENTER · M-30s · cap+backpack</div>
<div class="cctv-line">21:42:30 SIGN-IN logged: Hairuddin, F.</div>
<div class="cctv-line">22:15:44 EXIT-RETURN · briefly to vending</div>
<div class="cctv-line">22:18:02 ENTER · same subject</div>
<div class="cctv-line">23:30:15 STATIONARY · corner desk</div>
<div class="cctv-line alert">23:39:21 ⚠ NEW DEVICE on guest AP: "REDMI-DK-GUEST"</div>
<div class="cctv-line alert">23:39:21    └ Signal origin: 47m N/NE of building</div>
<div class="cctv-line alert">23:39:21    └ Outside CCTV coverage zone</div>
<div class="cctv-line">23:48:14 ⚠ Twitter API: post created from this AP</div>
<div class="cctv-line">00:02:11 DEVICE DISCONNECT: REDMI-DK-GUEST</div>
<div class="cctv-line">00:14:33 EXIT · subject: Hairuddin, F.</div>
<div class="cctv-line">00:15:02 SIGN-OUT logged</div>
      </div>
    </div></div><p>The CCTV log creates two separate timelines — Faiz inside the library throughout, and an unidentified device connected to the library guest Wi-Fi from <strong>outside</strong> the building, 47 metres to the north. The fake post was created during that outside connection.</p>` } },
      { id: 'ev-wifilog', class: 'hs-wifilog label-anchor-right', label: 'Wi-Fi access point',
        innerHTML: '<div class="ap-antenna-l"></div><div class="ap-antenna-r"></div><div class="ap-signal-2"></div><div class="ap-signal-1"></div><div class="ap-label">UTN-AP-04</div>',
        evidence: { id: 'ev-wifilog', label: 'Guest Wi-Fi device log', short: 'Wi-Fi log' },
        modal: { type: 'Digital Evidence', title: 'Library AP — guest device connections',
          body: `<div class="ev-container"><div class="terminal-log">
<span class="terminal-prompt">root@utn-lib-ap04:~$ </span><span class="terminal-output">grep -i "tuesday" /var/log/guest-wifi.log | sort -k2</span>
<span class="terminal-comment"># Guest network associations · Tuesday 23rd</span>
<span class="terminal-info">21:08:42</span> ASSOC iPhone-Aminah         ··· 192.168.44.018  signal:-42dB
<span class="terminal-info">21:33:15</span> ASSOC MacBook-Devan         ··· 192.168.44.094  signal:-38dB
<span class="terminal-info">21:50:08</span> ASSOC Liyana-Galaxy         ··· 192.168.44.041  signal:-44dB
<span class="terminal-info">22:14:52</span> ASSOC iPad-Tan-K            ··· 192.168.44.112  signal:-40dB
<span class="terminal-info">22:30:11</span> ASSOC Iqbal-Phone           ··· 192.168.44.007  signal:-46dB
<span class="terminal-warn">23:39:21</span> <span class="terminal-warn">ASSOC REDMI-DK-GUEST       ··· 192.168.44.201  signal:-72dB ⚠</span>
<span class="terminal-comment">             └ weak signal · device estimated 40-60m from AP</span>
<span class="terminal-comment">             └ direction: bearing 020° (N/NE) — toward Dorm Block C</span>
<span class="terminal-info">00:02:11</span> DISASSOC REDMI-DK-GUEST    ··· session 23m04s
<span class="terminal-warn">                                               ⚠ NO REPEAT · single session only</span>

<span class="terminal-prompt">root@utn-lib-ap04:~$ </span><span class="terminal-output">whois MAC=A8:7D:12:DK:88:21</span>
<span class="terminal-info">Device:</span> Xiaomi Redmi Note 12
<span class="terminal-info">Type:</span> mobile/personal hotspot capable
<span class="terminal-info">Self-registered as guest:</span> 21 days ago
    </div></div><p>The "REDMI-DK-GUEST" device is the smoking gun — a single session connection from a weak signal location 40–60m north of the library, exactly when the fake post went live. The bearing points directly to Dorm Block C.</p>` } },
    ],
    npc: { id: 'librarian', name: 'Cik Rosnah', role: 'Library Assistant · Night shift', avatar: 'CR',
      avatarBg: 'rgba(127,179,211,0.15)', avatarColor: '#7fb3d3',
      intro: "I've been on the night shift for three years. I remember most of the regulars. What do you need to know?",
      questions: [
        { id: 'lq1', text: 'Was Faiz Hairuddin here last Tuesday night?', response: "Yes, he's here almost every Tuesday. Quiet boy, takes the corner seat. He asked me to refill the printer paper around midnight — I remember." },
        { id: 'lq2', text: 'Did you notice anyone unusual outside the library?', response: "Around 11:30 I stepped out and saw someone sitting on the bench near Block C — on a laptop. Hood up, couldn't see the face." },
        { id: 'lq3', text: 'Can students access the library Wi-Fi from outside?', response: "Guest network reaches 50 or 60 metres. Students do it all the time. No login required for guest access — we've been asking IT to fix that." },
      ] },
    unlockMessage: "Faiz's alibi confirmed. Darren's dorm room has been unlocked.",
  },
  {
    id: 'darren-dorm',
    name: "Darren's Dorm Room",
    subtitle: 'Block C · Room 214',
    description: "Sparse and chaotic. A dual-monitor gaming rig dominates the desk, a phone charging beside it, a torn notebook page peeking out from under textbooks. A 'GAME OVER' poster hangs on the wall. Darren slouches in his gaming chair, watching you carefully.",
    sceneClass: 'scene-dorm-darren',
    sceneHTML: `
      <div class="poster-d"></div>
      <div class="poster-mario"></div>
      <div class="poster-zelda"></div>
      <div class="poster-pokemon"></div>
      <div class="window-d"><div class="window-d-stars"></div></div>
      <div class="dartboard"></div>
      <div class="dart"></div>
      <div class="bed-d">
        <div class="bed-d-blanket"></div>
        <div class="pillow-d-1"></div>
        <div class="pillow-d-2"></div>
      </div>
      <div class="desk-d"></div>
      <div class="desk-leg-d desk-leg-d-1"></div>
      <div class="desk-leg-d desk-leg-d-2"></div>
      <div class="monitor monitor-1"><div class="monitor-screen"></div></div>
      <div class="monitor monitor-2"><div class="monitor-screen"></div></div>
      <div class="monitor-stand monitor-stand-1"></div>
      <div class="monitor-stand monitor-stand-2"></div>
      <div class="keyboard"></div>
      <div class="mouse"></div>
      <div class="books-d"></div>
      <div class="notebook-paper"></div>
      <div class="desk-chair">
        <div class="chair-back"></div>
        <div class="chair-seat"></div>
        <div class="chair-pole"></div>
        <div class="chair-base"></div>
        <div class="wheel wheel-l"></div>
        <div class="wheel wheel-c"></div>
        <div class="wheel wheel-r"></div>
      </div>
      <div class="darren-char">
        <div class="hair"></div>
        <div class="head"></div>
        <div class="eye-l"></div>
        <div class="eye-r"></div>
        <div class="body"></div>
        <div class="arm-l"></div>
        <div class="arm-r"></div>
        <div class="phone-held"></div>
        <div class="legs"></div>
      </div>
    `,
    hotspots: [
      { id: 'ev-monitor', class: 'hs-monitor-d', label: 'Gaming monitor',
        evidence: { id: 'ev-monitor', label: 'Browser history — fake account', short: 'Browser history' },
        modal: { type: 'Digital Evidence', title: 'Desktop activity — browser history',
          body: `<div class="ev-container"><div class="terminal-log">
<span class="terminal-prompt">forensics@utn:~$ </span><span class="terminal-output">cat browser_history.db | filter "twitter" | sort -date</span>

<span class="terminal-comment"># Chrome history · last 30 days · filtered: twitter.com</span>
<span class="terminal-warn">─────────────────────────────────────────────────────────</span>
<span class="terminal-info">Tue 23rd  23:31:22</span>  twitter.com/login
<span class="terminal-info">Tue 23rd  23:32:08</span>  twitter.com/i/flow/login → SUCCESS
<span class="terminal-info">Tue 23rd  23:32:11</span>  twitter.com/home  <span class="terminal-comment">(account: nadia.razali.real)</span>
<span class="terminal-warn">Tue 23rd  23:39:44</span>  twitter.com/compose/post
<span class="terminal-warn">Tue 23rd  23:48:14</span>  twitter.com/post/created  <span class="terminal-warn">⚠ POST PUBLISHED</span>
<span class="terminal-info">Tue 23rd  23:49:01</span>  twitter.com/nadia.razali.real
<span class="terminal-info">Tue 23rd  23:54:33</span>  twitter.com/settings/account
<span class="terminal-info">Wed 24th  00:02:08</span>  twitter.com/logout

<span class="terminal-comment"># Pattern: same routine on previous Tuesdays</span>
<span class="terminal-info">Tue 16th  23:14-00:11</span>  twitter (24min session)
<span class="terminal-info">Tue 9th   23:08-23:55</span>  twitter (47min session)
<span class="terminal-info">Tue 2nd   22:58-00:23</span>  twitter (account creation)

<span class="terminal-prompt">forensics@utn:~$ </span><span class="terminal-output">cat browser_logins.db | last</span>
<span class="terminal-info">Active session:</span> <span class="terminal-warn">dnkoh.secret88@gmail.com</span>
<span class="terminal-info">Synced devices:</span> "Darren-PC", "REDMI-DK"
<span class="terminal-info">Last sync:</span> 3 nights ago
    </div></div><p>The browser was never cleared. Three consecutive Tuesdays show the same pattern — login, compose, publish, logout — all between 11 PM and midnight. The Gmail account "dnkoh.secret88" matches the "D_Koh_88" username from Nadia\'s gaming app.</p>` } },
      { id: 'ev-phone-metadata', class: 'hs-phone-d', label: "Darren's phone",
        evidence: { id: 'ev-phone-metadata', label: 'Photo GPS metadata', short: 'GPS metadata' },
        modal: { type: 'Digital Evidence', title: 'Image EXIF data — photo posted to fake account',
          body: `<div class="ev-container"><div class="exif-viewer">
      <div class="exif-photo"><div class="exif-photo-overlay">IMG_20240423_232214.jpg</div></div>
      <div class="exif-data">
        <div class="exif-row"><span class="exif-key">Filename</span><span class="exif-val">IMG_20240423_232214.jpg</span></div>
        <div class="exif-row"><span class="exif-key">Captured</span><span class="exif-val alert">23 Apr 2024 · 23:22:14</span></div>
        <div class="exif-row"><span class="exif-key">Device</span><span class="exif-val match">Xiaomi Redmi Note 12</span></div>
        <div class="exif-row"><span class="exif-key">Lens</span><span class="exif-val">f/1.9 · 5.81mm</span></div>
        <div class="exif-row"><span class="exif-key">ISO</span><span class="exif-val">800</span></div>
        <div class="exif-row"><span class="exif-key">GPS Latitude</span><span class="exif-val alert">2.9264° N</span></div>
        <div class="exif-row"><span class="exif-key">GPS Longitude</span><span class="exif-val alert">101.6964° E</span></div>
        <div class="exif-row"><span class="exif-key">GPS Match</span><span class="exif-val alert">UTN Block C · Floor 2 area</span></div>
        <div class="exif-row"><span class="exif-key">Posted to</span><span class="exif-val alert">@nadia.razali.real · 23:48 (26 min later)</span></div>
        <div class="exif-row"><span class="exif-key">Hash (SHA-256)</span><span class="exif-val" style="font-size:10px">a4f8e2c1b9d7f6e3...e8a1d2</span></div>
      </div>
    </div></div><p>The photo posted by the fake account contains intact EXIF metadata. The GPS coordinates pinpoint the capture location to Dorm Block C — Darren\'s building. Same device model that connected to the library Wi-Fi 17 minutes later.</p>` } },
      { id: 'ev-notebook', class: 'hs-notebook-d', label: 'Torn notebook page',
        evidence: { id: 'ev-notebook', label: 'Handwritten credential note', short: 'Written note' },
        modal: { type: 'Physical Evidence', title: 'Notebook page — handwritten credentials',
          body: `<div class="ev-container"><div class="notebook-page">
      <div class="notebook-tear"></div>
      <div class="notebook-stamp">PHYSICAL EXHIBIT 03</div>
      <div class="notebook-content">
        <span class="notebook-line">nadia_backup_acc</span>
        <span class="notebook-line">pass: Nadia@2024</span>
        <span class="notebook-line">alt: nadia.razali.real</span>
        <span class="notebook-line" style="color:#c0392b">— twitter handle ✓</span>
      </div>
    </div></div><p>A torn page found under textbooks on Darren\'s desk. The handwriting matches notes elsewhere in the room. The third line — "nadia.razali.real" — is the <strong>exact username</strong> of the fake Twitter account. The password "Nadia@2024" suggests the perpetrator studied her naming patterns over their long online conversations.</p>` } },
    ],
    npc: { id: 'darren', name: 'Darren Koh', role: 'Suspect · Computer Science, Year 2', avatar: 'DK',
      avatarBg: 'rgba(192,57,43,0.15)', avatarColor: '#c0392b',
      intro: "I don't know why you're here. I barely know Nadia. We talked online a bit — that's it. Everyone games online.",
      questions: [
        { id: 'dq1', text: 'Where were you last Tuesday at 11:48 PM?', response: "Here. In my room. Gaming solo — no one to verify, I know. But I wasn't doing anything to Nadia." },
        { id: 'dq2', text: 'Your device connected to the library Wi-Fi that night.', response: "...I might have gone out for a bit. I walk around at night sometimes. Sat near the library. That's not a crime. I just needed air." },
        { id: 'dq3', text: 'We found "D_Koh_88" on Nadia\'s phone.', response: "That conversation was private. She misunderstood me. When she stopped talking I got frustrated. I sent ONE angry message. That doesn\'t mean I made a fake account." },
      ] },
    unlockMessage: 'Physical evidence secured. The IT Department has been unlocked.',
  },
  {
    id: 'it-dept',
    name: 'IT Department',
    subtitle: 'Admin Block · Level 2',
    description: "Server racks hum behind a glass partition. The network admin pulls up the university's management dashboard at your request — three terminals showing different log streams. This is where digital trails become undeniable.",
    sceneClass: 'scene-it',
    ethicalFlag: true,
    sceneHTML: `
      <div class="server-rack rack-1">
        ${Array(12).fill('<div class="server-unit"></div>').join('')}
      </div>
      <div class="server-rack rack-2">
        ${Array(12).fill('<div class="server-unit"></div>').join('')}
      </div>
      <div class="server-rack rack-3">
        ${Array(12).fill('<div class="server-unit"></div>').join('')}
      </div>
      <div class="glass-partition"></div>
      <div class="it-sign">
        <div class="it-sign-uni">UNIVERSITI TEKNOLOGI NUSANTARA</div>
        <div class="it-sign-divider"></div>
        <div class="it-sign-text">IT DEPARTMENT</div>
        <div class="it-sign-sub">NETWORK · SYSTEMS · SECURITY</div>
      </div>
      <div class="desk-it"></div>
      <div class="desk-it-leg desk-it-leg-l"></div>
      <div class="desk-it-leg desk-it-leg-r"></div>
      <div class="pc-tower"></div>
      <div class="pc-monitor"></div>
      <div class="pc-monitor-stand"></div>
      <div class="pc-monitor-base"></div>
      <div class="pc-keyboard"></div>
      <div class="it-chair">
        <div class="ch-back"></div>
        <div class="ch-seat"></div>
        <div class="ch-pole"></div>
        <div class="ch-base"></div>
        <div class="ch-wheel ch-wheel-l"></div>
        <div class="ch-wheel ch-wheel-r"></div>
      </div>
      <div class="it-char">
        <div class="hair"></div>
        <div class="head"></div>
        <div class="eye-l"></div>
        <div class="eye-r"></div>
        <div class="body"></div>
        <div class="arm-l"></div>
        <div class="arm-r"></div>
        <div class="leg-l"></div>
        <div class="leg-r"></div>
      </div>
    `,
    hotspots: [
      { id: 'ev-guestnet', class: 'hs-guestnet label-anchor-left', label: 'Server rack 1 — Guest network',
        evidence: { id: 'ev-guestnet', label: 'Guest network registration', short: 'Network registry' },
        modal: { type: 'Digital Evidence', title: 'Guest network — device registry',
          body: `<div class="ev-container"><div class="netreg">
      <div class="netreg-title">UTN GUEST NETWORK · DEVICE REGISTRY</div>
      <table class="netreg-table">
        <thead><tr><th>Device Name</th><th>Registered To</th><th>Student ID</th><th>Sessions</th></tr></thead>
        <tbody>
          <tr><td>aminah-iphone</td><td>Aminah, S.</td><td>2021-LW-018</td><td>47</td></tr>
          <tr><td>devan-mbp</td><td>Devan, R.</td><td>2022-EE-094</td><td>89</td></tr>
          <tr class="match"><td>REDMI-DK-GUEST</td><td>Koh, Darren Nathan</td><td>2022-CS-0441</td><td>6</td></tr>
          <tr><td>liyana-galaxy</td><td>Suffian, L.</td><td>2022-CS-041</td><td>54</td></tr>
          <tr><td>iqbal-honor</td><td>Iqbal, M.</td><td>2021-EE-007</td><td>112</td></tr>
        </tbody>
      </table>
      <div style="margin-top:14px;padding:10px;background:rgba(192,57,43,0.08);border-left:2px solid #c0392b;font-size:11px;color:#ff7b6b;font-family:'IBM Plex Mono',monospace">
        ⚠ ANOMALY · REDMI-DK-GUEST sessions all on Tue 21:00–00:30 over 3 weeks<br>
        ⚠ Each session preceded fake account post by &lt; 30 min (n=6, p&lt;0.001)
      </div>
    </div></div><p>The device "REDMI-DK-GUEST" was self-registered by Darren Koh three weeks ago — the same week the fake account first appeared. Six guest sessions, all on Tuesday nights, all preceded a fake post by under 30 minutes. The correlation is statistically beyond coincidence.</p>` } },
      { id: 'ev-iplog', class: 'hs-iplog', label: 'Server rack 2 — IP logs',
        evidence: { id: 'ev-iplog', label: 'Fake account IP trace', short: 'IP trace' },
        modal: { type: 'Digital Evidence', title: 'Twitter API log — login IP addresses',
          body: `<div class="ev-container"><div class="terminal-log">
<span class="terminal-prompt">utn-it@admin:~$ </span><span class="terminal-output">twitter-api --account "@nadia.razali.real" --logins</span>

<span class="terminal-comment"># Twitter API formal request · case UTN-2024-0441</span>
<span class="terminal-warn">═══════════════════════════════════════════════════════</span>
<span class="terminal-info">Account:</span>     @nadia.razali.real
<span class="terminal-info">Created:</span>     2 Apr 2024 · 23:01:14
<span class="terminal-info">Login count:</span> 14 sessions

<span class="terminal-comment"># Login IP addresses (deduplicated):</span>

<span class="terminal-warn">192.168.44.201</span>  → UTN library guest Wi-Fi (AP-04)
                  <span class="terminal-comment">└ Sessions: Tue 2nd, 9th, 16th, 23rd</span>
                  <span class="terminal-comment">└ Cross-ref: REDMI-DK-GUEST device</span>

<span class="terminal-warn">10.0.214.88</span>     → UTN Dorm Block C · Room 214
                  <span class="terminal-comment">└ Sessions: Wed 3rd, 10th, 17th</span>
                  <span class="terminal-comment">└ Assigned occupant: Koh, Darren Nathan</span>

<span class="terminal-prompt">utn-it@admin:~$ </span><span class="terminal-output">cross-reference --student "2022-CS-0441"</span>
<span class="terminal-info">Student:</span>      Koh, Darren Nathan
<span class="terminal-info">Dorm:</span>         Block C · Room 214 → 10.0.214.88 ✓
<span class="terminal-info">Reg device:</span>   REDMI-DK-GUEST → 192.168.44.201 ✓
<span class="terminal-warn">MATCH:</span>        <span class="terminal-warn">100% — both IPs trace to one student</span>
    </div></div><p>The fake account\'s entire login history resolves to two IP addresses — both on UTN networks, both linked to one student ID: Darren Koh. The evidence chain is now closed.</p>` } },
      { id: 'ev-discord', class: 'hs-discord label-anchor-right', label: 'Server rack 3 — Discord traffic',
        evidence: { id: 'ev-discord', label: 'Discord activity timestamp', short: 'Discord log' },
        modal: { type: 'Digital Evidence', title: 'Discord — server activity log',
          body: `<div class="ev-container"><div class="discord">
      <div class="discord-header"><span class="discord-hash">#</span><span class="discord-channel">private-thoughts</span></div>
      <div class="discord-msg-list">
        <div class="discord-msg">
          <div class="discord-avatar">DK</div>
          <div class="discord-content">
            <div><span class="discord-author">d_koh_88</span><span class="discord-time">23:31</span></div>
            <div class="discord-text">tuesday again. she\'s in the library like clockwork</div>
          </div>
        </div>
        <div class="discord-msg">
          <div class="discord-avatar">DK</div>
          <div class="discord-content">
            <div><span class="discord-author">d_koh_88</span><span class="discord-time">23:34</span></div>
            <div class="discord-text">going to the bench. better signal there</div>
          </div>
        </div>
        <div class="discord-msg">
          <div class="discord-avatar">DK</div>
          <div class="discord-content">
            <div><span class="discord-author">d_koh_88</span><span class="discord-time">23:42</span></div>
            <div class="discord-text">connected. drafting now</div>
          </div>
        </div>
        <div class="discord-msg">
          <div class="discord-avatar">DK</div>
          <div class="discord-content">
            <div><span class="discord-author">d_koh_88</span><span class="discord-time">23:49</span></div>
            <div class="discord-text">posted. let\'s see how she likes it 😏</div>
          </div>
        </div>
        <div class="discord-msg">
          <div class="discord-avatar">DK</div>
          <div class="discord-content">
            <div><span class="discord-author">d_koh_88</span><span class="discord-time">23:56</span></div>
            <div class="discord-text flag">done for tonight</div>
          </div>
        </div>
      </div>
    </div></div><p>Darren\'s Discord activity, captured via university network traffic monitoring, places him at every step of the timeline: pre-attack stakeout, location change for stronger signal, drafting, posting, and a final "done for tonight" eight minutes after the fake post went live. This is a confession in real-time.</p>` } },
    ],
    npc: { id: 'itstaff', name: 'Encik Hafiz', role: 'Network Administrator · IT Division', avatar: 'EH',
      avatarBg: 'rgba(29,158,117,0.15)', avatarColor: '#1d9e75',
      intro: "I've pulled what I can. Some of this data was on the guest network — collected without a formal warrant. Your call on how you proceed with it.",
      questions: [
        { id: 'iq1', text: 'Can you confirm the device registration?', response: "Confirmed. REDMI-DK-GUEST was self-registered under student ID 2022-CS-0441 — Darren Koh. Three weeks ago, right when the fake account first appeared." },
        { id: 'iq2', text: 'Is this evidence legally admissible?', response: "That's the issue. Guest network data falls under the university's monitoring policy, but using it formally typically needs a warrant or consent. Flag it in your report." },
        { id: 'iq3', text: 'Is the IP evidence conclusive?', response: "Professionally — yes. Timing, device, IP range, username pattern. All one person. Whether it's enough without a warrant is a question for legal counsel, not me." },
      ] },
    unlockMessage: 'All evidence secured. Proceed to the Security Office.',
  },
  {
    id: 'security-office',
    name: 'Security Office',
    subtitle: 'Admin Block · Ground Floor',
    description: "The Head of Campus Security sits across a large desk, your case file open in front of her. Behind her, a corkboard already pinned with screenshots and timestamps awaits your final connections. A warm desk lamp pools light over the file.",
    sceneClass: 'scene-security',
    sceneHTML: `
      <div class="org-board">
        <div class="org-board-title">ORGANISATION CHART</div>
        <div class="org-board-divider"></div>
        <div class="org-box org-box-top"><div class="org-box-text">VICE CHANCELLOR</div></div>
        <div class="org-line org-line-v1"></div>
        <div class="org-line org-line-h"></div>
        <div class="org-line org-line-v2"></div>
        <div class="org-line org-line-v3"></div>
        <div class="org-box org-box-mid-l"><div class="org-box-text">CAMPUS<br>SECURITY</div></div>
        <div class="org-box org-box-mid-r"><div class="org-box-text">STUDENT<br>AFFAIRS</div></div>
        <div class="org-line org-line-h2"></div>
        <div class="org-line org-line-h3"></div>
        <div class="org-line org-line-v4"></div>
        <div class="org-line org-line-v5"></div>
        <div class="org-line org-line-v6"></div>
        <div class="org-box org-box-bot-1"><div class="org-box-text">PATROL</div></div>
        <div class="org-box org-box-bot-2"><div class="org-box-text">FORENSIC</div></div>
        <div class="org-box org-box-bot-3"><div class="org-box-text">WELFARE</div></div>
      </div>
      <div class="corkboard-bg">
        <div class="corkboard-paper"></div>
        <div class="corkboard-paper"></div>
        <div class="corkboard-paper"></div>
        <div class="corkboard-paper"></div>
        <div class="corkboard-paper"></div>
        <div class="corkboard-paper"></div>
        <div class="red-string string-1"></div>
        <div class="red-string string-2"></div>
        <div class="red-string string-3"></div>
        <div class="pin pin-1"></div>
        <div class="pin pin-2"></div>
        <div class="pin pin-3"></div>
        <div class="pin pin-4"></div>
        <div class="pin pin-5"></div>
      </div>
      <div class="ethics-poster">
        <div class="ethics-poster-title">WORK<br>ETHICS</div>
        <div class="ethics-poster-divider"></div>
        <div class="ethics-poster-line">· Integrity always</div>
        <div class="ethics-poster-line">· Respect evidence</div>
        <div class="ethics-poster-line">· Protect privacy</div>
        <div class="ethics-poster-line">· Follow procedure</div>
        <div class="ethics-poster-line">· Act with honour</div>
        <div class="ethics-poster-seal">★</div>
      </div>
      <div class="security-char">
        <div class="hair"></div>
        <div class="head"></div>
        <div class="eye-l"></div>
        <div class="eye-r"></div>
        <div class="mouth"></div>
        <div class="body"></div>
        <div class="arm-l"></div>
        <div class="arm-r"></div>
        <div class="leg-l"></div>
        <div class="leg-r"></div>
      </div>
      <div class="desk-s">
        <div class="file-folder"></div>
        <div class="desk-sign"></div>
      </div>
      <div class="desk-s-legs"></div>
      <div class="lamp-s"></div>
      <div class="lamp-base"></div>
    `,
    hotspots: [],
    npc: { id: 'security', name: 'Puan Suraya', role: 'Head of Campus Security', avatar: 'PS',
      avatarBg: 'rgba(200,169,110,0.2)', avatarColor: '#c8a96e',
      intro: "I've reviewed your preliminary notes. We have enough to proceed — but I need your formal verdict. Review your evidence and name the person responsible.",
      questions: [
        { id: 'sq1', text: 'What happens after I submit my verdict?', response: "If the evidence holds, the case goes to the Student Disciplinary Board for suspension or expulsion. If there's a legal dimension, we refer to police. Your forensic report is the foundation." },
        { id: 'sq2', text: 'What about the warrant issue with network data?', response: "If you flagged it in your report, we run it through legal counsel before formal action. If you didn't flag it — that could be a problem later. Evidence might be challenged." },
      ] },
    isVerdict: true,
  }
  ]
};

const locations = GAME_CONTENT.locations;
const suspects = GAME_CONTENT.suspects;
const dom = {
  titleScreen: document.getElementById('title-screen'),
  gameScreen: document.getElementById('game-screen'),
  verdictScreen: document.getElementById('verdict-screen'),
  endingScreen: document.getElementById('ending-screen'),
  modal: document.getElementById('modal'),
  locationNav: document.getElementById('location-nav'),
  evidenceSidebar: document.getElementById('evidence-sidebar'),
  journalObjective: document.getElementById('journal-objective'),
  journalSummary: document.getElementById('journal-summary'),
  suspectNotes: document.getElementById('suspect-notes'),
  saveStatus: document.getElementById('save-status'),
  sceneMain: document.getElementById('scene-main'),
  sceneLocationTitle: document.getElementById('scene-location-title'),
  sceneProgress: document.getElementById('scene-progress'),
  sceneSubcopy: document.getElementById('scene-subcopy'),
  verdictEvidenceBoard: document.getElementById('verdict-evidence-board'),
  verdictSuspectList: document.getElementById('verdict-suspect-list'),
  verdictSummaryNote: document.getElementById('verdict-summary-note'),
  verdictBtn: document.getElementById('verdict-btn'),
  endingIcon: document.getElementById('ending-icon'),
  endingTitle: document.getElementById('ending-title'),
  endingBody: document.getElementById('ending-body'),
  endingScore: document.getElementById('ending-score'),
  scoreBreakdown: document.getElementById('score-breakdown'),
  modalType: document.getElementById('modal-type'),
  modalTitle: document.getElementById('modal-title'),
  modalBody: document.getElementById('modal-body'),
  modalFooter: document.getElementById('modal-footer')
};

const EVIDENCE_NOTES = {
  'ev-laptop': { tag: 'Account clone', summary: 'The fake profile copied Nadia’s identity and was created recently.', impact: 'Shows impersonation and indicates the account still needs network-level tracing.' },
  'ev-phone': { tag: 'Online alias', summary: 'Nadia’s GuildChat history links harassment escalation to the alias D_Koh_88.', impact: 'Connects Darren’s online identity to motive and prior obsession.' },
  'ev-printout': { tag: 'Timing clue', summary: 'The post went live while Nadia was in her regular Tuesday study session.', impact: 'Suggests the perpetrator knew Nadia’s routine and chose a time she could not defend herself quickly.' },
  'ev-logbook': { tag: 'Alibi check', summary: 'Faiz signed into the library and remained there past midnight.', impact: 'Strengthens Faiz’s physical alibi during the critical posting window.' },
  'ev-cctv': { tag: 'Outside connection', summary: 'CCTV logs show a new device on the library AP from outside the building.', impact: 'Separates the offender’s device activity from Faiz’s presence inside the library.' },
  'ev-wifilog': { tag: 'Network bearing', summary: 'REDMI-DK-GUEST connected from a weak signal north/northeast of the library.', impact: 'Points directly toward Dorm Block C and Darren’s device registration pattern.' },
  'ev-monitor': { tag: 'Browser trail', summary: 'Darren’s desktop shows repeated Tuesday login-compose-publish cycles.', impact: 'Directly ties his desktop activity to the fake account’s operating pattern.' },
  'ev-phone-metadata': { tag: 'EXIF location', summary: 'Photo metadata from the fake account resolves to Block C using a Xiaomi Redmi Note 12.', impact: 'Links the fake account post to Darren’s phone and physical location.' },
  'ev-notebook': { tag: 'Credential note', summary: 'A handwritten note includes the exact fake username and Nadia-themed password ideas.', impact: 'Places account planning material in Darren’s room.' },
  'ev-guestnet': { tag: 'Registration link', summary: 'Guest network records map REDMI-DK-GUEST directly to Darren Koh.', impact: 'Confirms the suspicious device belongs to Darren.' },
  'ev-iplog': { tag: 'IP trace', summary: 'Platform-side login IPs align with campus guest network activity and the device trail.', impact: 'Bridges the fake account logins with UTN infrastructure records.' },
  'ev-discord': { tag: 'Corroborating chat', summary: 'Discord-style communication corroborates Darren’s fixation and timing.', impact: 'Reinforces motive and contemporaneous behavior around the attacks.' }
};

const LOCATION_OBJECTIVES = {
  'victims-room': 'Document Nadia’s complaint, identify the online alias, and establish the initial timeline.',
  'library': 'Verify Faiz’s alibi and determine whether the posting device was inside or outside the library.',
  'darren-dorm': 'Search Darren’s room for physical or digital traces linking him to the fake account.',
  'it-dept': 'Confirm the device registration trail and decide how to handle the ethics issue around guest network data.',
  'security-office': 'Brief Puan Suraya and prepare the final accusation package.'
};

const VERDICT_CARD_POSITIONS = [
  { top: 36, left: 28, rotate: -5 },
  { top: 42, left: 268, rotate: 4 },
  { top: 58, left: 506, rotate: -2 },
  { top: 224, left: 54, rotate: 5 },
  { top: 236, left: 286, rotate: -4 },
  { top: 250, left: 520, rotate: 3 },
  { top: 410, left: 36, rotate: -3 },
  { top: 428, left: 270, rotate: 6 },
  { top: 440, left: 514, rotate: -5 },
  { top: 560, left: 78, rotate: 3 },
  { top: 566, left: 326, rotate: -4 },
  { top: 574, left: 540, rotate: 4 }
];

function createInitialState() {
  return {
    version: GAME_CONTENT.saveVersion,
    currentLocation: 0,
    currentScreen: 'title-screen',
    evidence: [],
    dialogueProgress: {},
    ethicalChoice: null,
    selectedSuspect: null,
    finalOutcome: null,
    lastSavedAt: null
  };
}

let state = createInitialState();

function getLocationById(id) {
  return locations.find(location => location.id === id);
}

function getLocationIndexById(id) {
  return locations.findIndex(location => location.id === id);
}

function getSuspectById(id) {
  return suspects.find(suspect => suspect.id === id);
}

function getAllHotspots() {
  return locations.flatMap(location => location.hotspots.map(hotspot => ({ ...hotspot, locationId: location.id })));
}

function findHotspotById(id) {
  return getAllHotspots().find(hotspot => hotspot.id === id);
}

function getEvidenceRecord(id) {
  const hotspot = findHotspotById(id);
  return hotspot ? { ...hotspot.evidence, modalType: hotspot.modal.type, locationId: hotspot.locationId } : null;
}

function hasEvidence(id) {
  return state.evidence.includes(id);
}

function getInterviewProgress(loc) {
  if (!loc.npc) return { asked: 0, total: 0, complete: true };
  const askedMap = state.dialogueProgress[loc.npc.id] || {};
  const asked = loc.npc.questions.filter(question => askedMap[question.id]).length;
  return { asked, total: loc.npc.questions.length, complete: asked === loc.npc.questions.length };
}

function isEthicsComplete(loc) {
  return !loc.ethicalFlag || state.ethicalChoice !== null;
}

function isEthicsFlagged() {
  return state.ethicalChoice === 'flag';
}

function getEvidenceFoundCount(loc) {
  return loc.hotspots.filter(hotspot => hasEvidence(hotspot.id)).length;
}

function getLocationTaskStats(loc) {
  const evidenceFound = getEvidenceFoundCount(loc);
  const interview = getInterviewProgress(loc);
  const evidenceTotal = loc.hotspots.length;
  const totalTasks = evidenceTotal + (loc.npc ? 1 : 0) + (loc.ethicalFlag ? 1 : 0);
  const completedTasks = evidenceFound + (interview.complete ? 1 : 0) + (isEthicsComplete(loc) ? 1 : 0);
  return { evidenceFound, evidenceTotal, interview, totalTasks, completedTasks };
}

function isLocationComplete(loc) {
  const stats = getLocationTaskStats(loc);
  return stats.completedTasks >= stats.totalTasks;
}

function isLocationUnlocked(index) {
  return index === 0 || isLocationComplete(locations[index - 1]);
}

function getCurrentObjective(loc) {
  const missingEvidence = loc.hotspots.filter(hotspot => !hasEvidence(hotspot.id));
  const interview = getInterviewProgress(loc);
  if (missingEvidence.length) {
    return `${LOCATION_OBJECTIVES[loc.id]} Next: inspect ${missingEvidence[0].label.toLowerCase()}.`;
  }
  if (loc.npc && !interview.complete) {
    return `${LOCATION_OBJECTIVES[loc.id]} Next: finish interviewing ${loc.npc.name}.`;
  }
  if (loc.ethicalFlag && !isEthicsComplete(loc)) {
    return `${LOCATION_OBJECTIVES[loc.id]} Next: resolve the guest-network ethics concern.`;
  }
  if (loc.isVerdict) {
    return 'Security briefing complete. Proceed to the final verdict board when ready.';
  }
  const nextIndex = getLocationIndexById(loc.id) + 1;
  const nextLocation = locations[nextIndex];
  return nextLocation
    ? `Location cleared. Proceed to ${nextLocation.name}.`
    : 'All investigative steps cleared.';
}

function renderChecklist(loc) {
  const interview = getInterviewProgress(loc);
  const items = loc.hotspots.map(hotspot => {
    const found = hasEvidence(hotspot.id);
    return `
      <div class="checklist-item${found ? ' done' : ''}">
        <div class="checklist-icon">${found ? '✓' : '○'}</div>
        <div class="checklist-copy">
          <strong>${hotspot.label}</strong>
          <span>${found ? 'Evidence collected and logged in the case journal.' : 'Inspect and collect this evidence.'}</span>
        </div>
      </div>`;
  });

  if (loc.npc) {
    items.push(`
      <div class="checklist-item${interview.complete ? ' done' : ''}">
        <div class="checklist-icon">${interview.complete ? '✓' : '○'}</div>
        <div class="checklist-copy">
          <strong>Interview ${loc.npc.name}</strong>
          <span>${interview.complete ? 'Interview completed.' : `${interview.asked}/${interview.total} questions asked.`}</span>
        </div>
      </div>`);
  }

  if (loc.ethicalFlag) {
    const done = isEthicsComplete(loc);
    items.push(`
      <div class="checklist-item${done ? ' done' : ''}">
        <div class="checklist-icon">${done ? '✓' : '○'}</div>
        <div class="checklist-copy">
          <strong>Resolve ethical concern</strong>
          <span>${done ? (isEthicsFlagged() ? 'Concern flagged in the report.' : 'Concern acknowledged but not flagged.') : 'Review and decide how to handle the guest network evidence.'}</span>
        </div>
      </div>`);
  }

  const stats = getLocationTaskStats(loc);
  return `<div class="checklist-box">
    <div class="checklist-title">Location Checklist</div>
    <div class="checklist-sub">${stats.completedTasks}/${stats.totalTasks} tasks complete. Finish each task to fully clear this location.</div>
    <div class="checklist-grid">${items.join('')}</div>
  </div>`;
}

function getRecentEvidenceNotes(limit = 4) {
  return state.evidence.slice(-limit).reverse().map(id => {
    const record = getEvidenceRecord(id);
    return {
      id,
      label: record?.label || id,
      note: EVIDENCE_NOTES[id]?.impact || 'Evidence collected and preserved for review.'
    };
  });
}

function renderJournal() {
  const loc = locations[state.currentLocation];
  const stats = getLocationTaskStats(loc);
  dom.journalObjective.innerHTML = `
    <div class="journal-block">
      <div class="journal-block-title">Current Objective</div>
      <div class="journal-objective-text">${getCurrentObjective(loc)}</div>
      <div class="journal-meta" style="margin-top:8px">${stats.completedTasks}/${stats.totalTasks} checklist tasks complete in this location.</div>
    </div>`;

  const evidenceNotes = getRecentEvidenceNotes();
  const ethicsNote = loc.ethicalFlag && !isEthicsComplete(loc)
    ? `<div class="journal-item"><strong>Ethics Alert</strong><span>The guest-network evidence still needs a formal decision before you can clear this location.</span></div>`
    : '';
  dom.journalSummary.innerHTML = `
    <div class="journal-block">
      <div class="journal-block-title">Evidence Notes</div>
      <div class="journal-list">
        ${evidenceNotes.length
          ? evidenceNotes.map(entry => `<div class="journal-item"><strong>${entry.label}</strong><span>${entry.note}</span></div>`).join('')
          : '<div class="journal-item"><strong>No notes yet</strong><span>Collect evidence to populate your investigator notebook.</span></div>'}
        ${ethicsNote}
      </div>
    </div>`;

  dom.suspectNotes.innerHTML = `
    <div class="journal-block">
      <div class="journal-block-title">Suspect Notes</div>
      <div class="journal-list">
        ${suspects.map(suspect => `<div class="journal-item"><strong>${suspect.name}</strong><span>${suspect.note}</span></div>`).join('')}
      </div>
    </div>`;
}

function setSaveStatus(message, saved = false) {
  if (!dom.saveStatus) return;
  dom.saveStatus.textContent = message;
  dom.saveStatus.classList.toggle('is-saved', saved);
}

function sanitizeSave(candidate) {
  if (!candidate || typeof candidate !== 'object') return null;
  if (candidate.version !== GAME_CONTENT.saveVersion) return null;

  const sanitized = createInitialState();
  sanitized.currentLocation = Number.isInteger(candidate.currentLocation) && candidate.currentLocation >= 0 && candidate.currentLocation < locations.length
    ? candidate.currentLocation
    : 0;
  sanitized.currentScreen = ['title-screen', 'game-screen', 'verdict-screen', 'ending-screen'].includes(candidate.currentScreen)
    ? candidate.currentScreen
    : 'game-screen';
  sanitized.evidence = Array.isArray(candidate.evidence)
    ? [...new Set(candidate.evidence.filter(id => !!findHotspotById(id)))]
    : [];
  sanitized.dialogueProgress = candidate.dialogueProgress && typeof candidate.dialogueProgress === 'object'
    ? candidate.dialogueProgress
    : {};
  sanitized.ethicalChoice = ['flag', 'ignore'].includes(candidate.ethicalChoice) ? candidate.ethicalChoice : null;
  sanitized.selectedSuspect = suspects.some(suspect => suspect.id === candidate.selectedSuspect) ? candidate.selectedSuspect : null;
  sanitized.finalOutcome = candidate.finalOutcome && typeof candidate.finalOutcome === 'object' ? candidate.finalOutcome : null;
  sanitized.lastSavedAt = typeof candidate.lastSavedAt === 'string' ? candidate.lastSavedAt : null;
  return sanitized;
}

function saveState() {
  try {
    const payload = {
      ...state,
      lastSavedAt: new Date().toISOString()
    };
    localStorage.setItem(GAME_CONTENT.saveKey, JSON.stringify(payload));
    state.lastSavedAt = payload.lastSavedAt;
    setSaveStatus(`Autosaved · ${new Date(payload.lastSavedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, true);
  } catch (error) {
    setSaveStatus('Autosave unavailable', false);
  }
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(GAME_CONTENT.saveKey);
    if (!raw) return null;
    const parsed = sanitizeSave(JSON.parse(raw));
    if (!parsed) {
      localStorage.removeItem(GAME_CONTENT.saveKey);
      return null;
    }
    return parsed;
  } catch (error) {
    return null;
  }
}

function showScreen(id, { persist = true } = {}) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  state.currentScreen = id;
  if (persist) saveState();
}

function renderSidebar() {
  dom.locationNav.innerHTML = locations.map((loc, index) => {
    const unlocked = isLocationUnlocked(index);
    const complete = isLocationComplete(loc);
    const active = state.currentLocation === index && state.currentScreen === 'game-screen';
    const disabled = unlocked ? '' : 'disabled aria-disabled="true"';
    const classes = ['location-item', active ? 'active' : '', unlocked ? '' : 'locked', complete ? 'done' : '']
      .filter(Boolean)
      .join(' ');
    return `<button type="button" class="${classes}" ${disabled} onclick="${unlocked ? `loadLocation(${index})` : ''}">
      <span class="location-dot"></span>
      <span>${loc.name}</span>
    </button>`;
  }).join('');

  dom.evidenceSidebar.innerHTML = state.evidence.length
    ? state.evidence.map(id => {
      const record = getEvidenceRecord(id);
      return `<span class="evidence-pill">${record?.short || id}</span>`;
    }).join('')
    : '<span style="font-size:11px;color:var(--muted)">None yet</span>';
}

function loadLocation(index, { persist = true, activateScreen = true } = {}) {
  if (!isLocationUnlocked(index)) return;
  state.currentLocation = index;
  const loc = locations[index];
  if (activateScreen) showScreen('game-screen', { persist: false });

  dom.sceneLocationTitle.textContent = `${loc.name} · ${loc.subtitle}`;
  dom.sceneSubcopy.textContent = getCurrentObjective(loc);
  const stats = getLocationTaskStats(loc);
  dom.sceneProgress.textContent = loc.isVerdict
    ? `${stats.completedTasks}/${stats.totalTasks} briefing tasks complete`
    : `${stats.completedTasks}/${stats.totalTasks} checklist tasks complete`;

  const hotspotHTML = loc.hotspots.map(hotspot => {
    const found = hasEvidence(hotspot.id);
    return `<button type="button" class="hotspot ${hotspot.class}${found ? ' found' : ''}" ${found ? 'disabled aria-disabled="true"' : ''} onclick="${found ? '' : `openHotspot('${hotspot.id}')`}" aria-label="${hotspot.label}">
      ${hotspot.innerHTML || ''}
      ${!found ? '<div class="hotspot-pulse"></div>' : ''}
      <div class="hotspot-label">${hotspot.label}</div>
    </button>`;
  }).join('');

  let html = `<div class="illustrated-scene ${loc.sceneClass}">${loc.sceneHTML}${hotspotHTML}</div>`;
  html += `<div class="scene-description">${loc.description}</div>`;
  html += renderChecklist(loc);

  if (loc.ethicalFlag && !isEthicsComplete(loc)) {
    html += `<div class="ethical-flag">
      <div class="ethical-flag-title">⚠ Ethical & Legal Flag</div>
      <p>Some evidence at this location was collected from the university guest network without a formal warrant. Under the Malaysian Communications and Multimedia Act 1998 and the university's data handling policy, formal proceedings may require additional authorisation.</p>
      <p style="margin-top:8px">Do you flag this concern in your report before proceeding?</p>
      <div style="margin-top:12px">
        <button type="button" class="flag-btn flag" onclick="handleEthics(true)">Flag the concern (+15 pts)</button>
        <button type="button" class="flag-btn ignore" onclick="handleEthics(false)">Proceed without flagging</button>
      </div>
    </div>`;
  }

  if (loc.npc) {
    html += `<div class="npc-section">
      <button type="button" class="npc-card" onclick="openNPC('${loc.id}')">
        <div class="npc-avatar" style="background:${loc.npc.avatarBg};color:${loc.npc.avatarColor}">${loc.npc.avatar}</div>
        <div class="npc-info">
          <div class="npc-name">${loc.npc.name}</div>
          <div class="npc-role">${loc.npc.role}</div>
        </div>
        <div class="npc-cta">Interview →</div>
      </button>
    </div>`;
  }

  if (loc.isVerdict) {
    const briefingDone = getInterviewProgress(loc).complete;
    html += `<div class="verdict-cta-box">
      <h3>Submit Final Report</h3>
      <p>${briefingDone
        ? `You have ${state.evidence.length} pieces of evidence on record. The final briefing is complete — proceed to the verdict board.`
        : 'Interview Puan Suraya fully before the verdict board unlocks.'}</p>
      <button type="button" class="btn-verdict" onclick="goToVerdict()" style="max-width:320px" ${briefingDone ? '' : 'disabled'}>Proceed to Final Verdict →</button>
    </div>`;
  }

  if (isLocationComplete(loc) && loc.unlockMessage && !loc.isVerdict) {
    html += `<div class="unlock-banner">✓ ${loc.unlockMessage}</div>`;
  }

  dom.sceneMain.innerHTML = html;
  renderSidebar();
  renderJournal();
  if (persist) saveState();
}

function openHotspot(id) {
  const hotspot = findHotspotById(id);
  if (!hotspot) return;
  dom.modalType.textContent = hotspot.modal.type;
  dom.modalTitle.textContent = hotspot.modal.title;
  dom.modalBody.innerHTML = hotspot.modal.body;
  dom.modalFooter.innerHTML = `
    <button type="button" class="btn-dismiss" onclick="closeModal()">Close</button>
    <button type="button" class="btn-collect" onclick="collectEvidence('${id}')">Collect Evidence</button>`;
  dom.modal.classList.add('open');
}

function collectEvidence(id) {
  if (hasEvidence(id)) {
    closeModal();
    return;
  }
  state.evidence.push(id);
  saveState();
  closeModal();
}

function openNPC(locationId) {
  const loc = getLocationById(locationId);
  if (!loc?.npc) return;
  state.dialogueProgress[loc.npc.id] = state.dialogueProgress[loc.npc.id] || {};
  renderDialogue(loc.npc, locationId);
  dom.modal.classList.add('open');
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
  const loc = getLocationById(locationId);
  const question = loc?.npc?.questions.find(item => item.id === questionId);
  if (!loc || !question) return;
  state.dialogueProgress[npcId] = state.dialogueProgress[npcId] || {};
  if (state.dialogueProgress[npcId][questionId]) return;
  state.dialogueProgress[npcId][questionId] = true;
  state.dialogueProgress[npcId]._lastResponse = question.response;
  saveState();
  renderDialogue(loc.npc, locationId);
}

function handleEthics(flagged) {
  state.ethicalChoice = flagged ? 'flag' : 'ignore';
  loadLocation(state.currentLocation);
}

function renderVerdictScreen() {
  const evidenceCards = state.evidence.map((id, index) => {
    const record = getEvidenceRecord(id);
    const note = EVIDENCE_NOTES[id] || { tag: 'Evidence', impact: 'Recorded in the case file.' };
    const position = VERDICT_CARD_POSITIONS[index] || { top: 40 + index * 16, left: 40 + (index % 3) * 210, rotate: (index % 2 ? -3 : 3) };
    return `<div class="verdict-note" style="top:${position.top}px;left:${position.left}px;transform:rotate(${position.rotate}deg)">
      <div class="verdict-note-type">${note.tag}</div>
      <div class="verdict-note-title">${record?.label || id}</div>
      <div class="verdict-note-text">${note.impact}</div>
    </div>`;
  }).join('');
  dom.verdictEvidenceBoard.innerHTML = evidenceCards || '<div class="verdict-note" style="top:42px;left:40px;transform:rotate(-2deg)"><div class="verdict-note-type">Evidence</div><div class="verdict-note-title">No evidence collected</div><div class="verdict-note-text">Return to the investigation before submitting a verdict.</div></div>';

  dom.verdictSuspectList.innerHTML = suspects.map(suspect => `
    <button type="button" class="suspect-card${state.selectedSuspect === suspect.id ? ' selected' : ''}" onclick="selectSuspect('${suspect.id}')">
      <div class="suspect-initial" style="background:${suspect.accentBg};color:${suspect.accentColor};">${suspect.initials}</div>
      <div class="suspect-copy">
        <div class="suspect-name">${suspect.name}</div>
        <div class="suspect-desc">${suspect.description}</div>
      </div>
    </button>`).join('');

  dom.verdictSummaryNote.innerHTML = `
    <strong style="display:block;color:var(--text);margin-bottom:8px">Case posture</strong>
    You currently have <strong>${state.evidence.length}</strong> evidence items on record.
    ${isEthicsFlagged()
      ? 'The ethics concern has been flagged in your report.'
      : state.ethicalChoice === 'ignore'
        ? 'You chose not to flag the ethics concern; that may affect admissibility.'
        : 'The ethics concern has not been resolved yet.'}
    ${state.selectedSuspect ? `<br><br><strong>Selected suspect:</strong> ${getSuspectById(state.selectedSuspect)?.name}` : '<br><br>No suspect selected yet.'}`;
  dom.verdictBtn.disabled = !state.selectedSuspect;
}

function goToVerdict() {
  const securityLocation = locations[state.currentLocation];
  if (securityLocation?.isVerdict && !getInterviewProgress(securityLocation).complete) return;
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
  const evidencePenalty = Math.max(0, (10 - evidenceCount) * 3);
  const ethicsDelta = ethicalFlagged ? 15 : 0;
  const verdictDelta = correct ? (ethicalFlagged ? 10 : -10) : -40;
  const score = Math.min(100, Math.max(0, 100 + ethicsDelta + verdictDelta - evidencePenalty));

  let title;
  let body;
  let icon;
  let scoreColor;
  if (correct && ethicalFlagged) {
    title = 'Case Closed — Exemplary Work';
    body = "Darren Koh has been identified as the perpetrator. Your decision to flag the warrant concern ensured the case will hold up. The Disciplinary Board has been notified, legal counsel is reviewing the network evidence, and Nadia's account has been restored.";
    icon = '⭐';
    scoreColor = 'var(--success)';
  } else if (correct && !ethicalFlagged) {
    title = 'Case Solved — Procedural Issue';
    body = "You correctly identified Darren Koh. However, the network evidence was not flagged for legal review. The defence challenged the guest network logs and the case was delayed while procedure was reviewed.";
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

  return { title, body, icon, score, scoreColor, correct, ethicalFlagged, evidenceCount, breakdown };
}

function renderEnding() {
  const outcome = state.finalOutcome || calculateOutcome();
  dom.endingIcon.textContent = outcome.icon;
  dom.endingTitle.textContent = outcome.title;
  dom.endingBody.textContent = outcome.body;
  dom.endingScore.textContent = `${outcome.score} / 100`;
  dom.endingScore.style.color = outcome.scoreColor || 'var(--accent)';
  dom.scoreBreakdown.innerHTML = outcome.breakdown.map(item => `
    <div class="score-break-item">
      <span>${item.label}</span>
      <span class="score-break-value ${item.className}">${item.value}</span>
    </div>`).join('');
}

function submitVerdict() {
  if (!state.selectedSuspect) return;
  state.finalOutcome = calculateOutcome();
  renderEnding();
  showScreen('ending-screen');
}

function buildCaseReport() {
  const currentLocation = locations[state.currentLocation];
  const currentOutcome = state.finalOutcome
    ? state.finalOutcome
    : {
        title: 'Investigation In Progress',
        body: 'No final verdict has been submitted yet. Continue collecting evidence, finishing interviews, and resolving outstanding tasks before accusing a suspect.',
        score: 'Pending'
      };
  const selectedSuspect = getSuspectById(state.selectedSuspect)?.name || 'No suspect selected';
  const evidenceLines = state.evidence.length
    ? state.evidence.map((id, index) => {
      const record = getEvidenceRecord(id);
      const note = EVIDENCE_NOTES[id];
      return `${index + 1}. ${record?.label || id} — ${note?.impact || 'Logged in the case file.'}`;
    }).join('\n')
    : 'No evidence collected.';
  const locationSummaries = locations.map(location => {
    const stats = getLocationTaskStats(location);
    return `- ${location.name}: ${stats.completedTasks}/${stats.totalTasks} tasks complete`;
  }).join('\n');
  const suspectSummary = suspects.map(suspect => `- ${suspect.name}: ${suspect.note}`).join('\n');
  return `THE GHOST OF HARLOW HALL — CASE REPORT
Case File: UTN-2024-0441
Generated: ${new Date().toLocaleString()}

Current Screen: ${state.currentScreen}
Current Location: ${currentLocation.name}
Current Objective: ${getCurrentObjective(currentLocation)}

Outcome: ${state.finalOutcome ? currentOutcome.title : 'Investigation In Progress'}
Score: ${typeof currentOutcome.score === 'number' ? `${currentOutcome.score} / 100` : currentOutcome.score}
Selected Suspect: ${selectedSuspect}
Correct Suspect: Darren Koh
Ethical Concern Flagged: ${isEthicsFlagged() ? 'Yes' : state.ethicalChoice === 'ignore' ? 'No' : 'Pending'}

Investigator Summary
${currentOutcome.body}

Evidence Collected
${evidenceLines}

Location Checklist Summary
${locationSummaries}

Suspect Notes
${suspectSummary}
`;
}

function downloadCaseReport() {
  const report = buildCaseReport();
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'utn-case-report.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function closeModal() {
  dom.modal.classList.remove('open');
  if (state.currentScreen === 'game-screen') {
    loadLocation(state.currentLocation, { persist: false, activateScreen: false });
  }
}

function returnToInvestigation() {
  loadLocation(state.currentLocation, { activateScreen: true });
}

function resetInvestigation(requireConfirm = true) {
  if (requireConfirm && !window.confirm('Start a new investigation? Your saved progress will be cleared.')) return;
  try {
    localStorage.removeItem(GAME_CONTENT.saveKey);
  } catch (error) {
    // ignore storage errors
  }
  state = createInitialState();
  renderSidebar();
  renderJournal();
  setSaveStatus('Autosave cleared', false);
  showScreen('title-screen', { persist: false });
}

function startGame() {
  if (!state.evidence.length && state.currentScreen === 'title-screen') {
    state.currentLocation = 0;
  }
  loadLocation(state.currentLocation, { activateScreen: true });
}

function bindGlobalEvents() {
  dom.modal.addEventListener('click', event => {
    if (event.target === dom.modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dom.modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function bootstrap() {
  const saved = loadSavedState();
  if (saved) {
    state = saved;
    while (state.currentLocation > 0 && !isLocationUnlocked(state.currentLocation)) {
      state.currentLocation -= 1;
    }
    setSaveStatus('Autosave restored', true);
    if (state.currentScreen === 'verdict-screen') {
      renderSidebar();
      renderJournal();
      renderVerdictScreen();
      showScreen('verdict-screen', { persist: false });
    } else if (state.currentScreen === 'ending-screen' && state.finalOutcome) {
      renderSidebar();
      renderJournal();
      renderEnding();
      showScreen('ending-screen', { persist: false });
    } else if (state.currentScreen === 'game-screen') {
      loadLocation(state.currentLocation, { persist: false, activateScreen: true });
    } else {
      renderSidebar();
      renderJournal();
      showScreen('title-screen', { persist: false });
    }
  } else {
    renderSidebar();
    renderJournal();
    showScreen('title-screen', { persist: false });
  }
  bindGlobalEvents();
}

bootstrap();
