'use client';

import { motion } from 'framer-motion';
import { Wifi, Car, TreePine, ChefHat, Users, Bath } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { icon: <Wifi className="w-8 h-8" />, title: 'WiFi Cepat', desc: 'Internet kecepatan tinggi' },
    { icon: <Car className="w-8 h-8" />, title: 'Parkir Gratis', desc: 'Area parkir luas' },
    { icon: <TreePine className="w-8 h-8" />, title: 'Taman Pribadi', desc: 'Taman dengan pepohonan' },
    { icon: <ChefHat className="w-8 h-8" />, title: 'Dapur Lengkap', desc: 'Peralatan memasak modern' },
    { icon: <Users className="w-8 h-8" />, title: 'Ruang Keluarga', desc: 'Area berkumpul keluarga' },
    { icon: <Bath className="w-8 h-8" />, title: 'Hot Tub', desc: 'Jacuzzi air panas' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="fasilitas" className="py-16 bg-green-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-400 mb-4">Fasilitas Unggulan</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Nikmati berbagai fasilitas premium yang dirancang untuk kenyamanan dan kemewahan selama menginap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-900/50 transition-shadow border border-green-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-green-900/10 dark:bg-green-400/10 rounded-xl flex items-center justify-center mb-4">
                <div className="text-green-900 dark:text-green-400">
                  {facility.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-2">{facility.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
