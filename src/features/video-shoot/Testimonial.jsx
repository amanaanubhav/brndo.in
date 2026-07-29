import { motion } from 'framer-motion';

const mediaPlaceholders = [
  'https://images.unsplash.com/photo-1601506521937-0121a7fe2b6c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1590130638520-22c60815eb07?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1627918451108-7243c7b649df?auto=format&fit=crop&w=600&q=80'
];

const testimonialData = [
  {
    name: 'David Carter',
    role: 'Marketing Director, Vora',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: '"BRNDO completely elevated our brand with their stunning video production. The cinematography and attention to detail during the shoot were simply world-class."'
  },
  {
    name: 'Jessica Lee',
    role: 'Creative Lead, Nova',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    text: '"Working with BRNDO\'s videography team was incredible. They brought our vision to life with professional lighting, crisp audio, and flawless post-production."'
  },
  {
    name: 'Marcus Wright',
    role: 'CEO, NextGen',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: '"The commercial shoot BRNDO handled for us was flawless from pre-production to the final cut. Their video professionals are unmatched in the industry."'
  }
];

export default function Testimonial() {
  const sets = [0, 1, 2];
  // To make infinite scroll seamless, we duplicate the sets
  const displaySets = [...sets, ...sets];

  return (
    <section className="py-16 md:py-20 flex flex-col justify-center bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full">
        {/* Marquee Container */}
        <div className="flex overflow-hidden group py-2 w-full max-w-[1800px] mx-auto [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {displaySets.map((setItem, index) => (
              <div key={index} className="flex flex-row items-center gap-3 md:gap-6 px-2 md:px-3">
                {/* Media Block (Colored Placeholder) */}
                <div className="relative rounded-2xl overflow-hidden w-[200px] h-[260px] md:w-[260px] md:h-[320px] shadow-md flex-shrink-0 bg-brndo-lightRed border border-red-200 dark:border-red-900/50 group/media cursor-pointer flex items-center justify-center">
                  
                  {/* Subtle overlay icon representing video play */}
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover/media:scale-110">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Testimonial Block */}
                <div className="relative rounded-2xl overflow-hidden bg-brndo-lightRed dark:bg-brndo-red/20 border border-brndo-red/10 dark:border-brndo-red/30 shadow-md p-6 md:p-8 w-[280px] h-[260px] md:w-[380px] md:h-[320px] flex-shrink-0 flex flex-col justify-between cursor-default">
                  {/* Content Area */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar Placeholder */}
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm bg-brndo-lightRed flex items-center justify-center text-white font-bold text-lg">
                        {testimonialData[setItem].name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-gray-100 text-sm md:text-base">{testimonialData[setItem].name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{testimonialData[setItem].role}</span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic line-clamp-4 font-light">
                      {testimonialData[setItem].text}
                    </p>
                  </div>

                  {/* Bottom Left Button */}
                  <div className="mt-auto pt-4 self-start">
                    <button className="bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-md text-xs md:text-sm font-semibold uppercase hover:bg-gray-900 dark:bg-brndo-red dark:hover:bg-brndo-darkRed cursor-pointer transition-colors shadow-sm">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
