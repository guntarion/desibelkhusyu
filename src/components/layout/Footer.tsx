// src/components/layout/Footer.tsx
// Footer component for Desibel Khusyu app

import Link from 'next/link';
import { Heart, BookOpen, Github } from 'lucide-react';
import { APP_INFO, ROUTES } from '@/lib/constants/app.constants';

const footerLinks = {
  app: [
    { name: 'Beranda', href: ROUTES.home },
    { name: 'Teori Khusyu', href: ROUTES.teori },
    { name: 'Panduan Praktik', href: ROUTES.panduan },
    { name: 'Program Latihan', href: ROUTES.latihan },
  ],
  resources: [
    { name: 'Persiapan Sholat', href: ROUTES.persiapan },
    { name: 'Assessment Khusyu', href: ROUTES.penilaian },
    { name: 'Tips & Panduan', href: '/tips' },
    { name: 'FAQ', href: '/faq' },
  ],
  about: [
    { name: 'Tentang Aplikasi', href: '/tentang' },
    { name: 'Metode 30 Desibel', href: '/metode' },
    { name: 'Kontak', href: '/kontak' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* App Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">{APP_INFO.name}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {APP_INFO.description}
            </p>
            <p className="text-xs text-gray-500">
              Berdasarkan buku "{APP_INFO.author}"
            </p>
          </div>

          {/* App Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Aplikasi
            </h3>
            <ul className="space-y-3">
              {footerLinks.app.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Tentang
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span>© {new Date().getFullYear()} {APP_INFO.name}.</span>
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>untuk umat Muslim</span>
            </div>

            {/* Additional Info */}
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <span className="text-xs text-gray-500">
                Version {APP_INFO.version}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Open Source</span>
                <Github className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Islamic Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"
            </p>
            <p className="text-xs text-gray-500">
              "Dan dirikanlah sholat, tunaikanlah zakat, dan rukuklah bersama orang-orang yang rukuk" 
              <span className="ml-1 text-gray-400">(QS. Al-Baqarah: 43)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
