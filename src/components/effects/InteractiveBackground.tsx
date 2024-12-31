import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from '@tsparticles/engine';

export const InteractiveBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="stars"
      // init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent"
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
            value: "#ffffff"
          },
          shape: {
            type: "star"
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "trail"
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              trail: {
                delay: 0.005,
                quantity: 5,
                particles: {
                  color: {
                    value: ["#ff0000", "#00ff00", "#0000ff"]
                  },
                  shape: {
                    type: "star"
                  },
                  size: {
                    value: { min: 1, max: 3 }
                  },
                  life: {
                    duration: {
                      value: 2
                    }
                  }
                }
              }
            }
          }
        }
      }}
    />
  );
};