'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutTeamMission({ data }) {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Team / Founder Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Using standard SectionHeading but aligned left by overriding styles or wrapping it */}
            <div className="text-left w-full relative z-0 mb-8 md:mb-12">
               <h2
                  className="font-pangram text-5xl md:text-7xl lg:text-[100px] font-black tracking-[-0.02em] uppercase mb-4 leading-none bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #C7C7C7 -21.43%, #95959583 45%, #61616100 85%)',
                  }}
                >
                  {data.team.sectionHeading}
                </h2>
            </div>
            
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
            className="flex flex-col justify-center space-y-16 lg:mt-32"
          >
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-[26px] p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="font-pangram font-bold text-3xl md:text-5xl leading-[1.04] tracking-[-0.02em] text-black dark:text-white mb-6">
                {data.missionVision.mission.title}
              </h3>
              <p className="font-pangram font-light text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {data.missionVision.mission.description}
              </p>
            </div>

            <div className="bg-brndo-red/5 dark:bg-brndo-red/10 rounded-[26px] p-8 md:p-12 border border-brndo-red/10 shadow-sm">
              <h3 className="font-pangram font-bold text-3xl md:text-5xl leading-[1.04] tracking-[-0.02em] text-[#800000] dark:text-[#Ebd4cb] mb-6">
                {data.missionVision.vision.title}
              </h3>
              <p className="font-pangram font-light text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {data.missionVision.vision.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
