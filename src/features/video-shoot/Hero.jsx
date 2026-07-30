'use client';

import HeroHeading from '@/components/ui/HeroHeading';
import HeroSubheading from '@/components/ui/HeroSubheading';
import Button from '@/components/ui/Button';
import LogoScroll from '@/components/ui/LogoScroll';
import { heroData } from '@/data/hero';

export default function Hero() {
  const data = heroData.videoShoot;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-8 overflow-hidden transition-colors duration-300">
      {/* Background Styling */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brndo-red/5 dark:bg-brndo-red/5 blur-[150px]" />

        {/* Subtle grid pattern for texture */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>

        {/* Background Text: VIDEO PRODUCTION */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none overflow-hidden">
          <span className="font-pangram text-[80px] md:text-[160px] font-black tracking-[0.15em] md:tracking-[0.3em] whitespace-nowrap text-gray-500">
            V I D E O &nbsp; P R O D U C T I O N
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center relative z-10 w-full">
        
        {/* Desktop Heading */}
        <div className="hidden md:block w-full">
          <HeroHeading {...data.heading} />
        </div>

        {/* Mobile Heading */}
        <h1 className="md:hidden font-pangram text-[2rem] sm:text-4xl leading-[1.2] font-bold text-black dark:text-white tracking-wide flex flex-col items-center w-full">
          <span className="flex items-center justify-center gap-2 w-full">
            Professional 
            {data.heading.icon && (
              <img 
                src={data.heading.icon} 
                alt="" 
                className="h-10 sm:h-12 w-auto object-contain rounded-full shadow-sm" 
              />
            )}
          </span>
          <span className="text-brndo-darkRed mt-3 w-full text-center">
            Video Production
          </span>
          <span className="mt-3 w-full text-center">
            Services for Business
          </span>
        </h1>
        
        <HeroSubheading className="mt-8 mb-8 md:mt-0 md:mb-10">
          {data.subheading}
        </HeroSubheading>

        <Button href="/contact" variant="primary">
          Book a Free Call
        </Button>

        <div className="mt-12 md:mt-6 md:-mb-10 text-brndo-darkRed font-semibold text-sm md:text-base tracking-wider text-center leading-loose">
          Trusted by 20+ Brands for <br className="md:hidden" /> Video Production
        </div>

        {/* Logo Scroll Marquee */}
        <LogoScroll />
      </div>
    </section>
  );
}
