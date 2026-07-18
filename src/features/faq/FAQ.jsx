'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Button from '@/components/ui/Button';
import { buttonData } from '@/data/buttons';
import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';

export default function FAQ({ data, showCta = true }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">

        {/* Header Block */}
        <SectionHeading title={sectionHeadings.faq} className="-mb-4 md:-mb-10" />

        {/* FAQ Blocks Container */}
        <div className="w-full max-w-4xl mx-auto space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {data.items.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-brndo-lightRed dark:bg-brndo-red/10 border border-brndo-red/10 rounded-xl overflow-hidden shadow-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 dark:text-white text-base md:text-lg pr-4 transition-colors">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-brndo-red" />
                      ) : (
                        <Plus className="w-4 h-4 text-black dark:text-white" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 font-light leading-relaxed border-t border-brndo-red/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Button */}
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 relative z-10"
          >
            <Button href="/contact" variant="primary" className="px-8 py-4 sm:px-12 sm:py-5 text-base sm:text-lg">
              {buttonData.hero.primary}
            </Button>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}
