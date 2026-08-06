'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function AboutHero({ data }) {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-pangram text-5xl md:text-7xl lg:text-[97px] leading-[1.1] font-bold text-center tracking-[-0.02em] text-black dark:text-white mb-6 max-w-4xl"
        >
          {data.title}
        </motion.h1>

        {/* Subtitles & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center max-w-2xl text-center space-y-6"
        >
          <div className="font-pangram font-normal text-3xl md:text-5xl lg:text-[67px] leading-[1.05] tracking-[-0.02em] text-black dark:text-gray-200">
            <span className="block">{data.subtitle1}</span>
            <span className="block">{data.subtitle2}</span>
          </div>

          <p className="font-pangram font-light text-xl md:text-[26.2px] leading-[1.2] text-black/80 dark:text-gray-300 tracking-[-0.02em] max-w-3xl">
            {data.description}
          </p>

          <div className="pt-8">
            <Button variant="primary" className="!bg-[#2B2B2B] !text-white hover:!bg-black dark:hover:!bg-gray-800 text-xl px-12 py-5 rounded-[10px]">
              {data.cta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
