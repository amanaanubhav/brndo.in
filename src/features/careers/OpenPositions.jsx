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
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-pangram text-2xl md:text-3xl font-bold text-black">
                    {position.title}
                  </h3>
                  {position.isNew && (
                    <span className="bg-[#800000] text-white text-xs font-bold px-2 py-1 rounded-[4px] uppercase tracking-wide">
                      New
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {position.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {position.type}
                  </span>
                  <span className="text-gray-400 hidden md:block">•</span>
                  <span className="text-gray-500">Closes {position.closes}</span>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
                <a href={position.contactLink} className="font-pangram font-bold text-black hover:text-[#800000] transition-colors whitespace-nowrap text-sm sm:text-base hidden sm:block px-4">
                  Contact Us
                </a>
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
