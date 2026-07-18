'use client';

import { motion } from 'framer-motion';
import { careersData } from '@/data/careers';

export default function ApplicationJourney() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Pill / Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center bg-white border border-[#800000] rounded-[5px] px-4 py-1.5 mb-6"
          style={{ width: 'fit-content' }}
        >
          <span 
            className="font-pangram text-[#800000] text-center tracking-[-0.02em]"
            style={{ fontWeight: 336, fontSize: '16.19px', lineHeight: '17px' }}
          >
            Step by Step
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pangram text-black text-center tracking-[-0.02em] mb-4"
          style={{ fontWeight: 617, fontSize: '69px', lineHeight: '75px' }}
        >
          Application Journey
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-pangram text-black text-center tracking-[-0.02em] mb-24 max-w-3xl"
          style={{ fontWeight: 336, fontSize: '26.2px', lineHeight: '31px' }}
        >
          Fast, Clear and Modern Hiring Process
        </motion.p>

        {/* Timeline Container */}
        <div className="w-full max-w-[1124px] relative">
          
          {/* Horizontal Line */}
          <div className="absolute top-[11px] left-0 w-full h-[1px] bg-[#800000] hidden md:block" />

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 relative z-10">
            {careersData.applicationJourney.map((step, index) => (
              <div key={step.step} className="flex items-center w-full md:w-auto">
                
                {/* Step Item */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center flex-shrink-0"
                  style={{ width: '134px' }} // fixed width for alignment based on max image size
                >
                  {/* Circle */}
                  <div className="w-[23px] h-[23px] rounded-full bg-white border border-[#800000] flex items-center justify-center mb-10 shadow-sm relative z-10">
                    <span className="text-[10px] font-bold text-[#800000]">{step.step}</span>
                  </div>

                  {/* Image Box Placeholder */}
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-200"
                       style={{ 
                         width: getImageWidth(index), 
                         height: '81px' 
                       }}>
                     {/* Replace with actual image <img src={step.image} ... /> */}
                     <span className="text-gray-400 text-xs">img</span>
                  </div>

                  {/* Title */}
                  <h4 
                    className="font-pangram text-black text-center tracking-[-0.02em]"
                    style={{ fontWeight: 600, fontSize: '16.19px', lineHeight: '17px' }}
                  >
                    {titleSplit(step.title)[0]}
                    <br />
                    {titleSplit(step.title)[1]}
                  </h4>
                </motion.div>

                {/* Swipe Arrow (Between Steps) */}
                {index < careersData.applicationJourney.length - 1 && (
                  <div className="hidden md:flex flex-grow justify-center -mt-24 px-4">
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L8 8.5L1 16" stroke="#800000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Helpers
function titleSplit(title) {
  const words = title.split(' ');
  if (words.length >= 2) {
    // If exact titles from the design, force specific breaks
    if (title === "HR Review") return ["HR", "Review"];
    if (title === "Candidate Pool") return ["Candidate", "Pool"];
    if (title === "Application Completion") return ["Application", "Completion"];
    if (title === "Fast Form") return ["Fast", "Form"];
    return [title, ''];
  }
  return [title, ''];
}

function getImageWidth(index) {
  const widths = ['61px', '59px', '76px', '123px', '80px', '134px'];
  return widths[index] || '80px';
}
