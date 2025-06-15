// src/components/panduan/PrayerStepCard.tsx
"use client";

import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PrayerStep } from '@/lib/data/khusyu-guide';
import CustomAudioPlayer from './CustomAudioPlayer';
import { BookOpen, Target, BrainCircuit, BotMessageSquare } from 'lucide-react';

interface PrayerStepCardProps {
  step: PrayerStep;
  index: number;
}

const PrayerStepCard: React.FC<PrayerStepCardProps> = ({ step, index }) => {
  return (
    <Card id={step.id} className="w-full max-w-3xl mx-auto overflow-hidden shadow-lg border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-900/50">
      <CardHeader className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-12 h-12 bg-teal-600 dark:bg-teal-500 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">
                {index + 1}
            </span>
            <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{step.title}</CardTitle>
                {step.subtitle && <CardDescription className="text-teal-700 dark:text-teal-400 mt-1 font-medium">{step.subtitle}</CardDescription>}
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* Ilustrasi */}
        <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <Image
            src={step.illustrationUrl}
            alt={`Ilustrasi ${step.title}`}
            fill
            className="object-contain p-4"
            unoptimized // Gunakan ini jika Anda tidak mengkonfigurasi domain gambar di next.config.js
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/475569?text=Gambar+Gagal+Dimuat' }}
          />
        </div>

        {/* Audio Player */}
        <CustomAudioPlayer src={step.audioUrl} />
        
        {/* Bacaan-bacaan */}
        <div className="space-y-4">
            {step.recitations.map((recitation, i) => (
                <div key={i} className="border-l-4 border-teal-500 pl-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-r-lg">
                    {recitation.title && <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{recitation.title}</h4>}
                    <p className="text-right text-2xl md:text-3xl font-arabic leading-relaxed text-gray-800 dark:text-gray-200" dir="rtl">{recitation.arabic}</p>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 italic">{recitation.latin}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">"{recitation.translation}"</p>
                    {recitation.responseFromAllah && (
                        <div className="mt-4 p-3 bg-teal-50/50 dark:bg-teal-900/30 rounded-lg flex items-start gap-3">
                            <BotMessageSquare className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0"/>
                            <div>
                                <h5 className="font-semibold text-sm text-teal-800 dark:text-teal-300">Jawaban dari Allah (Hadits Qudsi)</h5>
                                <p className="text-xs text-teal-700 dark:text-teal-400">"{recitation.responseFromAllah}"</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* Panduan dan Tips */}
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="guidance-physical">
                <AccordionTrigger className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:no-underline">
                    <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-teal-600 dark:text-teal-400"/> Panduan Gerakan (Fisik)
                    </div>
                </AccordionTrigger>
                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                        {step.guidance.physical.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="guidance-mindfulness">
                <AccordionTrigger className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:no-underline">
                     <div className="flex items-center gap-3">
                        <BrainCircuit className="w-5 h-5 text-teal-600 dark:text-teal-400"/> Kesadaran Hati (Mindfulness)
                    </div>
                </AccordionTrigger>
                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                     <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                        {step.guidance.mindfulness.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="focus-tips">
                <AccordionTrigger className="text-base font-semibold text-gray-700 dark:text-gray-300 hover:no-underline">
                     <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400"/> Tips Fokus & Khusyu'
                    </div>
                </AccordionTrigger>
                <AccordionContent className="prose prose-sm dark:prose-invert max-w-none">
                     <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                        {step.focusTips.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

      </CardContent>
    </Card>
  );
};

export default PrayerStepCard;
