'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export default function HeroHeading({ 
  line1Prefix, 
  highlightStart, 
  icon, 
  highlightEnd, 
  line2,
  className
}) {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn("font-pangram text-4xl leading-none sm:text-5xl lg:text-6xl font-bold text-black dark:text-white tracking-wide mb-0 md:mb-4 sm:mb-6 flex flex-col items-center w-full", className)}
    >
      <span className="flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4 flex-nowrap whitespace-nowrap">
        {line1Prefix && <span className="block">{line1Prefix}</span>}
        <span className="text-brndo-darkRed flex items-center gap-3 md:gap-4 mt-2 md:mt-0">
          {highlightStart && <span>{highlightStart}</span>}
          {icon && (
            <img 
              src={icon} 
              alt="" 
              className="h-10 sm:h-12 lg:h-[60px] w-auto object-contain rounded-full sm:rounded-[20px] shadow-sm" 
            />
          )}
          {highlightEnd && <span>{highlightEnd}</span>}
        </span>
      </span>
      {line2 && <span className="block mt-2 sm:mt-3">{line2}</span>}
    </motion.h1>
  );
}
