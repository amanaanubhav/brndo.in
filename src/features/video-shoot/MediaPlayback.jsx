'use client';

import { Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function MediaPlayback() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-white dark:bg-gray-950 flex flex-col items-center justify-center">
      {/* 
        Based on user dimensions:
        width: 1280; max-width: 1650; height: 851; border-radius: 20px;
        We translate this to responsive Tailwind classes.
      */}
      <div 
        className="relative w-full max-w-[1280px] xl:max-w-[1650px] aspect-video md:h-[851px] bg-black rounded-[20px] overflow-hidden shadow-2xl group flex items-center justify-center"
      >
        {/* Placeholder background (can be replaced with image or video tag) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black pointer-events-none"></div>

        {/* Play Button */}
        <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/30 transition-all duration-300">
          <Play className="text-white w-10 h-10 md:w-12 md:h-12 ml-2" fill="currentColor" />
        </div>

        {/* Optional text or overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="mt-12 md:mt-16 w-full flex justify-center">
        <Button href="/contact" variant="primary" className="bg-[#2B2B2B] hover:bg-black text-white px-12 py-4 rounded-[10px] font-pangram text-xl md:text-2xl font-light tracking-wide">
          Book a Free Call
        </Button>
      </div>
    </section>
  );
}
