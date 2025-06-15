// src/app/persiapan/page.tsx
// Halaman Persiapan Sholat - Panduan praktis persiapan sebelum sholat

import { Metadata } from 'next';
import { ArrowRight, Heart, Droplets, Shirt, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { PREPARATION_GUIDE } from '@/lib/data/preparation-guide';
import PreparationStepCard from '@/components/preparation/PreparationStepCard';
import PreparationChecklistComponent from '@/components/preparation/PreparationChecklist';

export const metadata: Metadata = {
  title: 'Persiapan Sholat | Desibel Khusyu',
  description: 'Panduan lengkap persiapan sholat khusyu. Wudhu sempurna, pakaian layak, tempat bersih, dan hati yang siap menghadap Allah.',
  keywords: 'persiapan sholat, wudhu, pakaian muslim, tempat sholat, persiapan hati, khusyu'
};

export default function PersiapanPage() {
  const getStepIcon = (stepId: string) => {
    switch (stepId) {
      case 'wudu-preparation':
        return <Droplets className="h-8 w-8 text-blue-600" />;
      case 'clothing-preparation':
        return <Shirt className="h-8 w-8 text-purple-600" />;
      case 'place-preparation':
        return <MapPin className="h-8 w-8 text-amber-600" />;
      case 'heart-preparation':
        return <Heart className="h-8 w-8 text-rose-600" />;
      default:
        return <CheckCircle className="h-8 w-8 text-emerald-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Heart className="h-4 w-4 mr-2" />
              Persiapan Sholat
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {PREPARATION_GUIDE.introduction.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {PREPARATION_GUIDE.introduction.subtitle}
            </p>
            
            <div className="space-y-4 text-lg text-blue-100 max-w-4xl mx-auto">
              {PREPARATION_GUIDE.introduction.description.map((desc, index) => (
                <p key={index} className="leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {PREPARATION_GUIDE.steps.map((step) => (
              <Card key={step.id} className="bg-white shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors text-center">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-3">
                    {getStepIcon(step.id)}
                  </div>
                  <CardTitle className="text-lg text-stone-800">
                    {step.title.replace('Menyiapkan ', '').replace('Menyempurnakan ', '')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 text-sm">
                    {step.subtitle}
                  </p>
                  <Badge 
                    variant="outline" 
                    className={`mt-3 ${
                      step.importance === 'essential' 
                        ? 'border-red-300 text-red-700' 
                        : step.importance === 'recommended'
                        ? 'border-amber-300 text-amber-700'
                        : 'border-blue-300 text-blue-700'
                    }`}
                  >
                    {step.importance === 'essential' ? 'Wajib' : 
                     step.importance === 'recommended' ? 'Dianjurkan' : 'Pilihan'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* Preparation Steps */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                  Panduan Persiapan Lengkap
                </h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                  Ikuti setiap langkah dengan penuh kesadaran untuk mencapai persiapan yang optimal
                </p>
              </div>

              <div className="space-y-16">
                {PREPARATION_GUIDE.steps.map((step, index) => (
                  <PreparationStepCard
                    key={step.id}
                    step={step}
                    stepNumber={index + 1}
                  />
                ))}
              </div>
            </div>

            {/* Interactive Checklist */}
            <div className="border-t border-stone-200 pt-16">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                  Checklist Persiapan
                </h2>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                  Gunakan checklist ini untuk memastikan persiapan Anda sempurna sebelum sholat
                </p>
              </div>
              
              <PreparationChecklistComponent 
                checklist={PREPARATION_GUIDE.checklist}
              />
            </div>

            {/* Tips Section */}
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <CheckCircle className="h-6 w-6" />
                  Tips Praktis Persiapan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {PREPARATION_GUIDE.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-amber-800 leading-relaxed">
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation to Next Step */}
            <div className="text-center space-y-8 py-16">
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-4">
                    Persiapan Selesai, Saatnya Praktik!
                  </h3>
                  <p className="text-lg text-stone-600 mb-6 max-w-2xl mx-auto">
                    Setelah memahami cara persiapan yang benar, mari pelajari panduan lengkap 13 gerakan sholat dengan metode 30 Desibel Plus.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="/panduan">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Panduan Praktik Sholat
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                      <Link href="/teori">
                        <Heart className="h-5 w-5 mr-2" />
                        Kembali ke Teori
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Reminders */}
            <Card className="bg-stone-50 border-stone-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-stone-800">
                  Pengingat Penting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-stone-800 mb-2">Wudhu Sempurna</h4>
                    <p className="text-stone-600 text-sm">
                      Tidak ada yang melewati kesempurnaan wudhu. Setiap tetes air menghapus dosa.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-stone-800 mb-2">Hati yang Hadir</h4>
                    <p className="text-stone-600 text-sm">
                      Persiapan fisik tanpa persiapan hati adalah sia-sia. Hadirkan hati sepenuhnya.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-stone-800 mb-2">Kesabaran</h4>
                    <p className="text-stone-600 text-sm">
                      Jangan terburu-buru. Persiapan yang sabar menghasilkan sholat yang berkualitas.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border text-center">
                  <p className="text-stone-700 italic text-lg mb-2">
                    "Sesungguhnya shalat itu mencegah dari perbuatan keji dan mungkar"
                  </p>
                  <p className="text-stone-500 text-sm">
                    QS. Al-Ankabut: 45
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
