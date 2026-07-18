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
          className="font-pangram text-black tracking-[-0.02em] mb-4"
          style={{ fontSize: '69px', fontWeight: 617, lineHeight: '75px' }}
        >
          Privacy Policy
        </motion.h1>

        {/* Date */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-pangram text-black tracking-[-0.02em] mb-16"
          style={{ fontSize: '26.2px', fontWeight: 336, lineHeight: '31px' }}
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
          <div className="relative flex-grow w-full">
            <input 
              type="text" 
              placeholder="Search any topic..." 
              className="w-full px-8 py-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-[#800000] font-pangram text-[18px] transition-colors placeholder:text-gray-400 text-black shadow-sm"
              style={{ fontWeight: 400 }}
            />
          </div>
          
          {/* Buttons */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full font-pangram text-black bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 shadow-sm text-center flex-1 sm:flex-none"
              style={{ fontWeight: 500, fontSize: '18px' }}
            >
              Contact Us
            </a>
            <button 
              className="px-8 py-4 rounded-full font-pangram text-white bg-black border border-black hover:bg-gray-800 transition-colors duration-300 shadow-sm flex-1 sm:flex-none"
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
