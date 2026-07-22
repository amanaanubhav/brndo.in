'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';

export default function Results() {
  const cards = [
    {
      stat: '4.2X',
      title: 'Average ROAS',
      subtitle: 'Across D2C, EdTech & Travel brands within first 90 days'
    },
    {
      stat: '16%',
      title: 'CPA Reduction',
      subtitle: 'Average cost-per-acquisition slash without compromising quality'
    },
    {
      stat: '12000+',
      title: 'Creatives Delivered',
      subtitle: '30+ creatives per brand each month for maximum performance'
    },
    {
      stat: '₹339M',
      title: 'Revenue Generated',
      subtitle: 'Total revenue generated across accounts with profitable growth'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <SectionHeading title={sectionHeadings.performanceMarketingResults} className="-mb-16 md:-mb-24 mt-8" />

        {/* Content Block */}
        <div className="relative z-10 w-full flex flex-col items-center mt-12 md:mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-pangram text-3xl md:text-[38px] font-light tracking-tight text-center text-black dark:text-white leading-tight md:leading-snug w-full px-4"
          >
            Real Numbers From Real Brands We Transformed
          </motion.h3>
          
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-pangram text-base md:text-[20px] font-extralight tracking-tight md:tracking-wide text-center text-gray-700 dark:text-gray-400 mt-4 mb-14 md:mb-20 w-full px-2 md:px-4 leading-snug md:leading-relaxed"
          >
            Through advanced audience targeting, 100+ creative testing<br className="hidden lg:block" /> & server-side tracking optimization
          </motion.h5>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mb-16">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] p-8 md:p-12 flex flex-col justify-between relative min-h-[280px] md:min-h-[315px]"
              >
                {/* Stat - Top Left */}
                <div className="text-[#800000] font-pangram font-bold md:font-semibold text-[72px] md:text-[80px] lg:text-[88px] leading-none self-start text-left">
                  {card.stat}
                </div>
                
                {/* Spacer to push text to bottom */}
                <div className="flex-1"></div>

                {/* Text Content - Bottom Right */}
                <div className="flex flex-col items-end text-right w-full mt-6 md:mt-8">
                  <span className="font-pangram font-normal text-[32px] md:text-[40px] lg:text-[44px] text-black dark:text-white leading-tight text-right">
                    {card.title}
                  </span>
                  <span className="font-pangram font-normal text-[20px] md:text-[24px] text-black dark:text-gray-400 leading-[1.25] tracking-tight mt-2 w-full max-w-[320px] md:max-w-[400px] text-right line-clamp-2 overflow-hidden text-ellipsis">
                    {card.subtitle}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <Button
              href="/contact"
              variant="primary"
            >
              Book a free call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
