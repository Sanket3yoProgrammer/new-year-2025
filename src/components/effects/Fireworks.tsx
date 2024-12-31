import React, { useEffect } from 'react';
import { Howl } from 'howler';
import './Fireworks.css'; // Import the CSS for the fireworks

const fireworksSound = new Howl({
  src: ['https://assets.mixkit.co/sfx/preview/mixkit-firework-explosion-1.mp3'],
  volume: 0.5,
  loop: true, // Loop the sound
});

export const Fireworks = () => {
  useEffect(() => {
    fireworksSound.play(); // Play sound when component mounts
  }, []);

  return (
    <div className="pyro">
      <div className="before"></div>
      <div className="after"></div>
    </div>
  );
};