import React, { useEffect } from 'react';
import animate from 'https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js';

const BurstEffect = () => {
  let tick: boolean;
  let initialBurstOccurred = false;

  const palette = [
    "#616AFF",
    "#2DBAE7",
    "#48DC6B",
    "#DBDEEA",
    "#FC6E3F",
    "#FFBF00"
  ];

  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const burst = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
    if (tick) return;
    tick = true;

    requestAnimationFrame(() => {
      tick = false;

      const x = clientX - 20; // Center offset
      const y = clientY - 20; // Center offset

      palette.forEach(async color => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 20 20");
        svg.innerHTML = `<polygon points="10 1 12.2 8 19.5 8 13.6 12.2 16 19 10 14.8 4.1 19.1 6.4 12.1 .4 8 7.8 8"/>`;
        svg.style.position = 'absolute';
        svg.style.left = `${x}px`;
        svg.style.top = `${y}px`;
        svg.style.fill = color;
        svg.style.pointerEvents = 'none';
        document.body.appendChild(svg);

        await animate({
          elements: svg,
          easing: "out-cubic",
          transform: [
            "translate(0px, 0px) scale(1)",
            `${random(-150, 150)} ${random(-150, 150)} 0`
          ]
        });

        document.body.removeChild(svg);
      });
    });
  };

  useEffect(() => {
    if (!initialBurstOccurred) {
      burst({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
      initialBurstOccurred = true;
    }

    const mobile = matchMedia("(pointer: coarse)").matches;

    if (mobile) {
      document.addEventListener("touchmove", ({ touches }) => {
        for (const touch of touches) burst(touch);
      });
    } else {
      Object.entries({
        down: "add",
        up: "remove"
      }).forEach(([event, action]) =>
        document.addEventListener(`mouse${event}`, event => {
          event.preventDefault();
          document[`${action}EventListener`]("mousemove", burst);
        })
      );
    }

    return () => {
      // Cleanup event listeners
      document.removeEventListener("touchmove", burst);
      Object.entries({
        down: "add",
        up: "remove"
      }).forEach(([event, action]) =>
        document.removeEventListener(`mouse${event}`, burst)
      );
    };
  }, []);

  return (
    <h1 style={{
      position: 'absolute',
      width: '100vw',
      top: '45%',
      textAlign: 'center',
      font: '500 16px -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#2E2C33',
      pointerEvents: 'none',
      userSelect: 'none'
    }}>
      Click or Touch to Burst!
    </h1>
  );
};

export default BurstEffect; 