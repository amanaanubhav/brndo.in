import { motion } from 'framer-motion';

const mediaPlaceholders = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
];

const testimonialData = [
  {
    name: 'Sarah Jenkins',
    role: 'CMO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Elevate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    text: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, Nexus',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: '"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  }
];

export default function Reviews() {
  const sets = [0, 1, 2];
  // To make infinite scroll seamless, we duplicate the sets
  const displaySets = [...sets, ...sets];

  return (
    <section id="reviews" className="min-h-screen py-16 md:py-20 flex flex-col justify-center bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full">

        {/* Header Block with Stats Box */}
        <div className="text-center max-w-5xl mx-auto mb-8 md:mb-10 px-6 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-pangram text-4xl md:text-6xl lg:text-[8rem] font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-transparent from-[15%] via-gray-500 dark:via-gray-300 via-50% to-transparent to-[85%] pb-0.75 whitespace-nowrap"
          >
            TESTIMONIALS
          </motion.h2>

          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brndo-lightRed dark:bg-brndo-red/10 rounded-md px-6 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-4xl gap-6 md:gap-4 shadow-sm border border-brndo-red/10"
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-pangram text-5xl md:text-6xl font-black text-brndo-red mb-1">24+</span>
              <span className="text-xs md:text-sm font-light text-gray-800 dark:text-gray-300 uppercase tracking-widest text-left">finalised projects</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-pangram text-5xl md:text-6xl font-black text-brndo-red mb-1">98%</span>
              <span className="text-xs md:text-sm font-light text-gray-800 dark:text-gray-300 uppercase tracking-widest text-left">client satisfaction rate</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-pangram text-5xl md:text-6xl font-black text-brndo-red mb-1">10M</span>
              <span className="text-xs md:text-sm font-light text-gray-800 dark:text-gray-300 uppercase tracking-widest text-left">gross revenue</span>
            </div>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden group py-2 mt-4 md:mt-6 w-full max-w-[1800px] mx-auto [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {displaySets.map((setItem, index) => (
              <div key={index} className="flex flex-row items-center gap-3 md:gap-6 px-2 md:px-3">

                {/* Media Block (Video/Photo Placeholder) */}
                <div className="relative rounded-2xl overflow-hidden w-[200px] h-[260px] md:w-[260px] md:h-[320px] shadow-md flex-shrink-0 bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 group/media cursor-pointer">
                  <img
                    src={mediaPlaceholders[setItem]}
                    alt="Product Media Placeholder"
                    className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 ease-out group-hover/media:scale-105 group-hover/media:brightness-100"
                  />
                  {/* Subtle overlay icon representing video play, purely aesthetic placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Block */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/40 dark:via-orange-950/40 dark:to-amber-950/40 border border-gray-100 dark:border-gray-800 shadow-md p-6 md:p-8 w-[280px] h-[260px] md:w-[380px] md:h-[320px] flex-shrink-0 flex flex-col justify-between cursor-default">

                  {/* Content Area */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <img src={testimonialData[setItem].image} alt="Profile" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
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

