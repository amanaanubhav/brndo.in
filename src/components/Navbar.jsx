import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

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
    { name: 'Work', href: '#work' },
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
    { name: 'Studio', href: '#studio' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'bg-white/60 dark:bg-gray-950/80 backdrop-blur-sm shadow-sm py-3'
        : 'bg-white dark:bg-gray-950 py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-none z-50 -ml-4 md:-ml-16 lg:-ml-20">
          <a href="#">
            <img src="/brndo_logo.svg" alt="Brndo Logo" className="h-24 md:h-28 lg:h-32 w-auto dark:brightness-0 dark:invert transition-all" />
          </a>
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
          <a
            href="#contact"
            className="bg-black text-white px-8 py-3 rounded-md text-base font-semibold uppercase hover:bg-gray-900 dark:bg-brndo-red dark:hover:bg-brndo-darkRed cursor-pointer transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle & Icons */}
        <div className="md:hidden flex items-center gap-3 z-50">
          <ThemeToggle />
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-gray-900 dark:bg-brndo-red dark:hover:bg-brndo-darkRed transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
          {/* <a href="#contact" className="flex items-center justify-center w-11 h-11 rounded-md bg-black text-white dark:bg-white dark:text-black shadow-sm transition-transform active:scale-95">
            <i className="fi fi-sr-phone-call text-[18px] mt-[2px]"></i> 
            / </a> */}
          <button
            className="p-2 -mr-2 text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
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
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 w-full bg-black dark:bg-brndo-red text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-900 dark:hover:bg-brndo-darkRed transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
