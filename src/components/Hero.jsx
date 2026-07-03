import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, MousePointerClick } from 'lucide-react';
import { useState } from 'react';

// SVG Line Chart that animates drawing
const AnimatedLineChart = () => (
  <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-sm overflow-visible">
    {/* Grid lines */}
    <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-gray-200 dark:text-gray-800" />
    <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-gray-200 dark:text-gray-800" />
    <line x1="0" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-gray-200 dark:text-gray-800" />
    
    {/* Animated Path */}
    <motion.path
      d="M0 45 Q 20 40, 30 25 T 60 15 T 100 0"
      fill="none"
      stroke="url(#chart-gradient)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
    />
    
    {/* Glowing dot at the end */}
    <motion.circle 
      cx="100" cy="0" r="2.5" fill="#ef4444" 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.3, type: "spring" }}
      className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
    />

    <defs>
      <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" /> {/* brndo-red equivalent */}
        <stop offset="100%" stopColor="#f97316" /> {/* orange */}
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden transition-colors duration-300">
      {/* Premium Background Gradients & Grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-gray-950">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brndo-red/10 dark:bg-brndo-red/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brndo-red/5 dark:bg-brndo-red/5 blur-[150px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-6 z-10 pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Accepting New Partners Q3
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-black text-gray-900 dark:text-white tracking-tighter leading-[1.05] mb-8"
          >
            Performance <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brndo-red to-orange-500">That Actually</span> <br/>
            Performs.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed font-light"
          >
            We don't just run ads; we engineer growth. Blending elite data science with bold creative to scale your revenue exponentially.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#contact" className="group relative flex items-center justify-center gap-3 bg-black dark:bg-brndo-red text-white px-8 py-4 rounded-full text-base font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(200,0,0,0.25)]">
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <span className="relative z-20">Book Strategy Call</span>
              <ArrowRight size={18} className="relative z-20 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 px-8 py-4 rounded-full text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View Case Studies
            </a>
          </motion.div>
        </div>

        {/* Right Column - Dynamic Data Visuals Composition */}
        <div className="lg:col-span-6 relative z-10 hidden md:block" style={{ perspective: 1000 }}>
          <motion.div 
            className="relative w-full aspect-square max-w-[550px] mx-auto mt-10 lg:mt-0"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Decorative Blob */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-brndo-red/20 to-orange-400/20 blur-3xl z-0"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.8 : 0.5
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Main Center Card (Revenue Graph) */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-[85%] aspect-[4/3] bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50 p-6 sm:p-8 flex flex-col z-20 backdrop-blur-xl transition-all duration-300"
              animate={{ 
                rotateY: isHovered ? -8 : 0,
                rotateX: isHovered ? 5 : 0,
                y: isHovered ? "-55%" : "-50%",
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white uppercase tracking-[0.15em]">Total Revenue</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">YTD Growth Trajectory</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-500 border border-green-100 dark:border-green-800/50 shadow-sm">
                  <TrendingUp size={20} />
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">$4.2M</span>
                <span className="text-sm font-bold text-green-500 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md ml-3">+148%</span>
              </div>
              <div className="flex-1 w-full relative mt-auto pl-2 pt-4">
                <AnimatedLineChart />
              </div>
            </motion.div>

            {/* Top Right Card (ROAS) */}
            <motion.div
              className="absolute top-[5%] right-[-5%] lg:right-[-10%] w-48 sm:w-56 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-5 z-30"
              animate={{
                x: isHovered ? 30 : 0,
                y: isHovered ? -30 : 0,
                rotate: isHovered ? 8 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brndo-red/10 flex items-center justify-center text-brndo-red">
                  <Target size={20} />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-900 dark:text-white">Avg. ROAS</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3">6.4x</div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-brndo-red to-orange-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Bottom Left Card (Conversions) */}
            <motion.div
              className="absolute bottom-[10%] left-[-5%] lg:left-[-15%] w-52 sm:w-60 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-5 z-30 flex items-center gap-4"
              animate={{
                x: isHovered ? -30 : 0,
                y: isHovered ? 30 : 0,
                rotate: isHovered ? -5 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <MousePointerClick size={24} />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">82k+</p>
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Conversions</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
      {/* Required for shine animation on button */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </section>
  );
}
