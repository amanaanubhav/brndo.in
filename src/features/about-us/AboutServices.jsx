'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutServices({ data }) {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Title */}
        <div className="w-full flex justify-start mb-8 md:mb-16">
          <h2 className="font-pangram font-normal text-[40px] sm:text-[48px] md:text-[80px] lg:text-[100px] leading-[1.05] md:leading-[1.05] tracking-[-0.02em] text-black dark:text-white max-w-[473px] md:max-w-[700px] lg:max-w-[900px] text-left">
            Everything Your<br />Brand Needs
          </h2>
        </div>

        {/* Stacked Cards */}
        <div className="w-full flex flex-col items-center gap-6 md:-space-y-4 pt-8">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group w-full min-h-[128px] md:min-h-0 md:h-[180px] py-6 md:py-0 rounded-[20px] flex items-center px-8 md:px-16 ${item.bg} rotate-[0.29deg] hover:scale-[1.01] transition-transform duration-300 shadow-xl`}
              style={{ zIndex: data.items.length - idx }}
            >
              <div className="w-full flex justify-between items-center">
                <h3 className="font-pangram font-medium text-[32px] sm:text-4xl md:text-6xl lg:text-[97px] leading-[1.1] md:leading-[1.13] tracking-[-0.02em] text-white">
                  {item.title.includes(' ') ? (
                    <>
                      {item.title.split(' ')[0]}
                      <br className="md:hidden" />
                      <span className="hidden md:inline"> </span>
                      {item.title.split(' ').slice(1).join(' ')}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
                {/* Thick sleek arrow on the right - Only on Branding Design */}
                {item.title === 'Branding Design' && (
                  <div className="flex items-center justify-center text-white mr-0 sm:mr-4 md:mr-8 group-hover:translate-x-2 transition-transform duration-300">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
