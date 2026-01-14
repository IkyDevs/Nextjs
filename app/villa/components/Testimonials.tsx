'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      location: 'Jakarta',
      rating: 5,
      comment: 'Villa yang sangat nyaman dan privasi terjaga. Pelayanan staff luar biasa!',
      date: '15 Jan 2024'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      location: 'Bandung',
      rating: 5,
      comment: 'Pemandangan dari kamar tidur utama sangat menakjubkan. Akan kembali lagi!',
      date: '22 Des 2023'
    },
    {
      id: 3,
      name: 'Ahmad Rizki',
      location: 'Surabaya',
      rating: 4,
      comment: 'Fasilitas lengkap dan bersih. Cocok untuk staycation keluarga.',
      date: '5 Nov 2023'
    },
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
    <section id="testimoni" className="py-16 bg-green-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-400 mb-4">Testimoni Tamu</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Pengalaman mengesankan dari tamu yang pernah menginap di Villa Serenity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-green-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-900/10 dark:bg-green-400/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-900 dark:text-green-400 font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-300">{testimonial.name}</h4>
                  <p className="text-sm text-green-700 dark:text-green-400">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
              <p className="text-sm text-green-700 dark:text-green-400">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
