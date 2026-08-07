'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutTeamMission({ data }) {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Centered Heading */}
        <SectionHeading title={data.team.sectionHeading} className="mb-12 md:mb-20" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Team / Founder Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >            
            <div className="flex flex-col">
              <div className="w-full max-w-sm aspect-[4/5] bg-brndo-lightRed dark:bg-brndo-red/20 rounded-2xl mb-8 shadow-sm"></div>
              <h3 className="font-pangram font-medium text-3xl md:text-5xl leading-[1.07] tracking-[-0.02em] text-black dark:text-white mb-2">
                {data.team.name}
              </h3>
              <p className="font-pangram font-normal text-xl md:text-2xl leading-none tracking-[-0.02em] text-brndo-red dark:text-brndo-lightRed">
                {data.team.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-12 lg:space-y-16 mt-8 lg:mt-0"
          >
            <div className="flex flex-col">
              <h3 className="font-pangram font-bold text-3xl md:text-5xl leading-[1.04] tracking-[-0.02em] text-black dark:text-white mb-4 md:mb-6">
                {data.missionVision.mission.title}
              </h3>
              <p className="font-pangram font-light text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                {data.missionVision.mission.description}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-pangram font-bold text-3xl md:text-5xl leading-[1.04] tracking-[-0.02em] text-[#800000] dark:text-[#Ebd4cb] mb-4 md:mb-6">
                {data.missionVision.vision.title}
              </h3>
              <p className="font-pangram font-light text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                {data.missionVision.vision.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
