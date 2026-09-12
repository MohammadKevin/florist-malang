'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    ukuran: 'Size Medium / Reguler (Rp 75.000)',
    tanggalJam: '',
    ucapan: '',
    alamat: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectSizeOrProduct = (value: string) => {
    setFormData((prev) => ({ ...prev, ukuran: value }));
    const formElement = document.getElementById('form-pesan');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama.trim() || !formData.whatsapp.trim()) {
      alert('Silakan lengkapi Nama Pemesan dan Nomor WhatsApp.');
      return;
    }

    const message = `Halo Admin Toko Boneka Florist Malang, saya ingin memesan buket:

*Nama Pemesan:* ${formData.nama}
*Nomor WhatsApp:* ${formData.whatsapp}
*Pilihan Ukuran/Model:* ${formData.ukuran}
*Tanggal & Jam Kirim:* ${formData.tanggalJam || '-'}
*Isi Kartu Ucapan:* ${formData.ucapan || '-'}
*Alamat Pengiriman di Malang:* ${formData.alamat || '-'}

Mohon konfirmasi ketersediaan slot dan total pembayaran. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6282245576999?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const valueHighlights = [
    {
      title: 'Bunga Segar & Artificial Premium',
      desc: 'Rangkaian tahan lama & selalu fresh pilihan terbaik.',
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: 'Free Kartu Ucapan Custom',
      desc: 'Bebas request kata-kata ucapan wisuda & ulang tahun.',
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Kirim Sameday Malang Raya',
      desc: 'Pengiriman instan kurir lokal area Malang & Kota Batu.',
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const katalogList = [
    {
      id: 'bunga-segar',
      title: 'Buket Bunga Segar',
      desc: 'Rangkaian mawar merah & pink fresh pilihan.',
      price: 'Mulai Rp 65.000',
      image: '/images/katalog-bunga-segar.jpg',
      formValue: 'Buket Bunga Segar (Mulai Rp 65.000)',
    },
    {
      id: 'boneka-wisuda',
      title: 'Buket Boneka Wisuda',
      desc: 'Boneka beruang toga lucu lengkap selempang nama.',
      price: 'Mulai Rp 50.000',
      image: '/images/katalog-boneka-wisuda.jpg',
      formValue: 'Buket Boneka Wisuda (Mulai Rp 50.000)',
    },
    {
      id: 'snack-uang',
      title: 'Buket Snack & Uang',
      desc: 'Money bouquet & perpaduan snack favorit tertata rapi.',
      price: 'Mulai Rp 45.000',
      image: '/images/katalog-uang-snack.jpg',
      formValue: 'Buket Snack & Uang (Mulai Rp 45.000)',
    },
    {
      id: 'standing-flower',
      title: 'Standing Flower & Box Akrilik',
      desc: 'Rangkaian elegan untuk ucapan sidang & momen prestise.',
      price: 'Mulai Rp 175.000',
      image: '/images/katalog-standing-flower.jpg',
      formValue: 'Standing Flower & Box Akrilik (Mulai Rp 175.000)',
    },
  ];

  const pricelist = [
    {
      name: 'Size Small / Mini',
      price: 'Rp 35.000',
      popular: false,
      features: [
        '1-3 tangkai bunga / 1 boneka mini',
        'Wrapping kertas cellophane waterproof',
        'Free kartu ucapan custom print',
      ],
      buttonText: 'Pilih Ukuran Mini',
      formValue: 'Size Small / Mini (Rp 35.000)',
    },
    {
      name: 'Size Medium / Reguler',
      price: 'Rp 75.000',
      popular: true,
      tag: 'POPULER - BEST SELLER',
      features: [
        '5-7 tangkai bunga / boneka toga 15cm',
        'Kombinasi filler bunga pikok & pita satin',
        'Free kartu ucapan & stick holder',
      ],
      buttonText: 'Pilih Ukuran Reguler',
      formValue: 'Size Medium / Reguler (Rp 75.000)',
    },
    {
      name: 'Size Large / Jumbo',
      price: 'Rp 175.000',
      popular: false,
      features: [
        '10-15 tangkai bunga / boneka wisuda jumbo',
        'Desain wrapping cascade bertingkat mewah',
        'Free request fairy lights & kartu premium',
      ],
      buttonText: 'Pilih Ukuran Jumbo',
      formValue: 'Size Large / Jumbo (Rp 175.000)',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Pilih Model di Katalog',
      desc: 'Tentukan model dan ukuran buket yang Anda sukai.',
    },
    {
      step: '02',
      title: 'Tanggal Kirim & Teks Ucapan',
      desc: 'Isi detail tanggal pengiriman dan ucapan via formulir.',
    },
    {
      step: '03',
      title: 'Pembayaran & Pengiriman',
      desc: 'Pesanan diproses & dikirim kurir tepat waktu ke lokasi.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      <Navbar />

      <main className="flex-1 bg-white">
        <section className="bg-white py-12 md:py-20 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold border border-rose-100 tracking-wide uppercase">
                    TOKO BUKET &amp; FLORIST TERLENGKAP DI MALANG
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                  Rangkaian Buket Bunga Segar &amp; Boneka Wisuda di Malang
                </h1>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                  Melayani pembuatan buket wisuda, anniversary, kado ulang tahun, dan standing flower
                  dengan pengerjaan rapi serta layanan pengiriman hari yang sama (sameday).
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://wa.me/6282245576999?text=Halo%20Admin%20Toko%20Boneka%20Florist%20Malang,%20saya%20ingin%20pesan%20buket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm sm:text-base transition-colors"
                  >
                    Pesan Buket via WA
                  </a>
                  <a
                    href="#katalog"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm sm:text-base border border-zinc-200 transition-colors"
                  >
                    Lihat Daftar Katalog
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md relative rounded-xl overflow-hidden border border-zinc-200 bg-white">
                  <div className="relative aspect-4/5 w-full">
                    <Image
                      src="/images/hero-bouquet.jpg"
                      alt="Buket Bunga Matahari dan Boneka Wisuda Malang"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white border border-zinc-200 rounded-lg p-3.5 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-zinc-900 text-sm">Buket Wisuda Best Seller</p>
                      <p className="text-xs text-zinc-500">Bunga matahari &amp; boneka toga</p>
                    </div>
                    <div className="bg-rose-50 text-rose-600 font-bold px-3 py-1 rounded-lg text-sm">
                      Mulai Rp 35.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {valueHighlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-zinc-200 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="katalog" className="bg-white py-16 md:py-24 border-b border-zinc-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-1">
                  KOLEKSI UNGGULAN
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                  Katalog Produk Unggulan
                </h2>
              </div>
              <p className="text-sm text-zinc-600 max-w-md md:text-right">
                Layanan pembuatan buket custom sesuai budget
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {katalogList.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-zinc-200 overflow-hidden flex flex-col"
                >
                  <div className="aspect-square w-full bg-zinc-100 relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-zinc-900">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-600 line-clamp-1">
                        {product.desc}
                      </p>
                      <p className="mt-3 text-sm sm:text-base font-bold text-rose-600">
                        {product.price}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-end">
                      <button
                        onClick={() => handleSelectSizeOrProduct(product.formValue)}
                        type="button"
                        className="text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 cursor-pointer"
                      >
                        Pesan Model Ini &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="harga" className="bg-white py-16 md:py-24 border-b border-zinc-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                PILIHAN PAKET HEMAT
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                Ukuran Buket &amp; Estimasi Harga
              </h2>
              <p className="mt-3 text-sm text-zinc-600">
                Pilihan ukuran fleksibel mulai dari paket mini hingga jumbo super megah.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {pricelist.map((item) => (
                <div
                  key={item.name}
                  className={`relative rounded-xl flex flex-col justify-between p-6 sm:p-8 bg-white transition-all ${
                    item.popular
                      ? 'border-2 border-rose-600'
                      : 'border border-zinc-200'
                  }`}
                >
                  {item.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-rose-600 text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full tracking-wider whitespace-nowrap">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {item.name}
                    </h3>
                    <div className="mt-4">
                      <span className="text-3xl sm:text-4xl font-bold text-zinc-900">
                        {item.price}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-600">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              item.popular ? 'text-rose-600' : 'text-zinc-500'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100">
                    <button
                      onClick={() => handleSelectSizeOrProduct(item.formValue)}
                      type="button"
                      className={`w-full py-3 rounded-xl font-semibold text-sm cursor-pointer transition-colors ${
                        item.popular
                          ? 'bg-rose-600 hover:bg-rose-700 text-white'
                          : 'bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300'
                      }`}
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cara-order" className="bg-white py-16 md:py-24 border-b border-zinc-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                MUDAH &amp; CEPAT
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                Alur Pemesanan Cepat
              </h2>
              <p className="mt-3 text-sm text-zinc-600">
                Pesan buket impian hanya dalam 3 tahapan ringkas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-xl p-7 border border-zinc-200 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full border border-rose-200 bg-rose-50 text-rose-600 font-bold text-base flex items-center justify-center mb-5">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="form-pesan" className="bg-white py-16 md:py-24 border-b border-zinc-200 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                ORDER GENERATOR
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                Formulir Pemesanan WhatsApp
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                Lengkapi formulir berikut untuk membuat format pesan pemesanan otomatis ke WhatsApp.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-10 border border-zinc-200">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-zinc-800 mb-2">
                      Nama Pemesan *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      required
                      placeholder="Contoh: Kevin Anggara"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none text-sm text-zinc-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-zinc-800 mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="Contoh: 082245576999"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none text-sm text-zinc-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-zinc-800 mb-2">
                      Ukuran Buket / Pilihan Model *
                    </label>
                    <select
                      name="ukuran"
                      value={formData.ukuran}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none text-sm text-zinc-900 bg-white"
                    >
                      <option value="Size Small / Mini (Rp 35.000)">Size Small / Mini (Rp 35.000)</option>
                      <option value="Size Medium / Reguler (Rp 75.000)">Size Medium / Reguler (Rp 75.000)</option>
                      <option value="Size Large / Jumbo (Rp 175.000)">Size Large / Jumbo (Rp 175.000)</option>
                      <option value="Buket Bunga Segar (Mulai Rp 65.000)">Buket Bunga Segar (Mulai Rp 65.000)</option>
                      <option value="Buket Boneka Wisuda (Mulai Rp 50.000)">Buket Boneka Wisuda (Mulai Rp 50.000)</option>
                      <option value="Buket Snack & Uang (Mulai Rp 45.000)">Buket Snack &amp; Uang (Mulai Rp 45.000)</option>
                      <option value="Standing Flower & Box Akrilik (Mulai Rp 175.000)">Standing Flower &amp; Box Akrilik (Mulai Rp 175.000)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-zinc-800 mb-2">
                      Tanggal &amp; Jam Kirim *
                    </label>
                    <input
                      type="text"
                      name="tanggalJam"
                      value={formData.tanggalJam}
                      onChange={handleChange}
                      placeholder="Contoh: 25 Oktober 2024, 09.00 WIB"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none text-sm text-zinc-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-800 mb-2">
                    Teks Kartu Ucapan (Opsional)
                  </label>
                  <textarea
                    name="ucapan"
                    value={formData.ucapan}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tulis ucapan selamat wisuda, nama & gelar, atau pesan singkat..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none text-sm text-zinc-900 bg-white resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-800 mb-2">
                    Alamat Lengkap Pengiriman di Malang
                  </label>
                  <input
                    type="text"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleChange}
                    placeholder="Contoh: Gedung Samantha Krida UB / Jl. Sigura-gura No. 12 Malang"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none text-sm text-zinc-900 bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Kirim Format Pemesanan Cepat ke WhatsApp (+62 822-4557-6999)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="lokasi" className="bg-white py-16 md:py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                LOKASI WORKSHOP
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                Store Info &amp; Workshop
              </h2>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    ALAMAT STORE
                  </h3>
                  <p className="text-sm font-medium text-zinc-900 leading-relaxed">
                    Jl. Bendungan Sigura-gura No. 24, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    (Dekat area Kampus UB, UM, ITN, &amp; UIN Malang)
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    JAM OPERASIONAL
                  </h3>
                  <p className="text-sm font-medium text-zinc-900">
                    08.00 - 20.00 WIB (Setiap Hari)
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Bisa pick-up langsung di toko atau kirim via kurir instan
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    JANGKAUAN PENGIRIMAN
                  </h3>
                  <p className="text-sm font-medium text-zinc-900">
                    Seluruh area Malang (Lowokwaru, Klojen, Blimbing, Sukun, Kedungkandang) hingga Kota Batu.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://maps.google.com/?q=Jl.+Bendungan+Sigura-gura+No.+24+Malang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Petunjuk Arah Google Maps</span>
                </a>

                <a
                  href="https://wa.me/6282245576999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700"
                >
                  Hotline WhatsApp: +62 822-4557-6999 &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/6282245576999?text=Halo%20Admin%20Toko%20Boneka%20Florist%20Malang,%20saya%20ingin%20tanya%20pemesanan%20buket"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center transition-colors"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}
