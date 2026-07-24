'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function SMMABottomCTA() {
  const stats = [
    { number: "26+", label: "Finalized Projects" },
    { number: "26+", label: "Finalized Projects" },
    { number: "26+", label: "Finalized Projects" }
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Massive Background/Foreground Text */}
      <div className="relative w-full flex justify-center items-center my-12 mb-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-pangram text-5xl md:text-[80px] lg:text-[120px] font-black leading-none text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-800 tracking-tight"
        >
          Your Partner in Digital<br />Design & Development
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* How it Works / CTA Area */}
        <div className="flex flex-col items-center justify-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-pangram text-2xl md:text-3xl font-light mb-8 text-black dark:text-white"
          >
            How it Works
          </motion.h3>
          
          <Button href="/contact" variant="primary" className="text-xl px-12 py-5 rounded-[10px]">
            Book a Free Call
          </Button>
        </div>

        {/* 26+ Finalized Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-black/20 border-2 border-black dark:border-white/20 rounded-[20px] p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] flex flex-col justify-center items-end text-right transition-transform hover:-translate-y-2 hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[15px_15px_0px_0px_rgba(255,255,255,0.2)]"
            >
              <h4 className="font-pangram font-bold text-6xl md:text-7xl lg:text-[92px] text-[#800000] leading-none mb-4">
                {stat.number}
              </h4>
              <p className="font-pangram text-2xl md:text-3xl text-black dark:text-white leading-tight font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
