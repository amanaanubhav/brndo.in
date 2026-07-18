'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ThemeToggle';
import Button from '@/components/ui/Button';
import { buttonData } from '@/data/buttons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/performance-marketing' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Performance Ads', href: '#ads' },
        { name: 'SEO & Content', href: '#seo' },
        { name: 'Conversion Optimization', href: '#cro' },
        { name: 'Programmatic Advertising', href: '#programmatic' },
        { name: 'App Growth', href: '#app' },
        { name: 'Retention Marketing', href: '#retention' }
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Studio', href: '/career' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'bg-white/60 dark:bg-gray-950/80 backdrop-blur-sm shadow-sm py-3'
        : 'bg-white dark:bg-gray-950 py-4 md:py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-none z-50 -ml-4 md:-ml-16 lg:-ml-20 -my-3 md:-my-5 lg:-my-6">
          <Link href="/">
            <img src="/brndo_logo.svg" alt="Brndo Logo" className="h-24 md:h-28 lg:h-32 w-auto dark:brightness-0 dark:invert transition-all" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8 pr-4 lg:pr-12">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-base font-semibold uppercase text-gray-700 dark:text-gray-200 hover:bg-brndo-red hover:text-white px-5 py-2.5 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white dark:bg-gray-900 rounded-md shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col p-2">
                    {link.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="text-sm font-semibold uppercase text-gray-600 dark:text-gray-300 hover:bg-brndo-red hover:text-white px-4 py-3 rounded-md transition-colors block"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold uppercase text-gray-700 dark:text-gray-200 hover:bg-brndo-red hover:text-white px-5 py-2.5 rounded-md transition-colors block"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Right side: Toggle & Contact */}
        <div className="hidden md:flex flex-none items-center gap-4 md:gap-6 z-50">
          <ThemeToggle />
          <Button
            href="/contact"
            variant="primary"
            className="px-8 py-3"
          >
            {buttonData.nav.contact}
          </Button>
        </div>

        {/* Mobile Toggle & Icons */}
        <div className="md:hidden flex items-center gap-3 z-50">
          <button
            className="p-2 text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
          <Link
            href="/contact"
            className="w-[38px] h-[38px] bg-[#2B2B2B] rounded-[5px] flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-md"
            aria-label="Contact Us"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="animate-ring">
              {/* Solid Handset */}
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white" />
              {/* Wave 1 (Inner) */}
              <path d="M15 6 A 5 5 0 0 1 20 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              {/* Wave 2 (Outer) */}
              <path d="M15 2 A 9 9 0 0 1 24 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-950 pt-24 px-8 flex flex-col gap-5 md:hidden overflow-y-auto pb-24"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                  className="text-[22px] font-light tracking-wide text-gray-800 dark:text-gray-200 flex items-center justify-between hover:opacity-60 transition-opacity"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-5 h-5 text-gray-400 stroke-[1.5]" />}
                </a>
                {link.dropdown && (
                  <div className="pl-4 mt-3 flex flex-col gap-3 border-l-[1.5px] border-brndo-red/20">
                    {link.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[16px] font-light tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1.5"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              variant="primary"
              className="mt-6 w-full px-8 py-4 text-lg dark:bg-brndo-red group gap-2"
            >
              {buttonData.nav.contact}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
