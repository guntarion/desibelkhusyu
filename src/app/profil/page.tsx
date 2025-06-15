// src/app/profil/page.tsx
// Profile page for book and author with tabbed interface

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen, User, Calendar, MapPin, GraduationCap, Heart, Quote } from 'lucide-react';

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState('buku');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100">
            Karya dan Penulis di Balik Metode 30 Desibel Plus
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-2 max-w-md mx-auto">
          <div className="flex">
            <button
              onClick={() => setActiveTab('buku')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                activeTab === 'buku'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Tentang Buku</span>
            </button>
            <button
              onClick={() => setActiveTab('penyusun')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
                activeTab === 'penyusun'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Tentang Penyusun</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'buku' && <BookProfile />}
        {activeTab === 'penyusun' && <AuthorProfile />}
      </div>
    </div>
  );
}

// Book Profile Component
function BookProfile() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Book Cover Section */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-xl">
            <Image
              src="/images/coverbuku-3.jpg"
              alt="Cover Buku Tiga Langkah Mudah menuju Sholat Khusyu"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        
        {/* Book Title */}
        <div className="text-center mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Tiga Langkah Mudah Menuju Sholat Khusyu'
          </h3>
          <p className="text-lg text-emerald-600 font-medium">
            dengan Metode 30 Desibel Plus
          </p>
        </div>
      </div>

      {/* Book Description */}
      <div className="space-y-8">
        {/* Quote Section */}
        <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
          <Quote className="w-8 h-8 text-emerald-500 mb-4" />
          <blockquote className="text-lg italic text-gray-700 leading-relaxed">
            "Buku ini hadir sebagai panduan praktis bagi siapa pun yang rindu merasakan kekhusyukan dalam sholat—bukan sekadar ritual harian, tetapi perjumpaan yang hidup antara seorang hamba dan Rabb-nya."
          </blockquote>
        </div>

        {/* Key Features */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-emerald-600" />
            Keunggulan Metode 30 Desibel Plus
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Meluruskan Niat</h5>
                <p className="text-gray-600 text-sm">Memperbaiki niat sebelum takbiratul ihram dengan penuh kesadaran</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Menghayati Makna</h5>
                <p className="text-gray-600 text-sm">Memahami dan menghayati makna setiap bacaan sholat</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-emerald-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Teknik 30 Desibel Plus</h5>
                <p className="text-gray-600 text-sm">Melafalkan bacaan dengan suara lirih (~30dB) sambil menghadirkan hati</p>
              </div>
            </div>
          </div>
        </div>

        {/* Method Explanation */}
        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
          <h4 className="text-xl font-bold text-gray-800 mb-4">
            Apa itu Metode 30 Desibel Plus?
          </h4>
          <div className="space-y-3 text-gray-700">
            <p>
              Secara teknis, desibel (dB) adalah satuan untuk mengukur kerasnya suara mulai dari bisikan lembut (sekitar 20 dB) hingga suara konser yang menggelegar (sekitar 110 dB).
            </p>
            <p>
              <strong>Metode 30 Desibel Plus</strong> mendorong kita untuk melafalkan bacaan sholat dengan suara lirih (~30 dB), berusaha terus menerus mendengarkan suara lirih sendiri, memahami makna bacaan, dan menghadirkan hati secara bersamaan dengan gerakan-gerakan sholat.
            </p>
            <p className="font-medium text-amber-700">
              Ketika seluruh unsur tersebut dilakukan secara sadar dalam satu waktu, maka tumakninah bukan lagi sesuatu yang dipaksakan, tetapi akan terjadi secara otomatis.
            </p>
          </div>
        </div>

        {/* Publication Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Informasi Publikasi</h4>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span><strong>Diterbitkan:</strong> Mei 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span><strong>Lokasi:</strong> Rewwin, Waru, Sidoarjo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Author Profile Component
function AuthorProfile() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Author Photo Section */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full blur opacity-20"></div>
          <div className="relative bg-white p-6 rounded-full shadow-xl">
            <Image
              src="/images/foto-efrulwan.png"
              alt="Foto Iwan Efrulwan Muhajirin"
              width={280}
              height={280}
              className="rounded-full shadow-lg"
              priority
            />
          </div>
        </div>
        
        {/* Author Name */}
        <div className="text-center mt-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            Iwan Efrulwan Muhajirin
          </h3>
          <p className="text-lg text-emerald-600 font-medium">
            Penyusun & Pendiri Komunitas Yuk Ngaji Qur'an Rewwin
          </p>
        </div>
      </div>

      {/* Author Biography */}
      <div className="space-y-8">
        {/* Personal Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-6 h-6 text-emerald-600" />
            Profil Singkat
          </h4>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span><strong>Lahir:</strong> 6 Oktober 1964, Desa Suliki, Payakumbuh, Sumatera Barat</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span><strong>Tempat Tinggal:</strong> Rewwin, Waru, Sidoarjo</span>
            </div>
          </div>
        </div>

        {/* Educational Journey */}
        <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-600" />
            Perjalanan Pendidikan
          </h4>
          <div className="space-y-4">
            <div className="timeline-item">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Usia 10 Tahun</h5>
                  <p className="text-gray-600 text-sm">Mulai mendalami seni baca Al-Qur'an kepada Almh. Nur Afni di Payakumbuh, menempuh perjalanan 25 km setiap hari Ahad</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Usia Remaja</h5>
                  <p className="text-gray-600 text-sm">Merantau ke Sabang, Pulau Weh, Aceh. Melanjutkan pendalaman tilawah di HIQQA Sabang dan mewakili Kodya Sabang dalam MTQ Provinsi (1979-1980)</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Sarjana</h5>
                  <p className="text-gray-600 text-sm">Fakultas Ekonomi Universitas Andalas, Padang</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Magister (2003)</h5>
                  <p className="text-gray-600 text-sm">Economics & Environmental Studies, University of East Anglia, Inggris (Beasiswa British Chevening)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Journey */}
        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
          <h4 className="text-xl font-bold text-gray-800 mb-4">
            Perjalanan Karier
          </h4>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Profesional:</strong> Bergabung di MarkPlus (Hermawan Kartajaya), ASN Provinsi Jawa Timur, dan lembaga internasional seperti AusAID dan USAID.
            </p>
            <p>
              <strong>Entrepreneur (2012):</strong> Fokus membesarkan usaha keluarga Sanggar Siti Nurbaya Wedding Service.
            </p>
          </div>
        </div>

        {/* Spiritual Journey */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-emerald-600" />
            Titik Balik Spiritual
          </h4>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Pandemi COVID-19 (2020)</strong> menjadi momen transformatif. Beliau kembali aktif dalam pembelajaran Al-Qur'an, khususnya mendampingi para lansia membaca, memperbaiki bacaan, dan memahami kandungan Al-Qur'an serta bacaan sholat.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h5 className="font-semibold text-emerald-800 mb-2">Kontribusi Aktif:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Pendiri komunitas <strong>Yuk Ngaji Qur'an Rewwin</strong></li>
                <li>• Gerakan Sahabat Al-Qur'an untuk pendampingan lansia</li>
                <li>• Pelayan jamaah di Masjid Al-Muhajirin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Motivation */}
        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-xl">
          <h4 className="text-xl font-bold text-gray-800 mb-4">
            Motivasi Menulis Buku
          </h4>
          <blockquote className="text-gray-700 italic leading-relaxed">
            "Motivasi menulis buku ini lahir dari pengalaman spiritual dan pembelajaran mendalam terhadap Al-Qur'an. Semakin dalam ia pelajari, semakin merasa kecil di hadapan Allah dan kesadaran bahwa selama ini banyak hal belum ia pahami. Maka, ia memulai dari yang paling mendasar dan dekat: memahami makna bacaan dalam sholat, ibadah lima waktu yang selama ini sering dilakukan hanya secara rutinitas. Ia dan kita semua ingin menjadikan sholat kembali sebagai dialog yang hidup, khusyu', dan menyambung hati dengan Sang Pencipta."
          </blockquote>
        </div>
      </div>
    </div>
  );
}