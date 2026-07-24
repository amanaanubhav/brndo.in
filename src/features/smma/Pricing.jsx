'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import GlobalGradient from '@/components/ui/GlobalGradient';
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
      icon: "/sss.svg",
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
      icon: "/growth plan c.svg",
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
      icon: "/third.svg",
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
            {pricingPlans.map((plan, index) => {
              const isGlobalGradient = index === 1;

              const content = (
                <>
                  {plan.highlight && !isGlobalGradient && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-0 md:right-8 md:left-auto md:translate-x-0">
                      <span className="bg-[#800000] text-white text-[18.5px] font-bold px-4 py-1.5 rounded-[10px] uppercase tracking-wider shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Left Section: Name & Price */}
                  <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-2">
                      <div className="w-[51px] h-[51px] bg-[#2B2B2B] rounded-[10px] flex items-center justify-center shrink-0">
                        <img src={plan.icon} alt={plan.name} className="w-[24px] h-[24px] object-contain invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className={`font-pangram text-[30px] leading-[35px] font-medium tracking-[-0.02em] ${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'}`}>
                          {plan.name}
                        </h3>
                        <div className={`font-pangram font-semibold text-[56.63px] leading-[58px] tracking-[-0.02em] mt-2 mb-4 ${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'}`}>
                          {plan.price}
                        </div>
                      </div>
                    </div>
                    <p className={`font-pangram text-[18.5px] leading-[19px] font-light tracking-[-0.02em] mt-2 max-w-sm mx-auto md:mx-0 ${isGlobalGradient ? 'text-white/70' : 'text-black/50 dark:text-white/50'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Middle Section: Features */}
                  <div className={`flex-1 w-full border-t border-b md:border-t-0 md:border-b-0 md:border-l py-6 md:py-0 md:px-8 flex flex-col justify-center ${isGlobalGradient ? 'border-white/20' : 'border-black/20 dark:border-white/20'}`}>
                    <div className={`mb-6 p-3 inline-block self-center md:self-start rounded-[10px] ${isGlobalGradient ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'}`}>
                      <div className={`flex items-center font-pangram text-[18.5px] leading-[19px] font-light tracking-[-0.02em] ${isGlobalGradient ? 'text-white/90' : 'text-black/50 dark:text-white/50'}`}>
                        <span className={`${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'} font-medium mr-2`}>Duration Time:</span> {plan.duration}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className={`w-5 h-5 shrink-0 mr-3 mt-[6px] ${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'}`} strokeWidth={2} />
                          <span className={`font-pangram text-[18.5px] leading-[33px] font-light tracking-[-0.02em] ${isGlobalGradient ? 'text-white/70' : 'text-black/50 dark:text-white/50'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Section: CTA */}
                  <div className="w-full md:w-[250px] flex items-center justify-center pt-4 md:pt-0">
                    <button
                      className={`w-full text-center justify-center flex py-[15px] px-[16px] rounded-[10px] font-pangram text-[18.5px] leading-[21px] font-light tracking-[-0.02em] transition-colors ${
                        isGlobalGradient 
                          ? 'bg-white text-black hover:bg-gray-200' 
                          : 'bg-[#2B2B2B] text-white hover:bg-black dark:hover:bg-gray-800'
                      }`}
                    >
                      Get started
                    </button>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {isGlobalGradient ? (
                    <GlobalGradient className="flex flex-col md:flex-row rounded-[20px] p-8 md:p-10 items-center md:items-stretch gap-8 shadow-2xl border border-brndo-red/20 w-full">
                      <div className="flex flex-col md:flex-row w-full items-center md:items-stretch gap-8 z-10 relative">
                        {content}
                      </div>
                    </GlobalGradient>
                  ) : (
                    <div className={`flex flex-col md:flex-row rounded-[20px] p-8 md:p-10 border relative items-center md:items-stretch gap-8 w-full ${
                      plan.highlight 
                        ? 'border-[#800000] shadow-[0_8px_30px_rgb(128,0,0,0.12)] bg-gray-50 dark:bg-gray-900/40' 
                        : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
                    }`}>
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
