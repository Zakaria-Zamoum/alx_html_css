// Simple hamburger toggle with accessibility flags
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  function openMenu() {
    nav.classList.add('show');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    nav.classList.remove('show');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  hamburger.addEventListener('click', function (e) {
    const isOpen = nav.classList.contains('show');
    if (isOpen) closeMenu(); else openMenu();
  });

  // Close menu on resize above mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 480) closeMenu();
  });

  // Close when clicking outside the nav on mobile
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 480) {
      if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('show')) {
        closeMenu();
      }
    }
  });

  // Allow Esc to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('show')) closeMenu();
  });
});