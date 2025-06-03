document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll(
    '.backdrop-list-item, .header-list-item'
  );

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        links.forEach(link => {
          const a = link.querySelector('.header-link, .bg-link');
          if (a?.getAttribute('href') === `/#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });


  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
      if (link.closest('.backdrop')) {
        toggleMenu(false);
      }
    });
  });


  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;


  links.forEach(item => item.classList.remove('active'));

  links.forEach(link => {
    const a = link.querySelector('.bg-link, .header-link');
    if (!a) return;

    const href = a.getAttribute('href');


    if (href.startsWith('/#')) {
      const anchor = href.slice(1); // "#hero"
      if (anchor === currentHash) {
        link.classList.add('active');
      }
      return;
    }


    if (
      currentPath !== '/' &&
      !href.includes('#') &&
      href.endsWith(currentPath)
    ) {
      link.classList.add('active');
    }
  });


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
