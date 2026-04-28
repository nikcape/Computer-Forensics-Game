window.GHH_V2_SCENES = {
  SUSPECTS: [
  {
    "id": "faiz",
    "initials": "FH",
    "name": "Faiz Hairuddin",
    "description": "3rd year · ex-admirer of Nadia",
    "accentBg": "rgba(127,179,211,0.15)",
    "accentColor": "#7fb3d3",
    "note": "Had emotional motive, but library records and CCTV keep him inside the building during the posting window."
  },
  {
    "id": "liyana",
    "initials": "LS",
    "name": "Liyana Suffian",
    "description": "3rd year · academic rival",
    "accentBg": "rgba(200,169,110,0.15)",
    "accentColor": "#c8a96e",
    "note": "Has technical ability and a tense history with Nadia, but no direct device or network trail links her to the fake account."
  },
  {
    "id": "darren",
    "initials": "DK",
    "name": "Darren Koh",
    "description": "2nd year · online connection",
    "accentBg": "rgba(192,57,43,0.15)",
    "accentColor": "#c0392b",
    "note": "The online alias, Tuesday-night network pattern, browser history, notebook note, and phone metadata all converge on Darren."
  }
],
  LOCATIONS: [
  {
    "id": "victims-room",
    "name": "Nadia's Dorm Room",
    "subtitle": "Block A · Room 108",
    "description": "The room is tidy but clearly belongs to someone stressed. A laptop sits open on the desk, a phone next to it, and a printed screenshot is pinned to the noticeboard above. Nadia stands by the window, arms crossed.",
    "sceneClass": "scene-dorm-nadia",
    "sceneHTML": "\n      <div class=\"wall-pattern\"></div>\n      <div class=\"window\"><div class=\"window-stars\"></div></div>\n      <div class=\"poster-n poster-1\"></div>\n      <div class=\"poster-n poster-2\"></div>\n      <div class=\"poster-n poster-3\"></div>\n      <div class=\"noticeboard\">\n        <div class=\"noticeboard-paper\"></div>\n        <div class=\"noticeboard-paper\"></div>\n        <div class=\"noticeboard-paper\"></div>\n        <div class=\"noticeboard-paper\"></div>\n      </div>\n      <div class=\"floor-rug\"></div>\n      <div class=\"bed\">\n        <div class=\"bed-blanket\"></div>\n        <div class=\"pillow pillow-1\"></div>\n        <div class=\"pillow pillow-2\"></div>\n        <div class=\"plushie\"></div>\n      </div>\n      <div class=\"desk-chair\"></div>\n      <div class=\"desk\"></div>\n      <div class=\"desk-leg desk-leg-1\"></div>\n      <div class=\"desk-leg desk-leg-2\"></div>\n      <div class=\"pc-monitor\"></div>\n      <div class=\"laptop-table\"></div>\n      <div class=\"pc-keyboard\"></div>\n      <div class=\"nadia-char\">\n        <div class=\"hair\"></div>\n        <div class=\"head\"></div>\n        <div class=\"brow-l\"></div>\n        <div class=\"brow-r\"></div>\n        <div class=\"eye-l\"></div>\n        <div class=\"eye-r\"></div>\n        <div class=\"mouth\"></div>\n        <div class=\"sweat\"></div>\n        <div class=\"body\"></div>\n        <div class=\"arm-l\"></div>\n        <div class=\"arm-r\"></div>\n        <div class=\"phone-held\"></div>\n        <div class=\"leg-l\"></div>\n        <div class=\"leg-r\"></div>\n        <div class=\"foot-l\"></div>\n        <div class=\"foot-r\"></div>\n      </div>\n    ",
    "ethicalFlag": false,
    "unlockMessage": "Victim interview complete. The library has been unlocked.",
    "isVerdict": false,
    "npc": {
      "id": "nadia",
      "name": "Nadia Razali",
      "role": "Victim · Computer Science, Year 3",
      "avatar": "NR",
      "avatarBg": "rgba(200,169,110,0.2)",
      "avatarColor": "#c8a96e",
      "intro": "Thank you for coming. I've been trying to get someone to listen for three days. I have suspicions but no proof — that's your job.",
      "questions": [
        {
          "id": "q1",
          "text": "Who has access to your daily schedule?",
          "response": "My timetable is on the university portal. But my study group schedule? Only people in my circle knew about Tuesday nights. Faiz used to be in that group before things got awkward."
        },
        {
          "id": "q2",
          "text": "Tell me about Faiz Hairuddin.",
          "response": "He confessed his feelings six months ago. I turned him down gently. He seemed to accept it, but lately I've seen him watching me across the library. I don't think it's him though — it doesn't feel like him."
        },
        {
          "id": "q3",
          "text": "Who is D_Koh_88?",
          "response": "That username creeped me out the most. We talked for weeks on GuildWars Online before I realised I didn't actually know this person. When I found out it was a younger student named Darren, I stopped responding. He didn't take it well."
        }
      ]
    },
    "hotspots": [
      {
        "id": "ev-laptop",
        "class": "hs-laptop",
        "label": "Nadia's laptop",
        "innerHTML": "",
        "evidenceId": "ev-laptop"
      },
      {
        "id": "ev-phone",
        "class": "hs-phone-n",
        "label": "Nadia's phone",
        "innerHTML": "",
        "evidenceId": "ev-phone"
      },
      {
        "id": "ev-printout",
        "class": "hs-printout",
        "label": "Printed screenshot",
        "innerHTML": "",
        "evidenceId": "ev-printout"
      }
    ]
  },
  {
    "id": "library",
    "name": "University Library",
    "subtitle": "Academic Block · Ground Floor",
    "description": "Quiet at this hour. Rows of bookshelves line the walls, a study desk in the centre under a warm reading lamp. The sign-in logbook sits on the desk, and a CCTV terminal is mounted in the upper corner along with the Wi-Fi access point.",
    "sceneClass": "scene-library",
    "sceneHTML": "\n      <div class=\"shelf shelf-1\">\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#1565c0\"></div><div class=\"book\" style=\"background:#2e7d32\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#6a1b9a\"></div><div class=\"book\" style=\"background:#00695c\"></div><div class=\"book\" style=\"background:#bf360c\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#e65100\"></div><div class=\"book\" style=\"background:#0d47a1\"></div><div class=\"book\" style=\"background:#4a148c\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#bf360c\"></div><div class=\"book\" style=\"background:#f57f17\"></div><div class=\"book\" style=\"background:#1565c0\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#1b5e20\"></div><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#33691e\"></div></div>\n      </div>\n      <div class=\"shelf shelf-2\">\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#1b5e20\"></div><div class=\"book\" style=\"background:#0d47a1\"></div><div class=\"book\" style=\"background:#4a148c\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#1565c0\"></div><div class=\"book\" style=\"background:#f57f17\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#6a1b9a\"></div><div class=\"book\" style=\"background:#bf360c\"></div><div class=\"book\" style=\"background:#1b5e20\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#e65100\"></div><div class=\"book\" style=\"background:#4a148c\"></div><div class=\"book\" style=\"background:#33691e\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#0d47a1\"></div><div class=\"book\" style=\"background:#2e7d32\"></div><div class=\"book\" style=\"background:#c0392b\"></div></div>\n      </div>\n      <div class=\"shelf shelf-3\">\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#4a148c\"></div><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#1565c0\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#2e7d32\"></div><div class=\"book\" style=\"background:#6a1b9a\"></div><div class=\"book\" style=\"background:#f57f17\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#bf360c\"></div><div class=\"book\" style=\"background:#1b5e20\"></div><div class=\"book\" style=\"background:#0d47a1\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#f57f17\"></div><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#4a148c\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#1565c0\"></div><div class=\"book\" style=\"background:#33691e\"></div><div class=\"book\" style=\"background:#6a1b9a\"></div></div>\n      </div>\n      <div class=\"shelf shelf-4\">\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#1565c0\"></div><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#2e7d32\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#bf360c\"></div><div class=\"book\" style=\"background:#1b5e20\"></div><div class=\"book\" style=\"background:#6a1b9a\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#f57f17\"></div><div class=\"book\" style=\"background:#0d47a1\"></div><div class=\"book\" style=\"background:#4a148c\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#33691e\"></div><div class=\"book\" style=\"background:#1565c0\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#2e7d32\"></div><div class=\"book\" style=\"background:#bf360c\"></div><div class=\"book\" style=\"background:#e65100\"></div></div>\n      </div>\n      <div class=\"shelf shelf-5\">\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#6a1b9a\"></div><div class=\"book\" style=\"background:#1565c0\"></div><div class=\"book\" style=\"background:#f57f17\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#2e7d32\"></div><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#0d47a1\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#1b5e20\"></div><div class=\"book\" style=\"background:#4a148c\"></div><div class=\"book\" style=\"background:#bf360c\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#0d47a1\"></div><div class=\"book\" style=\"background:#f57f17\"></div><div class=\"book\" style=\"background:#1b5e20\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#6a1b9a\"></div><div class=\"book\" style=\"background:#2e7d32\"></div></div>\n      </div>\n      <div class=\"shelf shelf-6\">\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#0d47a1\"></div><div class=\"book\" style=\"background:#bf360c\"></div><div class=\"book\" style=\"background:#1b5e20\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#4a148c\"></div><div class=\"book\" style=\"background:#2e7d32\"></div><div class=\"book\" style=\"background:#c0392b\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#f57f17\"></div><div class=\"book\" style=\"background:#1565c0\"></div><div class=\"book\" style=\"background:#6a1b9a\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#33691e\"></div><div class=\"book\" style=\"background:#c0392b\"></div><div class=\"book\" style=\"background:#0d47a1\"></div></div>\n        <div class=\"shelf-row\"><div class=\"book\" style=\"background:#e65100\"></div><div class=\"book\" style=\"background:#4a148c\"></div><div class=\"book\" style=\"background:#f57f17\"></div></div>\n      </div>\n      <div class=\"uni-sign\">\n        <div class=\"uni-sign-name\">UNIVERSITI TEKNOLOGI<br>NUSANTARA</div>\n        <div class=\"uni-sign-divider\"></div>\n        <div class=\"uni-sign-sub\">LIBRARY & KNOWLEDGE CENTRE</div>\n      </div>\n      <div class=\"desk-lib\"></div>\n      <div class=\"desk-front-panel\"></div>\n      <div class=\"lamp-lib\"></div>\n      <div class=\"logbook-obj\"></div>\n      <div class=\"computer-desk\"></div>\n      <div class=\"librarian\">\n        <div class=\"hijab\"></div>\n        <div class=\"hijab-drape\"></div>\n        <div class=\"head\"></div>\n        <div class=\"eye-l\"></div>\n        <div class=\"eye-r\"></div>\n        <div class=\"mouth\"></div>\n        <div class=\"body\"></div>\n        <div class=\"arm-l\"></div>\n        <div class=\"arm-r\"></div>\n        <div class=\"leg-l\"></div>\n        <div class=\"leg-r\"></div>\n      </div>\n    ",
    "ethicalFlag": false,
    "unlockMessage": "Faiz's alibi confirmed. Darren's dorm room has been unlocked.",
    "isVerdict": false,
    "npc": {
      "id": "librarian",
      "name": "Cik Rosnah",
      "role": "Library Assistant · Night shift",
      "avatar": "CR",
      "avatarBg": "rgba(127,179,211,0.15)",
      "avatarColor": "#7fb3d3",
      "intro": "I've been on the night shift for three years. I remember most of the regulars. What do you need to know?",
      "questions": [
        {
          "id": "lq1",
          "text": "Was Faiz Hairuddin here last Tuesday night?",
          "response": "Yes, he's here almost every Tuesday. Quiet boy, takes the corner seat. He asked me to refill the printer paper around midnight — I remember."
        },
        {
          "id": "lq2",
          "text": "Did you notice anyone unusual outside the library?",
          "response": "Around 11:30 I stepped out and saw someone sitting on the bench near Block C — on a laptop. Hood up, couldn't see the face."
        },
        {
          "id": "lq3",
          "text": "Can students access the library Wi-Fi from outside?",
          "response": "Guest network reaches 50 or 60 metres. Students do it all the time. No login required for guest access — we've been asking IT to fix that."
        }
      ]
    },
    "hotspots": [
      {
        "id": "ev-logbook",
        "class": "hs-logbook",
        "label": "Sign-in logbook",
        "innerHTML": "",
        "evidenceId": "ev-logbook"
      },
      {
        "id": "ev-cctv",
        "class": "hs-cctv",
        "label": "CCTV camera",
        "innerHTML": "<div class=\"lens\"></div><div class=\"rec-light\"></div><div class=\"mount-arm\"></div>",
        "evidenceId": "ev-cctv"
      },
      {
        "id": "ev-wifilog",
        "class": "hs-wifilog label-anchor-right",
        "label": "Wi-Fi access point",
        "innerHTML": "<div class=\"ap-antenna-l\"></div><div class=\"ap-antenna-r\"></div><div class=\"ap-signal-2\"></div><div class=\"ap-signal-1\"></div><div class=\"ap-label\">UTN-AP-04</div>",
        "evidenceId": "ev-wifilog"
      }
    ]
  },
  {
    "id": "darren-dorm",
    "name": "Darren's Dorm Room",
    "subtitle": "Block C · Room 214",
    "description": "Sparse and chaotic. A dual-monitor gaming rig dominates the desk, a phone charging beside it, a torn notebook page peeking out from under textbooks. A 'GAME OVER' poster hangs on the wall. Darren slouches in his gaming chair, watching you carefully.",
    "sceneClass": "scene-dorm-darren",
    "sceneHTML": "\n      <div class=\"poster-d\"></div>\n      <div class=\"poster-mario\"></div>\n      <div class=\"poster-zelda\"></div>\n      <div class=\"poster-pokemon\"></div>\n      <div class=\"window-d\"><div class=\"window-d-stars\"></div></div>\n      <div class=\"dartboard\"></div>\n      <div class=\"dart\"></div>\n      <div class=\"bed-d\">\n        <div class=\"bed-d-blanket\"></div>\n        <div class=\"pillow-d-1\"></div>\n        <div class=\"pillow-d-2\"></div>\n      </div>\n      <div class=\"desk-d\"></div>\n      <div class=\"desk-leg-d desk-leg-d-1\"></div>\n      <div class=\"desk-leg-d desk-leg-d-2\"></div>\n      <div class=\"monitor monitor-1\"><div class=\"monitor-screen\"></div></div>\n      <div class=\"monitor monitor-2\"><div class=\"monitor-screen\"></div></div>\n      <div class=\"monitor-stand monitor-stand-1\"></div>\n      <div class=\"monitor-stand monitor-stand-2\"></div>\n      <div class=\"keyboard\"></div>\n      <div class=\"mouse\"></div>\n      <div class=\"books-d\"></div>\n      <div class=\"notebook-paper\"></div>\n      <div class=\"desk-chair\">\n        <div class=\"chair-back\"></div>\n        <div class=\"chair-seat\"></div>\n        <div class=\"chair-pole\"></div>\n        <div class=\"chair-base\"></div>\n        <div class=\"wheel wheel-l\"></div>\n        <div class=\"wheel wheel-c\"></div>\n        <div class=\"wheel wheel-r\"></div>\n      </div>\n      <div class=\"darren-char\">\n        <div class=\"hair\"></div>\n        <div class=\"head\"></div>\n        <div class=\"eye-l\"></div>\n        <div class=\"eye-r\"></div>\n        <div class=\"body\"></div>\n        <div class=\"arm-l\"></div>\n        <div class=\"arm-r\"></div>\n        <div class=\"phone-held\"></div>\n        <div class=\"legs\"></div>\n      </div>\n    ",
    "ethicalFlag": false,
    "unlockMessage": "Physical evidence secured. The IT Department has been unlocked.",
    "isVerdict": false,
    "npc": {
      "id": "darren",
      "name": "Darren Koh",
      "role": "Suspect · Computer Science, Year 2",
      "avatar": "DK",
      "avatarBg": "rgba(192,57,43,0.15)",
      "avatarColor": "#c0392b",
      "intro": "I don't know why you're here. I barely know Nadia. We talked online a bit — that's it. Everyone games online.",
      "questions": [
        {
          "id": "dq1",
          "text": "Where were you last Tuesday at 11:48 PM?",
          "response": "Here. In my room. Gaming solo — no one to verify, I know. But I wasn't doing anything to Nadia."
        },
        {
          "id": "dq2",
          "text": "Your device connected to the library Wi-Fi that night.",
          "response": "...I might have gone out for a bit. I walk around at night sometimes. Sat near the library. That's not a crime. I just needed air."
        },
        {
          "id": "dq3",
          "text": "We found \"D_Koh_88\" on Nadia's phone.",
          "response": "That conversation was private. She misunderstood me. When she stopped talking I got frustrated. I sent ONE angry message. That doesn't mean I made a fake account."
        }
      ]
    },
    "hotspots": [
      {
        "id": "ev-monitor",
        "class": "hs-monitor-d",
        "label": "Gaming monitor",
        "innerHTML": "",
        "evidenceId": "ev-monitor"
      },
      {
        "id": "ev-phone-metadata",
        "class": "hs-phone-d",
        "label": "Darren's phone",
        "innerHTML": "",
        "evidenceId": "ev-phone-metadata"
      },
      {
        "id": "ev-notebook",
        "class": "hs-notebook-d",
        "label": "Torn notebook page",
        "innerHTML": "",
        "evidenceId": "ev-notebook"
      }
    ]
  },
  {
    "id": "it-dept",
    "name": "IT Department",
    "subtitle": "Admin Block · Level 2",
    "description": "Server racks hum behind a glass partition. The network admin pulls up the university's management dashboard at your request — three terminals showing different log streams. This is where digital trails become undeniable.",
    "sceneClass": "scene-it",
    "sceneHTML": "\n      <div class=\"server-rack rack-1\">\n        <div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div>\n      </div>\n      <div class=\"server-rack rack-2\">\n        <div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div>\n      </div>\n      <div class=\"server-rack rack-3\">\n        <div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div><div class=\"server-unit\"></div>\n      </div>\n      <div class=\"glass-partition\"></div>\n      <div class=\"it-sign\">\n        <div class=\"it-sign-uni\">UNIVERSITI TEKNOLOGI NUSANTARA</div>\n        <div class=\"it-sign-divider\"></div>\n        <div class=\"it-sign-text\">IT DEPARTMENT</div>\n        <div class=\"it-sign-sub\">NETWORK · SYSTEMS · SECURITY</div>\n      </div>\n      <div class=\"desk-it\"></div>\n      <div class=\"desk-it-leg desk-it-leg-l\"></div>\n      <div class=\"desk-it-leg desk-it-leg-r\"></div>\n      <div class=\"pc-tower\"></div>\n      <div class=\"pc-monitor\"></div>\n      <div class=\"pc-monitor-stand\"></div>\n      <div class=\"pc-monitor-base\"></div>\n      <div class=\"pc-keyboard\"></div>\n      <div class=\"it-chair\">\n        <div class=\"ch-back\"></div>\n        <div class=\"ch-seat\"></div>\n        <div class=\"ch-pole\"></div>\n        <div class=\"ch-base\"></div>\n        <div class=\"ch-wheel ch-wheel-l\"></div>\n        <div class=\"ch-wheel ch-wheel-r\"></div>\n      </div>\n      <div class=\"it-char\">\n        <div class=\"hair\"></div>\n        <div class=\"head\"></div>\n        <div class=\"eye-l\"></div>\n        <div class=\"eye-r\"></div>\n        <div class=\"body\"></div>\n        <div class=\"arm-l\"></div>\n        <div class=\"arm-r\"></div>\n        <div class=\"leg-l\"></div>\n        <div class=\"leg-r\"></div>\n      </div>\n    ",
    "ethicalFlag": true,
    "unlockMessage": "All evidence secured. Proceed to the Security Office.",
    "isVerdict": false,
    "npc": {
      "id": "itstaff",
      "name": "Encik Hafiz",
      "role": "Network Administrator · IT Division",
      "avatar": "EH",
      "avatarBg": "rgba(29,158,117,0.15)",
      "avatarColor": "#1d9e75",
      "intro": "I've pulled what I can. Some of this data was on the guest network — collected without a formal warrant. Your call on how you proceed with it.",
      "questions": [
        {
          "id": "iq1",
          "text": "Can you confirm the device registration?",
          "response": "Confirmed. REDMI-DK-GUEST was self-registered under student ID 2022-CS-0441 — Darren Koh. Three weeks ago, right when the fake account first appeared."
        },
        {
          "id": "iq2",
          "text": "Is this evidence legally admissible?",
          "response": "That's the issue. Guest network data falls under the university's monitoring policy, but using it formally typically needs a warrant or consent. Flag it in your report."
        },
        {
          "id": "iq3",
          "text": "Is the IP evidence conclusive?",
          "response": "Professionally — yes. Timing, device, IP range, username pattern. All one person. Whether it's enough without a warrant is a question for legal counsel, not me."
        }
      ]
    },
    "hotspots": [
      {
        "id": "ev-guestnet",
        "class": "hs-guestnet label-anchor-left",
        "label": "Server rack 1 — Guest network",
        "innerHTML": "",
        "evidenceId": "ev-guestnet"
      },
      {
        "id": "ev-iplog",
        "class": "hs-iplog",
        "label": "Server rack 2 — IP logs",
        "innerHTML": "",
        "evidenceId": "ev-iplog"
      },
      {
        "id": "ev-discord",
        "class": "hs-discord label-anchor-right",
        "label": "Server rack 3 — Discord traffic",
        "innerHTML": "",
        "evidenceId": "ev-discord"
      }
    ]
  },
  {
    "id": "security-office",
    "name": "Security Office",
    "subtitle": "Admin Block · Ground Floor",
    "description": "The Head of Campus Security sits across a large desk, your case file open in front of her. Behind her, a corkboard already pinned with screenshots and timestamps awaits your final connections. A warm desk lamp pools light over the file.",
    "sceneClass": "scene-security",
    "sceneHTML": "\n      <div class=\"org-board\">\n        <div class=\"org-board-title\">ORGANISATION CHART</div>\n        <div class=\"org-board-divider\"></div>\n        <div class=\"org-box org-box-top\"><div class=\"org-box-text\">VICE CHANCELLOR</div></div>\n        <div class=\"org-line org-line-v1\"></div>\n        <div class=\"org-line org-line-h\"></div>\n        <div class=\"org-line org-line-v2\"></div>\n        <div class=\"org-line org-line-v3\"></div>\n        <div class=\"org-box org-box-mid-l\"><div class=\"org-box-text\">CAMPUS<br>SECURITY</div></div>\n        <div class=\"org-box org-box-mid-r\"><div class=\"org-box-text\">STUDENT<br>AFFAIRS</div></div>\n        <div class=\"org-line org-line-h2\"></div>\n        <div class=\"org-line org-line-h3\"></div>\n        <div class=\"org-line org-line-v4\"></div>\n        <div class=\"org-line org-line-v5\"></div>\n        <div class=\"org-line org-line-v6\"></div>\n        <div class=\"org-box org-box-bot-1\"><div class=\"org-box-text\">PATROL</div></div>\n        <div class=\"org-box org-box-bot-2\"><div class=\"org-box-text\">FORENSIC</div></div>\n        <div class=\"org-box org-box-bot-3\"><div class=\"org-box-text\">WELFARE</div></div>\n      </div>\n      <div class=\"corkboard-bg\">\n        <div class=\"corkboard-paper\"></div>\n        <div class=\"corkboard-paper\"></div>\n        <div class=\"corkboard-paper\"></div>\n        <div class=\"corkboard-paper\"></div>\n        <div class=\"corkboard-paper\"></div>\n        <div class=\"corkboard-paper\"></div>\n        <div class=\"red-string string-1\"></div>\n        <div class=\"red-string string-2\"></div>\n        <div class=\"red-string string-3\"></div>\n        <div class=\"pin pin-1\"></div>\n        <div class=\"pin pin-2\"></div>\n        <div class=\"pin pin-3\"></div>\n        <div class=\"pin pin-4\"></div>\n        <div class=\"pin pin-5\"></div>\n      </div>\n      <div class=\"ethics-poster\">\n        <div class=\"ethics-poster-title\">WORK<br>ETHICS</div>\n        <div class=\"ethics-poster-divider\"></div>\n        <div class=\"ethics-poster-line\">· Integrity always</div>\n        <div class=\"ethics-poster-line\">· Respect evidence</div>\n        <div class=\"ethics-poster-line\">· Protect privacy</div>\n        <div class=\"ethics-poster-line\">· Follow procedure</div>\n        <div class=\"ethics-poster-line\">· Act with honour</div>\n        <div class=\"ethics-poster-seal\">★</div>\n      </div>\n      <div class=\"security-char\">\n        <div class=\"hair\"></div>\n        <div class=\"head\"></div>\n        <div class=\"eye-l\"></div>\n        <div class=\"eye-r\"></div>\n        <div class=\"mouth\"></div>\n        <div class=\"body\"></div>\n        <div class=\"arm-l\"></div>\n        <div class=\"arm-r\"></div>\n        <div class=\"leg-l\"></div>\n        <div class=\"leg-r\"></div>\n      </div>\n      <div class=\"desk-s\">\n        <div class=\"file-folder\"></div>\n        <div class=\"desk-sign\"></div>\n      </div>\n      <div class=\"desk-s-legs\"></div>\n      <div class=\"lamp-s\"></div>\n      <div class=\"lamp-base\"></div>\n    ",
    "ethicalFlag": false,
    "unlockMessage": null,
    "isVerdict": true,
    "npc": {
      "id": "security",
      "name": "Puan Suraya",
      "role": "Head of Campus Security",
      "avatar": "PS",
      "avatarBg": "rgba(200,169,110,0.2)",
      "avatarColor": "#c8a96e",
      "intro": "I've reviewed your preliminary notes. We have enough to proceed — but I need your formal verdict. Review your evidence and name the person responsible.",
      "questions": [
        {
          "id": "sq1",
          "text": "What happens after I submit my verdict?",
          "response": "If the evidence holds, the case goes to the Student Disciplinary Board for suspension or expulsion. If there's a legal dimension, we refer to police. Your forensic report is the foundation."
        },
        {
          "id": "sq2",
          "text": "What about the warrant issue with network data?",
          "response": "If you flagged it in your report, we run it through legal counsel before formal action. If you didn't flag it — that could be a problem later. Evidence might be challenged."
        }
      ]
    },
    "hotspots": []
  }
],
  LOCATION_OBJECTIVES: {
  "victims-room": "Document Nadia’s complaint, identify the online alias, and establish the initial timeline.",
  "library": "Verify Faiz’s alibi and determine whether the posting device was inside or outside the library.",
  "darren-dorm": "Search Darren’s room for physical or digital traces linking him to the fake account.",
  "it-dept": "Confirm the device registration trail and decide how to handle the ethics issue around guest network data.",
  "security-office": "Brief Puan Suraya and prepare the final accusation package."
},
  LOCATION_HINTS: {
  "victims-room": "Something in this room tells the whole story. Look carefully at every surface — evidence does not announce itself.",
  "library": "A library records everything — who came, when they left, and what the network saw. The truth is logged somewhere in this room.",
  "darren-dorm": "People leave traces everywhere — on their screens, in their notes, in their devices. This room is full of them.",
  "it-dept": "Every connection leaves a record. Three racks, three different data sets — the answers are in the logs.",
  "security-office": ""
},
  VERDICT_CARD_POSITIONS: [
  {
    "top": 36,
    "left": 28,
    "rotate": -5
  },
  {
    "top": 42,
    "left": 268,
    "rotate": 4
  },
  {
    "top": 58,
    "left": 506,
    "rotate": -2
  },
  {
    "top": 224,
    "left": 54,
    "rotate": 5
  },
  {
    "top": 236,
    "left": 286,
    "rotate": -4
  },
  {
    "top": 250,
    "left": 520,
    "rotate": 3
  },
  {
    "top": 410,
    "left": 36,
    "rotate": -3
  },
  {
    "top": 428,
    "left": 270,
    "rotate": 6
  },
  {
    "top": 440,
    "left": 514,
    "rotate": -5
  },
  {
    "top": 560,
    "left": 78,
    "rotate": 3
  },
  {
    "top": 566,
    "left": 326,
    "rotate": -4
  },
  {
    "top": 574,
    "left": 540,
    "rotate": 4
  }
]
};
