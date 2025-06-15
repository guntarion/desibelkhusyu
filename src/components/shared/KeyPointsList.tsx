// src/components/shared/KeyPointsList.tsx
// Component for displaying key points with attractive styling

import { CheckCircle } from 'lucide-react';

interface KeyPointsListProps {
  points: string[];
  title?: string;
  className?: string;
}

export default function KeyPointsList({ 
  points, 
  title = 'Poin Penting',
  className = ''
}: KeyPointsListProps) {
  return (
    <div className={`bg-emerald-50 border border-emerald-200 rounded-lg p-6 ${className}`}>
      <h4 className="flex items-center gap-2 font-semibold text-emerald-800 mb-4">
        <CheckCircle className="h-5 w-5" />
        {title}
      </h4>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2" />
            <span className="text-emerald-800 leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
