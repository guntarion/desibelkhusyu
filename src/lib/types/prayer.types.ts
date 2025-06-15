// src/lib/types/prayer.types.ts
// Types definition for prayer step components in Desibel Khusyu app

/**
 * Islamic reference interface for Quranic verses and Hadith
 */
export interface IslamicReference {
  id: string;
  type: 'quran' | 'hadith' | 'scholar';
  arabic: string;
  transliteration?: string;
  translation: string;
  source: string; // e.g., "QS. Al-Fatihah: 1" or "HR. Bukhari no. 631"
  context?: string;
}

/**
 * Recitation segment for detailed breakdown of Arabic text
 */
export interface RecitationSegment {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  meaning: string; // Additional explanation
  order: number;
}

/**
 * Position guidance for prayer movements
 */
export interface PrayerPosition {
  name: string;
  description: string;
  illustration: string; // Path to illustration image
  keyPoints: string[];
  commonMistakes: string[];
}

/**
 * Recitation content for each prayer step
 */
export interface PrayerRecitation {
  arabic: string;
  transliteration: string;
  translation: string;
  segments?: RecitationSegment[]; // For detailed breakdown
  repetition?: number; // How many times to recite
  isOptional?: boolean;
}

/**
 * Physical and breathing technique guidance
 */
export interface PrayerTechnique {
  physical: string[]; // Physical instructions
  breathing: string; // Breathing guidance
  voiceGuidance: string; // 30dB voice technique
  duration: string; // Recommended duration
  mindfulnessPoints: string[]; // Key consciousness points
}

/**
 * Mindfulness and spiritual guidance
 */
export interface MindfulnessGuide {
  heartPresence: string; // How to bring heart presence
  consciousness: string; // What to be conscious about
  spiritualFocus: string; // Spiritual focus points
  dialogue?: string; // For Al-Fatihah dialogue with Allah
  reflection: string; // Post-movement reflection
}

/**
 * Audio guidance for 30dB demonstration
 */
export interface AudioGuide {
  url: string;
  duration: number;
  volume: number; // For 30dB demonstration
  transcript: string; // What is being recited
  description: string; // Audio description
}

/**
 * Complete prayer step definition
 */
export interface PrayerStep {
  id: string;
  title: string;
  subtitle: string;
  order: number;
  category: 'persiapan' | 'rakaat' | 'duduk' | 'penutup'; // preparation, rakaat, sitting, closing
  
  position: PrayerPosition;
  recitation: PrayerRecitation;
  technique: PrayerTechnique;
  mindfulness: MindfulnessGuide;
  audio?: AudioGuide;
  
  tips: string[];
  dalil: IslamicReference[]; // Supporting Islamic references
  nextStep?: string; // ID of next step
  previousStep?: string; // ID of previous step
}

/**
 * Prayer type definitions
 */
export type PrayerType = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha' | 'jumuah' | 'sunnah';

/**
 * Prayer configuration for different prayer types
 */
export interface PrayerConfig {
  type: PrayerType;
  rakaatCount: number;
  loudRecitation: boolean; // Whether recitation should be loud
  specialSteps?: string[]; // Special steps for this prayer type
  additionalGuidance?: string[];
}

/**
 * User progress for each prayer step
 */
export interface StepProgress {
  stepId: string;
  completed: boolean;
  understanding: number; // 0-100 percentage
  softVoicePractice: number; // 0-100 percentage
  heartPresence: number; // 0-100 percentage
  lastPracticed: Date;
  notes?: string;
}

/**
 * Overall prayer practice session
 */
export interface PrayerSession {
  id: string;
  date: Date;
  prayerType: PrayerType;
  stepsCompleted: StepProgress[];
  overallRating: number; // 1-5 stars
  khusyuLevel: number; // 1-5 level
  reflectionNotes?: string;
  duration: number; // in minutes
}

/**
 * Prayer step category grouping
 */
export interface StepCategory {
  id: string;
  name: string;
  description: string;
  steps: string[]; // Array of step IDs
  order: number;
}

// Note: All types are already exported individually above
