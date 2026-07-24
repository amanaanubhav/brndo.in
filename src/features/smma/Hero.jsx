'use client';

import HeroHeading from '@/components/ui/HeroHeading';
import HeroSubheading from '@/components/ui/HeroSubheading';
import Button from '@/components/ui/Button';
import { heroData } from '@/data/hero';

export default function SMMAHero() {
  const data = heroData.smma;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden transition-colors duration-300">
      {/* Background Styling */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        
        {/* Background Text: AB MARKETING */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none overflow-hidden">
          <span className="font-pangram text-[100px] md:text-[200px] font-black tracking-[0.2em] md:tracking-[0.5em] whitespace-nowrap text-gray-500">
            A B M A R K E T I N G
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center relative z-10 w-full">
        
        <HeroHeading {...data.heading} />
        
        <HeroSubheading className="mb-8 md:mb-12">
          {data.subheading}
        </HeroSubheading>

        <Button href="/contact" variant="primary">
          Book a free call
        </Button>
      </div>
    </section>
  );
}
