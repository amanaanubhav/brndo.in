'use client';

import { motion } from 'framer-motion';

export default function CareersHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-[#F5F5F5]">
      {/* Background Styling */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brndo-red/5 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-evenly flex-1 text-center w-full max-w-5xl mx-auto px-4 py-12">
        
        {/* Pill / Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center bg-white border border-[#800000] rounded-[5px] px-4 py-1.5"
          style={{
            width: 'fit-content'
          }}
        >
          <span 
            className="font-pangram text-[#800000] text-center tracking-[-0.02em]"
            style={{
              fontWeight: 336,
              fontSize: '16.19px',
              lineHeight: '17px'
            }}
          >
            Our Career
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pangram text-black text-center tracking-[-0.02em] flex flex-col items-center gap-4"
          style={{
            fontWeight: 617,
            fontSize: '69px',
            lineHeight: '75px'
          }}
        >
          <span>We’re With You on</span>
          <span className="inline-flex items-center gap-4">
            Your <span className="text-[#800000]">Career</span>
            <img 
              src="/car-hero.png" 
              alt="Icon" 
              className="w-[52px] h-[50px] object-cover rounded-md inline-block align-middle"
              style={{ objectFit: 'cover' }}
            />
            <span className="text-[#800000]">Journey</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-pangram text-black text-center tracking-[-0.02em] max-w-3xl"
          style={{
            fontWeight: 400,
            fontSize: '26.2px',
            lineHeight: '31px'
          }}
        >
          Lorem ipsum is a dummy or placeholder text commonly used in <br className="hidden md:block" /> graphic design, publishing, and web development.
        </motion.p>

      </div>
    </section>
  );
}
