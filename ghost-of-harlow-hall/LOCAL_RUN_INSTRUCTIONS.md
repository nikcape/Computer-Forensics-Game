# Local Run Instructions

Use this guide when a team member wants to run **The Ghost of Harlow Hall** on their own PC.

## What You Need

- A modern web browser such as Chrome, Edge, Firefox, or Brave.
- The project files from the GitHub repository.
- No Node.js, Python, database, server, or installer is required.

## Option 1: Download From GitHub as ZIP

This is the easiest method for teammates who do not use Git.

1. Open the GitHub repository:

```text
https://github.com/nikcape/Computer-Forensics-Game
```

2. Click `Code`.
3. Click `Download ZIP`.
4. Extract the ZIP file.
5. Open this folder:

```text
ghost-of-harlow-hall
```

6. Double-click:

```text
index.html
```

The game should open in the browser.

## Option 2: Clone With Git

Use this method if Git is installed.

1. Open PowerShell, Command Prompt, Git Bash, or Terminal.
2. Run:

```bash
git clone https://github.com/nikcape/Computer-Forensics-Game.git
```

3. Enter the game folder:

```bash
cd Computer-Forensics-Game/ghost-of-harlow-hall
```

4. Open `index.html`.

On Windows PowerShell:

```powershell
Start-Process .\index.html
```

On macOS:

```bash
open index.html
```

On Linux:

```bash
xdg-open index.html
```

## Option 3: Run With a Local Static Server

The game does not require a server, but this option is useful if a browser blocks local file behavior.

If Python is installed, run this inside the `ghost-of-harlow-hall` folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If `python` does not work on Windows, try:

```bash
py -m http.server 8000
```

## Correct File to Launch

Always launch:

```text
ghost-of-harlow-hall/index.html
```

Do not launch the older root-level `game.html` file. It is not the completed modular version.

## Game Progress and Saves

The game autosaves in the browser using `localStorage`.

This means:

- Progress is saved on the same browser and same PC.
- Reloading the page should restore progress.
- Opening the game in another browser may not show the same save.
- Teammates can restart by clicking `New Investigation`.

## Troubleshooting

If the page opens but looks unstyled:

- Make sure `index.html`, `styles.css`, and `game.js` are in the same folder.
- Make sure you opened the file inside `ghost-of-harlow-hall`.

If buttons or evidence do not respond:

- Refresh the browser.
- Try opening the game in Chrome or Edge.
- Try the local static server method above.

If old progress appears:

- Click `New Investigation`.
- Or clear the browser site data / local storage for the page.

If the downloaded ZIP does not contain `ghost-of-harlow-hall`:

- The latest version may not have been pushed to GitHub yet.
- Ask the project owner to push the newest commit.

## Files in the Game Folder

The completed game folder should contain:

```text
index.html
styles.css
game.js
README.md
GAME_COMPLETION_GUIDE.md
LOCAL_RUN_INSTRUCTIONS.md
ghost_of_harlow_hall (14).html
```

## Quick Start Summary

For most teammates:

1. Download or clone the repository.
2. Open `ghost-of-harlow-hall`.
3. Double-click `index.html`.
4. Play the game in the browser.
