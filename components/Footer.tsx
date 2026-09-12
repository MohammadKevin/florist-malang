import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">
              Toko Boneka Florist Malang
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Workshop buket bunga fresh, boneka wisuda &amp; kado spesial terbaik di Kota Malang.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-600">
            <a
              href="https://instagram.com/floristbonekamalang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 transition-colors"
            >
              Instagram: @floristbonekamalang
            </a>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <a
              href="https://wa.me/6282245576999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              WhatsApp: +62 822-4557-6999
            </a>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span>Malang, Jawa Timur</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Toko Boneka Florist Malang. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat khusus untuk perayaan kelulusan &amp; momen spesial Anda di Malang Raya.</p>
        </div>
      </div>
    </footer>
  );
}
