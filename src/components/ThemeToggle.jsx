import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 flex items-center bg-gray-200 dark:bg-white/20 rounded-full p-1 cursor-pointer transition-colors duration-300 overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 flex items-center justify-between px-2 w-full text-gray-400">
        <Moon size={12} className="opacity-50 dark:opacity-100 dark:text-white" />
        <Sun size={12} className="opacity-100 dark:opacity-50 text-gray-600 dark:text-gray-400" />
      </div>
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-sm flex items-center justify-center z-10"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{ marginLeft: theme === 'dark' ? '28px' : '0' }}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-brndo-red" />
        ) : (
          <Sun size={12} className="text-gray-500" />
        )}
      </motion.div>
    </button>
  );
}
