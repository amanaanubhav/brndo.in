'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { sectionHeadings } from '@/data/headings';
import { Check } from 'lucide-react';

export default function SMMAPricing() {
  const pricingPlans = [
    {
      name: "Standard Plan",
      price: "₹30,000",
      description: "Perfect for businesses ready to establish a strong Instagram foundation.",
      duration: "4 Weeks",
      features: [
        "7 Premium Reels",
        "3 Strategic Carousels",
        "5 Single Image Graphics",
        "Monthly reports & analytics",
        "PPC or paid ads management",
        "Email marketing or CRO services"
      ],
      highlight: false
    },
    {
      name: "Growth Plan",
      price: "₹50,000",
      description: "Perfect for businesses ready to establish a strong Instagram foundation.",
      duration: "4 Weeks",
      features: [
        "All in Standard Plan",
        "Plus 7 Reels",
        "Plus 1 Strategic Carousel",
        "Plus 2 Single Image Graphics",
        "Dedicated account manager",
        "Basic Community Engagement"
      ],
      highlight: false
    },
    {
      name: "Premium Plan",
      price: "₹1,00,000",
      description: "Dominate Instagram Strategy with complete content excellence and bi-weekly reporting.",
      duration: "4 Weeks",
      features: [
        "All in Growth Plus",
        "Bi-Weekly Reporting",
        "Advanced Community Management",
        "Basic Paid Ads",
        "Instagram DM Automation",
        "Advanced email marketing funnels"
      ],
      highlight: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <SectionHeading title={sectionHeadings.smmaPricing} className="-mb-16 md:-mb-24 mt-8" />

        {/* Content Block */}
        <div className="relative z-10 w-full flex flex-col items-center mt-12 md:mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-pangram text-3xl md:text-[38px] font-light tracking-tight text-center text-black dark:text-white leading-tight md:leading-snug w-full px-4 mb-14 md:mb-20"
          >
            Choose the Perfect Plan for Your Brand
          </motion.h3>

          <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row rounded-[20px] p-8 md:p-10 border relative items-center md:items-stretch gap-8 ${
                  plan.highlight 
                    ? 'border-[#800000] shadow-[0_8px_30px_rgb(128,0,0,0.12)] bg-gray-50 dark:bg-gray-900/40' 
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-0 md:right-8 md:left-auto md:translate-x-0">
                    <span className="bg-[#800000] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {/* Left Section: Name & Price */}
                <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center">
                  <h3 className="font-pangram text-[24px] md:text-[32px] text-black dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="font-pangram font-semibold text-[40px] md:text-[56px] text-[#800000] leading-none mb-4">
                    {plan.price}
                  </div>
                  <p className="font-pangram text-[16px] md:text-[18px] text-gray-700 dark:text-gray-400 mt-2 max-w-sm mx-auto md:mx-0 leading-snug">
                    {plan.description}
                  </p>
                </div>

                {/* Middle Section: Features */}
                <div className="flex-1 w-full border-t border-b md:border-t-0 md:border-b-0 md:border-l border-gray-200 dark:border-gray-800 py-6 md:py-0 md:px-8 flex flex-col justify-center">
                  <div className="mb-6 bg-gray-100 dark:bg-gray-800/50 rounded-lg p-3 inline-block self-center md:self-start">
                    <div className="flex items-center font-pangram text-[15px] font-medium text-black dark:text-white">
                      <span className="text-[#800000] font-semibold mr-2">Duration Time:</span> {plan.duration}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-[#800000] shrink-0 mr-3 mt-0.5" strokeWidth={3} />
                        <span className="font-pangram text-[16px] text-gray-800 dark:text-gray-300 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Section: CTA */}
                <div className="w-full md:w-[250px] flex items-center justify-center pt-4 md:pt-0">
                  <Button
                    href="/contact"
                    variant={plan.highlight ? "primary" : "secondary"}
                    className="w-full text-center justify-center flex py-4 text-lg whitespace-nowrap"
                  >
                    Get started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
