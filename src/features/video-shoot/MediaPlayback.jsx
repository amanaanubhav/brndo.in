'use client';

import { Play, Volume2, Settings, Maximize, Subtitles, Monitor, MoreVertical, SkipForward } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function MediaPlayback() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-12 bg-white dark:bg-gray-950 flex flex-col items-center justify-center">
      <div 
        className="relative w-full max-w-[1280px] xl:max-w-[1650px] mx-auto bg-black rounded-[10px] md:rounded-[20px] overflow-hidden shadow-2xl group flex items-center justify-center cursor-pointer"
        style={{ aspectRatio: '4 / 3' }}
      >
        {/* Placeholder Background */}
        <div className="absolute inset-0 bg-black">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-[#111] opacity-90"></div>
        </div>

        {/* Central YouTube-style Play Button (Small and Black) */}
        <div className="relative z-10 w-12 h-8 md:w-[70px] md:h-[46px] bg-black/80 group-hover:bg-black rounded-lg md:rounded-xl flex items-center justify-center transition-colors duration-200 shadow-lg border border-gray-800 backdrop-blur-sm">
          <Play className="text-white w-4 h-4 md:w-7 md:h-7 ml-0.5 md:ml-1" fill="currentColor" />
        </div>

        {/* Top Controls Overlay */}
        <div className="absolute top-0 left-0 w-full p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-start z-10">
          <div className="text-white font-pangram text-sm md:text-2xl font-medium tracking-wide line-clamp-1 drop-shadow-md pr-4">
            BRNDO Professional Video Production Reel
          </div>
          <div className="flex items-center gap-4 text-white shrink-0">
            <button className="hover:text-gray-300 transition-colors"><MoreVertical className="w-5 h-5 md:w-6 md:h-6" /></button>
          </div>
        </div>

        {/* Bottom Controls Overlay */}
        <div className="absolute bottom-0 left-0 w-full pt-16 pb-1 md:pb-2 px-3 md:px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col z-10">
          
          {/* Scrubber / Timeline */}
          <div className="w-full h-[3px] md:h-1 bg-white/30 mb-2 md:mb-3 relative group/scrubber">
            {/* Hover bar (buffering or interaction) */}
            <div className="absolute top-0 left-0 h-full w-[45%] bg-white/50 hidden group-hover/scrubber:block transition-all"></div>
            {/* Red progress bar */}
            <div className="absolute top-0 left-0 h-full w-1/3 bg-[#FF0000]"></div>
            {/* Scrubber Dot */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3 h-3 md:w-4 md:h-4 bg-[#FF0000] rounded-full scale-0 group-hover/scrubber:scale-100 transition-transform duration-100"></div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-white pb-1">
            <div className="flex items-center gap-3 md:gap-5">
              <button className="hover:text-gray-300 transition-colors p-1">
                <Play className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" />
              </button>
              <button className="hover:text-gray-300 transition-colors hidden sm:block p-1">
                <SkipForward className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
              </button>
              <div className="hidden sm:flex items-center gap-2 group/volume cursor-pointer p-1">
                <Volume2 className="w-4 h-4 md:w-6 md:h-6" />
                <div className="w-0 overflow-hidden group-hover/volume:w-16 transition-all duration-300 ease-out flex items-center">
                  <div className="w-16 h-1 bg-white/40 rounded-full relative">
                    <div className="absolute top-0 left-0 w-2/3 h-full bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <span className="text-[10px] md:text-sm font-medium tracking-wide font-mono ml-1 md:ml-2">
                1:03 <span className="text-gray-400 mx-1">/</span> 3:14
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button className="hidden sm:block hover:text-gray-300 transition-colors p-1">
                <Subtitles className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              <button className="hover:text-gray-300 transition-colors p-1">
                <Settings className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="hidden sm:block hover:text-gray-300 transition-colors p-1">
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="hover:text-gray-300 transition-colors p-1">
                <Maximize className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 w-full flex justify-center">
        <Button href="/contact" variant="primary" className="bg-[#2B2B2B] hover:bg-black text-white px-12 py-4 rounded-[10px] font-pangram text-xl md:text-2xl font-light tracking-wide">
          Book a Free Call
        </Button>
      </div>
    </section>
  );
}
