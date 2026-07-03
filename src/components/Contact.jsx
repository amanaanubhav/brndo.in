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
    <section id="contact" className="min-h-screen pt-32 pb-24 bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Copy & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-40"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
              Ready to <span className="text-brndo-red">scale</span> your brand?
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed font-light">
              We partner with ambitious brands to drive aggressive, profitable growth. Drop us a line with your current numbers and goals, and we'll show you how we can multiply them.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-brndo-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Strategy</h3>
                  <p className="text-gray-600">Every decision we make is backed by rigorous data analysis and testing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-brndo-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Relentless Execution</h3>
                  <p className="text-gray-600">We move fast, break bottlenecks, and aggressively optimize for your KPIs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden"
          >
            {formState === 'success' ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-12 text-center z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Received</h3>
                <p className="text-gray-600 text-lg">
                  Thanks for reaching out. One of our growth strategists will review your details and get back to you within 24 hours.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8 relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-900">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-900">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-900">Company Name *</label>
                  <input 
                    type="text" 
                    id="company" 
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-semibold text-gray-900">Website URL</label>
                  <input 
                    type="url" 
                    id="website" 
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                    placeholder="https://acme.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-900">Monthly Ad Spend *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Under $10k', '$10k - $50k', '$50k - $100k', '$100k+'].map((spend) => (
                    <label key={spend} className="cursor-pointer relative">
                      <input type="radio" name="spend" className="peer sr-only" required />
                      <div className="text-center px-3 py-3 border border-gray-200 rounded-md text-sm text-gray-600 font-medium peer-checked:border-brndo-red peer-checked:bg-red-50 peer-checked:text-brndo-red hover:bg-gray-50 transition-colors">
                        {spend}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-900">Primary Goal *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Scale Revenue', 'Lower CAC', 'Brand Awareness', 'App Installs'].map((goal) => (
                    <label key={goal} className="cursor-pointer relative">
                      <input type="radio" name="goal" className="peer sr-only" required />
                      <div className="px-4 py-3 border border-gray-200 rounded-md text-sm text-gray-600 font-medium peer-checked:border-brndo-red peer-checked:bg-red-50 peer-checked:text-brndo-red hover:bg-gray-50 transition-colors">
                        {goal}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-900">Additional Details</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-brndo-red px-0 py-3 outline-none transition-colors text-gray-900 placeholder:text-gray-400 resize-none"
                  placeholder="Tell us about your current challenges..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-black text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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
