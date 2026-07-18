'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function PrivacyHero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden bg-white">
      
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center mt-[-10vh]">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-pangram text-black tracking-[-0.03em] mb-4"
          style={{ fontSize: '92px', fontWeight: 336, lineHeight: '100px' }}
        >
          Privacy Policy
        </motion.h1>

        {/* Date */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-pangram font-normal text-black tracking-[-0.02em] mb-16"
          style={{ fontSize: '26.2px', lineHeight: '31px' }}
        >
          Latest Update : 24 June 2025
        </motion.p>

        {/* Search & Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mx-auto"
        >
          {/* Search Bar */}
          <div className="relative flex-grow w-full flex items-center">
            {/* Outline Magnifying Glass Icon */}
            <div className="absolute left-4 text-gray-400 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <input 
              type="text" 
              placeholder="Search any topic..." 
              className="w-full pl-12 pr-6 py-4 rounded-[8px] border border-gray-300 bg-white focus:outline-none focus:border-[#800000] font-pangram text-[18px] transition-colors placeholder:text-gray-400 text-black shadow-sm"
              style={{ fontWeight: 400 }}
            />
          </div>
          
          {/* Buttons */}
          <div className="flex items-center w-full sm:w-auto">
            <button 
              className="px-10 py-4 rounded-[8px] font-pangram text-white bg-black border border-black hover:bg-gray-800 transition-colors duration-300 shadow-sm flex-1 sm:flex-none"
              style={{ fontWeight: 500, fontSize: '18px' }}
            >
              Search
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
