# The Ghost of Harlow Hall - Game Completion Guide

This guide explains how to launch, play, and fully complete the game.

## Launch the Game

Open `index.html` in a modern browser.

Recommended file:

```text
repo_tmp/index.html
```

No server, installation, or build command is required. The game runs as a static HTML/CSS/JS project.

## Main Goal

You play as a junior digital forensic investigator assigned to solve a social media impersonation case at Universiti Teknologi Nusantara.

To complete the game, you must:

1. Visit each investigation location.
2. Collect every evidence item.
3. Complete every NPC interview.
4. Resolve the ethical/legal issue in the IT Department.
5. Enter the Security Office.
6. Submit the correct final verdict.
7. Download the case report if needed.

The correct culprit is:

```text
Darren Koh
```

For the best ending, you must also flag the ethics concern in the IT Department.

## Game Controls

- Click glowing hotspots in each scene to inspect evidence.
- Click `Collect Evidence` in the evidence modal to add it to your case file.
- Click the NPC interview card to ask questions.
- Finish all questions for an NPC to complete that interview task.
- Watch the location checklist. A location is complete only when all checklist items are done.
- Use the sidebar to move between unlocked locations.
- Use `Export Report` or `Download Case Report` to save the investigation report.
- Use `New Investigation` to reset saved progress.

## Autosave and Resume

The game automatically saves progress in browser `localStorage`.

Saved progress includes:

- current location
- collected evidence
- completed interview questions
- ethics decision
- selected suspect
- final outcome

If you reload the page, the game will restore a valid saved investigation automatically.

To restart from the beginning, use:

```text
New Investigation
```

## Completion Walkthrough

## 1. Nadia's Dorm Room

Purpose:

Establish the complaint, identify the fake account, and discover the first link to Darren's online alias.

Collect all 3 evidence items:

1. `Nadia's laptop`
   - Evidence collected: `Fake account log`
   - Shows the fake account `@nadia.razali.real`.

2. `Nadia's phone`
   - Evidence collected: `Gaming app chat log`
   - Shows Nadia's conversation with `D_Koh_88`.
   - This is an early clue pointing toward Darren Koh.

3. `Printed screenshot`
   - Evidence collected: `Screenshot printout`
   - Shows the fake post timing.
   - Nadia's note connects the timestamp to her Tuesday study routine.

Interview Nadia Razali and ask all 3 questions:

1. `Who has access to your daily schedule?`
2. `Tell me about Faiz Hairuddin.`
3. `Who is D_Koh_88?`

What you should learn:

- Nadia was impersonated online.
- Faiz had a possible emotional motive, but Nadia is unsure he is responsible.
- `D_Koh_88` is Darren Koh, a younger student who reacted badly after Nadia stopped talking to him.

After all dorm checklist items are complete, the University Library unlocks.

## 2. University Library

Purpose:

Verify Faiz's alibi and locate the source of the suspicious network activity.

Collect all 3 evidence items:

1. `Sign-in logbook`
   - Evidence collected: `Library sign-in log`
   - Confirms Faiz was inside the library during the key time window.

2. `CCTV camera`
   - Evidence collected: `CCTV timestamp record`
   - Shows Faiz inside the building and a suspicious device connecting from outside CCTV coverage.

3. `Wi-Fi access point`
   - Evidence collected: `Guest Wi-Fi device log`
   - Shows `REDMI-DK-GUEST` connected from a weak signal north/northeast of the library, toward Dorm Block C.

Interview Cik Rosnah and ask all 3 questions:

1. `Was Faiz Hairuddin here last Tuesday night?`
2. `Did you notice anyone unusual outside the library?`
3. `Can students access the library Wi-Fi from outside?`

What you should learn:

- Faiz has a strong physical alibi.
- Someone was seen outside near Block C.
- The guest Wi-Fi can be accessed from outside the library.

After all library checklist items are complete, Darren's Dorm Room unlocks.

## 3. Darren's Dorm Room

Purpose:

Find direct evidence linking Darren to the fake account.

Collect all 3 evidence items:

1. `Gaming monitor`
   - Evidence collected: `Browser history - fake account`
   - Shows repeated Tuesday-night login, compose, publish, and logout activity for the fake account.

2. `Darren's phone`
   - Evidence collected: `Photo GPS metadata`
   - Shows EXIF metadata from a fake-account photo.
   - Device model and GPS point toward Darren's dorm area.

3. `Torn notebook page`
   - Evidence collected: `Handwritten credential note`
   - Shows account planning notes, including the fake username.

