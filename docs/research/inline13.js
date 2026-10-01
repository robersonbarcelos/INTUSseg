(function () {
    if (window.innerWidth <= 767) return;

    const accent = document.querySelector('.impact-item-accent');
    const accentText = document.querySelector('.impact-item-accent-text');
    function getScale(el) {
      const match = (el.getAttribute('style') || '').match(/scale3d\(([\d.]+)/);
      return match ? parseFloat(match[1]) : 0;
    }
    let accentState = 'hidden';
    new MutationObserver(() => {
      const scale = getScale(accent);
      if (scale >= 0.99 && accentState === 'hidden') {
        accentState = 'shown';
        accentText.style.opacity = '1';
      } else if (scale < 0.99 && accentState === 'shown') {
        accentState = 'hidden';
        accentText.style.opacity = '0';
      }
    }).observe(accent, { attributes: true, attributeFilter: ['style'] });
    if (getScale(accent) >= 0.99) {
      accentState = 'shown';
      accentText.style.opacity = '1';
    }
    const impactItems = document.querySelectorAll('.impact-item');
    const watchItem = document.querySelector('.impact-item.is--01');
    function getTranslate(el) {
      const match = (el.getAttribute('style') || '').match(/translate3d\(([\d.-]+)/);
      return match ? parseFloat(match[1]) : 0;
    }
    new MutationObserver(() => {
      const tx = getTranslate(watchItem);
      const moving = Math.abs(tx) > 0.01;
      impactItems.forEach((item) => {
        item.style.pointerEvents = moving ? 'none' : '';
      });
    }).observe(watchItem, { attributes: true, attributeFilter: ['style'] });
  })();