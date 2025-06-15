// src/lib/types/training.types.ts
// Types definition for training system in Desibel Khusyu app

import { IslamicReference } from './prayer.types';

/**
 * Daily practice item for training
 */
export interface PracticeItem {
  id: string;
  title: string;
  description: string;
  type: 'intention' | 'understanding' | 'technique' | 'mindfulness';
  target: string; // What to achieve
  method: string; // How to practice
  duration: number; // in minutes
  order: number;
}

/**
 * Daily task within a training week
 */
export interface DailyTask {
  day: number; // 1-7
  title: string;
  objective: string;
  practiceItems: PracticeItem[];
  reflection: string;
  tips: string[];
  checklistItems: string[]; // Items to check off
}

/**
 * Weekly training program
 */
export interface TrainingWeek {
  week: number; // 1-3
  title: string;
  objective: string;
  description: string;
  focusAreas: string[];
  dailyTasks: DailyTask[];
  references: IslamicReference[];
  weeklyGoals: string[];
  evaluationCriteria: string[];
}

/**
 * Complete training program (3 weeks)
 */
export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  duration: number; // in weeks
  weeks: TrainingWeek[];
  overallObjectives: string[];
  prerequisites: string[];
  expectedOutcomes: string[];
}

/**
 * Daily checklist component (15 items total)
 */
export interface ChecklistComponent {
  id: string;
  number: number; // 1-15
  title: string;
  description: string;
  category: 'intention' | 'recitation' | 'movement' | 'mindfulness' | 'completion';
  evaluationCriteria: string[];
  tips: string[];
}

/**
 * Daily checklist submission
 */
export interface DailyChecklist {
  date: Date;
  prayerType: 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
  components: ChecklistResult[];
  overallRating: number; // 1-5
  notes?: string;
  reflections?: string;
}

/**
 * Individual checklist component result
 */
export interface ChecklistResult {
  componentId: string;
  completed: boolean;
  rating: number; // 1-5 scale
  notes?: string;
}

/**
 * User training progress
 */
export interface TrainingProgress {
  userId: string;
  programId: string;
  currentWeek: number;
  currentDay: number;
  startDate: Date;
  completedDays: Date[];
  weeklyProgress: WeeklyProgress[];
  overallScore: number; // 0-100
  streakDays: number;
  lastActive: Date;
}

/**
 * Weekly progress tracking
 */
export interface WeeklyProgress {
  week: number;
  completedDays: number;
  totalDays: number;
  averageScore: number;
  focusAreaScores: Record<string, number>; // focus area -> score
  completedTasks: string[]; // task IDs
  reflections: string[];
  improvements: string[];
  challenges: string[];
}

/**
 * Training achievement/milestone
 */
export interface TrainingAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  criteria: string[];
  unlockedAt?: Date;
  category: 'consistency' | 'understanding' | 'technique' | 'spiritual';
}

/**
 * Training reminder settings
 */
export interface TrainingReminder {
  id: string;
  type: 'daily_practice' | 'weekly_review' | 'checklist';
  title: string;
  message: string;
  time: string; // HH:mm format
  enabled: boolean;
  days: number[]; // 0-6 (Sunday-Saturday)
}

/**
 * Training analytics data
 */
export interface TrainingAnalytics {
  userId: string;
  totalDays: number;
  consistencyRate: number; // 0-100
  averageScore: number;
  strongestAreas: string[];
  improvementAreas: string[];
  weeklyTrends: WeeklyTrend[];
  achievements: TrainingAchievement[];
}

/**
 * Weekly trend data for analytics
 */
export interface WeeklyTrend {
  week: number;
  averageScore: number;
  completionRate: number;
  focusAreaScores: Record<string, number>;
  improvements: string[];
}

/**
 * Training session feedback
 */
export interface TrainingFeedback {
  sessionId: string;
  date: Date;
  week: number;
  day: number;
  rating: number; // 1-5
  helpful: boolean;
  challenges: string[];
  suggestions: string[];
  encouragement: string;
  nextSteps: string[];
}

// Note: All types are already exported individually above
