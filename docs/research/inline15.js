(function () {
    gsap.registerPlugin(ScrollTrigger);

    const body = document.body;
    const stepsSection = document.querySelector('.steps-section');

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function () {
        ScrollTrigger.create({
          trigger: '.wins-animation-track',
          start: 'top center',
          onEnter: () => (body.style.backgroundColor = 'var(--_zig---colors--black)'),
          onLeaveBack: () => (body.style.backgroundColor = 'var(--_zig---colors--gray-50)'),
        });

        ScrollTrigger.create({
          trigger: '.steps-animation-track',
          start: 'top center',
          onEnter: () => (body.style.backgroundColor = 'var(--_zig---colors--green-500)'),
          onLeaveBack: () => (body.style.backgroundColor = 'var(--_zig---colors--black)'),
        });

        ScrollTrigger.create({
          trigger: '.steps-section',
          start: 'bottom 50%',
          onEnter: () => (stepsSection.style.backgroundColor = 'var(--_zig---colors--green-500)'),
          onLeaveBack: () => (stepsSection.style.backgroundColor = 'transparent'),
        });

        ScrollTrigger.create({
          trigger: '.steps-section',
          start: 'bottom 20%',
          onEnter: () => (body.style.backgroundColor = 'var(--_zig---colors--gray-50)'),
          onLeaveBack: () => (body.style.backgroundColor = 'var(--_zig---colors--green-500)'),
        });

        return () => {
          body.style.backgroundColor = '';
          if (stepsSection) {
            stepsSection.style.backgroundColor = '';
          }
        };
      },
    });

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  })();