'use client';

import { motion } from 'framer-motion';

const DUMMY_TEXT = `Welcome to BRNDO. This Privacy Policy explains how BRNDO collects, uses, 
discloses, and safeguards your information when you visit our website, interact 
with our advertising and marketing services, or engage with our digital 
platforms.

By accessing our website or using our services, you agree to the collection and
use of information in accordance with this policy. At BRNDO, we are committed
to protecting your privacy and ensuring that your personal information is
handled securely, responsibly, and transparently.`;

const sections = [
  { title: "Introduction", content: DUMMY_TEXT },
  { title: "Data Collection", content: DUMMY_TEXT },
  { title: "Use of Data", content: DUMMY_TEXT },
  { title: "Cookies", content: DUMMY_TEXT },
  { title: "Third-party Services", content: DUMMY_TEXT },
  { title: "Your Rights", content: DUMMY_TEXT },
  { title: "Contact Us", content: DUMMY_TEXT },
];

export default function PrivacyContent() {
  return (
    <section className="w-full pb-32 px-4 md:px-8 bg-white flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-12 items-start px-4 lg:px-12">
        
        {/* Content Box (70%) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[70%] bg-white border border-black rounded-[20px] p-8 md:p-16 lg:p-20 overflow-hidden relative"
          style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="flex flex-col gap-[72px]">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="flex flex-col gap-4"
              >
                <h3 
                  className="font-pangram text-black tracking-[-0.02em]"
                  style={{ fontWeight: 600, fontSize: '26.21px', lineHeight: '30px' }}
                >
                  {section.title}
                </h3>
                <p 
                  className="font-pangram text-black tracking-[-0.02em] whitespace-pre-line"
                  style={{ fontWeight: 336, fontSize: '26.21px', lineHeight: '27px' }}
                >
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Box (30%) - Placeholder */}
        <div className="w-full lg:w-[30%] sticky top-32">
          {/* This matches the 30% width allocation for the navigation element mentioned by user */}
          <div className="w-full bg-gray-50/50 border border-dashed border-gray-300 rounded-[20px] p-12 flex flex-col items-center justify-center min-h-[400px]">
            <span className="text-gray-400 font-pangram text-center font-medium mb-2">Navigation Component</span>
            <span className="text-gray-400/80 font-pangram text-center text-sm">Reserved layout space (30%)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
