import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import confetti from 'canvas-confetti';
import './index.css';


const root = document.getElementById('root') as HTMLElement;

// Trigger confetti when the page loads
function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}

launchConfetti();
// Fireworks effect function
function launchFireworks() {
  const duration = 5 * 1000; // 5 seconds
  const end = Date.now() + duration;

  // Firework loop
  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50;
    const angle = Math.random() * 360; // Random angle
    confetti({
      particleCount,
      angle,
      spread: 55,
      origin: {
        x: Math.random(), // Random horizontal position
        y: Math.random() * 0.5, // Random vertical position (upper half)
      },
      colors: ['#bb0000', '#ffffff', '#00bb00', '#0000bb'], // Firework colors
    });
  }, 200); // Firework every 200ms
}

launchFireworks(); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
