'use client';

import LogoScroll from '@/components/ui/LogoScroll';
import HeroHeading from '@/components/ui/HeroHeading';
import HeroSubheading from '@/components/ui/HeroSubheading';
import { heroData } from '@/data/hero';

export default function PerformanceHero() {
  const data = heroData.performanceMarketing;

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-16 overflow-hidden transition-colors duration-300">
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

      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center w-full min-h-[60vh] md:min-h-0 relative z-10">

        {/* Hero Title Area */}
        <HeroHeading {...data.heading} />

        {/* Hero Subheading */}
        <HeroSubheading className="mb-8 md:mb-12">
          {data.subheading}
        </HeroSubheading>

        {/* Client Logos Auto-Scrolling Carousel */}
        <LogoScroll />
      </div>
    </section>
  );
}
