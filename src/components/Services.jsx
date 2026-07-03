import { motion } from 'framer-motion';
import { Target, TrendingUp, Search, MousePointerClick, Smartphone, Mail } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp size={32} />,
    title: 'Performance Ads',
    description: 'Data-driven campaigns across Meta, Google, and TikTok designed to maximize ROAS and acquire high-LTV customers.',
  },
  {
    icon: <Search size={32} />,
    title: 'SEO & Content',
    description: 'Dominate search rankings with technical SEO and intent-driven content that builds sustainable organic pipelines.',
  },
  {
    icon: <MousePointerClick size={32} />,
    title: 'Conversion Optimization',
    description: 'A/B testing and UX enhancements to ensure every click counts, turning your traffic into revenue.',
  },
  {
    icon: <Target size={32} />,
    title: 'Programmatic Advertising',
    description: 'Automated, highly targeted ad buying across the open web to reach your audience exactly where they are.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'App Growth',
    description: 'End-to-end app store optimization (ASO) and user acquisition strategies to scale mobile apps globally.',
  },
  {
    icon: <Mail size={32} />,
    title: 'Retention Marketing',
    description: 'Email and SMS automation flows that build loyalty, increase repeat purchase rates, and maximize lifetime value.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Full-Funnel <span className="text-brndo-red">Domination.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light"
          >
            We don't just run ads. We engineer comprehensive growth systems tailored to your unit economics.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brndo-red/5 hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 bg-red-50 text-brndo-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brndo-red group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
