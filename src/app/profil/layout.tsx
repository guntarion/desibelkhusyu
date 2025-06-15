// src/app/profil/layout.tsx
// Layout for profile page with metadata

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Buku & Penyusun',
  description: 'Mengenal lebih dekat buku "Tiga Langkah Mudah menuju Sholat Khusyu" dan penulisnya Iwan Efrulwan Muhajirin. Pelajari latar belakang metode 30 Desibel Plus.',
  keywords: [
    'Iwan Efrulwan Muhajirin',
    'Tiga Langkah Mudah menuju Sholat Khusyu',
    'metode 30 desibel plus',
    'profil penulis',
    'tentang buku',
    'sholat khusyu',
    'komunitas Yuk Ngaji Qur\'an Rewwin'
  ],
  openGraph: {
    title: 'Profil Buku & Penyusun - Desibel Khusyu',
    description: 'Mengenal lebih dekat buku "Tiga Langkah Mudah menuju Sholat Khusyu" dan penulisnya Iwan Efrulwan Muhajirin.',
    images: [
      {
        url: '/images/coverbuku-3.jpg',
        width: 300,
        height: 400,
        alt: 'Cover buku Tiga Langkah Mudah menuju Sholat Khusyu',
      },
      {
        url: '/images/foto-efrulwan.png',
        width: 280,
        height: 280,
        alt: 'Foto Iwan Efrulwan Muhajirin',
      }
    ],
  },
};

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}