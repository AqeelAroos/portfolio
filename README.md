# Aqeel Aroos — Portfolio

Personal portfolio site for Aqeel Aroos, Software Engineering undergraduate at IIT Colombo. Built as a static site — no build step, no dependencies.

**Live:** deploy via GitHub Pages, Netlify, or Vercel by pointing to `index.html`.

---

## Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styles | CSS3 (custom properties, grid, flexbox) |
| Scripts | Vanilla JS (ES6+) |
| Fonts | Bebas Neue · Syne · JetBrains Mono (Google Fonts) |

---

## File Structure

```
aqeel-portfolio/
├── index.html          — single-page markup
├── css/
│   └── style.css       — all styles, tokens, responsive breakpoints
├── js/
│   └── main.js         — nav, typed text, scroll reveal, project modal
└── assets/
    ├── aqeel1.jpeg     — profile photo
    └── Aqeel_Aroos_CV.pdf
```

---

## Sections

| Section | Description |
|---|---|
| Hero | Name, typed role, bio, CTA buttons, profile photo |
| About | Stats, open-to roles, skills table |
| Projects | 5 project cards with live + GitHub links and a details modal |
| Experience | Timeline — work and education |
| Contact | Email, phone, LinkedIn, location |

---

## Projects

| # | Project | Live | GitHub |
|---|---|---|---|
| 01 | CVPrep — AI Job Application Platform | [cv-prep-mplw.vercel.app](https://cv-prep-mplw.vercel.app/) | [AqeelAroos/CvPrep-](https://github.com/AqeelAroos/CvPrep-) |
| 02 | RideLanka — Motorcycle Community Platform | [ridelanka-one.vercel.app](https://ridelanka-one.vercel.app/) | [AqeelAroos/ridelanka](https://github.com/AqeelAroos/ridelanka) |
| 03 | HelmGuard AI — Scalp Health Monitor | [helmguard-ai.vercel.app](https://helmguard-ai.vercel.app/) | [AqeelAroos/helmguard--ai](https://github.com/AqeelAroos/helmguard--ai) |
| 04 | DevCollab — AI Code Review Platform | [confident-art-production-a147.up.railway.app](https://confident-art-production-a147.up.railway.app/) | [AqeelAroos/devcollab](https://github.com/AqeelAroos/devcollab) |
| 05 | AgileDesk — Project Management Tool | [bubbly-mercy-production-f162.up.railway.app](https://bubbly-mercy-production-f162.up.railway.app/) | [AqeelAroos/agile-desk](https://github.com/AqeelAroos/agile-desk) |

---

## Running Locally

No build step needed.

**Option 1 — VS Code Live Server**
1. Open the folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right-click `index.html` → **Open with Live Server**

**Option 2 — Direct open**
Double-click `index.html` in your file explorer.

---

## Quick Edits

| What | Where |
|---|---|
| Name / bio / tagline | `index.html` — hero section |
| Typed roles | `js/main.js` — `roles` array |
| Project descriptions / stack | `js/main.js` — `projectData` object |
| Accent colour | `css/style.css` — `--amber` token |
| Contact details | `index.html` — contact section |
| CV file | Replace `assets/Aqeel_Aroos_CV.pdf` |

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--void` | `#050A14` | Page background |
| `--surface` | `#0D1525` | Card backgrounds |
| `--amber` | `#5B90C8` | Accent — links, highlights, borders |
| `--white` | `#EDE8DF` | Primary text |
| `--muted` | `rgba(237,232,223,0.65)` | Secondary text |

---

## Features

- Scroll-reveal animations (IntersectionObserver)
- Typed role text with erase/retype loop
- Project modal — slides in from right with full tech stack and highlights
- Live + GitHub links on every project card
- Mobile-responsive layout with hamburger menu
- Noise grain texture overlay
- Downloadable CV link in nav and footer
