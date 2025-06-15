// src/app/panduan/page.tsx

import { khusyuGuide } from '@/lib/data/khusyu-guide';
import PrayerStepCard from '@/components/panduan/PrayerStepCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panduan Praktik Sholat Khusyu\' | Desibel Khusyu',
  description: 'Panduan langkah demi langkah untuk setiap gerakan sholat dengan metode 30 Desibel Plus, lengkap dengan ilustrasi, audio, dan tips mindfulness.',
};

export default function PanduanPage() {
  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen">
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
            Panduan Praktik Sholat Khusyu'
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Ikuti setiap gerakan langkah demi langkah. Resapi bacaannya, dengarkan suaranya, dan hadirkan hati Anda sepenuhnya.
          </p>
        </header>
        
        <div className="space-y-8">
          {khusyuGuide.map((step, index) => (
            <PrayerStepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        <footer className="text-center mt-12 py-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">Anda telah menyelesaikan panduan praktik. Ulangi secara konsisten untuk membangun kebiasaan khusyu'.</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Semoga Allah menerima ibadah kita semua. Aamiin.</p>
        </footer>
      </main>
    </div>
  );
}
