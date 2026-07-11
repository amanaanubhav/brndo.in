import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Ashwani singh', role: 'Founder' },
  { name: 'Ashwani singh', role: 'Founder' },
  { name: 'Ashwani singh', role: 'Founder' },
  { name: 'Ashwani singh', role: 'Founder' },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
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
        <div 
          className="w-full relative z-10 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-6 sm:gap-8 justify-items-center mt-1 md:mt-2 pb-12 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-[7.5%] sm:px-0"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85%] sm:w-full snap-center flex flex-col items-start max-w-[271px]"
            >
              <div className="w-full flex flex-col items-start">
                {/* Profile Card Rectangle */}
                <div className="w-full h-[307px] bg-brndo-lightRed rounded-[10px] mb-[15px]"></div>

                {/* Profile Details */}
                <div className="flex flex-col text-left pl-[7px]">
                  <h3 className="font-pangram font-medium text-[29px] leading-[29px] text-black dark:text-white tracking-[-0.02em] transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-pangram font-light text-[18px] leading-[15px] text-black dark:text-gray-300 tracking-[-0.02em] mt-[6px] transition-colors">
                    {member.role}
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
