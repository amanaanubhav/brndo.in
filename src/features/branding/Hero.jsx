'use client';

import HeroHeading from '@/components/ui/HeroHeading';
import HeroSubheading from '@/components/ui/HeroSubheading';
import Button from '@/components/ui/Button';
import LogoScroll from '@/components/ui/LogoScroll';
import { ArrowRight } from 'lucide-react';

export default function BrandingHero() {
  const data = {
    heading: {
      line1Prefix: "Your Next",
      highlightStart: "",
      icon: "/a-woman-is-writing-on-a-piece-of-paper-photo.jpeg",
      highlightEnd: "Big Brand",
      line2: (
        <span className="flex items-center justify-center gap-2 sm:gap-3">
          Starts Here <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brndo-red" strokeWidth={3} />
        </span>
      )
    },
    subheading: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[700px] flex flex-col overflow-hidden transition-colors duration-300 pt-24 pb-8">
      {/* Background Styling */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        
        {/* Background Text: BRANDING */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none overflow-hidden">
          <span className="font-pangram text-[100px] md:text-[200px] font-black tracking-[0.2em] md:tracking-[0.5em] whitespace-nowrap text-gray-500">
            B R A N D I N G
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between items-center text-center relative z-10 w-full max-w-[1197px] mx-auto px-4 md:px-12 h-full">
        
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto">
          <HeroHeading {...data.heading} />
          
          <HeroSubheading className="mt-6 md:mt-8 mb-8 md:mb-12 max-w-[739px] font-[336] text-[18px] md:text-[26.2px] leading-tight md:leading-[31px]">
            {data.subheading}
          </HeroSubheading>

          <Button href="/contact" variant="primary" className="px-[40px] py-[16px] md:px-[60px] md:py-[21px] bg-[#2B2B2B] text-white rounded-[10px] !w-auto">
            Book a Free Call
          </Button>
        </div>

        {/* Logo Scroll - Anchored to Bottom */}
        <div className="w-full shrink-0 pt-8 pb-4">
          <LogoScroll />
        </div>
      </div>
    </section>
  );
}
