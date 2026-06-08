/* ── Nav scroll ─────────────────────────────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

/* ── Hamburger ──────────────────────────────────────── */
const burger = document.querySelector('.hamburger');
const mMenu  = document.querySelector('.mobile-menu');
burger?.addEventListener('click', () => {
  const open = mMenu.classList.toggle('open');
  const bars = burger.querySelectorAll('span');
  if (open) {
    bars[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
  }
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => {
    mMenu.classList.remove('open');
    burger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
  });
});

/* ── Scroll reveal ──────────────────────────────────── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('up'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ── Typed text ─────────────────────────────────────── */
const roles = ['Fullstack Developer', 'UI/UX Designer', 'Business Analyst', 'Project Manager'];
let ri = 0, ci = 0, del = false;
const el = document.getElementById('typed-role');
function type() {
  if (!el) return;
  const cur = roles[ri];
  el.textContent = del ? cur.slice(0, --ci) : cur.slice(0, ++ci);
  if (!del && ci === cur.length) { del = true; setTimeout(type, 2000); return; }
  if (del && ci === 0)           { del = false; ri = (ri + 1) % roles.length; }
  setTimeout(type, del ? 45 : 85);
}
type();

/* ── Project data ───────────────────────────────────── */
const projectData = {
  cvprep: {
    cat: 'AI SaaS · Full Stack · Next.js',
    title: 'CVPrep',
    subtitle: 'AI-Powered Job Application Platform',
    year: '2025',
    desc: [
      'AI-powered career platform that analyses CVs against job descriptions in real time, generates tailored interview questions with suggested answers, and produces personalised cover letters.',
      'Built a CV scoring engine with section-level ATS compatibility analysis and an AI-powered CV rewriter using Google Generative AI. Includes a Kanban job application tracker with drag-and-drop, user authentication, and a personal analytics dashboard.'
    ],
    stack: [
      ['Frontend', 'Next.js 16, React 19, TypeScript, Tailwind CSS 4, Radix UI'],
      ['Backend', 'Next.js API Routes (serverless), Groq LLM — Llama 3.3 70B, Google Generative AI'],
      ['Database & Auth', 'Supabase (PostgreSQL), Row Level Security (RLS)'],
      ['Parsing', 'pdfjs-dist, unpdf — PDF text extraction'],
    ],
    highlights: [
      'Groq + Google AI dual integration with prompt engineering',
      'PDF parsing and section-level ATS compatibility analysis',
      'Kanban drag-and-drop job application tracker',
      'Supabase RLS for secure per-user data isolation',
      'AI-powered CV regeneration and rewriting pipeline'
    ],
    live: 'https://cv-prep-mplw.vercel.app/',
    github: 'https://github.com/AqeelAroos/CvPrep-'
  },
  ridelanka: {
    cat: 'Full Stack · Firebase · AI · Maps',
    title: 'RideLanka',
    subtitle: 'Motorcycle Community Platform',
    year: '2025',
    desc: [
      'Full-stack progressive web application built for Sri Lanka\'s motorcycle community. Riders discover and share scenic routes, report real-time road hazards on a live Leaflet/OpenStreetMap map, connect through a community feed, and track bikes and service history.',
      'Includes an AI Helmet Health feature powered by the Groq Llama 4 Scout vision model — analyses uploaded scalp photos and returns scored metrics (redness, dryness, inflammation, thinning risk) with recommendations, all persisted to Firestore. A live ride timer tracks helmet wear time per session with localStorage persistence across navigation.'
    ],
    stack: [
      ['Frontend', 'React 19, Vite 8, Tailwind CSS v4, React Router DOM v7'],
      ['Backend & Auth', 'Firebase Authentication, Cloud Firestore (real-time), Cloudinary'],
      ['AI', 'Groq AI — Llama 4 Scout vision model for scalp analysis'],
      ['Maps', 'Leaflet + React-Leaflet, OpenStreetMap tiles'],
    ],
    highlights: [
      'Real-time road hazard reporting on an interactive Leaflet map',
      'Groq vision model for AI-powered scalp health analysis with scored metrics',
      'Community feed with post categories, garage tracker, and service history',
      'Live helmet session timer with localStorage persistence across page navigation',
      'Mobile-first PWA with iOS safe area support and dynamic viewport handling'
    ],
    live: 'https://ridelanka-one.vercel.app/',
    github: 'https://github.com/AqeelAroos/ridelanka'
  },
  helmguard: {
    cat: 'AI · Full Stack · Multi-Model · Firebase',
    title: 'HelmGuard AI',
    subtitle: 'Clinical Scalp Health Monitoring Platform',
    year: '2025',
    desc: [
      'Clinical-grade scalp health monitoring platform designed for daily helmet users — motorcyclists, cyclists, and sports players prone to scalp conditions caused by prolonged helmet wear.',
      'Architected a multi-backend AI fallback chain: Gemini Vision → ONNX Runtime Web (on-device MobileNetV3) → HuggingFace → Roboflow, each layer handling rate limits, model loading, and response normalisation independently. Features a helmet session timer, daily scalp journal, a freemium subscription system, and Recharts analytics dashboard.'
    ],
    stack: [
      ['Frontend', 'React 18, Vite 5, React Router DOM v7, Recharts, Three.js'],
      ['Backend & Auth', 'Firebase Auth, Cloud Firestore, Firebase Storage'],
      ['AI Pipeline', 'Google Gemini Vision API (primary), ONNX Runtime Web, HuggingFace Inference API, Roboflow Serverless'],
      ['Tooling', 'Vite, react-hot-toast, import.meta.env configuration'],
    ],
    highlights: [
      '4-model AI fallback chain with fully offline ONNX on-device inference',
      'Gemini Vision returns clinical scores: redness, dryness, inflammation, thinning risk',
      '12 routed pages including a Three.js interactive 3D helmet model on landing',
      '8+ custom React hooks for real-time Firestore data (sessions, scans, journal, profile)',
      'Freemium subscription gate implemented entirely via Firestore-stored plan data'
    ],
    live: 'https://helmguard-ai.vercel.app/',
    github: 'https://github.com/AqeelAroos/helmguard--ai'
  },
  devcollab: {
    cat: 'Full Stack · Real-time · Monorepo · AI',
    title: 'DevCollab',
    subtitle: 'AI-Powered Collaborative Code Review Platform',
    year: '2025',
    desc: [
      'Full-stack platform that brings AI-assisted pull request reviews to GitHub repositories. Developers connect their GitHub account, browse repositories, and open any pull request to see a full diff viewer with inline commenting.',
      'A one-click AI review triggers streaming Groq LLM analysis of the changed code, surfacing security, performance, and quality suggestions in real time. All comments are synchronised live across every browser tab via WebSocket — no page refresh needed. Ships with a full integration test suite.'
    ],
    stack: [
      ['Frontend', 'Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3, Zustand, Socket.io-client, Radix UI'],
      ['Backend', 'Node.js + Express, Socket.io, Prisma ORM, PostgreSQL, Redis, Groq SDK, Octokit REST'],
      ['Auth & Security', 'GitHub OAuth 2.0, JSON Web Tokens, Zod validation, Helmet, express-rate-limit'],
      ['Tooling', 'Turborepo monorepo, Jest + ts-jest + Supertest integration tests, ESLint, Prettier'],
    ],
    highlights: [
      'GitHub OAuth 2.0 authentication with JWT session management',
      'Real-time WebSocket comment sync via Socket.io rooms scoped per pull request',
      'Server-Sent Events (SSE) for token-by-token streaming AI output',
      'Turborepo monorepo with a shared TypeScript codebase across frontend and backend',
      'Full integration test suite with mocked GitHub and Groq APIs'
    ],
    live: 'https://confident-art-production-a147.up.railway.app/',
    github: 'https://github.com/AqeelAroos/devcollab'
  },
  agiledesk: {
    cat: 'Full Stack · Real-time · Agile · Monorepo',
    title: 'AgileDesk',
    subtitle: 'Real-Time Agile Project Management Tool',
    year: '2025',
    desc: [
      'Full-stack agile project management platform designed for software teams. Built as a pnpm monorepo with a Next.js 14 frontend and a Fastify REST API backend, supporting role-based access control (PM and Engineer roles) and real-time board collaboration via Socket.io.',
      'Features a drag-and-drop Kanban board with customisable columns and live presence indicators, full task management with subtasks, priorities, story points, labels, due dates, multi-assignee support, threaded comments, and an activity log. Sprint planning with status tracking and team meeting scheduling included.'
    ],
    stack: [
      ['Frontend', 'Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Radix UI, Zustand'],
      ['Backend', 'Fastify (Node.js), TypeScript, PostgreSQL, Prisma ORM, Socket.io, JWT, bcrypt'],
      ['Drag & Drop', 'dnd-kit, Socket.io client (real-time sync)'],
      ['Infrastructure', 'pnpm monorepo, Railway (API + PostgreSQL), Vercel (frontend), Docker, Prisma migrations'],
    ],
    highlights: [
      'Drag-and-drop Kanban board with live presence indicators showing online team members',
      'Full task management — subtasks, priorities, story points, labels, multi-assignee, threaded comments',
      'Sprint planning with Planned / Active / Completed status and per-sprint meeting scheduling',
      'JWT-based auth with persistent sessions, protected routes, and role-based access (PM vs Engineer)',
      'PostgreSQL + Prisma ORM with rich seed dataset and automated Railway deploy migrations'
    ],
    live: 'https://bubbly-mercy-production-f162.up.railway.app/',
    github: 'https://github.com/AqeelAroos/agile-desk'
  },
  ceylonluxe: {
    cat: 'UI / Frontend · Travel · Multi-page',
    title: 'Ceylon Luxe',
    subtitle: 'Luxury Travel Website for Sri Lanka',
    year: '2025',
    desc: [
      'A fully responsive, multi-page luxury travel web application for Sri Lanka, built with a premium editorial aesthetic. Features a cinematic hero with parallax scrolling, animated multi-step booking form, destination and package browsing pages, and a booking confirmation flow.',
      'Polished micro-interactions delivered via GSAP scroll-triggered animations, page transitions, and timeline sequences. Swiper.js powers the carousel components, with Playfair Display + Montserrat as the editorial type pairing.'
    ],
    stack: [
      ['Markup & Styles', 'HTML5, CSS3 — semantic markup, custom animations'],
      ['Framework', 'Tailwind CSS — bespoke design system (glassmorphism, staggered grids)'],
      ['Animation', 'GSAP — scroll-triggered reveals, parallax, page transitions, timeline animations'],
      ['Components', 'Swiper.js (carousel), Google Fonts — Playfair Display + Montserrat'],
      ['JavaScript', 'Vanilla JS — multi-step form logic, URL parameter handling, dynamic booking summaries'],
    ],
    highlights: [
      'Cinematic parallax hero with GSAP scroll-triggered reveals throughout',
      'Animated multi-step booking form with URL parameter handling and dynamic summaries',
      'Multi-page architecture: destinations, packages, booking, confirmation',
      'Glassmorphism design system with staggered grid layouts',
      'Zero dependencies to install — pure static, open directly in browser'
    ],
    live: 'https://aqeelaroos.github.io/Ceylon-Luxe/',
    github: 'https://github.com/AqeelAroos/Ceylon-Luxe'
  },
  eleve: {
    cat: 'UI / Frontend · Luxury Brand · Static',
    title: 'ELEVÉ Luxury Atelier',
    subtitle: 'High-End Salon Website — Colombo, Sri Lanka',
    year: '2025',
    desc: [
      'A high-end beauty and wellness salon website for Colombo, Sri Lanka, positioned in the style of luxury fashion houses like Dior and Vogue. Presents the brand as a luxury atelier offering premium hair, colour, and body treatments.',
      'Visitors can browse services, explore the brand identity, and submit private appointment booking requests. Pure static build — no framework, no build tool, no backend. Open any .html file directly and it works.'
    ],
    stack: [
      ['Markup', 'HTML5 (static, multi-page)'],
      ['Styling', 'Tailwind CSS via CDN'],
      ['Typography', 'Google Fonts — Cormorant Garamond (editorial serif) + Montserrat (sans-serif)'],
      ['Interactivity', 'Vanilla JavaScript — form submission, success modal'],
      ['Assets', 'Local images + Unsplash URLs, no build tool required'],
    ],
    highlights: [
      'Editorial luxury brand identity — positioned in the style of Dior and Vogue',
      'Cormorant Garamond + Montserrat type pairing for a high-fashion feel',
      'Private appointment booking form with JS success modal',
      'Multi-page static site: services, brand, treatments, booking',
      'Zero install, zero build step — works by opening any HTML file directly'
    ],
    live: 'https://aqeelaroos.github.io/Eleve/',
    github: 'https://github.com/AqeelAroos/Eleve'
  }
};

