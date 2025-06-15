// src/app/teori/page.tsx
// Halaman Teori Khusyu - Fondasi teoritis sholat khusyu

import { Metadata } from 'next';
import { ArrowRight, BookOpen, Heart, Lightbulb } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { THEORETICAL_CONTENT } from '@/lib/data/theoretical-content';
import TheoreticalSectionComponent from '@/components/theoretical/TheoreticalSection';
import MethodOverview from '@/components/theoretical/MethodOverview';

export const metadata: Metadata = {
  title: 'Teori Khusyu | Desibel Khusyu',
  description: 'Memahami fondasi teoritis sholat khusyu menurut Al-Qur\'an, Hadits, dan ulama. Pelajari urgensi dan cara mencapai khusyu dalam sholat.',
  keywords: 'teori khusyu, sholat khusyu, Al-Quran, hadits, ulama, spiritualitas Islam'
};

export default function TeoriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              <BookOpen className="h-4 w-4 mr-2" />
              Fondasi Teoritis
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {THEORETICAL_CONTENT.introduction.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              {THEORETICAL_CONTENT.introduction.subtitle}
            </p>
            
            <div className="space-y-4 text-lg text-emerald-100 max-w-4xl mx-auto">
              {THEORETICAL_CONTENT.introduction.description.map((desc, index) => (
                <p key={index} className="leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
              <CardHeader className="text-center">
                <BookOpen className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">
                  Definisi & Urgensi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-center">
                  Memahami hakikat khusyu menurut Al-Qur'an, Hadits, dan ulama
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <Heart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-800">
                  Persiapan Sholat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-center">
                  Menyiapkan fisik dan hati sebelum menghadap Allah
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center">
                <Lightbulb className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-purple-800">
                  Metode 30dB Plus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-center">
                  Pendekatan praktis tiga langkah menuju khusyu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Chapter 1: Mengapa Sholat Khusyu Itu Penting */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="border-emerald-600 text-emerald-700">
                  Bab I
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                  {THEORETICAL_CONTENT.chapters[0].title}
                </h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                  {THEORETICAL_CONTENT.chapters[0].subtitle}
                </p>
              </div>

              {/* Chapter 1 Sections */}
              <div className="space-y-16">
                {THEORETICAL_CONTENT.chapters[0].sections.map((section) => (
                  <TheoreticalSectionComponent 
                    key={section.id} 
                    section={section}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-stone-200 pt-16">
              <div className="text-center space-y-4">
                <Badge variant="outline" className="border-blue-600 text-blue-700">
                  Bab II
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                  {THEORETICAL_CONTENT.chapters[1].title}
                </h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                  {THEORETICAL_CONTENT.chapters[1].subtitle}
                </p>
              </div>
            </div>

            {/* Chapter 2: Persiapan Sebelum Memulai Sholat */}
            <div className="space-y-16">
              {THEORETICAL_CONTENT.chapters[1].sections.map((section) => (
                <TheoreticalSectionComponent 
                  key={section.id} 
                  section={section}
                />
              ))}
            </div>

            {/* Method Overview Section */}
            <div className="border-t border-stone-200 pt-16">
              <div className="text-center space-y-4 mb-12">
                <Badge variant="outline" className="border-purple-600 text-purple-700">
                  Metode Praktis
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                  Pengenalan Metode 30 Desibel Plus
                </h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                  Pendekatan terstruktur tiga langkah untuk mencapai khusyu dalam sholat
                </p>
              </div>
              
              <MethodOverview />
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-8 py-16">
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">
                    Siap Mempraktikkan Metode Ini?
                  </h3>
                  <p className="text-lg text-stone-600 mb-6 max-w-2xl mx-auto">
                    Setelah memahami fondasi teoritis, saatnya mempersiapkan diri dan mempelajari panduan praktis sholat khusyu.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/persiapan">
                        <Heart className="h-5 w-5 mr-2" />
                        Persiapan Sholat
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                      <Link href="/panduan">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Panduan Praktik
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary & Key Takeaways */}
            <Card className="bg-stone-50 border-stone-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-stone-800">
                  Rangkuman Poin Penting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                      Fondasi Spiritual
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700">
                          Khusyu adalah ketundukan hati dan badan di hadapan Allah
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700">
                          Kualitas sholat ditentukan oleh tingkat kekhusyuan
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700">
                          Persiapan fisik dan hati adalah kunci keberhasilan
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
                      Metode Praktis
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700">
                          Tiga langkah: Niat, Makna, dan Teknik 30dB Plus
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700">
                          Sinkronisasi suara, pendengaran, pemahaman, dan hati
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700">
                          Menciptakan ruang dialog virtual dengan Allah
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
