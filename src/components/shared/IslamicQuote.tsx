// src/components/shared/IslamicQuote.tsx
// Component for displaying Islamic quotes (Quran, Hadith, Scholar quotes)

import { BookOpen, Quote, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ArabicText from './ArabicText';
import TransliterationText from './TransliterationText';

interface IslamicQuoteProps {
  type: 'quran' | 'hadith' | 'scholar';
  arabic?: string;
  transliteration?: string;
  translation: string;
  reference: string;
  explanation?: string;
  className?: string;
}

export default function IslamicQuote({
  type,
  arabic,
  transliteration,
  translation,
  reference,
  explanation,
  className = ''
}: IslamicQuoteProps) {
  const getIcon = () => {
    switch (type) {
      case 'quran':
        return <BookOpen className="h-5 w-5 text-emerald-600" />;
      case 'hadith':
        return <Quote className="h-5 w-5 text-amber-600" />;
      case 'scholar':
        return <User className="h-5 w-5 text-blue-600" />;
    }
  };

  const getHeaderColor = () => {
    switch (type) {
      case 'quran':
        return 'border-l-emerald-500 bg-emerald-50';
      case 'hadith':
        return 'border-l-amber-500 bg-amber-50';
      case 'scholar':
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'quran':
        return 'Al-Qur\'an';
      case 'hadith':
        return 'Hadits';
      case 'scholar':
        return 'Ulama';
    }
  };

  return (
    <Card className={`border-l-4 ${getHeaderColor()} ${className}`}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          {getIcon()}
          <span className="font-semibold text-stone-700">
            {getTypeLabel()}
          </span>
        </div>

        {/* Arabic text (if provided) */}
        {arabic && (
          <div className="mb-4">
            <ArabicText 
              text={arabic} 
              className="text-stone-800 mb-2"
              size="lg"
            />
          </div>
        )}

        {/* Transliteration (if provided) */}
        {transliteration && (
          <div className="mb-4">
            <TransliterationText 
              text={transliteration}
              className="text-stone-600"
            />
          </div>
        )}

        {/* Translation */}
        <div className="mb-4">
          <p className="text-stone-800 leading-relaxed text-lg font-medium">
            "{translation}"
          </p>
        </div>

        {/* Reference */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-stone-600">
            ({reference})
          </p>
        </div>

        {/* Explanation (if provided) */}
        {explanation && (
          <div className="border-t pt-4">
            <p className="text-stone-700 leading-relaxed">
              <span className="font-semibold">Penjelasan: </span>
              {explanation}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
