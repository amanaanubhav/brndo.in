import { motion } from 'framer-motion';

const services = [
  { title: 'Branding' },
  { title: 'UI/UX Design' },
  { title: 'Strategy' },
  { title: 'Design' },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center w-full -mb-4 md:-mb-10 relative z-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-pangram text-5xl md:text-7xl lg:text-[9rem] font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-400 dark:from-gray-400 via-gray-400/40 dark:via-gray-400/40 to-transparent pb-4 whitespace-nowrap"
          >
            SERVICES
          </motion.h2>
        </div>

        <div className="w-full relative z-10 flex flex-col gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full bg-brndo-lightRed rounded-[35px] p-3 flex min-h-[351px]"
            >
              <div className="bg-white rounded-[31px] w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-start">
                <h3 className="text-[30px] md:text-[50px] font-light tracking-[-0.02em] font-pangram text-black leading-tight">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