Interview Darren Koh and ask all 3 questions:

1. `Where were you last Tuesday at 11:48 PM?`
2. `Your device connected to the library Wi-Fi that night.`
3. `We found "D_Koh_88" on Nadia's phone.`

What you should learn:

- Darren has no verified alibi.
- Darren admits he may have gone near the library.
- Darren confirms the private online interaction with Nadia and shows emotional resentment.

After all Darren dorm checklist items are complete, the IT Department unlocks.

## 4. IT Department

Purpose:

Confirm the network trail and handle the legal/ethical issue.

Collect all 3 evidence items:

1. `Server rack 1 - Guest network`
   - Evidence collected: `Guest network registration`
   - Confirms `REDMI-DK-GUEST` was registered to Darren Koh.

2. `Server rack 2 - IP logs`
   - Evidence collected: `Fake account IP trace`
   - Connects fake account activity to the UTN network logs.

3. `Server rack 3 - Discord traffic`
   - Evidence collected: `Discord activity timestamp`
   - Corroborates Darren's behavior and timing.

Interview Encik Hafiz and ask all 3 questions:

1. `Can you confirm the device registration?`
2. `Is this evidence legally admissible?`
3. `Is the IP evidence conclusive?`

Ethics decision:

When the ethical/legal flag appears, choose:

```text
Flag the concern (+15 pts)
```

This is required for the best ending.

What you should learn:

- The suspicious device belongs to Darren.
- The evidence is strong technically.
- The guest network data should be flagged for proper legal review.

After all IT checklist items are complete, the Security Office unlocks.

## 5. Security Office

Purpose:

Complete the final briefing and submit the verdict.

Interview Puan Suraya and ask both questions:

1. `What happens after I submit my verdict?`
2. `What about the warrant issue with network data?`

After the interview is complete, click:

```text
Proceed to Final Verdict
```

## Final Verdict Board

On the corkboard-style verdict screen:

1. Review the pinned evidence notes.
2. Review the suspect cards.
3. Select:

```text
Darren Koh
```

4. Click:

```text
Submit Case Report
```

## Endings

## Best Ending

Requirements:

- Collect all evidence.
- Complete all interviews.
- Flag the ethics concern in the IT Department.
- Accuse Darren Koh.

Outcome:

```text
Case Closed - Exemplary Work
```

## Correct Culprit, Procedural Issue

Requirements:

- Accuse Darren Koh.
- Do not flag the ethics concern.

Outcome:

```text
Case Solved - Procedural Issue
```

The case is solved, but the evidence process is challenged.

## Wrong Ending

Requirements:

- Accuse Faiz Hairuddin or Liyana Suffian.

Outcome:

```text
Wrong Conclusion
```

The real perpetrator, Darren Koh, is not properly identified.

## Full Evidence Checklist

Nadia's Dorm Room:

- `Fake account log`
- `Gaming app chat log`
- `Screenshot printout`

University Library:

- `Library sign-in log`
- `CCTV timestamp record`
- `Guest Wi-Fi device log`

Darren's Dorm Room:

- `Browser history - fake account`
- `Photo GPS metadata`
- `Handwritten credential note`

IT Department:

- `Guest network registration`
- `Fake account IP trace`
- `Discord activity timestamp`

Total evidence items:

```text
12
```

## Best-Score Route Summary

Follow this exact route for the strongest ending:

1. Start the investigation.
2. In Nadia's Dorm Room, collect all 3 evidence items and ask all 3 Nadia questions.
3. In the University Library, collect all 3 evidence items and ask all 3 Cik Rosnah questions.
4. In Darren's Dorm Room, collect all 3 evidence items and ask all 3 Darren questions.
5. In the IT Department, collect all 3 evidence items and ask all 3 Encik Hafiz questions.
6. Choose `Flag the concern (+15 pts)` when the ethics prompt appears.
7. In the Security Office, ask both Puan Suraya questions.
8. Proceed to the Final Verdict Board.
9. Select Darren Koh.
10. Submit the case report.
11. Download the final case report.

## Troubleshooting

If the next location is locked:

- Check the current location checklist.
- Make sure every evidence item is collected.
- Make sure every NPC question has been asked.
- In the IT Department, make sure the ethics prompt has been answered.

If the verdict button is disabled:

- Select a suspect card first.

If `Proceed to Final Verdict` is disabled:

- Finish both Security Office interview questions.

If the game resumes old progress:

- Use `New Investigation` to clear saved progress.

If the case report says the investigation is still in progress:

- Submit the final verdict first, then download the report again.
