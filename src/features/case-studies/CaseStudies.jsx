'use client';

import { motion } from 'framer-motion';

export default function CaseStudies({ data }) {
  if (!data) return null;

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">

        {/* Header Block */}
        <div className="text-center w-full -mb-4 md:-mb-10 relative z-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-pangram text-5xl md:text-7xl lg:text-[9rem] font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-400 dark:from-gray-400 via-gray-400/40 dark:via-gray-400/40 to-transparent pb-4 whitespace-nowrap"
          >
            {data.heading}
          </motion.h2>
        </div>

        {/* CSS Gradient Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto relative z-10 group overflow-hidden rounded-[20px] shadow-2xl border border-brndo-red/10 dark:border-brndo-red/20"
        >
          <div className="w-full min-h-[800px] flex flex-col p-6 sm:p-10 md:p-16 bg-gradient-to-br from-black via-[#1a0000] to-[#3a0000] relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 w-full h-full pointer-events-none transform transition-transform duration-1000 ease-out group-hover:scale-[1.02]">
               <div className="absolute inset-0 bg-black/40"></div>
               <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-brndo-red rounded-full blur-[130px] opacity-40 mix-blend-screen transition-transform duration-1000 group-hover:translate-x-8 group-hover:translate-y-8"></div>
               <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] bg-[#800000] rounded-full blur-[150px] opacity-50 mix-blend-screen transition-transform duration-1000 group-hover:-translate-x-8 group-hover:-translate-y-8"></div>
               <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-black rounded-full blur-[100px] opacity-80"></div>
               <div className="absolute top-[40%] right-[30%] w-[30%] h-[30%] bg-brndo-lightRed rounded-full blur-[100px] opacity-20 mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-[#D9D9D9] opacity-[0.03] mix-blend-overlay"></div>
             </div>

             {/* Content Layer */}
             <div className="relative z-10 flex flex-col w-full h-full gap-10 md:gap-14 flex-1">
                {/* Subheading */}
                <h3 className="font-pangram text-[20px] md:text-[28px] lg:text-[32px] leading-[1.1] md:leading-[60px] tracking-widest text-white font-thin md:whitespace-nowrap w-full">
                  {data.subheading}
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1">
                  {data.items.map((item, idx) => (
                    <div key={idx} className="border border-white rounded-[20px] flex flex-col overflow-hidden bg-white/5 backdrop-blur-sm group/card cursor-pointer transition-colors hover:bg-white/10 min-h-[300px] md:min-h-[344px]">
                      <div className="flex-1 w-[calc(100%+2px)] -ml-[1px] -mt-[1px] bg-transparent relative overflow-hidden border-b border-l border-r border-white rounded-b-[20px] z-10"></div>
                      <div className="h-[100px] md:h-[120px] flex flex-col justify-center px-6 md:px-8 bg-transparent -mt-[20px] pt-[20px]">
                        <span 
                          className="font-pangram text-[14px] md:text-[18px] lg:text-[20px] leading-[1.3] md:leading-[26px] tracking-wide text-white font-thin opacity-90"
                          dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none mix-blend-overlay rounded-[20px]"></div>
        </motion.div>

      </div>
    </section>
  );
}
