import { Instagram, Youtube } from 'lucide-react';
import Button from '@/components/ui/Button';
import { buttonData } from '@/data/buttons';
import Link from 'next/link';

export default function Footer2() {
  return (
    <footer className="bg-white dark:bg-gray-950 relative w-full pt-12 pb-6 overflow-hidden font-pangram transition-colors duration-300 border-t border-gray-100 dark:border-gray-900">
      <div className="hidden md:grid max-w-7xl mx-auto px-6 md:px-12 w-full grid-cols-2 gap-16">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="mb-8">
              <img src="/brndo_logo.svg" alt="BRNDO Logo" className="h-48 md:h-[250px] lg:h-[300px] w-auto dark:brightness-0 dark:invert transition-all" />
            </div>

            {/* Contact Details */}
            <div className="mb-8 flex flex-col gap-5 font-pangram font-light text-[20px] md:text-[24px] text-black dark:text-white opacity-70 tracking-[-0.02em] transition-colors">
              
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] rounded-full bg-[#1A1A1A] dark:bg-[#E5E5E5] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <a href="tel:+918789756083" className="hover:opacity-100 transition-opacity">+91 87897 56083</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] rounded-full bg-[#1A1A1A] dark:bg-[#E5E5E5] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <a href="mailto:info@brndo.in" className="hover:opacity-100 transition-opacity">info@brndo.in</a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-[30px] h-[30px] rounded-full bg-[#1A1A1A] dark:bg-[#E5E5E5] flex items-center justify-center shrink-0 mt-1 md:mt-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <a href="https://maps.app.goo.gl/wXAfqFb8zgpaYHhV6" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity leading-tight">
                  Navbharat Apartments,<br />
                  Paschim Vihar, Delhi - 110063
                </a>
              </div>
              
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="font-pangram font-light text-[24px] text-black dark:text-white opacity-70 tracking-[-0.02em] transition-colors">Socials</span>
            <div className="flex gap-4">
              <a href="#" className="w-[50px] h-[50px] bg-white dark:bg-gray-900 border-[2px] border-black dark:border-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-brndo-red hover:border-brndo-red hover:text-white dark:hover:bg-brndo-red dark:hover:border-brndo-red dark:hover:text-white transition-all duration-300 text-black dark:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-[50px] h-[50px] bg-white dark:bg-gray-900 border-[2px] border-black dark:border-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-brndo-red hover:border-brndo-red hover:text-white dark:hover:bg-brndo-red dark:hover:border-brndo-red dark:hover:text-white transition-all duration-300 text-black dark:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-[50px] h-[50px] bg-white dark:bg-gray-900 border-[2px] border-black dark:border-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-brndo-red hover:border-brndo-red hover:text-white dark:hover:bg-brndo-red dark:hover:border-brndo-red dark:hover:text-white transition-all duration-300 text-black dark:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12 md:gap-16 md:items-end mt-12 md:mt-0">
          
          {/* Newsletter Section */}
          <div className="flex flex-col w-full max-w-[457px] items-start text-left pt-2 md:pt-4">
            <h2 className="text-[40px] md:text-[54px] font-light leading-[1.06] tracking-[-0.02em] text-black dark:text-white mb-8 transition-colors w-full text-left">
              Subscribe to<br/>our newsletter
            </h2>

            <div className="flex flex-col gap-4 mb-8 w-full">
              <div className="w-full bg-white dark:bg-gray-900 border border-[#707070] dark:border-gray-700 rounded-[13px] h-[62px] flex items-center px-6 transition-colors">
                <span className="font-light text-[18px] md:text-[21px] text-black dark:text-white opacity-40 tracking-[-0.02em]">Email</span>
              </div>
              <Button variant="primary" className="w-full sm:w-[300px] h-[61px]">
                {buttonData.footer.subscribe}
              </Button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-row gap-8 sm:gap-16 w-full max-w-[457px] justify-start text-left">
            <div className="flex flex-col gap-10 flex-1">
              {/* Navigation */}
              <div className="flex flex-col gap-6">
                <h3 className="font-normal text-[18px] md:text-[20px] text-black dark:text-gray-400 tracking-[-0.02em] transition-colors">Navigation</h3>
                <ul className="flex flex-col gap-4 font-sans list-disc list-inside marker:text-black dark:marker:text-white">
                  <li className="whitespace-nowrap"><a href="#" className="font-medium text-[16px] md:text-[18px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Home</a></li>
                  <li className="whitespace-nowrap"><a href="#" className="font-medium text-[16px] md:text-[18px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">About us</a></li>
                  <li className="whitespace-nowrap"><a href="#" className="font-medium text-[16px] md:text-[18px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Pricing</a></li>
                  <li className="whitespace-nowrap"><Link href="/contact" className="font-medium text-[16px] md:text-[18px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              {/* Legal */}
              <div className="flex flex-col gap-6">
                <h3 className="font-normal text-[18px] md:text-[20px] text-black dark:text-gray-400 tracking-[-0.02em] transition-colors">Legal</h3>
                <ul className="flex flex-col gap-4 font-sans list-disc list-inside marker:text-black dark:marker:text-white">
                  <li className="whitespace-nowrap"><Link href="/privacy-policy" className="font-medium text-[16px] md:text-[18px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Privacy Policy</Link></li>
                  <li className="whitespace-nowrap"><Link href="/privacy-policy" className="font-medium text-[16px] md:text-[18px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Terms & Service</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Empty column placeholder to maintain width and spacing equivalent to before */}
            <div className="flex flex-col gap-6 flex-1"></div>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 md:px-12 justify-end mt-16">
        <p className="font-sans font-medium text-[16px] md:text-[22px] text-black dark:text-white opacity-50 tracking-[-0.02em] flex items-center gap-1 transition-colors">
          &copy; 2026 BRNDO All rights reserved.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col w-full px-6 gap-8 pb-4">
        {/* 1. Logo enlarged at the center */}
        <div className="flex justify-center w-full">
          <img src="/brndo_logo.svg" alt="BRNDO Logo" className="h-[200px] w-auto dark:brightness-0 dark:invert transition-all" />
        </div>
        
        {/* 2. Subscribe to newsletter left aligned */}
        <div className="flex flex-col w-full items-start text-left">
          <h2 className="text-[32px] font-light leading-[1.06] tracking-[-0.02em] text-black dark:text-white mb-6 transition-colors w-full text-left">
            Subscribe to<br/>our newsletter
          </h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full bg-white dark:bg-gray-900 border border-[#707070] dark:border-gray-700 rounded-[13px] h-[50px] flex items-center px-4 transition-colors">
              <span className="font-light text-[16px] text-black dark:text-white opacity-40 tracking-[-0.02em]">Email</span>
            </div>
            <Button variant="primary" className="w-full h-[50px]">
              {buttonData.footer.subscribe}
            </Button>
          </div>
        </div>

        {/* 2-Column Row */}
        <div className="flex flex-row justify-between w-full mt-4">
          
          {/* Left Column: Quick Links */}
          <div className="flex flex-col flex-1 pr-2">
            <h3 className="font-normal text-[18px] text-black dark:text-gray-400 tracking-[-0.02em] transition-colors mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 font-sans list-disc list-inside marker:text-black dark:marker:text-white">
              <li className="whitespace-nowrap"><Link href="/privacy-policy" className="font-medium text-[14px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Privacy Policy</Link></li>
              <li className="whitespace-nowrap"><Link href="/privacy-policy" className="font-medium text-[14px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Terms & Service</Link></li>
              <li className="whitespace-nowrap"><a href="#" className="font-medium text-[14px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Refund Policy</a></li>
              <li className="whitespace-nowrap"><Link href="/contact" className="font-medium text-[14px] text-black dark:text-white tracking-[-0.02em] hover:text-brndo-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-1 pl-2 items-end">
            
            {/* Details */}
            <div className="flex flex-col items-start w-[140px]">
              <h3 className="font-normal text-[18px] text-black dark:text-gray-400 tracking-[-0.02em] transition-colors mb-4 text-left w-full">Details</h3>
              <div className="flex flex-col gap-3 font-pangram font-light text-[12px] text-black dark:text-white opacity-70 tracking-[-0.02em] transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#1A1A1A] dark:bg-[#E5E5E5] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <a href="tel:+918789756083" className="hover:opacity-100 transition-opacity whitespace-nowrap">+91 87897 56083</a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#1A1A1A] dark:bg-[#E5E5E5] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <a href="mailto:info@brndo.in" className="hover:opacity-100 transition-opacity">info@brndo.in</a>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#1A1A1A] dark:bg-[#E5E5E5] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <a href="https://maps.app.goo.gl/wXAfqFb8zgpaYHhV6" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity leading-tight">
                    Navbharat Apts,<br />
                    Delhi - 110063
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-start w-[140px] mt-8">
              <h3 className="font-normal text-[18px] text-black dark:text-gray-400 tracking-[-0.02em] transition-colors mb-4 text-left w-full">Socials</h3>
              <div className="flex gap-2">
                <a href="#" className="w-[30px] h-[30px] bg-white dark:bg-gray-900 border border-black dark:border-white rounded-full flex items-center justify-center text-black dark:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-[30px] h-[30px] bg-white dark:bg-gray-900 border border-black dark:border-white rounded-full flex items-center justify-center text-black dark:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-[30px] h-[30px] bg-white dark:bg-gray-900 border border-black dark:border-white rounded-full flex items-center justify-center text-black dark:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-end w-full mt-8">
              <p className="font-sans font-medium text-[9px] text-black dark:text-white opacity-50 tracking-[-0.02em] flex items-center justify-end gap-1 transition-colors text-right">
                &copy; 2026 BRNDO All rights reserved.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
