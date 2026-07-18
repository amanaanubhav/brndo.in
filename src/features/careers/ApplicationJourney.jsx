'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { careersData } from '@/data/careers';

export default function ApplicationJourney() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="The Journey" className="mb-16 md:mb-24" />
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-gray-200 via-brndo-red to-gray-200 dark:from-gray-800 dark:via-brndo-red dark:to-gray-800" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {careersData.applicationJourney.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 group-hover:border-brndo-red transition-colors duration-300 flex items-center justify-center mb-6 lg:mb-8 shadow-sm">
                  <span className="font-pangram text-xl md:text-2xl font-bold text-black dark:text-white">
                    {step.step}
                  </span>
                </div>
                
                <h4 className="font-pangram text-xl font-bold text-black dark:text-white mb-3">
                  {titleSplit(step.title)[0]}
                  <br className="hidden lg:block" />
                  {titleSplit(step.title)[1]}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper to split title for better wrapping if it's two words
function titleSplit(title) {
  const words = title.split(' ');
  if (words.length >= 2) {
    const firstPart = words.slice(0, Math.ceil(words.length / 2)).join(' ');
    const secondPart = words.slice(Math.ceil(words.length / 2)).join(' ');
    return [firstPart, secondPart];
  }
  return [title, ''];
}
