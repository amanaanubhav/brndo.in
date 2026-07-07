import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const dummyFAQs = Array(6).fill({
  question: "QUESTION",
  answer: "Sample answer content. Lorem ipsum dolor sit amet."
});

const faqData = {
  General: dummyFAQs,
  Pricing: dummyFAQs,
  Process: dummyFAQs,
  Results: dummyFAQs
};

const tabs = ['General', 'Pricing', 'Process', 'Results'];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Reset open accordion when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        {/* Top Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-1.2 md:px-8 md:py-1 rounded-lg font-pangram text-sm md:text-base transition-all duration-300 whitespace-nowrap ${activeTab === tab
                ? 'bg-brndo-lightRed text-brndo-red font-bold shadow-sm'
                : 'text-black dark:text-white font-normal hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full items-start">

          {/* Left Side: Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-pangram text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white uppercase leading-tight tracking-wide"
            >
              <span className="whitespace-nowrap">FREQUENTLY ASKED</span><br />QUESTIONS.
            </motion.h2>
          </div>

          {/* Right Side: FAQ Accordions */}
          <div className="lg:w-2/3 space-y-4 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faqData[activeTab].map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-brndo-lightRed dark:bg-brndo-red/10 border border-brndo-red/10 rounded-xl overflow-hidden shadow-sm transition-colors duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className="font-bold text-gray-900 dark:text-white text-base md:text-lg pr-4 transition-colors">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-sm transition-colors">
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-brndo-red" />
                          ) : (
                            <Plus className="w-4 h-4 text-black dark:text-white" />
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
                            <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 font-light leading-relaxed border-t border-brndo-red/10 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
