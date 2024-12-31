import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Confetti } from './effects/Confetti';

export const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setLiked(false);
    }
  };

  useEffect(() => {
    if (liked) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [liked]);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 7, type: 'spring' }}
        className="fixed bottom-8 right-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLiked(true)}
          className="bg-white/10 backdrop-blur-sm p-4 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          <Heart
            className={`w-8 h-8 ${
              liked ? 'fill-red-500 text-red-500' : 'text-white'
            }`}
          />
        </motion.button>
      </motion.div>
      
      <AnimatePresence>
        {liked && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[2px] rounded-2xl"
            >
              <div className="bg-black/90 backdrop-blur-sm px-12 py-8 rounded-2xl">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  Thank You! ✨
                </h2>
                <p className="text-white/80">Wishing you an amazing year ahead!</p>
                <button
                  onClick={() => setLiked(false)}
                  className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
            <Confetti />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
