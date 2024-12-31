import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Profile } from './components/Profile';
import { NewYearWish } from './components/NewYearWish';
import { LikeButton } from './components/LikeButton';
import { InteractiveBackground } from './components/effects/InteractiveBackground';
import { Fireworks } from './components/effects/Fireworks';
import BurstEffect from './components/BurstEffect';
import { Confetti } from './components/effects/Confetti';


function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Background music
    const bgMusic = new Howl({
      src: ['https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3'],
      loop: true,
      volume: 0.3
    });
    
    // Sound effects
    const cheersSound = new Howl({
      src: ['https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3'],
      volume: 0.7
    });

    const startApp = () => {
      bgMusic.play();
      cheersSound.play();
      setTimeout(() => setLoading(false), 2000);
    };

    startApp();

    return () => {
      bgMusic.stop();
      cheersSound.stop();
    };
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
      <InteractiveBackground />
      <BurstEffect />
      <Fireworks />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="text-6xl md:text-8xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Happy New Year 2025!
          </span>
        </motion.h1>

        <Profile />
        <NewYearWish />
        <LikeButton />
        <Fireworks />
      </div>
    </div>
  );
}

export default App;