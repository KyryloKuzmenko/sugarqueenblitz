document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');

  const links = document.querySelectorAll(
    '.backdrop-list-item, .header-list-item'
  );

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const currentHash = window.location.hash;
  if (currentHash) {
    links.forEach(link => {
      const a = link.querySelector('.bg-link, .header-link');
      if (a && a.getAttribute('href') === currentHash) {
        link.classList.add('active');
      }
    });
  }

  function toggleMenu(show) {
    backdrop.classList.toggle('show', show);
    openMenuBtn.style.display = show ? 'none' : 'block';
    closeMenuBtn.style.display = show ? 'block' : 'none';
  }

  openMenuBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });
});
