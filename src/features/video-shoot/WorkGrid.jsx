import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';

export default function WorkGrid() {
  const categories = [
    "AI VIDEOS",
    "PRODUCT ADS & DEMOS",
    "TESTIMONIAL VIDEOS",
    "AD FILMS",
    "SOCIAL MEDIA REELS",
    "EVENTS & LIVE COVERAGE"
  ];

  return (
    <section className="w-full pb-16 md:pb-24 px-4 md:px-12 bg-white dark:bg-gray-950 flex flex-col items-center">
      {/* Container simulating max-width 1280px */}
      <div className="w-full max-w-[1280px] relative z-10">
        
        {/* 3 columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {categories.map((title, index) => (
            <div 
              key={index}
              className="flex flex-col relative w-full aspect-[415/322] rounded-[20px] overflow-hidden bg-black group cursor-pointer shadow-lg"
            >
              {/* Dark placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700 ease-out"></div>
              
              {/* Gradient Overlay for bottom text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Text left-aligned at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-[20px_25px]">
                <h3 className="font-pangram text-white text-[24px] md:text-[30px] font-[336] leading-[30px] tracking-[-0.48px] uppercase text-left">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
