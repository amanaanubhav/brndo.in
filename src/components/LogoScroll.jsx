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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 md:mt-20 w-full max-w-6xl mx-auto flex flex-col items-center relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
    >
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust this value to control scroll speed
          }}
          className="flex w-max items-center"
        >
          {/* We render 4 identical sets to guarantee the screen is covered even on ultra-wide monitors, 
              and animating to -50% creates a perfect, invisible loop jump. */}
          {[1, 2, 3, 4].map((setIndex) => (
            <div key={setIndex} className="flex items-center justify-center gap-12 md:gap-24 pr-12 md:pr-24 py-6">
              {clientLogos.map((logo, idx) => (
                <img
                  key={`${setIndex}-${idx}`}
                  src={`/${logo}`}
                  alt="Client Logo"
                  className="h-10 md:h-14 lg:h-18 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0 cursor-pointer"
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
