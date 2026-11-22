const ciranda = document.getElementById('hero-ciranda');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const body = document.body;
const heroArt = document.querySelector('.hero-art');
const essence = document.querySelector('.essence');
const header = document.querySelector('.header');
const activeAnimations = new Set();
let frame = 0;
let observer;

// Grupos de leitura compartilham um gesto e chegam juntos à composição final.
const groups = [
  ['.hero-copy', [['.place', 'fade'], ['h1', 'lift'], ['.hero-intro', 'fade'], ['.hero-actions', 'fade']]],
  ['.recent-projects', [['.recent-projects-heading', 'fade'], ['.recent-projects-list li', 'glide']]],
  ['.identity', [['.identity-grid', 'lift']]],
  ['.activity', [['.section-heading', 'fade'], ['.activity-list article', 'settle']]],
  ['.essence', [['.essence-copy', 'breathe']]],
  ['.impact', [['.impact-grid', 'fade'], ['.impact-card', 'lift']]],
  ['.principles', [['.principles-entries', 'fade']]],
  ['.trust', [['dl', 'fade']]],
  ['.contact', [['.contact-grid', 'breathe']]],
  ['.footer', [['.footer-top', 'fade']]],
];
const targets = new Map();
for (const [parentSelector, entries] of groups) {
  const parent = document.querySelector(parentSelector);
  for (const [selector, effect] of entries) {
    for (const [index, element] of [...parent.querySelectorAll(selector)].entries()) {
      targets.set(element, { effect, delay: Math.min(index * 100, 200) });
    }
  }
}

const effects = {
  fade: {
    duration: 1200,
    frames: [{ opacity: .65 }, { opacity: 1 }],
  },
  lift: {
    duration: 1350,
    frames: [
      { opacity: .65, transform: 'translateY(18px)' },
      { opacity: 1, transform: 'none' },
    ],
  },
  glide: {
    duration: 1400,
    frames: [
      { opacity: .7, transform: 'translateX(18px)' },
      { opacity: 1, transform: 'none' },
    ],
  },
  settle: {
    duration: 1450,
    frames: [
      { opacity: .7, transform: 'translateY(24px) scale(.99)' },
      { opacity: 1, transform: 'none' },
    ],
  },
  breathe: {
    duration: 1500,
    frames: [
      { opacity: .7, transform: 'scale(.987)' },
      { opacity: 1, transform: 'none' },
    ],
  },
};

function reveal(element) {
  const { effect, delay } = targets.get(element);
  const { frames, duration } = effects[effect];
  const animation = element.animate(frames, {
    duration, delay,
    easing: 'cubic-bezier(.25,.1,.25,1)',
    fill: 'backwards',
  });
  activeAnimations.add(animation);
  animation.finished.then(
    () => activeAnimations.delete(animation),
    () => activeAnimations.delete(animation),
  );
}

function clamp(value) { return Math.min(1, Math.max(0, value)); }

function updateScrollEffects() {
  frame = 0;
  if (motionPreference.matches) return;
  const height = window.innerHeight;
  const hero = heroArt.getBoundingClientRect();
  if (hero.bottom >= 0 && hero.top <= height) {
    const progress = clamp((header.offsetHeight - hero.top) / Math.max(hero.height * .85, 1));
    heroArt.parentElement.style.setProperty('--hero-exit', progress.toFixed(4));
  }
  const bounds = essence.getBoundingClientRect();
  if (bounds.bottom >= 0 && bounds.top <= height) {
    const progress = clamp((height - bounds.top) / (height * .65));
    essence.style.setProperty('--essence-entry', progress.toFixed(4));
  }
}

function queueScrollEffects() {
  if (!frame && !motionPreference.matches) frame = requestAnimationFrame(updateScrollEffects);
}

function prepareMotion() {
  observer?.disconnect();
  for (const animation of activeAnimations) animation.cancel();
  activeAnimations.clear();
  body.classList.toggle('scroll-effects', !motionPreference.matches);
  if (motionPreference.matches) return;
  if ('IntersectionObserver' in window && typeof Element.prototype.animate === 'function') {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        // As entradas tocam uma vez por visita, inclusive ao navegar por âncoras.
        reveal(entry.target);
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px 32px 0px', threshold: 0 });
    const anchor = document.getElementById(location.hash.slice(1));
    for (const element of targets.keys()) {
      // Um endereço com âncora precisa abrir seu destino imediatamente legível.
      if (anchor?.contains(element)) continue;
      observer.observe(element);
    }
  }
  queueScrollEffects();
}

function prepararEntradaDaMarca() {
  if (document.hidden) {
    document.addEventListener('visibilitychange', prepararEntradaDaMarca, { once: true });
    return;
  }
  if (window.scrollY <= 20 && (!location.hash || location.hash === '#inicio')) {
    ciranda.classList.add('logo-pronta');
  }
}

ciranda.decode().then(prepararEntradaDaMarca).catch(() => {
  if (ciranda.complete) prepararEntradaDaMarca();
  else ciranda.addEventListener('load', prepararEntradaDaMarca, { once: true });
});
window.addEventListener('scroll', queueScrollEffects, { passive: true });
window.addEventListener('resize', queueScrollEffects, { passive: true });
window.addEventListener('pageshow', queueScrollEffects);
motionPreference.addEventListener('change', prepareMotion);
prepareMotion();
