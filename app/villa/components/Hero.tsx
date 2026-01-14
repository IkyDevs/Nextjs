'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Bed, Bath, ChevronLeft, ChevronRight } from 'lucide-react';
import SmoothScrollLink from './SmoothScrollLink';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const villaImages = [
    { id: 1, alt: 'Villa Eksterior', description: 'Tampak depan villa dengan kolam renang pribadi' },
    { id: 2, alt: 'Kamar Tidur Utama', description: 'Kamar tidur utama dengan pemandangan alam' },
    { id: 3, alt: 'Area Ruang Keluarga', description: 'Ruang keluarga yang luas dan nyaman' },
    { id: 4, alt: 'Dapur Modern', description: 'Dapur lengkap dengan peralatan memasak' },
    { id: 5, alt: 'Taman Privasi', description: 'Area taman pribadi yang asri' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % villaImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + villaImages.length) % villaImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Luxury Villa <span className="text-green-900 dark:text-green-400">Private Retreat</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Pengalaman menginap tak terlupakan di villa mewah dengan pemandangan alam menakjubkan.
              Privasi terjamin, fasilitas lengkap, dan pelayanan terbaik untuk liburan sempurna Anda.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Bed className="w-5 h-5 text-green-800 dark:text-green-400" />
                <span className="text-gray-800 dark:text-gray-300 font-medium">4 Kamar Tidur</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="w-5 h-5 text-green-800 dark:text-green-400" />
                <span className="text-gray-800 dark:text-gray-300 font-medium">3 Kamar Mandi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-800 dark:text-green-400" />
                <span className="text-gray-800 dark:text-gray-300 font-medium">Max 8 Tamu</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-800 dark:text-green-400" />
                <span className="text-gray-800 dark:text-gray-300 font-medium">Ubud, Bali</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-800 dark:bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 dark:hover:bg-green-600 transition-colors shadow-lg"
              >
                <SmoothScrollLink href="#booking">Booking Sekarang</SmoothScrollLink>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-800 dark:border-green-700 text-green-800 dark:text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                <SmoothScrollLink href="#gallery">Lihat Galeri</SmoothScrollLink>
              </motion.button>
            </div>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-800/50">
              {villaImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${index === currentImageIndex ? 'block' : 'hidden'}`}
                >
                  <div className="w-full h-full bg-gradient-to-r from-green-900 to-green-700 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <h3 className="text-2xl font-bold mb-4">Gambar {image.id}</h3>
                      <p className="text-lg">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-green-900 dark:text-green-400" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-green-900 dark:text-green-400" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {villaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
