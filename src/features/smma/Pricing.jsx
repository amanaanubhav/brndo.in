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
      highlight: false
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

          <div className="flex flex-col gap-8 w-full max-w-[1000px] mx-auto mb-16">
            {pricingPlans.map((plan, index) => {
              const isGlobalGradient = index === 1;

              const content = (
                <>

                  {/* Left Half */}
                  <div className="flex flex-col w-[50%] text-left pr-0 md:pr-8 justify-between min-h-[280px]">
                    <div>
                      {/* Icon */}
                      <div className="w-[45px] h-[45px] bg-[#2B2B2B] rounded-[8px] flex items-center justify-center shrink-0 mb-4">
                        <img src={plan.icon} alt={plan.name} className="w-[20px] h-[20px] object-contain invert brightness-0" style={{ filter: 'brightness(0) invert(1)' }} />
                      </div>
                      
                      {/* Plan Name */}
                      <h3 className={`font-pangram text-[26px] leading-[30px] font-medium tracking-[-0.02em] mb-2 ${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'}`}>
                        {plan.name}
                      </h3>
                      
                      {/* Plan Description */}
                      <p className={`font-pangram text-[16px] leading-[22px] font-light tracking-[-0.02em] mb-4 max-w-sm ${isGlobalGradient ? 'text-white/70' : 'text-black/50 dark:text-white/50'}`}>
                        {plan.description}
                      </p>
                    </div>
                    
                    {/* Duration Details at Bottom Edge */}
                    <div className="mt-auto pt-4">
                      <div className={`font-pangram text-[16px] leading-[19px] tracking-[-0.02em] ${isGlobalGradient ? 'text-white' : 'text-black/50 dark:text-white/50'}`}>
                        <span className={`font-medium mr-1 ${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'}`}>Duration Time:</span> 
                        {plan.duration}
                      </div>
                      <div className={`h-[1px] w-full max-w-[344px] mt-3 ${isGlobalGradient ? 'bg-white' : 'bg-black/20 dark:bg-white/20'}`}></div>
                    </div>
                  </div>

                  {/* Right Half */}
                  <div className="flex flex-col w-[50%] text-left pl-0 md:pl-8 pt-6 md:pt-0 relative justify-between min-h-[280px]">
                    {/* Invisible Border between halves on desktop */}
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-transparent"></div>
                    
                    <div>
                      {/* Price */}
                      <div className={`font-pangram font-semibold text-[46px] leading-[50px] tracking-[-0.02em] mb-2 ${isGlobalGradient ? 'text-[#EBD4CB]' : 'text-black dark:text-white'}`}>
                        {plan.price}
                      </div>
                      
                      {/* Fine Underline */}
                      <div className={`h-[1px] w-full max-w-[344px] mb-4 ${isGlobalGradient ? 'bg-white' : 'bg-black/50 dark:bg-white/50'}`}></div>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <Check className={`w-[16px] h-[16px] shrink-0 mr-3 mt-1 ${isGlobalGradient ? 'text-white' : 'text-black dark:text-white'}`} strokeWidth={3} />
                            <span className={`font-pangram text-[16px] leading-[24px] font-semibold tracking-[-0.02em] ${isGlobalGradient ? 'text-white' : 'text-black/50 dark:text-white/50'}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Get Started Button */}
                    <div className="w-full mt-auto">
                      <button
                        className="bg-[#2B2B2B] text-white hover:bg-black dark:hover:bg-gray-800 w-full max-w-[200px] text-center justify-center flex py-[12px] px-[16px] rounded-[8px] font-pangram text-[16px] leading-[20px] font-light tracking-[-0.02em] transition-colors shadow-sm"
                      >
                        Get started
                      </button>
                    </div>
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
                    <GlobalGradient className="rounded-[20px] shadow-2xl border border-brndo-red/20 w-full">
                      <div className="flex flex-col md:flex-row w-full items-stretch p-6 md:p-8 gap-8 md:gap-0 z-10 relative">
                        {content}
                      </div>
                    </GlobalGradient>
                  ) : (
                    <div className="flex flex-col md:flex-row rounded-[20px] p-6 md:p-8 border relative items-stretch gap-8 md:gap-0 w-full border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
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
