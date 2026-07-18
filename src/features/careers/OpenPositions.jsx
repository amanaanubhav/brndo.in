'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { careersData } from '@/data/careers';

export default function OpenPositions() {
  return (
    <section className="py-24 bg-[#d9d9d9]/20 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 md:px-8 flex flex-col items-center">
        
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
            Open Roles
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pangram text-black text-center tracking-[-0.02em] mb-4"
          style={{ fontWeight: 617, fontSize: '42.6px', lineHeight: '43px' }}
        >
          Find your place on the team
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-pangram text-black text-center tracking-[-0.02em] mb-16 max-w-2xl"
          style={{ fontWeight: 336, fontSize: '16.2px', lineHeight: '17px' }}
        >
          Explore Current Openings Social Media Marketing, Creative Agency
        </motion.p>

        {/* Job List */}
        <div className="w-full max-w-[1121px] flex flex-col gap-6">
          {careersData.openPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl md:rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-300 min-h-[177px] border border-gray-100"
            >
              {/* Left Column: Title & Info */}
              <div className="flex flex-col gap-2 md:gap-3">
                {/* Title */}
                <h3 className="font-pangram text-2xl md:text-3xl font-normal text-black tracking-[-0.02em]">
                  {position.title}
                </h3>
                
                {/* Location & Closes */}
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 font-normal">
                  <span className="flex items-center gap-1.5">
                    {position.location}
                  </span>
                  <span className="text-gray-400 hidden md:block">•</span>
                  <span className="text-gray-500">Closes {position.closes}</span>
                </div>

                {/* Tags: Full Time & New */}
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <div className="flex items-center justify-center bg-[#D9D9D9]/50 rounded-[5px] px-4 py-1">
                    <span 
                      className="font-pangram text-black text-center tracking-[-0.02em]"
                      style={{ fontWeight: 336, fontSize: '16.19px', lineHeight: '17px' }}
                    >
                      {position.type}
                    </span>
                  </div>
                  
                  {position.isNew && (
                    <div className="flex items-center justify-center bg-white border border-[#800000] rounded-[5px] px-4 py-1">
                      <span 
                        className="font-pangram text-[#800000] text-center tracking-[-0.02em]"
                        style={{ fontWeight: 336, fontSize: '16.19px', lineHeight: '17px' }}
                      >
                        New
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
                <Button variant="primary" href={position.link} className="w-full sm:w-auto rounded-[8px] px-8">
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
