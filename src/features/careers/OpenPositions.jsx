'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { careersData } from '@/data/careers';

export default function OpenPositions() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Find Your Place" className="mb-16 md:mb-24" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {careersData.openPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="font-pangram text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{position.department}</span>
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{position.location}</span>
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{position.type}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                {position.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <Button variant="primary" href={position.link} className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
