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
        className="font-pangram text-5xl md:text-7xl lg:text-[120px] xl:text-[150px] font-black tracking-[-0.02em] uppercase mb-4 whitespace-nowrap leading-none bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(180deg, #C7C7C7 -21.43%, #95959583 45%, #61616100 85%)',
        }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
