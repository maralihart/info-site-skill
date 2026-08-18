// Optional progressive enhancements. Content and navigation work without JavaScript.
document.documentElement.classList.add('js');

const menu = document.querySelector('.jump-menu');
menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.removeAttribute('open'));
});

const navLinks = [...document.querySelectorAll('.wide-nav a[href^="#"]')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.toggleAttribute('aria-current', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.4] });
  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll('[data-print]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => {
    if (document.body.classList.contains('print-guide')) {
      window.print();
    } else {
      window.location.href = 'print-guide.html';
    }
  });
});
