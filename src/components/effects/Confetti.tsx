import React, { useCallback, useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { Howl } from 'howler';

const confettiSound = new Howl({
  src: ['https://assets.mixkit.co/sfx/preview/mixkit-confetti-pop-2020.mp3'],
  volume: 0.5,
});

export const Confetti: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error('Error loading tsparticles engine:', error);
    }
  }, []);

  useEffect(() => {
    // Play sound after ensuring it's allowed by the browser
    const playSound = () => {
      if (!confettiSound.playing()) {
        confettiSound.play();
      }
    };

    playSound();

    return () => {
      confettiSound.stop();
    };
  }, []);

  return (
    <Particles
      id="confetti"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'],
          },
          shape: {
            type: ['circle', 'square', 'star'],
            options: {
              star: {
                sides: 5,
              },
            },
          },
          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 1,
            },
          },
          size: {
            value: { min: 2, max: 4 },
          },
          life: {
            duration: {
              sync: true,
              value: 5,
            },
            count: 1,
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
            },
            speed: 10,
            direction: 'none',
            random: false,
            straight: false,
            outModes: 'out',
          },
        },
        emitters: [
          {
            direction: 'top-right',
            rate: {
              delay: 0.1,
              quantity: 5,
            },
            position: {
              x: 0,
              y: 100,
            },
          },
          {
            direction: 'top-left',
            rate: {
              delay: 0.1,
              quantity: 5,
            },
            position: {
              x: 100,
              y: 100,
            },
          },
        ],
      }}
    />
  );
};
