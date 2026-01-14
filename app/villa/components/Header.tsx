'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, TreePine } from 'lucide-react';
import SmoothScrollLink from './SmoothScrollLink';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Booking', href: '#booking' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm dark:shadow-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-green-900 dark:bg-green-800 rounded-lg flex items-center justify-center">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-900 dark:text-green-300">Villa Serenity</h1>
              <p className="text-xs text-green-700 dark:text-green-400">Private Luxury Retreat</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <SmoothScrollLink
                key={item.label}
                href={item.href}
                className="text-green-800 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
              >
                {item.label}
              </SmoothScrollLink>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-800 dark:bg-green-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-900 dark:hover:bg-green-600 transition-colors"
            >
              <SmoothScrollLink href="#booking">Booking Sekarang</SmoothScrollLink>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-green-800 dark:text-green-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <SmoothScrollLink
                  key={item.label}
                  href={item.href}
                  className="text-green-800 dark:text-green-300 py-2 border-b border-green-100 dark:border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </SmoothScrollLink>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-green-800 dark:bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-900 dark:hover:bg-green-600"
              >
                <SmoothScrollLink href="#booking" onClick={() => setIsMenuOpen(false)}>
                  Booking Sekarang
                </SmoothScrollLink>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
