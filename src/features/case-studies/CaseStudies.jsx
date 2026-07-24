'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';
import GlobalGradient from '@/components/ui/GlobalGradient';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudies({ data }) {
  const [selectedStudy, setSelectedStudy] = useState(null);

  if (!data) return null;

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">

        {/* Header Block */}
        <SectionHeading title={sectionHeadings.caseStudies} className="-mb-4 md:-mb-10" />

        {/* CSS Gradient Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto relative z-10 shadow-2xl border border-brndo-red/10 dark:border-brndo-red/20 rounded-[20px]"
        >
          <GlobalGradient className="w-full min-h-[800px] flex flex-col p-6 sm:p-10 md:p-16 rounded-[20px]">
             {/* Content Layer */}
             <div className="flex flex-col w-full h-full gap-10 md:gap-14 flex-1">
                {/* Subheading */}
                <h3 
                  className="font-pangram text-[20px] md:text-[28px] lg:text-[32px] leading-[1.1] md:leading-[60px] tracking-widest text-white font-thin md:whitespace-nowrap w-full"
                  dangerouslySetInnerHTML={{ __html: data.subheading }}
                />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1">
                  {data.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedStudy(item)}
                      className="border border-white rounded-[20px] flex flex-col overflow-hidden bg-white/5 backdrop-blur-sm group/card cursor-pointer transition-all hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl hover:shadow-brndo-red/10 min-h-[300px] md:min-h-[344px]"
                    >
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
          </GlobalGradient>
        </motion.div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!selectedStudy}
        onClose={() => setSelectedStudy(null)}
        caseStudy={selectedStudy}
      />
    </section>
  );
}
