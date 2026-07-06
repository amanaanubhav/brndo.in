import { motion } from 'framer-motion';

const mediaPlaceholders = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
];

export default function Reviews() {
  const sets = [0, 1, 2];
  // To make infinite scroll seamless, we duplicate the sets
  const displaySets = [...sets, ...sets];

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-pangram text-3xl md:text-5xl font-black text-black dark:text-white tracking-tighter uppercase mb-6"
          >
            Our Results <span className="text-brndo-red">Speak Loudest</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 font-light"
          >
            We don't focus on vanity metrics. We measure our performance based on scale, enterprise value, and profit margins.
          </motion.p>
        </div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden group py-4">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {displaySets.map((setItem, index) => (
              <div key={index} className="flex flex-row items-center gap-3 md:gap-6 px-2 md:px-3">
                
                {/* Media Block (Video/Photo Placeholder) */}
                <div className="relative rounded-2xl overflow-hidden w-[200px] h-[280px] md:w-[260px] md:h-[350px] shadow-md flex-shrink-0 bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 group/media cursor-pointer">
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
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/40 dark:via-orange-950/40 dark:to-amber-950/40 border border-gray-100 dark:border-gray-800 shadow-md p-6 md:p-8 w-[240px] h-[280px] md:w-[320px] md:h-[350px] flex-shrink-0 flex items-center justify-center cursor-default">
                  
                  {/* Bottom Left Text */}
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 font-pangram font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs z-10">
                    What client says
                  </div>
                  
                  {/* Blank Content Area */}
                  <div className="flex-1 w-full h-full min-h-[200px]"></div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
