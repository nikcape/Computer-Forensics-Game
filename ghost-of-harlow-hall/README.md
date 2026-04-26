# The Ghost of Harlow Hall

An interactive browser-based digital forensics game set at **Universiti Teknologi Nusantara (UTN)**.

## Features

- 5 complete investigation locations:
  - Nadia's dorm room
  - University library
  - Darren's dorm room
  - IT Department
  - Security office
- CSS-illustrated scenes with clickable evidence hotspots
- Rich evidence mockups:
  - fake social media profile
  - gaming chat conversation
  - sign-in logbook
  - CCTV / Wi-Fi / IP logs
  - browser history
  - EXIF metadata
  - Discord-style records
- Checklist-driven progression
- NPC interviews and suspect tracking
- Ethics decision in the IT stage
- Corkboard-style final verdict board
- Multiple endings with score breakdown
- Downloadable case report
- Autosave / resume via `localStorage`

## Project structure

- `index.html` — main entrypoint
- `styles.css` — UI, layout, illustrated scenes, verdict board styling
- `game.js` — game content, rendering, progression logic, persistence, report export
- `ghost_of_harlow_hall (14).html` — compatibility entry mirroring `index.html`

## How to run

Open `index.html` in any modern browser.

No build step, framework, or backend is required.

## Deployment

This project is suitable for **GitHub Pages** as a static site.

## Notes

- The game is optimized for desktop/laptop browsers.
- Progress is automatically restored if a valid save is found in `localStorage`.
- Use **New Investigation** to clear saved progress and start over.
