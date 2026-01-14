'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star, User} from 'lucide-react';

export default function BookingForm() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  const handleWhatsAppBooking = () => {
    const { checkIn, checkOut, guests, name, email, phone, message } = bookingData;

    const formattedMessage = `Halo, saya ingin booking Villa Serenity:

📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}
👥 Jumlah Tamu: ${guests} orang
👤 Nama: ${name}
📧 Email: ${email}
📱 Telepon: ${phone}
💬 Pesan: ${message || '-'}

Mohon info ketersediaan dan harga. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.name || !bookingData.phone) {
      alert('Mohon isi semua field yang diperlukan');
      return;
    }

    handleWhatsAppBooking();
  };

  return (
    <section id="booking" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900 to-green-800 dark:from-green-800 dark:to-green-900 rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-800">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 mr-3 text-green-300" />
                  <h2 className="text-3xl font-bold">Booking via WhatsApp</h2>
                </div>
                <p className="mb-6 text-green-100">
                  Pesan villa langsung melalui WhatsApp untuk respon cepat dan konfirmasi instan!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-semibold">Instant Confirmation</p>
                      <p className="text-sm text-green-200">Konfirmasi langsung via WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-semibold">Konsultasi Gratis</p>
                      <p className="text-sm text-green-200">Tanya langsung via chat</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-semibold">Best Price Guarantee</p>
                      <p className="text-sm text-green-200">Harga terbaik dijamin</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-800/30 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold">Note:</span> Kami akan merespon dalam 15 menit pada jam operasional (08:00 - 22:00 WITA)
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 md:p-12">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                      Check-in *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={bookingData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                      Check-out *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={bookingData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                    Jumlah Tamu *
                  </label>
                  <select
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} Tamu</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                      Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="0812-3456-7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-900 dark:text-green-300 mb-2">
                    Pesan Tambahan
                  </label>
                  <textarea
                    name="message"
                    value={bookingData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-green-300 dark:border-gray-600 focus:border-green-700 dark:focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Permintaan khusus atau pertanyaan..."
                    rows={3}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <User className="w-5 h-5" />
                  <span>Kirim via WhatsApp</span>
                </motion.button>

                <p className="text-sm text-green-700 dark:text-green-400 text-center">
                  Data Anda aman dan hanya digunakan untuk keperluan booking
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
