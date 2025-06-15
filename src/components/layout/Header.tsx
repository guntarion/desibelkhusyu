// src/components/layout/Header.tsx
// Header component for Desibel Khusyu app

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, BookOpen, Target, ClipboardList, BarChart3, User } from 'lucide-react';
import { APP_INFO, ROUTES } from '@/lib/constants/app.constants';

const navigation = [
  {
    name: 'Beranda',
    href: ROUTES.home,
    icon: Home,
    description: 'Halaman utama aplikasi'
  },
  {
    name: 'Teori',
    href: ROUTES.teori,
    icon: BookOpen,
    description: 'Dasar-dasar khusyu dalam sholat'
  },
  {
    name: 'Persiapan',
    href: ROUTES.persiapan,
    icon: Target,
    description: 'Persiapan sebelum sholat'
  },
  {
    name: 'Panduan',
    href: ROUTES.panduan,
    icon: ClipboardList,
    description: 'Panduan praktik sholat khusyu'
  },
  {
    name: 'Latihan',
    href: ROUTES.latihan,
    icon: Target,
    description: 'Program training 3 minggu'
  },
  {
    name: 'Penilaian',
    href: ROUTES.penilaian,
    icon: BarChart3,
    description: 'Assessment level khusyu'
  },
  {
    name: 'Profil',
    href: ROUTES.profil,
    icon: User,
    description: 'Tentang buku dan penyusun'
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <Link href={ROUTES.home} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">{APP_INFO.name}</h1>
              <p className="text-xs text-gray-600 hidden md:block">{APP_INFO.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
