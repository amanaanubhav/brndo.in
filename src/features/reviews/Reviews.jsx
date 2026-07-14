import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';

const mediaPlaceholders = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
];

const testimonialData = [
  {
    name: 'Sarah Jenkins',
    role: 'CMO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Elevate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    text: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, Nexus',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: '"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  }
];

const StatMeter = ({ value, label, percentage }) => {
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.75;
  const gapLength = circumference * 0.25;
  const strokeDasharray = `${arcLength} ${gapLength}`;
  const progressLength = arcLength * (percentage / 100);
  
  // Calculate coordinates for the handle dot
  const theta = (percentage / 100 * 270) * (Math.PI / 180);
  const cx = 100 + radius * Math.cos(theta);
  const cy = 100 + radius * Math.sin(theta);

  return (
    <div className="relative flex flex-col items-center justify-center w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
      <svg className="absolute inset-0 w-full h-full transform rotate-[135deg] drop-shadow-sm" viewBox="0 0 200 200">
        {/* Background Arc */}
        <circle 
          cx="100" cy="100" r={radius} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="text-gray-200 dark:text-gray-800"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
        />
        {/* Progress Arc */}
        <circle 
          cx="100" cy="100" r={radius} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5"
          className="text-black dark:text-white transition-all duration-1000 ease-out"
          strokeDasharray={`${progressLength} ${circumference}`}
          strokeLinecap="round"
        />
        {/* Dot Handle */}
        <circle 
          cx={cx} cy={cy} r="3"
          fill="white"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-black dark:text-white"
        />
      </svg>
      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center mt-4">
        <span className="font-pangram text-[60px] md:text-[92px] leading-[1] md:leading-[100px] tracking-[-0.02em] font-semibold text-brndo-red mb-2">{value}</span>
        <span className="font-pangram text-[18px] md:text-[25px] leading-[1.2] md:leading-[28px] tracking-[-0.02em] font-light text-black dark:text-white px-4 max-w-[220px]">{label}</span>
      </div>
    </div>
  );
};

export default function Reviews() {
  const sets = [0, 1, 2];
  // To make infinite scroll seamless, we duplicate the sets
  const displaySets = [...sets, ...sets];

  return (
    <section id="reviews" className="min-h-screen py-16 md:py-20 flex flex-col justify-center bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="w-full">

        {/* Header Block with Stats Box */}
        <div className="text-center w-full px-6 flex flex-col items-center relative">
          <SectionHeading title={sectionHeadings.reviews} className="pb-0.75" />

          {/* Stats Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12 md:gap-24 lg:gap-32 relative z-10 -mt-2 md:-mt-4 lg:-mt-6"
          >
            <StatMeter value="26+" label="Finalised Projects" percentage={35} />
            <StatMeter value="98%" label="Client Satisfaction" percentage={95} />
            <StatMeter value="10M" label="Gross Revenue" percentage={15} />
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden group py-2 mt-4 md:mt-6 w-full max-w-[1800px] mx-auto [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {displaySets.map((setItem, index) => (
              <div key={index} className="flex flex-row items-center gap-3 md:gap-6 px-2 md:px-3">

                {/* Media Block (Video/Photo Placeholder) */}
                <div className="relative rounded-2xl overflow-hidden w-[200px] h-[260px] md:w-[260px] md:h-[320px] shadow-md flex-shrink-0 bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 group/media cursor-pointer">
                  <img
                    src={mediaPlaceholders[setItem]}
                    alt="Product Media Placeholder"
                    className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 ease-out group-hover/media:scale-105 group-hover/media:brightness-100"
                  />
                  {/* Subtle overlay icon representing video play, purely aesthetic placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/media:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Block */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/40 dark:via-orange-950/40 dark:to-amber-950/40 border border-gray-100 dark:border-gray-800 shadow-md p-6 md:p-8 w-[280px] h-[260px] md:w-[380px] md:h-[320px] flex-shrink-0 flex flex-col justify-between cursor-default">

                  {/* Content Area */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center gap-3">
                      <img src={testimonialData[setItem].image} alt="Profile" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-gray-100 text-sm md:text-base">{testimonialData[setItem].name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{testimonialData[setItem].role}</span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic line-clamp-4 font-light">
                      {testimonialData[setItem].text}
                    </p>
                  </div>

                  {/* Bottom Left Button */}
                  <div className="mt-auto pt-4 self-start">
                    <button className="bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-md text-xs md:text-sm font-semibold uppercase hover:bg-gray-900 dark:bg-brndo-red dark:hover:bg-brndo-darkRed cursor-pointer transition-colors shadow-sm">
                      Get Started
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

