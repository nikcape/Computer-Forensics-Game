# The Ghost of Harlow Hall v2

A browser-based digital forensics investigation game set at **Universiti Teknologi Nusantara (UTN)**.

## What's new in v2

- Investigator login with full name + student ID validation
- Session-aware tutorial with replay support
- GTA-style smartphone HUD for locations, evidence, journal, export, and help
- Print-ready HTML case report export
- Certificate generation for high-scoring ethical completions
- Synthesised UI + ambient audio using the Web Audio API
- No-pulse hotspot discovery with scene hint text and magnifying-glass cursor feedback

## Structure

- `index.html` — screen shells and HUD markup
- `styles.css` — all UI, scene, phone, tutorial, and print styling
- `scenes.js` — location, hotspot, NPC, and hint data
- `evidence.js` — evidence modal content and note metadata
- `sounds.js` — Web Audio sound engine
- `certificate.js` — printable report/certificate document builders
- `game.js` — state, persistence, rendering, progression, tutorial, and HUD logic

## How to run

Open `index.html` in a modern browser, or serve the folder through any static host.

Recommended file:

```text
ghost-of-harlow-hall-v2/index.html
```

## Notes

- Progress autosaves in `localStorage` under a v2-specific key.
- Login identity, tutorial status, and audio preferences persist for the browser session using `sessionStorage`.
- The original v1 build remains available in `../ghost-of-harlow-hall/`.
