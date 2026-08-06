'use client';

import HeroHeading from '@/components/ui/HeroHeading';
import HeroSubheading from '@/components/ui/HeroSubheading';
import Button from '@/components/ui/Button';
import LogoScroll from '@/components/ui/LogoScroll';
import { motion } from 'framer-motion';

export default function AboutHero({ data }) {
  const headingProps = {
    line1Prefix: data.subtitle1,
    line2: data.subtitle2
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-16 overflow-hidden transition-colors duration-300">
      
      {/* Background Styling: Premium Gradients & Grid (matching Hero.jsx) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brndo-red/5 dark:bg-brndo-red/5 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-evenly md:justify-start items-center text-center w-full min-h-[60vh] md:min-h-0 relative z-10">
        
        {/* "Meet BRNDO" Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center border border-[#800000] rounded-[5px] mb-4 z-20"
          style={{ width: '151px', height: '38px', opacity: 1 }}
        >
          <span className="font-pangram text-[15px] sm:text-base font-medium tracking-wide text-[#800000] uppercase">
            {data.title}
          </span>
        </motion.div>
        
        {/* Title */}
        <HeroHeading {...headingProps} className="text-4xl md:text-6xl lg:text-7xl xl:text-[76px] !leading-[1.1] max-w-4xl mx-auto" />

        {/* Subtitles & Description */}
        <HeroSubheading className="mb-0 md:mb-10 sm:mb-12 mt-6 max-w-3xl text-base md:text-lg">
          {data.description}
        </HeroSubheading>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button href="/contact" variant="primary">
            {data.cta}
          </Button>
        </motion.div>

        {/* Client Logos Auto-Scrolling Carousel */}
        <div className="w-full relative z-10 mt-16 md:mt-24">
          <LogoScroll />
        </div>
      </div>
    </section>
  );
}
