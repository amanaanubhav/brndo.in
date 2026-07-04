import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your attribution model and how do you track conversions?",
    answer: "We utilize a hybrid attribution system combining direct server-side integrations (like Meta Conversions API and Google Offline Conversions) with platform-level tracking and post-purchase surveys. This bypasses browser-level blockages (iOS 14.5+) and allows us to track true, incremental ROAS and CAC."
  },
  {
    question: "Do you have a minimum monthly ad spend requirement?",
    answer: "Yes. To build a robust testing loop with statistically significant data, we partner with brands spending at least $10,000 per month. This budget allows us to run rapid creative and structural tests to find scaling opportunities quickly."
  },
  {
    question: "Which platforms and ad networks do you specialize in?",
    answer: "Our core specialization is in Meta (Facebook & Instagram Ads), Google Ads (Search, Performance Max, YouTube), and TikTok Ads. We also handle full landing page optimization (CRO) to ensure the traffic we buy actually converts."
  },
  {
    question: "How quickly can we expect to see measurable results?",
    answer: "Audits, tracking fixes, and initial creative testing go live within the first 14 days. While stabilization and minor optimizations occur in the first month, scalable and highly profitable growth typically matures between day 30 and 90."
  },
  {
    question: "What is your pricing structure?",
    answer: "We work on a custom flat-fee retainer plus a performance/percentage-of-spend model, depending on your business stage and scale. We align our goals directly with your target metrics (MER/ROAS) to make sure our growth is profitable for you."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-pangram text-3xl md:text-5xl font-black text-black dark:text-white tracking-tighter uppercase mb-4"
          >
            Frequently Asked <span className="text-brndo-red">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 font-light"
          >
            Got questions about scaling your digital presence? We've got answers.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-900 dark:text-white text-base md:text-lg pr-4 transition-colors hover:text-brndo-red">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-brndo-red" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 font-light leading-relaxed border-t border-gray-50 dark:border-gray-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
