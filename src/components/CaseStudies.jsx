import { motion } from 'framer-motion';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">

        {/* Header Block */}
        <div className="text-center w-full -mb-4 md:-mb-10 relative z-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-pangram text-5xl md:text-7xl lg:text-[9rem] font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-transparent from-[15%] via-gray-500 dark:via-gray-300 via-50% to-transparent to-[85%] pb-4 whitespace-nowrap"
          >
            CASE STUDIES
          </motion.h2>
        </div>

        {/* Big Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto relative z-10 group overflow-hidden rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
        >
          {/* Using comp2-gradient.png */}
          <img
            src="/comp2-gradient.png"
            alt="Case Studies Compilation"
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Subtle overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none mix-blend-overlay rounded-2xl"></div>
        </motion.div>

      </div>
    </section>
  );
}
