'use client';

import { motion } from 'framer-motion';

export default function HeroSubheading({ children, className = '' }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`font-pangram text-sm sm:text-base md:text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl text-center ${className}`}
    >
      {children}
    </motion.p>
  );
}
