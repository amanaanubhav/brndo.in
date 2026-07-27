'use client';

import GradientBox from '@/components/ui/GradientBox';

export default function VisionSection() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-16 md:py-24 px-4 md:px-[80px] flex flex-col items-center">
      <div className="w-full max-w-[1281px] mx-auto flex flex-col">
        {/* Heading */}
        <h2 
          className="font-pangram text-black dark:text-white font-[617] text-[40px] md:text-[69px] leading-[1.1] md:leading-[75px] tracking-[-0.02em] text-left max-w-[830px] mb-12 md:mb-[42px]"
        >
          Think Without Limits.<br className="hidden md:block" /> Build With Purpose.
        </h2>

        {/* Gradient Box Placeholder */}
        <GradientBox className="w-full min-h-[50vh] md:h-[1003px] flex items-center justify-center border border-brndo-red/20 shadow-2xl">
          <span className="font-pangram text-white/50 text-xl font-light tracking-widest uppercase">
            Content Placeholder
          </span>
        </GradientBox>
      </div>
    </section>
  );
}
