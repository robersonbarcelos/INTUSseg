gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll('.animate-text_opacity').forEach((el) => {
    const split = new SplitText(el, { type: 'words' });

    gsap.set(split.words, { opacity: 0.2 });

    gsap.to(split.words, {
      opacity: 1,
      ease: 'none',
      stagger: 0.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: true,
      },
    });
  });

  document.querySelectorAll('.animate-block_appear').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 65%',
        toggleActions: 'play none none none',
      },
    });
  });