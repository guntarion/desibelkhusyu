// src/components/theoretical/TheoreticalSection.tsx
// Component for displaying a theoretical section with content and evidence

import { TheoreticalSection } from '@/lib/data/theoretical-content';
import IslamicQuote from '@/components/shared/IslamicQuote';
import KeyPointsList from '@/components/shared/KeyPointsList';

interface TheoreticalSectionProps {
  section: TheoreticalSection;
  className?: string;
}

export default function TheoreticalSectionComponent({ 
  section, 
  className = '' 
}: TheoreticalSectionProps) {
  return (
    <section className={`space-y-8 ${className}`}>
      {/* Section Header */}
      <div>
        <h3 className="text-2xl font-bold text-stone-800 mb-4">
          {section.title}
        </h3>
        {section.subtitle && (
          <p className="text-lg text-stone-600 mb-6">
            {section.subtitle}
          </p>
        )}
      </div>

      {/* Section Content */}
      <div className="space-y-6">
        {section.content.map((paragraph, index) => (
          <p key={index} className="text-stone-700 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Evidence Section */}
      {section.evidence && section.evidence.length > 0 && (
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-stone-800 border-b border-stone-200 pb-2">
            Dalil dan Referensi
          </h4>
          <div className="space-y-6">
            {section.evidence.map((evidence, index) => (
              <IslamicQuote
                key={index}
                type={evidence.type}
                arabic={evidence.arabic}
                transliteration={evidence.transliteration}
                translation={evidence.translation}
                reference={evidence.reference}
                explanation={evidence.explanation}
              />
            ))}
          </div>
        </div>
      )}

      {/* Key Points */}
      {section.keyPoints && section.keyPoints.length > 0 && (
        <KeyPointsList 
          points={section.keyPoints}
          title="Poin Penting"
        />
      )}
    </section>
  );
}