/* ── Project modal ──────────────────────────────────── */
const modal        = document.getElementById('proj-modal');
const modalContent = document.getElementById('proj-modal-content');
const modalClose   = document.querySelector('.proj-modal-close');
const modalBg      = document.querySelector('.proj-modal-backdrop');

function openModal(key) {
  const p = projectData[key];
  if (!p) return;
  modalContent.innerHTML = `
    <div class="modal-cat">${p.cat}</div>
    <div class="modal-title">${p.title}</div>
    <div class="modal-subtitle">${p.subtitle}</div>
    <div class="modal-year">${p.year}</div>
    <div class="modal-sep"></div>
    <div class="modal-desc">${p.desc.map(d => `<p>${d}</p>`).join('')}</div>
    <div class="modal-stack">
      <div class="modal-section-label">Tech Stack</div>
      ${p.stack.map(([cat, vals]) => `
        <div class="modal-stack-row">
          <span class="modal-stack-cat">${cat}</span>
          <span class="modal-stack-vals">${vals}</span>
        </div>`).join('')}
    </div>
    <div class="modal-highlights">
      <div class="modal-section-label">Key Highlights</div>
      ${p.highlights.map(h => `<div class="modal-highlight-item">${h}</div>`).join('')}
    </div>
    <div class="modal-actions">
      <a href="${p.live}" target="_blank" rel="noopener" class="btn-fill" style="display:inline-flex;align-items:center;gap:.5rem;">
        View Live
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 10L10 2M10 2H5M10 2V7"/></svg>
      </a>
      <a href="${p.github}" target="_blank" rel="noopener" class="btn-outline" style="display:inline-flex;align-items:center;gap:.5rem;">
        GitHub
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 10L10 2M10 2H5M10 2V7"/></svg>
      </a>
    </div>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.proj-modal-panel').scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.proj-item[data-project]').forEach(item => {
  item.addEventListener('click', () => openModal(item.dataset.project));
  item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(item.dataset.project); });
});

modalClose?.addEventListener('click', closeModal);
modalBg?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
