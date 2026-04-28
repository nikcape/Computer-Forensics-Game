# Local Run Instructions — The Ghost of Harlow Hall v2

## Recommended version

Use:

```text
ghost-of-harlow-hall v2/index.html
```

The original `ghost-of-harlow-hall/` folder is still available as the preserved v1 build.

## Quick start

1. Clone or download the repository.
2. Open the `ghost-of-harlow-hall v2` folder.
3. Launch `index.html` in a modern browser.

## Optional local server

A server is not required, but it is convenient for local testing.

Using Python:

```bash
cd "ghost-of-harlow-hall v2"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Browser storage behavior

- Investigation progress is stored in `localStorage`.
- Investigator login, tutorial completion, and audio settings are stored in `sessionStorage`.
- Closing the browser session clears the login identity, so the player must sign in again before resuming the saved case.

## Troubleshooting

If the page looks unstyled or interactions are missing:

- Ensure `index.html`, `styles.css`, `scenes.js`, `evidence.js`, `sounds.js`, `certificate.js`, and `game.js` are all in the same folder.
- Refresh the page after clearing browser storage for the local file / site if old state is interfering.
- Use Chrome, Edge, or Firefox for best Web Audio and print-preview behavior.
