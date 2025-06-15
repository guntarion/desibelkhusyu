// src/components/layout/Navigation.tsx
// Navigation component for mobile bottom navigation

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, ClipboardList, Target, BarChart3 } from 'lucide-react';
import { ROUTES } from '@/lib/constants/app.constants';

const navItems = [
  {
    name: 'Beranda',
    href: ROUTES.home,
    icon: Home,
  },
  {
    name: 'Teori',
    href: ROUTES.teori,
    icon: BookOpen,
  },
  {
    name: 'Panduan',
    href: ROUTES.panduan,
    icon: ClipboardList,
  },
  {
    name: 'Latihan',
    href: ROUTES.latihan,
    icon: Target,
  },
  {
    name: 'Nilai',
    href: ROUTES.penilaian,
    icon: BarChart3,
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href !== ROUTES.home && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-gray-600'}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-emerald-600' : 'text-gray-600'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
