import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brndo-red dark:bg-white rounded-[3rem] p-12 md:p-20 text-center text-white dark:text-brndo-red relative overflow-hidden shadow-2xl shadow-brndo-red/30 dark:shadow-white/10 transition-colors duration-300"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-brndo-red/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 transition-colors" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 dark:bg-brndo-red/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 transition-colors" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Ready to scale?
            </h2>
            <p className="text-xl text-white/90 dark:text-gray-600 font-light mb-10 max-w-2xl mx-auto transition-colors">
              Stop guessing with your marketing budget. Partner with BRNDO and let data drive your growth. Get a free, comprehensive audit of your current ad accounts.
            </p>
            <button className="group inline-flex items-center gap-2 bg-white dark:bg-brndo-red text-brndo-red dark:text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 dark:hover:bg-brndo-darkRed hover:scale-105 transition-all duration-300">
              Claim Your Free Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
