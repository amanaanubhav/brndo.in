import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const clientLogos = [
  'AB GLOBAL S.svg',
  'Beast Cricket d.svg',
  'IAS SCORE B.svg',
  'Kathbenz b.svg',
  'SVG ECO TRIP B.svg',
  'Smart Bee .svg'
];

export default function LogoScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientLogos.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-4 md:mt-20 w-full max-w-6xl mx-auto flex flex-col items-center relative overflow-hidden"
    >
      {/* Desktop view */}
      <div className="hidden md:flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, 
          }}
          className="flex w-max items-center gap-12 md:gap-24 pr-12 md:pr-24 py-6"
        >
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <img
              key={idx}
              src={`/${logo}`}
              alt="Client Logo"
              className="h-10 md:h-14 lg:h-18 w-auto max-w-none object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex w-full h-24 overflow-hidden relative justify-center items-center py-4">
        {clientLogos.map((logo, idx) => {
          let offset = idx - currentIndex;
          if (offset < -2) offset += clientLogos.length;
          if (offset > 3) offset -= clientLogos.length;
          
          const isCenter = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <motion.img
              key={logo}
              src={`/${logo}`}
              alt="Client Logo"
              initial={false}
              animate={{ 
                x: offset * 125,
                opacity: isVisible ? (isCenter ? 1 : 0.3) : 0,
                scale: isCenter ? 1.25 : 0.9,
                filter: isCenter ? 'grayscale(0%)' : 'grayscale(100%)',
                zIndex: isCenter ? 10 : 1
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute h-10 w-auto max-w-[120px] object-contain pointer-events-none"
            />
          );
        })}
      </div>
    </motion.div>
  );
}
