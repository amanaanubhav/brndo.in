import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 overflow-hidden border ${
        theme === 'dark' ? 'bg-brndo-red border-brndo-red' : 'bg-white border-gray-200'
      }`}
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 flex items-center justify-between px-1.5 w-full">
        <Moon size={14} className={`transition-opacity ${theme === 'dark' ? 'opacity-100 text-white' : 'opacity-0'}`} />
        <Sun size={14} className={`transition-opacity ${theme === 'light' ? 'opacity-100 text-gray-400' : 'opacity-0'}`} />
      </div>
      <motion.div
        className={`w-5 h-5 rounded-full shadow-sm z-10 ${theme === 'dark' ? 'bg-white' : 'bg-brndo-red'}`}
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{ marginLeft: theme === 'dark' ? '28px' : '0' }}
      />
    </button>
  );
}
