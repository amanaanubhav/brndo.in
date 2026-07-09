import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Ashwani Singh', role: 'Founder' },
  { name: 'Ashwani Singh', role: 'Founder' },
  { name: 'Ashwani Singh', role: 'Founder' },
  { name: 'Ashwani Singh', role: 'Founder' },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
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
            OUR TEAM
          </motion.h2>
        </div>

        {/* Team Cards Grid */}
        <div className="w-full relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-1 md:mt-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start w-full max-w-[303px]"
            >
              {/* Profile Card Rectangle */}
              <div className="w-full h-[394px] bg-brndo-lightRed rounded-[20px] mb-4"></div>

              {/* Profile Details */}
              <div className="flex flex-col text-left">
                <h3 className="font-pangram font-semibold text-[32px] md:text-[40px] text-gray-900 dark:text-white leading-tight tracking-[-0.02em] transition-colors">
                  {member.name}
                </h3>
                <p className="font-pangram font-light text-[20px] md:text-[22px] text-gray-900 dark:text-gray-300 leading-tight tracking-[-0.02em] transition-colors">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
