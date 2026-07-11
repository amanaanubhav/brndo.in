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


        <div className="w-full relative z-10 flex flex-col items-center md:items-stretch gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full bg-brndo-lightRed flex flex-col md:flex-row max-w-[370px] md:max-w-none h-[342px] md:h-auto md:min-h-[351px] rounded-[10px] md:rounded-[35px] p-[10px] md:p-3"
            >
              {/* Inner White Box */}
              <div className="bg-white flex flex-col justify-start w-full md:w-1/2 h-[138px] md:h-auto rounded-[10px] md:rounded-[31px] pt-[17px] pl-[19px] pr-[19px] pb-[17px] md:p-8 lg:p-12">
                <h3 className="font-pangram text-black tracking-[-0.02em] text-[23.8px] md:text-[30px] lg:text-[50px] leading-[24px] md:leading-tight font-medium md:font-light">
                  {service.title}
                </h3>
              </div>
              {/* Lower Area (remaining 50% light red box - hidden on desktop) */}
              <div className="flex-1 w-full md:hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
