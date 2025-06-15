import Link from 'next/link';
import { ArrowRight, BookOpen, Target, ClipboardList, BarChart3, Heart, CheckCircle, Star } from 'lucide-react';
import { APP_INFO, ROUTES } from '@/lib/constants/app.constants';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sholat Terasa Seperti{' '}
              <span className="text-emerald-600">Rutinitas?</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              Temukan Kembali Dialogmu Dengan-Nya
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              {APP_INFO.subtitle} - Panduan praktis mencapai sholat khusyu yang mengubah hidup
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ROUTES.panduan}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                Mulai Panduan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={ROUTES.teori}
                className="inline-flex items-center px-8 py-4 border border-emerald-600 text-lg font-medium rounded-lg text-emerald-600 bg-white hover:bg-emerald-50 transition-colors"
              >
                Pelajari Teori
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kenapa Sholat Terasa Kosong?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Banyak Muslim mengalami masalah yang sama dalam sholat mereka
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Tidak memahami makna bacaan sholat',
              'Tergesa-gesa dan ceroboh dalam sholat',
              'Banyak gangguan dan waswas',
              'Terlalu cinta dunia',
              'Lingkungan tidak mendukung',
              'Sholat hanya sekedar rutinitas'
            ].map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Metode 30 Desibel Plus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi praktis dan teruji untuk mencapai sholat khusyu dalam 3 langkah sederhana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Penataan Niat yang Benar',
                description: 'Menghadirkan kesadaran penuh bahwa sholat adalah dialog dengan Allah',
                icon: Target
              },
              {
                step: 2,
                title: 'Pemahaman Makna Bacaan',
                description: 'Mengubah hafalan menjadi dialog bermakna dengan memahami setiap bacaan',
                icon: BookOpen
              },
              {
                step: 3,
                title: 'Teknik 30dB + Mindfulness',
                description: 'Membaca dengan suara lembut 30dB sambil menghadirkan kesadaran penuh',
                icon: Heart
              }
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fitur Lengkap untuk Perjalanan Khusyu Anda
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Panduan 13 Gerakan',
                description: 'Panduan lengkap setiap gerakan sholat dengan makna dan teknik khusyu',
                icon: ClipboardList,
                href: ROUTES.panduan
              },
              {
                title: 'Program 3 Minggu',
                description: 'Training terstruktur selama 21 hari untuk membangun kebiasaan khusyu',
                icon: Target,
                href: ROUTES.latihan
              },
              {
                title: 'Assessment Level',
                description: 'Ukur level khusyu Anda dengan 5 tingkatan pencapaian',
                icon: BarChart3,
                href: ROUTES.penilaian
              },
              {
                title: 'Teori & Dalil',
                description: 'Landasan teoritis lengkap dengan dalil Al-Quran dan Hadith',
                icon: BookOpen,
                href: ROUTES.teori
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  href={feature.href}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-emerald-200 transition-all group"
                >
                  <Icon className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Manfaat Sholat Khusyu
            </h2>
            <p className="text-lg text-gray-600">
              Rasakan perubahan nyata dalam hidup Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Merasakan kedekatan yang nyata dengan Allah',
              'Ketenangan jiwa dan pengurangan stress',
              'Sholat menjadi healing dan terapi hati',
              'Peningkatan kualitas ibadah lainnya',
              'Akhlak dan perilaku yang lebih baik',
              'Perlindungan dari perbuatan keji dan mungkar'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mulai Perjalanan Khusyu Anda Hari Ini
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Jangan biarkan sholat hanya menjadi rutinitas. Jadikan momen terbaik untuk dialog dengan Allah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.latihan}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-emerald-600 bg-white hover:bg-gray-50 transition-colors"
            >
              <Star className="mr-2 w-5 h-5" />
              Mulai Program 3 Minggu
            </Link>
            <Link
              href={ROUTES.penilaian}
              className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-emerald-700 transition-colors"
            >
              <BarChart3 className="mr-2 w-5 h-5" />
              Cek Level Khusyu Saya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
