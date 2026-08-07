import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-16 lg:pt-24 pb-12 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-20 lg:items-center">
          
          {/* Logo and Socials - Golden Ratio (approx 5/12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start mb-2 lg:mb-0">
            <div className="inline-flex flex-col items-center lg:items-start">
              <a href="#" className="block mb-6 lg:mb-10">
                <img src="/brndo_logo.svg" alt="Brndo Logo" className="h-32 md:h-40 lg:h-48 w-auto dark:brightness-0 dark:invert transition-all hover:scale-105 duration-500" />
              </a>
              <div className="flex gap-5">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brndo-red dark:hover:bg-brndo-red hover:border-brndo-red dark:hover:border-brndo-red hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brndo-red/20 hover:-translate-y-1">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brndo-red dark:hover:bg-brndo-red hover:border-brndo-red dark:hover:border-brndo-red hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brndo-red/20 hover:-translate-y-1">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brndo-red dark:hover:bg-brndo-red hover:border-brndo-red dark:hover:border-brndo-red hover:text-white dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brndo-red/20 hover:-translate-y-1">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Spacer for Golden Ratio balance */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Company Links */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white mb-4 lg:mb-8">Company</h4>
            <ul className="space-y-3 lg:space-y-5 text-gray-500 dark:text-gray-400 font-light text-base md:text-lg">
              <li><a href="/about-us" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">About Us<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#services" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">Services<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#pricing" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">Pricing<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#impact" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">Success Stories<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#blog" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#partners" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">Partner Program<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#careers" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">Careers<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>

          {/* Connect Info */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white mb-4 lg:mb-8">Connect</h4>
            <ul className="space-y-3 lg:space-y-5 text-gray-500 dark:text-gray-400 font-light text-base md:text-lg">
              <li><a href="mailto:info@brndo.in" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">info@brndo.in<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="tel:+918789756083" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group">+91 87897 56083<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span></a></li>
              <li className="leading-relaxed flex flex-col items-center lg:items-start gap-4">
                <a 
                  href="https://maps.app.goo.gl/wXAfqFb8zgpaYHhV6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors inline-block relative group"
                >
                  Navbharat Apartments, <br />Paschim Vihar, Delhi - 110063
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brndo-red transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Dynamic Google Map Test */}
                <div className="w-full max-w-[280px] h-28 mt-2 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  <iframe 
                    src="https://maps.google.com/maps?q=Navbharat+Apartments,+Paschim+Vihar,+Delhi+-+110063&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                    className="grayscale-[0.8] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 dark:text-gray-500 font-light transition-colors">
          <p>&copy; {new Date().getFullYear()} BRNDO. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end">
            <Link href="/privacy-policy" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors">Refund Policy</a>
            <Link href="/contact" className="hover:text-brndo-red dark:hover:text-brndo-red transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
