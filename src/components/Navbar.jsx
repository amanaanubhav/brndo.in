import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
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
        ? 'bg-white/60 dark:bg-brndo-red/80 backdrop-blur-sm shadow-sm py-3' 
        : 'bg-white dark:bg-brndo-red py-5'
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-none z-50">
          <img src="/brndo_logo.svg" alt="Brndo Logo" className="h-14 md:h-16 w-auto dark:brightness-0 dark:invert transition-all" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-start ml-12 lg:ml-20 gap-4 lg:gap-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href}
                  className="text-base font-semibold text-gray-700 dark:text-white/90 hover:bg-brndo-red dark:hover:bg-white hover:text-white dark:hover:text-brndo-red px-5 py-2.5 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white dark:bg-brndo-darkRed rounded-md shadow-xl border border-gray-100 dark:border-white/10 overflow-hidden flex flex-col p-2">
                    {link.dropdown.map((dropItem) => (
                      <a 
                        key={dropItem.name} 
                        href={dropItem.href}
                        className="text-sm font-semibold text-gray-600 dark:text-white/80 hover:bg-brndo-red dark:hover:bg-white hover:text-white dark:hover:text-brndo-red px-4 py-3 rounded-md transition-colors block"
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
                className="text-base font-semibold text-gray-700 dark:text-white/90 hover:bg-brndo-red dark:hover:bg-white hover:text-white dark:hover:text-brndo-red px-5 py-2.5 rounded-md transition-colors block"
              >
                {link.name}
              </a>
            )
          ))}
          
          <div className="ml-auto flex items-center gap-6">
            <ThemeToggle />
            <a 
              href="#contact" 
              className="bg-black dark:bg-white text-white dark:text-brndo-red px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 cursor-pointer transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button 
            className="p-2 -mr-2 text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-brndo-darkRed pt-24 px-6 flex flex-col gap-6 md:hidden overflow-y-auto pb-24"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-between"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-6 h-6 text-gray-400 dark:text-white/50" />}
                </a>
                {link.dropdown && (
                  <div className="pl-4 mt-4 flex flex-col gap-4 border-l-2 border-brndo-red/20 dark:border-white/20">
                    {link.dropdown.map((dropItem) => (
                      <a 
                        key={dropItem.name} 
                        href={dropItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xl font-semibold text-gray-600 dark:text-white/80 hover:text-brndo-red dark:hover:text-white transition-colors"
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
              className="mt-8 bg-black dark:bg-white text-white dark:text-brndo-red text-center py-4 rounded-md text-xl font-bold"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
