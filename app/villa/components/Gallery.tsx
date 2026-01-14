'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
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

  const galleryItems = [
    { title: 'Kolam Renang Infinity', desc: 'Dengan pemandangan lembah' },
    { title: 'Ruang Keluarga', desc: 'Desain interior modern' },
    { title: 'Taman Privasi', desc: 'Area relaksasi outdoor' },
  ];

  return (
    <section id="galeri" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-400 mb-4">Galeri Villa</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Jelajahi keindahan dan kenyamanan Villa Serenity melalui koleksi foto kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg dark:shadow-gray-800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-green-100">{item.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
