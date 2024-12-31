import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#000'
          }
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce'
            }
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              onClick: {
                enable: true,
                mode: 'push'
              }
            }
          }
        }
      }}
    />
  );
};