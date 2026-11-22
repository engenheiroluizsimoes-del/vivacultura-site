(() => {
  const menu = document.getElementById('offline-menu');
  const trigger = document.querySelector('.menu-trigger');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let animation;
  let closing;

  trigger.setAttribute('aria-controls', 'offline-menu');

  function openMenu() {
    if (menu.open || closing) return;
    menu.showModal();
    trigger.setAttribute('aria-expanded', 'true');
    if (!reduceMotion.matches) {
      animation = menu.animate([
        { opacity: 0, transform: 'translateY(32px) scale(.98)' },
        { opacity: 1, transform: 'none' },
      ], { duration: 500, easing: 'cubic-bezier(.22,.61,.36,1)' });
    }
  }

  function closeMenu() {
    if (closing) return closing;
    if (!menu.open) return Promise.resolve();
    animation?.cancel();
    closing = (async () => {
      if (!reduceMotion.matches) {
        animation = menu.animate([
          { opacity: 1, transform: 'none' },
          { opacity: 0, transform: 'translateY(20px)' },
        ], { duration: 220, easing: 'ease-in', fill: 'forwards' });
        await animation.finished.catch(() => {});
      }
      menu.close();
      animation?.cancel();
    })().finally(() => { closing = undefined; });
    return closing;
  }

  trigger.addEventListener('click', openMenu);
  menu.querySelector('.menu-close').addEventListener('click', closeMenu);
  menu.addEventListener('cancel', event => { event.preventDefault(); closeMenu(); });
  menu.addEventListener('close', () => trigger.setAttribute('aria-expanded', 'false'));
  menu.addEventListener('click', event => {
    if (event.target !== menu) return;
    const bounds = menu.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenu();
  });

  for (const link of menu.querySelectorAll('a')) {
    link.addEventListener('click', async event => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!link.getAttribute('href').startsWith('#')) {
        closeMenu();
        return;
      }
      const section = document.getElementById(link.hash.slice(1));
      if (!section) return;
      event.preventDefault();
      await closeMenu();
      history.replaceState(null, '', link.hash);
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      section.scrollIntoView({
        behavior: reduceMotion.matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
  }
})();
