import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden transition-colors duration-300">
      {/* Premium Background Gradients & Grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brndo-red/5 dark:bg-brndo-red/5 blur-[150px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center w-full relative z-10">
        
        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tighter leading-[1.1] mb-12 uppercase"
        >
          <span className="whitespace-nowrap">Your Partner In <span className="text-brndo-red">Digital Design</span></span> <br className="hidden sm:block"/>
          & Development
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href="#contact" className="flex items-center justify-center border border-black bg-black text-white px-8 py-3 rounded-md text-sm font-semibold tracking-wide transition-colors hover:bg-white hover:text-black w-full sm:w-auto">
            Book a Free Call
          </a>

          <a href="#how-it-works" className="flex items-center justify-center bg-brndo-lightRed text-black px-8 py-3 rounded-md text-sm font-semibold tracking-wide transition-colors hover:bg-[#d9a3a3] w-full sm:w-auto">
            How it Works
          </a>
        </motion.div>
      </div>
      
      {/* Required for shine animation on button */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </section>
  );
}
