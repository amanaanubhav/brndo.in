'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SectionHeading({ title, className }) {
  return (
    <div className={cn("text-center w-full relative z-0", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-pangram text-5xl md:text-7xl lg:text-[150px] font-black tracking-widest uppercase pb-4 whitespace-nowrap leading-none"
        style={{
          background: 'linear-gradient(180deg, #C7C7C7 -21.43%, rgba(149, 149, 149, 0.514133) 46.09%, rgba(97, 97, 97, 0) 96.64%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: '#000000', // Fallback color as specified
        }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
