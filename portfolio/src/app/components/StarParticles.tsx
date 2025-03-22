'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const StarParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="stars"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#000000',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
          number: {
            value: 300,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            }
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: 0.5,
              max: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarParticles; 