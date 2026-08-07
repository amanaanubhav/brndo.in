'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function AboutStats({ data }) {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Optional Title - omitted if data doesn't provide one, but good to have a container */}
        
        <div className="w-full flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-8 relative z-10">

          {data.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-full sm:w-[297px] h-[301px] bg-white/10 border border-gray-200 dark:border-gray-800 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.06)] dark:shadow-[5px_5px_5px_0px_rgba(255,255,255,0.03)] rounded-[20px] p-[32px] flex flex-col justify-between items-start text-left shrink-0"
            >
              <h3 className="font-pangram font-bold text-[92px] leading-[100px] tracking-[-0.04em] text-[#800000] dark:text-[#Ebd4cb]">
                {stat.number}
              </h3>
              <p className="font-pangram font-normal text-[21.7px] leading-[22px] tracking-[-0.02em] text-black dark:text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="w-full mt-10 flex sm:hidden justify-center relative z-10">
          <Button href="/contact" variant="primary">Book a free call</Button>
        </div>
      </div>
    </section>
  );
}
