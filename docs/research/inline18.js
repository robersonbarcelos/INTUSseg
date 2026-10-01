(function () {
    if (window.innerWidth <= 991) return;
    const navBg = document.querySelector('.nav_bg');
    if (!navBg) return;
    navBg.style.opacity = '0';
    navBg.style.transition = 'opacity 0.3s ease';
    window.addEventListener(
      'scroll',
      () => {
        navBg.style.opacity = window.scrollY >= 200 ? '1' : '0';
      },
      { passive: true },
    );
  })();