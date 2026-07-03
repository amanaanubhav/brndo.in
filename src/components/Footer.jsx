import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-transparent text-gray-900 dark:text-white pt-20 pb-10 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="inline-flex flex-col items-center">
              <a href="#" className="block mb-8">
                <img src="/brndo_logo.svg" alt="Brndo Logo" className="h-32 md:h-48 lg:h-56 w-auto dark:brightness-0 dark:invert transition-all" />
              </a>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-400 dark:text-white/50 hover:bg-brndo-red dark:hover:bg-white hover:border-brndo-red dark:hover:border-white hover:text-white dark:hover:text-brndo-red transition-all duration-300">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-400 dark:text-white/50 hover:bg-brndo-red dark:hover:bg-white hover:border-brndo-red dark:hover:border-white hover:text-white dark:hover:text-brndo-red transition-all duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-400 dark:text-white/50 hover:bg-brndo-red dark:hover:bg-white hover:border-brndo-red dark:hover:border-white hover:text-white dark:hover:text-brndo-red transition-all duration-300">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-black dark:text-white">Company</h4>
            <ul className="space-y-4 text-gray-600 dark:text-white/80 font-medium">
              <li><a href="#about" className="hover:text-brndo-red dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brndo-red dark:hover:text-white transition-colors">Services</a></li>
              <li><a href="#impact" className="hover:text-brndo-red dark:hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#careers" className="hover:text-brndo-red dark:hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-black dark:text-white">Connect</h4>
            <ul className="space-y-4 text-gray-600 dark:text-white/80 font-medium">
              <li><a href="mailto:info@brndo.in" className="hover:text-brndo-red dark:hover:text-white transition-colors">info@brndo.in</a></li>
              <li><a href="tel:+918789756083" className="hover:text-brndo-red dark:hover:text-white transition-colors">8789756083</a></li>
              <li><p>Mumbai, India</p></li>
            </ul>

          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-white/60 font-medium transition-colors">
          <p>&copy; {new Date().getFullYear()} BRNDO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brndo-red dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brndo-red dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
