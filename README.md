# Aqeel Aroos — Portfolio v2 (Dark Edition)

Cinematic dark portfolio. Bebas Neue display + Syne + JetBrains Mono.
Amber accent, noise texture, custom cursor, scroll reveal, typed role.

## 📁 Structure
```
aqeel-portfolio/
├── index.html
├── css/style.css
├── js/main.js
└── assets/
    ├── aqeel.jpeg
    └── Aqeel_Aroos_CV.pdf
```

## 🚀 Open in VS Code

1. Unzip → open folder in VS Code
2. Install **Live Server** extension (ritwickdey.liveserver)
3. Right-click `index.html` → **Open with Live Server**

Or just double-click `index.html` — no build step needed.

## 🔗 Adding Real Project Links

In `index.html`, find each `.proj-link` anchor and replace `href="#"` with your actual URL:

```html
<!-- e.g. -->
<a href="https://securefy.vercel.app" class="proj-link" target="_blank">
```

## ✏️ Quick Edits

| What | Where |
|---|---|
| Name / bio | `index.html` → hero section |
| Roles (typed text) | `js/main.js` → `roles` array |
| Project links | `index.html` → each `.proj-link` href |
| Accent color | `css/style.css` → `--amber` |
| Update LinkedIn URL | `index.html` → search `linkedin.com/in/aqeel-aroos` |

## 🎨 Design

- **Theme**: Cinematic noir — near-black void, warm amber, noise grain overlay
- **Fonts**: Bebas Neue (display) + Syne (headings/body) + JetBrains Mono (labels)
- **Features**: Custom dual cursor, scroll reveal, marquee skill strip, typed role, tab experience panel, photo blend-mode
