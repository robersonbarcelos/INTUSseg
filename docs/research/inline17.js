document.addEventListener('DOMContentLoaded', () => {
    const customersSlider = document.querySelector('.testim_slider');
    if (!customersSlider) return;

    new Splide(customersSlider, {
      perPage: 1,
      perMove: 1,
      type: 'loop',
      arrows: true,
      pagination: true,
      rewindSpeed: 400,
      updateOnMove: true,
    }).mount();
  });