(function () {
  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatDate(date = new Date()) {
    return date.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function buildActionScript(filename) {
    return `<script>
      function downloadSelf() {
        const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = ${JSON.stringify(filename)};
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
    <\/script>`;
  }

  function buildReportHtml(payload) {
    const playerName = escapeHtml(payload.player.name);
    const studentId = escapeHtml(payload.player.studentId);
    const outcomeTitle = escapeHtml(payload.outcome.title);
    const outcomeBody = escapeHtml(payload.outcome.body);
    const generated = escapeHtml(formatDate(new Date()));
    const evidenceItems = payload.evidenceLines.map(item => `<li><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.impact)}</span></li>`).join('');
    const locationItems = payload.locationLines.map(item => `<li><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.summary)}</span></li>`).join('');
    const suspectItems = payload.suspectLines.map(item => `<li><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.note)}</span></li>`).join('');
    const filename = `${payload.player.studentId || 'investigator'}-utn-case-report.html`;
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(payload.player.studentId)} · UTN Case Report</title>
<style>
:root { --bg:#f6f2e9; --paper:#fffdf7; --ink:#1f1a14; --muted:#6d6257; --accent:#6a4b27; --line:#d7c8b4; }
* { box-sizing:border-box; }
body { margin:0; font-family:'IBM Plex Mono', monospace; background:var(--bg); color:var(--ink); }
.page { max-width:920px; margin:0 auto; padding:32px 24px 48px; }
.toolbar { display:flex; gap:12px; justify-content:flex-end; margin-bottom:20px; }
.toolbar button { border:1px solid var(--accent); background:#fff; color:var(--accent); padding:10px 14px; cursor:pointer; font:inherit; }
.report-card { background:var(--paper); border:1px solid var(--line); padding:32px; box-shadow:0 18px 40px rgba(0,0,0,0.08); }
.eyebrow { letter-spacing:0.25em; text-transform:uppercase; color:var(--muted); font-size:11px; margin-bottom:10px; }
.h1 { font-family:'Special Elite', cursive; font-size:38px; margin:0 0 10px; color:var(--accent); }
.sub { margin:0 0 22px; color:var(--muted); line-height:1.7; }
.meta { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin:24px 0; }
.meta-card { border:1px solid var(--line); padding:14px; background:#fff; }
.meta-card strong { display:block; margin-bottom:6px; font-size:11px; color:var(--muted); letter-spacing:0.12em; text-transform:uppercase; }
.section { margin-top:26px; }
.section h2 { font-family:'Special Elite', cursive; font-size:22px; margin:0 0 10px; color:var(--accent); }
.section p { line-height:1.8; margin:0; color:#342b21; }
.list { list-style:none; padding:0; margin:0; display:grid; gap:10px; }
.list li { border:1px solid var(--line); padding:12px 14px; background:#fff; display:grid; gap:4px; }
.list li span { color:var(--muted); line-height:1.6; }
.footer { margin-top:28px; font-size:12px; color:var(--muted); }
@media print { body { background:#fff; } .toolbar { display:none; } .page { padding:0; } .report-card { border:0; box-shadow:none; } }
</style>
</head>
<body>
<div class="page">
  <div class="toolbar">
    <button onclick="window.print()">Print / Save PDF</button>
    <button onclick="downloadSelf()">Download HTML</button>
  </div>
  <article class="report-card">
    <div class="eyebrow">Universiti Teknologi Nusantara · Digital Forensics Division</div>
    <h1 class="h1">Case Report</h1>
    <p class="sub">Case file UTN-2024-0441 — The Ghost of Harlow Hall. Generated for ${playerName} (${studentId}) on ${generated}.</p>
    <div class="meta">
      <div class="meta-card"><strong>Investigator</strong>${playerName}</div>
      <div class="meta-card"><strong>Student ID</strong>${studentId}</div>
      <div class="meta-card"><strong>Outcome</strong>${outcomeTitle}</div>
      <div class="meta-card"><strong>Score</strong>${escapeHtml(payload.outcome.scoreLabel)}</div>
    </div>
    <section class="section">
      <h2>Investigator Summary</h2>
      <p>${outcomeBody}</p>
    </section>
    <section class="section">
      <h2>Evidence Collected</h2>
      <ul class="list">${evidenceItems || '<li><strong>No evidence collected.</strong><span>Return to the investigation and gather evidence before exporting the report.</span></li>'}</ul>
    </section>
    <section class="section">
      <h2>Location Checklist Summary</h2>
      <ul class="list">${locationItems}</ul>
    </section>
    <section class="section">
      <h2>Suspect Notes</h2>
      <ul class="list">${suspectItems}</ul>
    </section>
    <div class="footer">Prepared by the Digital Forensics Division. Student reference: ${studentId}. Ethical concern flagged: ${payload.ethicsLabel}.</div>
  </article>
</div>
${buildActionScript(filename)}
</body>
</html>`;
  }

  function buildCertificateHtml(payload) {
    const playerName = escapeHtml(payload.player.name);
    const studentId = escapeHtml(payload.player.studentId);
    const borderColor = payload.rank === 'Master Investigator' ? '#b38b2d' : '#9ca3af';
    const sealTone = payload.rank === 'Master Investigator' ? 'linear-gradient(135deg,#e9cc74,#9d6f13)' : 'linear-gradient(135deg,#d8dce3,#7d8594)';
    const filename = `${payload.player.studentId || 'investigator'}-certificate-of-achievement.html`;
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${studentId} · Certificate of Achievement</title>
<style>
* { box-sizing:border-box; }
body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; background:#eee6d8; font-family:'Crimson Pro', serif; color:#241b12; }
.toolbar { position:fixed; top:18px; right:18px; display:flex; gap:10px; }
.toolbar button { font-family:'IBM Plex Mono', monospace; border:1px solid #6a4b27; background:#fff; color:#6a4b27; padding:10px 14px; cursor:pointer; }
.sheet { width:min(980px, calc(100vw - 40px)); background:#fffdf7; border:14px solid ${borderColor}; padding:50px 56px; box-shadow:0 24px 60px rgba(0,0,0,0.16); position:relative; }
.eyebrow { text-align:center; letter-spacing:0.28em; text-transform:uppercase; font:12px 'IBM Plex Mono', monospace; color:#7d6854; margin-bottom:18px; }
.title { text-align:center; font-family:'Special Elite', cursive; font-size:44px; margin:0; color:#6a4b27; }
.subtitle { text-align:center; font-size:24px; margin:12px 0 28px; color:#5a4734; }
.body { text-align:center; font-size:26px; line-height:1.8; }
.name { display:block; font-size:40px; font-weight:600; margin:18px 0 8px; }
.meta { text-align:center; font:14px 'IBM Plex Mono', monospace; color:#7d6854; margin-top:24px; }
.rank { margin-top:28px; text-align:center; font-family:'Special Elite', cursive; font-size:28px; color:#6a4b27; }
.seal { position:absolute; right:52px; bottom:60px; width:130px; height:130px; border-radius:50%; background:${sealTone}; border:5px solid rgba(255,255,255,0.8); display:flex; align-items:center; justify-content:center; text-align:center; font-family:'Special Elite', cursive; color:#fffdf7; box-shadow:0 10px 24px rgba(0,0,0,0.18); }
.signature { margin-top:72px; display:flex; justify-content:space-between; align-items:flex-end; font:15px 'IBM Plex Mono', monospace; color:#6c5847; }
.signature-line { width:280px; border-top:1px solid #6a4b27; padding-top:10px; }
@media print { body { background:#fff; } .toolbar { display:none; } .sheet { width:100%; border-width:10px; box-shadow:none; } }
</style>
</head>
<body>
<div class="toolbar">
  <button onclick="window.print()">Print / Save PDF</button>
  <button onclick="downloadSelf()">Download HTML</button>
</div>
<article class="sheet">
  <div class="eyebrow">Universiti Teknologi Nusantara · Digital Forensics Division</div>
  <h1 class="title">Certificate of Achievement</h1>
  <p class="subtitle">The Ghost of Harlow Hall</p>
  <div class="body">
    This certificate is proudly awarded to
    <span class="name">${playerName}</span>
    <div>${studentId}</div>
    for exemplary completion of case file UTN-2024-0441 with a final score of <strong>${escapeHtml(payload.scoreLabel)}</strong>.</div>
  <div class="rank">${escapeHtml(payload.rank)}</div>
  <div class="meta">Issued on ${escapeHtml(payload.issueDate)} · Correct suspect identified · Ethical concern properly flagged</div>
  <div class="signature">
    <div class="signature-line">Head of Digital Forensics</div>
    <div>Digital seal affixed</div>
  </div>
  <div class="seal">${escapeHtml(payload.rank)}</div>
</article>
${buildActionScript(filename)}
</body>
</html>`;
  }

  function openHtmlDocument(html, title) {
    const docWindow = window.open('', '_blank');
    if (!docWindow) return null;
    docWindow.document.open();
    docWindow.document.write(html);
    docWindow.document.close();
    if (title) docWindow.document.title = title;
    return docWindow;
  }

  window.GHH_V2_CERTIFICATE = {
    buildReportHtml,
    buildCertificateHtml,
    openHtmlDocument,
    formatDate
  };
}());
