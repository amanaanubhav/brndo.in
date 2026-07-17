'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import NewsletterSubscribe from '@/components/ui/NewsletterSubscribe';

/**
 * CaseStudyModal — Full-screen modal that opens when a Case Study card is clicked.
 * 
 * Layout: Two big vertical cards side-by-side.
 *   Left  — Empty (reserved for the case study report).
 *   Right — Newsletter subscription form inside gradient box.
 */
export default function CaseStudyModal({ isOpen, onClose, caseStudy }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[95vw] max-w-[1300px] h-[90vh] max-h-[750px] flex flex-col md:flex-row gap-5 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ─── Left Card: Case Study Report (empty for now) ─── */}
            <div className="flex-[583] min-w-0 h-full rounded-[20px] border border-white/20 bg-white dark:bg-gray-950 overflow-hidden flex flex-col shadow-2xl">
              {/* Report header strip */}
              <div className="px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <span className="font-pangram text-[11px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Case Study Report
                </span>
                {caseStudy && (
                  <h3
                    className="font-pangram text-[18px] md:text-[22px] leading-[1.3] tracking-wide text-black dark:text-white font-medium mt-2"
                    dangerouslySetInnerHTML={{ __html: caseStudy.text }}
                  />
                )}
              </div>

              {/* Empty report area */}
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="flex flex-col items-center gap-4 text-center opacity-30">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 dark:text-gray-500">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <p className="font-pangram text-[13px] text-gray-400 dark:text-gray-500 tracking-wide">
                    Report content coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Right Card: Newsletter Subscribe ─── */}
            <div className="flex-[718] min-w-0 h-full relative">
              <NewsletterSubscribe className="w-full h-full" />
              
              {/* Close Button (simple cross on top right of gradient box) */}
              <button
                onClick={onClose}
                className="absolute top-[43px] right-[43px] md:right-[52px] z-20 w-[32px] h-[32px] flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
                aria-label="Close modal"
              >
                <X size={32} strokeWidth={1} className="text-white" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
