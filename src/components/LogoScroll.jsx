import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  'AB GLOBAL S.svg',
  'Beast Cricket d.svg',
  'IAS SCORE B.svg',
  'Kathbenz b.svg',
  'SVG ECO TRIP B.svg',
  'Smart Bee .svg'
];

export default function LogoScroll() {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Duplicate logos for smooth infinite scrolling illusion
  const displayLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-36 w-full max-w-4xl mx-auto flex flex-col items-center relative"
    >
      <div className="w-full flex items-center justify-between gap-4 md:gap-8">
        {/* Left Arrow Button */}
        <button 
          onClick={scrollLeft}
          className="flex-shrink-0 p-3 rounded-full bg-white text-black border border-gray-200 hover:bg-brndo-red hover:text-black hover:border-brndo-red transition-all duration-300 shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          className="flex items-center gap-16 overflow-x-hidden scroll-smooth w-full px-2 py-6"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {displayLogos.map((logo, idx) => (
            <img 
              key={idx}
              src={`/${logo}`}
              alt={`Client Logo ${idx}`}
              className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 cursor-pointer"
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={scrollRight}
          className="flex-shrink-0 p-3 rounded-full bg-white text-black border border-gray-200 hover:bg-brndo-red hover:text-black hover:border-brndo-red transition-all duration-300 shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}
