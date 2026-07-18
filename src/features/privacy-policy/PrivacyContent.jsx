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
                  className="font-pangram text-black tracking-[-0.03em]"
                  style={{ fontWeight: 336, fontSize: '48px', lineHeight: '52px' }}
                >
                  {section.title}
                </h3>
                <p 
                  className="font-pangram text-black tracking-[-0.01em] whitespace-pre-line"
                  style={{ fontWeight: 336, fontSize: '20px', lineHeight: '30px' }}
                >
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Navigation Box (30%) */}
        <div className="w-full lg:w-[30%] sticky top-32 flex justify-start lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-black rounded-[20px] p-8 flex flex-col w-full max-w-[273px]"
            style={{ 
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
              minHeight: '477px'
            }}
          >
            <h4 
              className="font-pangram text-black tracking-[-0.02em] mb-8"
              style={{ fontWeight: 600, fontSize: '16.12px', lineHeight: '30px' }}
            >
              Quick Navigation
            </h4>
            
            <ul className="flex flex-col gap-5 flex-grow">
              {sections.map((section, index) => (
                <li key={index}>
                  <a 
                    href={`#section-${index}`}
                    className="flex items-center gap-3 hover:text-[#800000] transition-colors group"
                  >
                    {/* Placeholder for Icon (14x16 etc) */}
                    <span className="w-4 h-4 bg-gray-200 group-hover:bg-[#800000] transition-colors flex-shrink-0" style={{ maskImage: 'linear-gradient(white, white)', WebkitMaskImage: 'linear-gradient(white, white)' }}></span>
                    <span 
                      className="font-pangram text-black group-hover:text-[#800000] tracking-[-0.02em] transition-colors"
                      style={{ fontWeight: 336, fontSize: '16.12px', lineHeight: '17px' }}
                    >
                      {section.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
