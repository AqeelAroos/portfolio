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
