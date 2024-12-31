import React from 'react';
import { motion } from 'framer-motion';

export const Profile = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
      >
        <img
          src="https://avatars.githubusercontent.com/u/152056082?v=4"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <a href="https://github.com/Sanket3yoProgrammer">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mt-4 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
      >
        Best Wishes By Sanket3yoProgrammer
      </motion.h2> </a>
    </motion.div>
  );
};