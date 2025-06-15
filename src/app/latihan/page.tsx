// src/app/latihan/page.tsx
// Halaman Latihan - Program training 3 minggu menuju sholat khusyu

import { Metadata } from 'next';
import { ArrowRight, Target, Calendar, CheckCircle, Clock, BookOpen, Heart, Star } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { THREE_WEEK_TRAINING_PROGRAM } from '@/lib/data/training-program';
import { DAILY_CHECKLIST_COMPONENTS } from '@/lib/data/daily-checklist';

export const metadata: Metadata = {
  title: 'Program Latihan | Desibel Khusyu',
  description: 'Program training terstruktur 3 minggu untuk mencapai sholat khusyu menggunakan metode 30 Desibel Plus. Lengkap dengan checklist harian 15 komponen.',
  keywords: 'program latihan, training khusyu, 3 minggu, checklist harian, metode 30dB'
};

export default function LatihanPage() {
  const trainingProgram = THREE_WEEK_TRAINING_PROGRAM;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <Target className="h-4 w-4 mr-2" />
              Program Latihan
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {trainingProgram.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              {trainingProgram.description}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Calendar className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{trainingProgram.duration} Minggu</div>
                <div className="text-purple-200">Durasi Program</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <CheckCircle className="h-8 w-8 text-emerald-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-emerald-200">Komponen Checklist</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Target className="h-8 w-8 text-amber-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-amber-200">Fokus Khusyu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-stone-800">
                  Tujuan Program Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      Objektif Utama
                    </h4>
                    <ul className="space-y-3">
                      {trainingProgram.overallObjectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-stone-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-emerald-600" />
                      Hasil yang Diharapkan
                    </h4>
                    <ul className="space-y-3">
                      {trainingProgram.expectedOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-stone-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Prasyarat Program
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {trainingProgram.prerequisites.map((prerequisite, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                        <span className="text-amber-800 text-sm">{prerequisite}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3 Week Program Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Program 3 Minggu Terstruktur
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Setiap minggu memiliki fokus khusus untuk membangun kebiasaan sholat khusyu secara bertahap
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Week 1 Card - Detailed (implemented) */}
              <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors relative">
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-emerald-600 text-white">
                    Minggu 1
                  </Badge>
                </div>
                <CardHeader className="pt-6">
                  <div className="text-center mb-4">
                    <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  </div>
                  <CardTitle className="text-xl text-emerald-800 text-center">
                    {trainingProgram.weeks[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-600 text-center">
                    {trainingProgram.weeks[0].objective}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-stone-800 text-sm">Area Fokus:</h4>
                    {trainingProgram.weeks[0].focusAreas.map((area, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-emerald-100">
                    <Badge variant="outline" className="border-emerald-300 text-emerald-700">
                      ✅ Data Lengkap Tersedia
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Week 2 Card - Basic Structure */}
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors relative">
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-blue-600 text-white">
                    Minggu 2
                  </Badge>
                </div>
                <CardHeader className="pt-6">
                  <div className="text-center mb-4">
                    <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  </div>
                  <CardTitle className="text-xl text-blue-800 text-center">
                    Pemahaman Makna Bacaan Sholat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-600 text-center">
                    Mengubah hafalan menjadi pemahaman yang mendalam, bacaan menjadi dialog bermakna dengan Allah
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-stone-800 text-sm">Area Fokus:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">Mempelajari makna Al-Fatihah ayat per ayat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">Memahami bacaan-bacaan wajib</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">Kontemplasi dalam setiap gerakan</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-100">
                    <Badge variant="outline" className="border-amber-300 text-amber-700">
                      🚧 Akan Segera Tersedia
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Week 3 Card - Basic Structure */}
              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors relative">
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-purple-600 text-white">
                    Minggu 3
                  </Badge>
                </div>
                <CardHeader className="pt-6">
                  <div className="text-center mb-4">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  </div>
                  <CardTitle className="text-xl text-purple-800 text-center">
                    Praktik Bacaan Lembut dan Mindfulness
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-600 text-center">
                    Menguasai teknik 30dB Plus dengan kesadaran penuh, mencapai sinkronisasi hati dan bacaan
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-stone-800 text-sm">Area Fokus:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">Teknik bacaan 30dB yang konsisten</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">Mindfulness dalam setiap gerakan</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">Integrasi lengkap metode 30dB Plus</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-purple-100">
                    <Badge variant="outline" className="border-amber-300 text-amber-700">
                      🚧 Akan Segera Tersedia
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Checklist Overview */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                Checklist Harian 15 Komponen
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Evaluasi diri setiap hari dengan checklist terstruktur untuk mengukur progress khusyu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DAILY_CHECKLIST_COMPONENTS.slice(0, 6).map((component) => (
                <Card key={component.id} className="bg-white border border-stone-200 hover:border-emerald-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-700 font-semibold text-sm">
                          {component.number}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-stone-800">
                        {component.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600 text-sm mb-3">
                      {component.description}
                    </p>
                    <Badge 
                      variant="outline"
                      className={`${
                        component.category === 'intention' ? 'border-purple-300 text-purple-700' :
                        component.category === 'recitation' ? 'border-blue-300 text-blue-700' :
                        component.category === 'movement' ? 'border-emerald-300 text-emerald-700' :
                        component.category === 'mindfulness' ? 'border-amber-300 text-amber-700' :
                        'border-rose-300 text-rose-700'
                      }`}
                    >
                      {component.category === 'intention' ? 'Niat' :
                       component.category === 'recitation' ? 'Bacaan' :
                       component.category === 'movement' ? 'Gerakan' :
                       component.category === 'mindfulness' ? 'Kesadaran' :
                       'Penyelesaian'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-stone-600 mb-4">
                Dan 9 komponen lainnya yang akan memandu evaluasi harian Anda...
              </p>
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                <CheckCircle className="h-5 w-5 mr-2" />
                Lihat Semua 15 Komponen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Week 1 Detailed Implementation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">
                Minggu 1 - Detail Implementasi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                {trainingProgram.weeks[0].title}
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                {trainingProgram.weeks[0].description}
              </p>
            </div>

            {/* Week 1 Day 1 Preview */}
            {trainingProgram.weeks[0].dailyTasks.length > 0 && (
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-emerald-800">
                    {trainingProgram.weeks[0].dailyTasks[0].title}
                  </CardTitle>
                  <p className="text-center text-emerald-700">
                    Hari 1 - {trainingProgram.weeks[0].dailyTasks[0].objective}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trainingProgram.weeks[0].dailyTasks[0].practiceItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-lg p-4 border border-emerald-100">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {item.order}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-stone-800 mb-2">{item.title}</h4>
                            <p className="text-stone-600 mb-3">{item.description}</p>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-stone-700">Target: </span>
                                <span className="text-stone-600">{item.target}</span>
                              </div>
                              <div>
                                <span className="font-medium text-stone-700">Metode: </span>
                                <span className="text-stone-600">{item.method}</span>
                              </div>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                              <Badge variant="outline" className="border-blue-300 text-blue-700">
                                {item.type}
                              </Badge>
                              <Badge variant="outline" className="border-amber-300 text-amber-700">
                                <Clock className="h-3 w-3 mr-1" />
                                {item.duration} menit
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">Refleksi Hari Ini:</h4>
                      <p className="text-amber-700 italic">
                        "{trainingProgram.weeks[0].dailyTasks[0].reflection}"
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3">Tips Praktis:</h4>
                      <ul className="space-y-2">
                        {trainingProgram.weeks[0].dailyTasks[0].tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-blue-700 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Weekly Goals */}
            <Card className="bg-stone-50 border-stone-200">
              <CardHeader>
                <CardTitle className="text-center text-xl text-stone-800">
                  Target Pencapaian Minggu 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-emerald-600" />
                      Goal Mingguan
                    </h4>
                    <ul className="space-y-3">
                      {trainingProgram.weeks[0].weeklyGoals.map((goal, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                          <span className="text-stone-700">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-purple-600" />
                      Kriteria Evaluasi
                    </h4>
                    <ul className="space-y-3">
                      {trainingProgram.weeks[0].evaluationCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-stone-700">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Memulai Program Training?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Komitmen 3 minggu untuk transformasi spiritual yang akan mengubah kualitas sholat Anda selamanya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                <Link href="/penilaian">
                  <Target className="h-5 w-5 mr-2" />
                  Mulai dengan Assessment
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/persiapan">
                  <Heart className="h-5 w-5 mr-2" />
                  Review Persiapan Dulu
                </Link>
              </Button>
            </div>
            <p className="text-emerald-200 text-sm">
              💡 Disarankan untuk melakukan assessment terlebih dahulu agar program dapat disesuaikan dengan level Anda
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
