// src/components/preparation/PreparationChecklist.tsx
// Interactive checklist component for prayer preparation

'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Circle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PreparationChecklist } from '@/lib/data/preparation-guide';

interface PreparationChecklistProps {
  checklist: PreparationChecklist[];
  className?: string;
}

export default function PreparationChecklistComponent({ 
  checklist, 
  className = '' 
}: PreparationChecklistProps) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  
  // Calculate completion stats
  const totalItems = checklist.reduce((sum, category) => sum + category.items.length, 0);
  const completedCount = completedItems.size;
  const completionPercentage = Math.round((completedCount / totalItems) * 100);

  const toggleItem = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const resetChecklist = () => {
    setCompletedItems(new Set());
  };

  // Optional: Log completion for debugging
  useEffect(() => {
    if (completedCount === totalItems && totalItems > 0) {
      console.log('All preparation completed:', Array.from(completedItems));
    }
  }, [completedItems, totalItems, completedCount]);

  const getProgressColor = () => {
    if (completionPercentage === 100) return 'bg-emerald-500';
    if (completionPercentage >= 75) return 'bg-blue-500';
    if (completionPercentage >= 50) return 'bg-amber-500';
    return 'bg-stone-300';
  };

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-emerald-800">
            Checklist Persiapan Sholat
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetChecklist}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reset
          </Button>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-stone-600">Progress</span>
            <span className="font-medium text-stone-800">
              {completedCount}/{totalItems} ({completionPercentage}%)
            </span>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${getProgressColor()}`}
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {checklist.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="font-semibold text-stone-800 text-lg border-b border-stone-200 pb-2">
              {category.category}
            </h3>
            
            <div className="space-y-3">
              {category.items.map((item) => {
                const isCompleted = completedItems.has(item.id);
                
                return (
                  <div 
                    key={item.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      isCompleted 
                        ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
                        : 'bg-white border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50'
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-stone-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          isCompleted ? 'text-emerald-800' : 'text-stone-800'
                        }`}>
                          {item.task}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          isCompleted ? 'text-emerald-600' : 'text-stone-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Completion Message */}
        {completionPercentage === 100 && (
          <div className="bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200 rounded-lg p-6 text-center">
            <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-emerald-800 text-lg mb-2">
              Alhamdulillah! Persiapan Lengkap
            </h3>
            <p className="text-emerald-700 mb-4">
              Anda telah menyelesaikan semua persiapan untuk sholat khusyu. 
              Semoga Allah menerima ibadah Anda.
            </p>
            <p className="text-sm text-emerald-600 italic">
              "Dan dirikanlah sholat untuk mengingat-Ku" - QS. Tha-Ha: 14
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
