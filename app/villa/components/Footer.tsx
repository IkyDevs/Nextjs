'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, TreePine, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-green-950 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-green-800/30 rounded-lg flex items-center justify-center">
                <TreePine className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Villa Serenity</h3>
                <p className="text-green-300 text-sm">Luxury Private Villa</p>
              </div>
            </div>
            <p className="text-green-300 mb-6">
              Pengalaman menginap mewah dengan privasi terjamin di tengah keindahan alam Bali.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-green-400 mt-1" />
                <span className="text-green-300">Jalan Raya Ubud No. 123, Gianyar, Bali, Indonesia</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <a href="tel:+6281234567890" className="text-green-300 hover:text-white">
                  +62 812 3456 7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-400" />
                <a href="mailto:info@villa-serenity.com" className="text-green-300 hover:text-white">
                  info@villa-serenity.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Jam Operasional</h4>
            <div className="space-y-2 text-green-300">
              <p className="flex justify-between">
                <span>Check-in:</span>
                <span className="font-semibold">14:00 - 22:00</span>
              </p>
              <p className="flex justify-between">
                <span>Check-out:</span>
                <span className="font-semibold">06:00 - 12:00</span>
              </p>
              <p className="mt-4 pt-4 border-t border-green-800">
                <span className="font-semibold">Customer Service 24/7</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              <a href="#fasilitas" className="block text-green-300 hover:text-white transition-colors">
                Fasilitas
              </a>
              <a href="#galeri" className="block text-green-300 hover:text-white transition-colors">
                Galeri
              </a>
              <a href="#testimoni" className="block text-green-300 hover:text-white transition-colors">
                Testimoni
              </a>
              <a href="#booking" className="block text-green-300 hover:text-white transition-colors">
                Booking
              </a>
              <a href="#kontak" className="block text-green-300 hover:text-white transition-colors">
                Kontak
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 dark:border-gray-800 mt-8 pt-8 text-center text-green-400">
          <p>&copy; {currentYear} Villa Serenity. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
