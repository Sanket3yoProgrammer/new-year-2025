import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { Heart, Star, Sparkles, Volume2 } from 'lucide-react';

const wish = `May the coming year bring endless joy, prosperity, and countless moments of happiness. Let's embrace new beginnings and create beautiful memories together. Here's to a fantastic 2025!`;

export const NewYearWish = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { speak } = useTextToSpeech();

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.innerText.split(' ');
      textRef.current.innerHTML = '';
      
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.innerHTML = word;
        span.className = 'inline-block opacity-50 transition-all duration-300 hover:scale-110 hover:text-yellow-400';
        textRef.current?.appendChild(span);
        
        if (i < words.length - 1) {
          textRef.current?.appendChild(document.createTextNode(' '));
        }
        
        gsap.to(span, {
          opacity: 1,
          delay: i * 0.2,
          duration: 0.5,
          onComplete: () => {
            if (i < words.length - 1) {
              gsap.to(span, {
                opacity: 0.8,
                duration: 0.3
              });
            }
          }
        });
      });

      // Speak the wish only once when the component mounts
      speak(wish);
    }
  }, [speak]);

  const handleSpeak = () => {
    speak(wish);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 3,
        duration: 1,
        type: "spring"
      }}
      className="max-w-2xl mx-auto"
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-xl blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
        <div
          ref={textRef}
          className="relative bg-black/50 backdrop-blur-sm p-8 rounded-xl text-lg md:text-xl font-serif text-white leading-relaxed text-center shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        >
          🎉 May the coming year bring endless joy, prosperity, and countless moments of happiness. 
          Let's embrace new beginnings and create beautiful memories together. 
          Here's to a fantastic 2025! 🥳
          <div className="flex justify-center mt-4">
            <Heart className="w-6 h-6 text-red-500 mx-2" />
            <Star className="w-6 h-6 text-yellow-400 mx-2" />
            <Sparkles className="w-6 h-6 text-pink-500 mx-2" />
          </div>
        </div>
      </div>
      <button 
        onClick={handleSpeak} 
        className="fixed bottom-8 left-8 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-110"
      >
        <Volume2 className="w-6 h-6 text-gray-700" />
      </button>
    </motion.div>
  );
};
