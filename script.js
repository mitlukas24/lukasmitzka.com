(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('[data-dropdown-button]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const item = button.closest('.nav-item');
      if (!item) return;
      item.classList.toggle('open');
    });
  });

  document.querySelectorAll('[data-faq-question]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      item.classList.toggle('open');
      const expanded = item.classList.contains('open');
      button.setAttribute('aria-expanded', String(expanded));
    });
  });

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        'Hello Lukas,',
        '',
        'I am interested in tailored German lessons and would like to learn more about your options.',
        '',
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Preferred contact method: ${data.get('contact') || ''}`,
        `Format: ${data.get('format') || ''}`,
        `Current German level: ${data.get('level') || ''}`,
        `Goals: ${data.get('goals') || ''}`,
        `Context: ${data.get('context') || ''}`,
        `Preferred setting: ${data.get('setting') || ''}`,
        `Preferred intensity: ${data.get('intensity') || ''}`,
        `Timeline: ${data.get('timeline') || ''}`,
        '',
        `Message: ${data.get('message') || ''}`
      ];
      const subject = encodeURIComponent('Inquiry: Tailored German lessons');
      const body = encodeURIComponent(lines.join('\n'));
      window.location.href = `mailto:hello@lukasmitzka.com?subject=${subject}&body=${body}`;
    });
  }
})();
