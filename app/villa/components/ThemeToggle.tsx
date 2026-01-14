'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors ${theme === 'light' ? 'bg-white dark:bg-gray-700 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700/50'}`}
        title="Mode Terang"
      >
        <Sun className={`w-4 h-4 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}`} />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors ${theme === 'system' ? 'bg-white dark:bg-gray-700 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700/50'}`}
        title="Mode Sistem"
      >
        <Monitor className={`w-4 h-4 ${theme === 'system' ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-white dark:bg-gray-700 shadow' : 'hover:bg-white/50 dark:hover:bg-gray-700/50'}`}
        title="Mode Gelap"
      >
        <Moon className={`w-4 h-4 ${theme === 'dark' ? 'text-purple-400' : 'text-gray-500 dark:text-gray-400'}`} />
      </motion.button>
    </div>
  );
}
