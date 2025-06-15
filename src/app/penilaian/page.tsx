// src/app/penilaian/page.tsx
// Halaman Penilaian - Assessment system untuk mengukur level khusyu

'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Star, CheckCircle, AlertCircle, Trophy, Target, BookOpen } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { KHUSYU_ACHIEVEMENT_LEVELS, getLevelByScore } from '@/lib/data/achievement-levels';

export default function PenilaianPage() {
  const [currentStep, setCurrentStep] = useState<'overview' | 'assessment' | 'result'>('overview');
  const [assessmentScore, setAssessmentScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  // Set document title for SEO
  useEffect(() => {
    document.title = 'Penilaian Level Khusyu | Desibel Khusyu';
  }, []);

  // Simple assessment questions for demo
  const assessmentQuestions = [
    {
      id: 'understanding',
      question: 'Seberapa baik Anda memahami makna bacaan-bacaan dalam sholat?',
      description: 'Termasuk Al-Fatihah, tasbih, doa-doa, dan bacaan wajib lainnya',
      options: [
        { value: 100, label: '90-100%', description: 'Memahami hampir semua makna' },
        { value: 75, label: '70-89%', description: 'Memahami sebagian besar makna' },
        { value: 50, label: '40-69%', description: 'Memahami beberapa makna' },
        { value: 25, label: '10-39%', description: 'Memahami sedikit makna' },
        { value: 0, label: '0-9%', description: 'Tidak memahami makna' }
      ]
    },
    {
      id: 'softVoice',
      question: 'Seberapa sering Anda membaca sholat dengan suara lembut (dapat mendengar diri sendiri)?',
      description: 'Teknik 30dB atau bacaan lembut yang dapat didengar sendiri',
      options: [
        { value: 100, label: '90-100%', description: 'Selalu menggunakan suara lembut' },
        { value: 75, label: '70-89%', description: 'Sering menggunakan suara lembut' },
        { value: 50, label: '40-69%', description: 'Kadang menggunakan suara lembut' },
        { value: 25, label: '10-39%', description: 'Jarang menggunakan suara lembut' },
        { value: 0, label: '0-9%', description: 'Tidak pernah menggunakan suara lembut' }
      ]
    },
    {
      id: 'heartPresence',
      question: 'Seberapa sering hati Anda hadir dan fokus selama sholat?',
      description: 'Kesadaran penuh, tidak terganggu pikiran lain, merasakan kedekatan dengan Allah',
      options: [
        { value: 100, label: '90-100%', description: 'Hampir selalu hadir dan fokus' },
        { value: 75, label: '70-89%', description: 'Sering hadir dan fokus' },
        { value: 50, label: '40-69%', description: 'Kadang hadir dan fokus' },
        { value: 25, label: '10-39%', description: 'Jarang hadir dan fokus' },
        { value: 0, label: '0-9%', description: 'Tidak pernah hadir dan fokus' }
      ]
    }
  ];

  const handleAssessmentSubmit = () => {
    const scores = Object.values(selectedAnswers);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    setAssessmentScore(avgScore);
    setCurrentStep('result');
  };

  const currentLevel = assessmentScore !== null ? getLevelByScore(assessmentScore) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">
              <BarChart3 className="h-4 w-4 mr-2" />
              Assessment Khusyu
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sistem Penilaian Level Khusyu
            </h1>
            
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
              Ukur tingkat kekhusyuan sholat Anda dengan sistem assessment 5 level yang komprehensif
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Star className="h-8 w-8 text-amber-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5 Level</div>
                <div className="text-amber-200">Pencapaian Khusyu</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Target className="h-8 w-8 text-purple-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3 Aspek</div>
                <div className="text-purple-200">Penilaian Utama</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <Trophy className="h-8 w-8 text-emerald-200 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Personal</div>
                <div className="text-emerald-200">Rekomendasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentStep === 'overview' && (
        <>
          {/* Assessment Overview */}
          <section className="py-12 -mt-8">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <Card className="bg-white shadow-lg border-2 border-amber-100">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl text-stone-800">
                      Tiga Aspek Penilaian Utama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BookOpen className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-stone-800 mb-2">Pemahaman Makna</h3>
                        <p className="text-stone-600 text-sm">
                          Seberapa baik Anda memahami makna bacaan-bacaan sholat, dari Al-Fatihah hingga doa penutup
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-stone-800 mb-2">Teknik Bacaan</h3>
                        <p className="text-stone-600 text-sm">
                          Konsistensi penggunaan suara lembut 30dB yang memungkinkan Anda mendengar dan meresapi bacaan
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-stone-800 mb-2">Kehadiran Hati</h3>
                        <p className="text-stone-600 text-sm">
                          Seberapa sering hati Anda benar-benar hadir, fokus, dan merasakan kedekatan dengan Allah saat sholat
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 5 Levels Overview */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                    5 Level Pencapaian Khusyu
                  </h2>
                  <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                    Setiap level memiliki karakteristik dan requirement yang spesifik untuk mencapai kualitas sholat yang lebih baik
                  </p>
                </div>

                <div className="space-y-6">
                  {KHUSYU_ACHIEVEMENT_LEVELS.map((level) => (
                    <Card 
                      key={level.id} 
                      className="border-2 hover:shadow-lg transition-all duration-300"
                      style={{ 
                        borderColor: level.color,
                        background: `linear-gradient(135deg, ${level.color}08, white)`
                      }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                            style={{ backgroundColor: level.color }}
                          >
                            {level.level}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-1" style={{ color: level.color }}>
                              {level.indonesianName}
                            </CardTitle>
                            <p className="text-stone-600 text-sm">{level.arabicName}</p>
                          </div>
                          <div className="text-3xl">
                            {level.icon}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-stone-700 mb-4 leading-relaxed">
                          {level.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5" style={{ color: level.color }} />
                              Karakteristik
                            </h4>
                            <ul className="space-y-2">
                              {level.characteristics.slice(0, 3).map((char, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: level.color }} />
                                  <span className="text-stone-600 text-sm">{char}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                              <Target className="h-5 w-5" style={{ color: level.color }} />
                              Langkah Selanjutnya
                            </h4>
                            <ul className="space-y-2">
                              {level.nextSteps.slice(0, 3).map((step, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: level.color }} />
                                  <span className="text-stone-600 text-sm">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: `${level.color}10` }}>
                          <h5 className="font-semibold text-stone-800 mb-2">Requirements:</h5>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Pemahaman: </span>
                              <span style={{ color: level.color }}>{level.requirements.understandingPercentage}%+</span>
                            </div>
                            <div>
                              <span className="font-medium">Suara Lembut: </span>
                              <span style={{ color: level.color }}>{level.requirements.softVoicePercentage}%+</span>
                            </div>
                            <div>
                              <span className="font-medium">Kehadiran Hati: </span>
                              <span style={{ color: level.color }}>{level.requirements.heartPresencePercentage}%+</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Start Assessment CTA */}
          <section className="py-16 bg-gradient-to-r from-amber-600 to-purple-600 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Siap Mengetahui Level Khusyu Anda?
                </h2>
                <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                  Assessment singkat ini akan membantu Anda mengetahui posisi saat ini dan rekomendasi untuk meningkatkan kualitas sholat.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-amber-700 hover:bg-amber-50"
                  onClick={() => setCurrentStep('assessment')}
                >
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Mulai Assessment Sekarang
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-amber-200 text-sm">
                  ⏱️ Hanya membutuhkan 3-5 menit untuk diselesaikan
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {currentStep === 'assessment' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">Assessment Khusyu</h2>
                <p className="text-stone-600">
                  Jawab pertanyaan berikut dengan jujur sesuai kondisi sholat Anda saat ini
                </p>
              </div>

              <div className="space-y-8">
                {assessmentQuestions.map((question, index) => (
                  <Card key={question.id} className="border-2 border-stone-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        {question.question}
                      </CardTitle>
                      <p className="text-stone-600 text-sm ml-11">
                        {question.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {question.options.map((option) => (
                          <label
                            key={option.value}
                            className={`block p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                              selectedAnswers[question.id] === option.value
                                ? 'border-amber-500 bg-amber-50'
                                : 'border-stone-200 hover:border-amber-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option.value}
                              checked={selectedAnswers[question.id] === option.value}
                              onChange={(e) => setSelectedAnswers(prev => ({
                                ...prev,
                                [question.id]: parseInt(e.target.value)
                              }))}
                              className="sr-only"
                            />
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-stone-800">{option.label}</div>
                                <div className="text-stone-600 text-sm">{option.description}</div>
                              </div>
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                selectedAnswers[question.id] === option.value
                                  ? 'border-amber-500 bg-amber-500'
                                  : 'border-stone-300'
                              }`} />
                            </div>
                          </label>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleAssessmentSubmit}
                    disabled={Object.keys(selectedAnswers).length !== assessmentQuestions.length}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Lihat Hasil Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentStep === 'result' && currentLevel && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">Hasil Assessment Anda</h2>
                <p className="text-stone-600">
                  Berdasarkan jawaban Anda, berikut adalah level khusyu Anda saat ini
                </p>
              </div>

              {/* Result Card */}
              <Card 
                className="border-4 shadow-xl"
                style={{ borderColor: currentLevel.color }}
              >
                <CardHeader className="text-center">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto mb-4"
                    style={{ backgroundColor: currentLevel.color }}
                  >
                    {currentLevel.level}
                  </div>
                  <CardTitle className="text-2xl mb-2" style={{ color: currentLevel.color }}>
                    {currentLevel.indonesianName}
                  </CardTitle>
                  <p className="text-stone-600">{currentLevel.arabicName}</p>
                  <Badge 
                    className="mt-4"
                    style={{ backgroundColor: currentLevel.color }}
                  >
                    Skor: {Math.round(assessmentScore!)}%
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-stone-700 leading-relaxed">
                        {currentLevel.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" style={{ color: currentLevel.color }} />
                          Karakteristik Level Ini
                        </h4>
                        <ul className="space-y-2">
                          {currentLevel.characteristics.map((char, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: currentLevel.color }} />
                              <span className="text-stone-600 text-sm">{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5" style={{ color: currentLevel.color }} />
                          Rekomendasi Langkah Selanjutnya
                        </h4>
                        <ul className="space-y-2">
                          {currentLevel.nextSteps.map((step, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: currentLevel.color }} />
                              <span className="text-stone-600 text-sm">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-stone-50 rounded-lg p-6 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="font-semibold text-stone-800 mb-2">Motivasi Untuk Anda</h4>
                      <p className="text-stone-700 italic">
                        "Setiap langkah kecil menuju khusyu adalah langkah besar menuju ridha Allah. Terus semangat berlatih dan berdoa!"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/latihan">
                      <Target className="h-5 w-5 mr-2" />
                      Mulai Program Training
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => {
                      setCurrentStep('overview');
                      setSelectedAnswers({});
                      setAssessmentScore(null);
                    }}
                    className="border-amber-600 text-amber-700 hover:bg-amber-50"
                  >
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Ulangi Assessment
                  </Button>
                </div>
                <p className="text-stone-600 text-sm">
                  💡 Disarankan untuk melakukan assessment secara berkala untuk memantau progress Anda
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
