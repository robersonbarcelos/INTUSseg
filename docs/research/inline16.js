(function () {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = document.querySelector('.steps-animation-wrapp');
    const wheel = document.querySelector('.sales-figure-wheel');
    const cards = [...document.querySelectorAll('.sales-cards_track .sales-card')];
    if (!wrap || !wheel || !cards.length) return;
    if (window.innerWidth <= 767) return;

    const lineStart = -35,
      lineStep = 30;
    const angles = cards.map((_, i) => lineStart + (cards.length - 1 - i) * lineStep);

    gsap.set(cards, { clearProps: 'all' });
    gsap.set(wheel, { clearProps: 'all' });

    requestAnimationFrame(() => {
      const wR = wheel.getBoundingClientRect();
      const wcx = wR.left + wR.width / 2;
      const wcy = wR.top + wR.height / 2;
      const meta = cards.map((card) => {
        const r = card.getBoundingClientRect();
        return { naturalCx: r.left + r.width / 2, deltaY: r.top + r.height / 2 - wcy };
      });

      const cta = cards[cards.length - 1];
      const ctaR = cta.getBoundingClientRect();
      const track = document.querySelector('.sales-cards_track');
      const targetCx = track.getBoundingClientRect().left + ctaR.width / 2;
      const cotTarget = (targetCx - wcx) / meta[cards.length - 1].deltaY;
      const ctaFinalAngle = (Math.atan2(1, cotTarget) * 180) / Math.PI;
      const totalRotation = Math.min(180, ctaFinalAngle - lineStart);

      function tick(rotation) {
        cards.forEach((card, i) => {
          const rad = ((angles[i] + rotation) * Math.PI) / 180;
          const sinA = Math.sin(rad);
          let rx;
          if (sinA <= 0.05) {
            rx = wcx + Math.sign(Math.cos(rad)) * window.innerWidth * 2;
          } else {
            rx = wcx + meta[i].deltaY * (Math.cos(rad) / sinA);
          }
          gsap.set(card, { x: rx - meta[i].naturalCx });
        });
      }

      tick(0);

      gsap.to(wheel, {
        rotation: totalRotation,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: '50% top-=200',
          end: 'bottom bottom-=400',
          scrub: true,
          onUpdate: (self) => tick(self.progress * totalRotation),
        },
      });
    });
  })();