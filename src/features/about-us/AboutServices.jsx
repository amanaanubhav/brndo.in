import { motion } from 'framer-motion';

export default function AboutServices({ data }) {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-pangram text-4xl md:text-6xl lg:text-[67px] leading-[1.04] font-normal tracking-[-0.02em] text-black dark:text-white mb-16 max-w-lg text-center md:text-left"
        >
          {data.title}
        </motion.h2>

        {/* Stacked Cards */}
        <div className="w-full flex flex-col items-center gap-6 md:-space-y-4 pt-8">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`w-full max-w-5xl h-32 md:h-[180px] rounded-[20px] flex items-center px-8 md:px-16 ${item.bg} rotate-[0.29deg] hover:scale-[1.01] transition-transform duration-300 shadow-xl`}
              style={{ zIndex: data.items.length - idx }}
            >
              <h3 className="font-pangram font-medium text-4xl md:text-6xl lg:text-[97px] leading-[1.13] tracking-[-0.02em] text-white">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
