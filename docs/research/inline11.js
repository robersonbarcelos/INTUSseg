window.Webflow = window.Webflow || [];
window.Webflow.push(function () {

  function init() {
    const lottieModule = Webflow.require('lottie');
    const animations = lottieModule.lottie.getRegisteredAnimations();

    if (!animations.length) {
      setTimeout(init, 200);
      return;
    }

    const allLotties = document.querySelectorAll('.hero_lottie');
    const visibleEl = Array.from(allLotties).find(
      el => getComputedStyle(el).display !== 'none'
    );

    const anim = animations.find(a => a.wrapper === visibleEl) || animations[0];

    if (!anim) {
      setTimeout(init, 200);
      return;
    }

    anim.stop();

    const proxy = { frame: 0 };
    const t = anim.totalFrames;
    const totalDuration = 8;

    function segmentDuration(from, to) {
      return ((to - from) / t) * totalDuration;
    }

    function playLoop() {
      proxy.frame = 0;
      anim.goToAndStop(0, true);

      gsap.timeline()
        .to(proxy, {
          frame: t * 0.25,
          duration: segmentDuration(0, t * 0.25),
          ease: 'none',
          onUpdate: () => anim.goToAndStop(proxy.frame, true)
        })
        .to(proxy, {
          frame: t * 0.65,
          duration: segmentDuration(t * 0.25, t * 0.65),
          delay: 1,
          ease: 'none',
          onUpdate: () => anim.goToAndStop(proxy.frame, true)
        })
        .to(proxy, {
          frame: t,
          duration: segmentDuration(t * 0.65, t),
          delay: 1,
          ease: 'none',
          onUpdate: () => anim.goToAndStop(proxy.frame, true),
          onComplete: playLoop
        });
    }

    playLoop();
  }

  init();
});