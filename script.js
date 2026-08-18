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

const copilotDialog = document.querySelector('[data-copilot-dialog]');
const copilotPrompt = document.querySelector('[data-copilot-prompt]');
const copyStatus = document.querySelector('[data-copy-status]');

async function copyCopilotPrompt() {
  if (!copilotPrompt) return;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(copilotPrompt.value);
    } else {
      copilotPrompt.focus();
      copilotPrompt.select();
      if (!document.execCommand('copy')) throw new Error('Copy command unavailable');
    }
    if (copyStatus) copyStatus.textContent = 'Prompt copied to clipboard.';
  } catch {
    copilotPrompt.focus();
    copilotPrompt.select();
    if (copyStatus) copyStatus.textContent = 'Select the prompt and copy it manually.';
  }
}

document.querySelectorAll('[data-copilot-trigger]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => {
    if (copilotDialog?.showModal) {
      copilotDialog.showModal();
    } else {
      copilotDialog?.setAttribute('open', '');
    }
    copyCopilotPrompt();
  });
});

document.querySelector('[data-copy-prompt]')?.addEventListener('click', copyCopilotPrompt);
