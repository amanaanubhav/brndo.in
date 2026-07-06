import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clientLogos = [
  'AB GLOBAL S.svg',
  'Beast Cricket d.svg',
  'IAS SCORE B.svg',
  'Kathbenz b.svg',
  'SVG ECO TRIP B.svg',
  'Smart Bee .svg'
];

export default function LogoScroll() {
  // Desktop State
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Mobile State
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop Duplicate for smooth infinite scroll
  const displayLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // Desktop Auto Scroll Effect
  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip on mobile
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

  // Mobile Auto Scroll Effect
  useEffect(() => {
    if (window.innerWidth >= 768) return; // Skip on desktop
    const mobileInterval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % clientLogos.length);
    }, 1200);
    return () => clearInterval(mobileInterval);
  }, []);

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

  // Calculate visible indices for mobile
  const visibleIndices = [
    (mobileIndex - 1 + clientLogos.length) % clientLogos.length,
    mobileIndex,
    (mobileIndex + 1) % clientLogos.length
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 md:mt-36 w-full max-w-4xl mx-auto flex flex-col items-center relative"
    >
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex w-full items-center justify-between gap-8">
        <button 
          onClick={scrollLeft}
          className="flex-shrink-0 p-3 rounded-full bg-white text-black border border-gray-200 hover:bg-brndo-red hover:text-white hover:border-brndo-red transition-all duration-300 shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

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
              alt={`Client Logo`}
              className="h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 cursor-pointer"
            />
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="flex-shrink-0 p-3 rounded-full bg-white text-black border border-gray-200 hover:bg-brndo-red hover:text-white hover:border-brndo-red transition-all duration-300 shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="flex md:hidden w-full items-center justify-center overflow-hidden py-6 px-2 relative h-32">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((idx, pos) => {
            const isCenter = pos === 1;
            // pos: 0 = left, 1 = center, 2 = right
            return (
              <motion.img
                key={idx} // Crucial for framer-motion to track the element
                src={`/${clientLogos[idx]}`}
                alt="Client Logo"
                layout
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ 
                  opacity: isCenter ? 1 : 0.4, 
                  x: 0,
                  scale: isCenter ? 1 : 0.8,
                  filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)'
                }}
                exit={{ opacity: 0, x: -50, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-12 sm:h-16 w-auto object-contain flex-shrink-0 mx-6"
              />
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
