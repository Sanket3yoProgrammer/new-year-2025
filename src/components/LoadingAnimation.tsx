import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';
import { Fireworks } from './effects/Fireworks';
import { Confetti } from './effects/Confetti';

export const LoadingAnimation = () => {
  useEffect(() => {
    // This effect can be used to trigger any additional animations or sounds if needed
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
      <Fireworks />
      <Confetti />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ x: -200, rotate: -45 }}
          animate={{ x: -20, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="absolute left-1/3"
        >
          <motion.div
            animate={{ 
              rotate: [0, 25],
              transition: { duration: 0.5, delay: 1 }
            }}
          >
            <Wine className="w-20 h-20 text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.7)]" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 200, rotate: 45 }}
          animate={{ x: 20, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="absolute right-1/3"
        >
          <motion.div
            animate={{ 
              rotate: [0, -25],
              transition: { duration: 0.5, delay: 1 }
            }}
          >
            <Wine className="w-20 h-20 text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.7)]" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1],
            opacity: 1
          }}
          transition={{ 
            delay: 1.2,
            duration: 0.8,
            type: "spring"
          }}
          className="text-5xl font-bold text-center"
          style={{ 
            position: 'relative',
            marginTop: '20px',
          }}
        >
          <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse rel-234">
            Cheers to 2025!
          </span>
        </motion.div>
      </div>
    </div>
  );
};