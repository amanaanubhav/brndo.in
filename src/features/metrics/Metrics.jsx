import { motion } from 'framer-motion';

const stats = [
  { value: '$50M+', label: 'Ad Spend Managed' },
  { value: '3.8x', label: 'Average ROAS' },
  { value: '95%', label: 'Client Retention' },
  { value: '1B+', label: 'Impressions Delivered' },
];

export default function Metrics() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brndo-red/20 to-transparent blur-3xl opacity-50 transform translate-x-1/4 transition-colors" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            >
              Numbers that speak for themselves.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-md transition-colors"
            >
              We are obsessed with data. Our strategies are built on rigorous testing, continuous optimization, and an unwavering focus on your bottom line.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-2 border-brndo-red pl-6 transition-colors"
              >
                <p className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
