// src/components/preparation/PreparationStepCard.tsx
// Component for displaying individual preparation step

import { Clock, CheckCircle, AlertCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PreparationStep } from '@/lib/data/preparation-guide';
import IslamicQuote from '@/components/shared/IslamicQuote';

interface PreparationStepCardProps {
  step: PreparationStep;
  stepNumber: number;
  className?: string;
}

export default function PreparationStepCard({ 
  step, 
  stepNumber, 
  className = '' 
}: PreparationStepCardProps) {
  const getImportanceColor = () => {
    switch (step.importance) {
      case 'essential':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'recommended':
        return 'bg-amber-100 border-amber-300 text-amber-800';
      case 'optional':
        return 'bg-blue-100 border-blue-300 text-blue-800';
    }
  };

  const getImportanceIcon = () => {
    switch (step.importance) {
      case 'essential':
        return <AlertCircle className="h-4 w-4" />;
      case 'recommended':
        return <Star className="h-4 w-4" />;
      case 'optional':
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getImportanceLabel = () => {
    switch (step.importance) {
      case 'essential':
        return 'Wajib';
      case 'recommended':
        return 'Dianjurkan';
      case 'optional':
        return 'Pilihan';
    }
  };

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="w-fit">
            Langkah {stepNumber}
          </Badge>
          <div className="flex items-center gap-2">
            <Badge className={`${getImportanceColor()}`}>
              {getImportanceIcon()}
              <span className="ml-1">{getImportanceLabel()}</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {step.duration}
            </Badge>
          </div>
        </div>
        
        <CardTitle className="text-xl text-emerald-800">
          {step.title}
        </CardTitle>
        
        <p className="text-emerald-600 font-medium">
          {step.subtitle}
        </p>
        
        <p className="text-stone-700 leading-relaxed">
          {step.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Step Instructions */}
        <div>
          <h4 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            Langkah-Langkah
          </h4>
          <div className="space-y-4">
            {step.steps.map((instruction, index) => (
              <div key={instruction.id} className="border-l-4 border-emerald-200 pl-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-stone-800 mb-2">
                      {instruction.instruction}
                    </p>
                    
                    {/* Tips */}
                    {instruction.tips && instruction.tips.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-emerald-700 mb-1">Tips:</p>
                        <ul className="space-y-1">
                          {instruction.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-stone-600 flex items-start gap-2">
                              <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Common Mistakes */}
                    {instruction.commonMistakes && instruction.commonMistakes.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-amber-700 mb-1">Hindari:</p>
                        <ul className="space-y-1">
                          {instruction.commonMistakes.map((mistake, mistakeIndex) => (
                            <li key={mistakeIndex} className="text-sm text-amber-600 flex items-start gap-2">
                              <div className="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                              {mistake}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
            <Star className="h-5 w-5" />
            Manfaat
          </h4>
          <ul className="space-y-2">
            {step.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-emerald-800 text-sm leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence */}
        {step.evidence && (
          <IslamicQuote
            type={step.evidence.type}
            arabic={step.evidence.arabic}
            transliteration={step.evidence.transliteration}
            translation={step.evidence.translation}
            reference={step.evidence.reference}
          />
        )}
      </CardContent>
    </Card>
  );
}
