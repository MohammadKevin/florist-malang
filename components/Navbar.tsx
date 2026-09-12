'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Katalog', href: '#katalog' },
    { name: 'Ukuran & Harga', href: '#harga' },
    { name: 'Cara Order', href: '#cara-order' },
    { name: 'Form Pesan', href: '#form-pesan' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900">
              Toko Boneka Florist Malang
            </span>
            <span className="text-xs text-zinc-500 font-normal">
              Buket Bunga &amp; Boneka Wisuda
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-rose-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center">
            <a
              href="https://wa.me/6282245576999?text=Halo%20Admin%20Toko%20Boneka%20Florist%20Malang,%20saya%20ingin%20tanya%20tentang%20pemesanan%20buket"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white hover:border-zinc-300 text-xs sm:text-sm text-zinc-700 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-medium text-zinc-800">+62 822-4557-6999</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 hover:text-rose-600 hover:bg-zinc-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/6282245576999?text=Halo%20Admin%20Toko%20Boneka%20Florist%20Malang,%20saya%20ingin%20tanya%20tentang%20pemesanan%20buket"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-800"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              +62 822-4557-6999
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
