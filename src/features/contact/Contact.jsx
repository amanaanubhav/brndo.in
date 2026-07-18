'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-24 bg-gray-50 dark:bg-transparent flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex justify-center items-center">
          
          {/* Form Only */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-2xl bg-white dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden transition-colors duration-300"
          >
            {formState === 'success' ? (
              <div className="absolute inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-12 text-center z-10 transition-colors duration-300">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-50 dark:bg-green-950/30 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Received</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Thanks for reaching out. One of our growth strategists will review your details and get back to you within 24 hours.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8 relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 focus:border-brndo-red dark:focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 focus:border-brndo-red dark:focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Company Name *</label>
                  <input 
                    type="text" 
                    id="company" 
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 focus:border-brndo-red dark:focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Website URL</label>
                  <input 
                    type="url" 
                    id="website" 
                    className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 focus:border-brndo-red dark:focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="https://acme.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-200">Monthly Ad Spend *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Under $10k', '$10k - $50k', '$50k - $100k', '$100k+'].map((spend) => (
                    <label key={spend} className="cursor-pointer relative">
                      <input type="radio" name="spend" className="peer sr-only" required />
                      <div className="text-center px-3 py-3 border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-600 dark:text-gray-400 font-medium peer-checked:border-brndo-red dark:peer-checked:border-brndo-red peer-checked:bg-red-50 dark:peer-checked:bg-brndo-red/10 peer-checked:text-brndo-red hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        {spend}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-900 dark:text-gray-200">Primary Goal *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Scale Revenue', 'Lower CAC', 'Brand Awareness', 'App Installs'].map((goal) => (
                    <label key={goal} className="cursor-pointer relative">
                      <input type="radio" name="goal" className="peer sr-only" required />
                      <div className="px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-md text-sm text-gray-600 dark:text-gray-400 font-medium peer-checked:border-brndo-red dark:peer-checked:border-brndo-red peer-checked:bg-red-50 dark:peer-checked:bg-brndo-red/10 peer-checked:text-brndo-red hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        {goal}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-900 dark:text-gray-200">Additional Details</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 focus:border-brndo-red dark:focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                  placeholder="Tell us about your current challenges..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-black dark:bg-brndo-red text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-900 dark:hover:bg-brndo-darkRed transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? 'Submitting...' : 'Submit Request'}
                {formState !== 'submitting' && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
