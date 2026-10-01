document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      if (!modal) return;
      modal.style.display = "flex";
      modal.style.opacity = "0";
      requestAnimationFrame(() => { modal.style.opacity = "1"; });
    });
  });

  document.querySelectorAll('[data-modal="close"]').forEach(btn => {
    btn.addEventListener("click", () => {
      let modal = btn.parentElement;
      while (modal && (!modal.getAttribute('data-modal') || modal.getAttribute('data-modal') === 'close')) {
        modal = modal.parentElement;
      }
      if (!modal) return;
      modal.style.opacity = "0";
      modal.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'opacity') {
          modal.style.display = "none";
          modal.removeEventListener('transitionend', handler);
        }
      });
    });
  });

});