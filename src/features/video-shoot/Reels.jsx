'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';

const placeholderReels = [
  { id: 1, title: 'Video Shoot 1' },
  { id: 2, title: 'Video Shoot 2' },
  { id: 3, title: 'Video Shoot 3' },
  { id: 4, title: 'Video Shoot 4' },
  { id: 5, title: 'Video Shoot 5' },
];

export default function Reels() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-12 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden flex flex-col">
      {/* Restored heading with reduced gap and higher z-index to prevent disappearing */}
      <div className="w-full max-w-[1400px] mx-auto mb-2 md:-mb-10 relative z-20 pointer-events-none flex justify-center">
        <SectionHeading title={sectionHeadings.videoShootOurWork} className="!mb-0" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full flex items-center gap-4 relative z-10">
        
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-full shadow-md border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:gap-6 overflow-x-hidden md:overflow-x-auto md:snap-x md:snap-mandatory hide-scrollbar py-4 md:py-8 px-2 mx-auto justify-items-center w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {placeholderReels.map((reel, index) => (
              <motion.button
                key={reel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => console.log(`Clicked on ${reel.title}`)}
                className={`snap-center shrink-0 w-full max-w-[177px] aspect-[177/313] md:w-[260px] lg:w-[300px] md:aspect-[9/16] md:max-w-none bg-black md:bg-gray-100 dark:md:bg-gray-900 rounded-[10px] md:rounded-[20px] relative overflow-hidden group shadow-md border border-gray-800 md:border-gray-200 dark:md:border-gray-800 text-left cursor-pointer hover:shadow-xl transition-all ${index === 4 ? 'hidden md:block' : 'block'}`}
              >
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-6 text-center z-10">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-[#2B2B2B] rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="text-white ml-0.5 md:ml-1 w-5 h-5 md:w-8 md:h-8" fill="currentColor" />
                  </div>
                  <h3 className="font-pangram text-sm md:text-xl font-medium text-white md:text-gray-800 dark:md:text-gray-200">
                    {reel.title}
                  </h3>
                  <p className="font-pangram text-[10px] md:text-sm font-light text-gray-400 md:text-gray-500 dark:md:text-gray-400 mt-1 md:mt-2">
                    Media will be added here
                  </p>
                </div>
                
                {/* Decorative Yellow Bar (like TikTok/Reels timeline) */}
                <div className="absolute bottom-[20px] left-[10%] right-[10%] h-[3px] bg-gray-700 rounded-full md:hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[#FFC107] rounded-full"></div>
                </div>
                
                {/* Gradient Overlay for aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/20 to-transparent pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-full shadow-md border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
