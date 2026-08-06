import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutTeamMission({ data }) {
  return (
    <section className="py-20 bg-[#D9D9D9] dark:bg-gray-900 rounded-[26px] mx-4 md:mx-12 my-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Team / Founder Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <SectionHeading title={data.team.sectionHeading} className="!justify-start mb-8" />
            
            <div className="flex flex-col">
              <div className="w-full max-w-[271px] h-[307px] bg-brndo-lightRed rounded-[10px] mb-6"></div>
              <h3 className="font-pangram font-medium text-3xl md:text-[42px] leading-[1.07] tracking-[-0.02em] text-black dark:text-white mb-2">
                {data.team.name}
              </h3>
              <p className="font-pangram font-normal text-xl md:text-[26px] leading-none tracking-[-0.02em] text-black/70 dark:text-gray-300">
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
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="font-pangram font-bold text-3xl md:text-5xl lg:text-[67px] leading-[1.04] tracking-[-0.02em] text-black dark:text-white mb-6">
                {data.missionVision.mission.title}
              </h3>
              <p className="font-pangram font-light text-xl md:text-2xl leading-relaxed text-black/80 dark:text-gray-300">
                {data.missionVision.mission.description}
              </p>
            </div>

            <div>
              <h3 className="font-pangram font-bold text-3xl md:text-5xl lg:text-[67px] leading-[1.04] tracking-[-0.02em] text-black dark:text-white mb-6">
                {data.missionVision.vision.title}
              </h3>
              <p className="font-pangram font-light text-xl md:text-2xl leading-relaxed text-black/80 dark:text-gray-300">
                {data.missionVision.vision.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
