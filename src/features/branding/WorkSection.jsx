'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import GradientBox from '@/components/ui/GradientBox';

export default function WorkSection() {
  const works = [
    { brand: "BRAND NAME", category: "PACKAGING DESIGN" },
    { brand: "BRAND NAME", category: "BRANDING" },
    { brand: "BRAND NAME", category: "PACKAGING DESIGN" },
    { brand: "BRAND NAME", category: "BRANDING" },
    { brand: "BRAND NAME", category: "PACKAGING DESIGN" },
    { brand: "BRAND NAME", category: "BRANDING" },
  ];

  return (
    <section className="w-full bg-white dark:bg-gray-950 py-16 md:py-32 px-4 md:px-12 flex flex-col items-center">
      <SectionHeading title="WORK" className="mb-16 md:mb-24" />
      
      <div className="w-full max-w-[1281px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-[136px] gap-y-16 md:gap-y-[136px]">
        {works.map((work, idx) => (
          <div key={idx} className="flex flex-col w-full">
            <GradientBox className="w-full h-[400px] md:h-[520px] rounded-[20px] border border-brndo-red/10 shadow-xl mb-6" />
            
            <div className="flex justify-between items-start w-full px-1 mt-2">
              <span className="font-pangram text-black dark:text-white text-2xl md:text-[35.4px] font-[469] leading-tight md:leading-[36px] tracking-[-0.02em]">
                {work.brand}
              </span>
              <span className="font-pangram text-black dark:text-white text-base md:text-[21.8px] font-[336] leading-tight md:leading-[18px] tracking-[-0.02em] text-right w-[195px]">
                {work.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
