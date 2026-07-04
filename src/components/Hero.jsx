import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import LogoScroll from './LogoScroll';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-48 pb-20 overflow-hidden transition-colors duration-300">
      {/* Background Styling: Premium Gradients & Grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brndo-red/5 dark:bg-brndo-red/5 blur-[150px]" />

        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center w-full relative z-10">

        {/* Hero Title Area */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pangram text-2xl sm:text-4xl lg:text-5xl font-black text-black tracking-tighter leading-[1.2] mb-20 uppercase flex flex-col items-center w-full"
        >
          <span className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-nowrap whitespace-nowrap">
            <span>Your Partner In</span>
            <span className="text-brndo-red flex items-center gap-2 sm:gap-3 md:gap-4">
              <span>Digital</span>
              <img 
                src="/image.png" 
                alt="" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain rounded-md" 
              />
              <span>Design</span>
            </span>
          </span>
          <span className="block mt-2 sm:mt-3">& Development</span>
        </motion.h1>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto"
        >
          {/* Primary CTA Button */}
          <a href="#contact" className="font-pangram flex items-center justify-center bg-black text-white px-10 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)] w-full sm:w-auto">
            Book a Free Call
          </a>

          {/* Secondary CTA Button */}
          <a href="#how-it-works" className="font-pangram flex items-center justify-center bg-brndo-lightRed text-black px-10 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[4px_4px_12px_rgba(0,0,0,0.1)] w-full sm:w-auto">
            How it Works
          </a>
        </motion.div>

        {/* Client Logos Auto-Scrolling Carousel */}
        <LogoScroll />
      </div>
    </section>
  );
}
