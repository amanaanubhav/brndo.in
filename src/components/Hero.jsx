import { motion } from 'framer-motion';
import { ArrowRight, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brndo-red/5 dark:bg-white/10 blur-[120px] transition-colors duration-300" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brndo-red/5 dark:bg-white/10 blur-[100px] transition-colors duration-300" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-white/10 text-brndo-red dark:text-white text-sm font-semibold mb-6 border border-red-100 dark:border-white/20 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brndo-red dark:bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brndo-red dark:bg-white"></span>
            </span>
            Ads & Beyond
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors"
          >
            Scale your brand <span className="text-brndo-red dark:text-white block underline decoration-white/30 decoration-8 underline-offset-4">beyond limits.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-white/80 mb-8 max-w-lg leading-relaxed font-light transition-colors"
          >
            We are a performance marketing powerhouse. We blend data-driven strategies with creative excellence to deliver ROI that matters.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-brndo-red dark:bg-white text-white dark:text-brndo-red px-8 py-4 rounded-full text-base font-bold hover:bg-brndo-darkRed dark:hover:bg-gray-100 hover:shadow-xl hover:shadow-brndo-red/20 transition-all duration-300">
              Get Your Free Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="group flex items-center justify-center gap-2 bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-white/30 px-8 py-4 rounded-full text-base font-bold hover:border-gray-900 dark:hover:border-white transition-all duration-300">
              Our Services
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* Abstract creative element representing performance */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-brndo-red to-orange-400 dark:from-white/20 dark:to-white/5 rounded-3xl transform rotate-3 opacity-90 shadow-2xl transition-colors"></div>
            <div className="absolute inset-0 bg-gray-900 dark:bg-black/40 rounded-3xl transform -rotate-3 overflow-hidden shadow-2xl flex flex-col justify-center items-center text-white border border-gray-800 dark:border-white/10 backdrop-blur-sm transition-colors">
              <BarChart3 size={80} className="text-brndo-red dark:text-white mb-6" strokeWidth={1.5} />
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-400 dark:text-white/60 font-medium uppercase tracking-widest">Average Client ROI</p>
                <p className="text-6xl font-black tracking-tighter">480%</p>
              </div>
            </div>
            
            {/* Floating element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-brndo-darkRed p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                <ArrowRight size={24} className="text-green-600 dark:text-green-400 -rotate-45" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Revenue Growth</p>
                <p className="text-xs text-gray-500 dark:text-white/60">Last 30 days</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
