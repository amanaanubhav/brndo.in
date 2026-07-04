import { motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    metric: '4.2x ROAS',
    label: 'Scaled to $350k/mo spend',
    text: '“Brndo took over our Meta and Google ads when we were stuck. Not only did they scale our budget by 4x, but our acquisition cost actually dropped. Their attribution modeling is years ahead of other agencies.”',
    author: 'Sarah Jenkins',
    title: 'VP of Growth, Modera Fashion',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    metric: '+185%',
    label: 'YoY Revenue Growth',
    text: '“Their execution speed is unmatched. They launch, test, and iterate creative angles faster than we could ever do internally. They feel like an extension of our core growth team, not a vendor.”',
    author: 'Marcus Chen',
    title: 'Founder & CEO, HydrateLife',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    metric: '-52% CAC',
    label: 'Optimized search & social funnel',
    text: '“We were burning cash on cold traffic. Brndo rebuilt our middle-of-funnel retargeting strategy and optimized our landers. The drop in customer acquisition cost was immediate and highly profitable.”',
    author: 'Elena Rostova',
    title: 'CMO, FinTech Pulse',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-pangram text-3xl md:text-5xl font-black text-black dark:text-white tracking-tighter uppercase mb-6"
          >
            Our Results <span className="text-brndo-red">Speak Loudest</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 font-light"
          >
            We don't focus on vanity metrics. We measure our performance based on scale, enterprise value, and profit margins.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-900 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Metric Callout */}
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <h3 className="font-pangram text-4xl lg:text-5xl font-black text-brndo-red">
                      {item.metric}
                    </h3>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">
                      {item.label}
                    </p>
                  </div>
                  <ArrowUpRight className="text-gray-300 dark:text-gray-700 w-6 h-6 flex-shrink-0" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-8">
                  {item.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
