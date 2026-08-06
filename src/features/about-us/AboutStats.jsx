'use client';

import { motion } from 'framer-motion';

export default function AboutStats({ data }) {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/10 dark:bg-gray-900/10 border-2 border-black dark:border-white shadow-[5px_5px_5px_rgba(0,0,0,1)] dark:shadow-[5px_5px_5px_rgba(255,255,255,0.2)] rounded-[20px] p-8 aspect-square flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              <h3 className="font-pangram font-bold text-5xl md:text-7xl lg:text-[92px] leading-[1.09] tracking-[-0.04em] text-[#800000] dark:text-[#Ebd4cb]">
                {stat.number}
              </h3>
              <p className="font-pangram font-normal text-lg md:text-[21.7px] leading-[1.01] tracking-[-0.02em] text-black dark:text-white mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
