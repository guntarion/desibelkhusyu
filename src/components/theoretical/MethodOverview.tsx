// src/components/theoretical/MethodOverview.tsx
// Component for displaying the 30 Decibel Plus method overview

import { Lightbulb, Brain, Heart, Volume2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { METHOD_OVERVIEW } from '@/lib/data/theoretical-content';

export default function MethodOverview() {
  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <Heart className="h-6 w-6 text-emerald-600" />;
      case 2:
        return <Brain className="h-6 w-6 text-blue-600" />;
      case 3:
        return <Volume2 className="h-6 w-6 text-purple-600" />;
      default:
        return <Lightbulb className="h-6 w-6 text-amber-600" />;
    }
  };

  const getStepColor = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return 'border-emerald-200 bg-emerald-50';
      case 2:
        return 'border-blue-200 bg-blue-50';
      case 3:
        return 'border-purple-200 bg-purple-50';
      default:
        return 'border-stone-200 bg-stone-50';
    }
  };

  return (
    <div className="space-y-8">
      {/* Method Introduction */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">
          {METHOD_OVERVIEW.title}
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          {METHOD_OVERVIEW.subtitle}
        </p>
        <div className="space-y-4 max-w-4xl mx-auto">
          {METHOD_OVERVIEW.description.map((desc, index) => (
            <p key={index} className="text-stone-700 leading-relaxed text-lg">
              {desc}
            </p>
          ))}
        </div>
      </div>

      {/* Three Steps */}
      <div className="grid md:grid-cols-3 gap-6">
        {METHOD_OVERVIEW.steps.map((step) => (
          <Card 
            key={step.number}
            className={`border-2 ${getStepColor(step.number)} hover:shadow-lg transition-shadow`}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {getStepIcon(step.number)}
              </div>
              <Badge variant="secondary" className="w-fit mx-auto mb-2">
                Langkah {step.number}
              </Badge>
              <CardTitle className="text-xl">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 mb-4 leading-relaxed">
                {step.description}
              </p>
              <div className="space-y-2">
                <h5 className="font-semibold text-stone-800">Teknik:</h5>
                <ul className="space-y-1">
                  {step.techniques.map((technique, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-stone-600 leading-relaxed">
                        {technique}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scientific Basis */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <Lightbulb className="h-6 w-6" />
            Dasar Ilmiah Metode
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {METHOD_OVERVIEW.scientificBasis.map((basis, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-amber-800 leading-relaxed">
                  {basis}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Process Details */}
      <Card className="bg-stone-50 border-stone-200">
        <CardHeader>
          <CardTitle className="text-stone-800">
            Proses Teknis 5 Langkah (Komponen "Plus")
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h5 className="font-semibold text-stone-800 mb-1">
                    Bacaan dengan Suara Lirih (±30 Desibel)
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Setiap bacaan dibaca perlahan dengan suara lirih seperti berbisik
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h5 className="font-semibold text-stone-800 mb-1">
                    Mendengar Aktif (Perintah dari Otak)
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Otak secara sadar memberi perintah kepada telinga untuk fokus mendengarkan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h5 className="font-semibold text-stone-800 mb-1">
                    Sinkronisasi Otak: Suara, Makna, dan Kesadaran
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Otak mengenali bunyi, memahami makna, dan mengaitkan dengan konteks sholat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h5 className="font-semibold text-stone-800 mb-1">
                    Pengiriman Pesan dari Otak ke Hati
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Pemahaman makna diteruskan ke hati agar ikut hadir dalam ibadah
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h5 className="font-semibold text-stone-800 mb-1">
                    Sinkronisasi Gerakan dan Bacaan
                  </h5>
                  <p className="text-stone-600 text-sm">
                    Gerakan fisik diselaraskan dengan bacaan dan makna yang bermakna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
