// /app/products/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error ke monitoring service
    console.error('Product page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.404 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Gagal Memuat Produk
        </h1>

        <p className="text-gray-600 mb-6">
          Terjadi kesalahan saat memuat daftar produk. Silakan coba lagi.
        </p>

        {/* Error Details (Collapsible) */}
        <details className="mb-6 text-left">
          <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700 mb-2">
            Detail Error
          </summary>
          <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 font-mono overflow-x-auto">
            {error.message}
          </div>
        </details>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Coba Lagi
          </button>

          <a
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Kembali ke Beranda
          </a>
        </div>

        {/* Support Contact */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Masih mengalami masalah?{' '}
            <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-800">
              Hubungi Dukungan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
