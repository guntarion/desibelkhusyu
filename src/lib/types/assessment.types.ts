// src/lib/types/assessment.types.ts
// Types definition for assessment system in Desibel Khusyu app

/**
 * Assessment question option
 */
export interface AssessmentOption {
  id: string;
  label: string;
  value: number; // 0, 25, 50, 75, 100
  description: string;
}

/**
 * Individual assessment question
 */
export interface AssessmentQuestion {
  id: string;
  groupId: string;
  title: string;
  content: string;
  arabicText?: string;
  transliteration?: string;
  type: 'understanding' | 'practice' | 'spiritual';
  options: AssessmentOption[];
  order: number;
  weight: number; // For scoring within group
}

/**
 * Assessment group (e.g., Al-Fatihah, Rukuk, etc.)
 */
export interface AssessmentGroup {
  id: string;
  title: string;
  description: string;
  category: 'persiapan' | 'bacaan' | 'gerakan' | 'doa'; // preparation, recitation, movement, supplication
  weight: number; // For final score calculation (percentage)
  questions: AssessmentQuestion[];
  order: number;
  icon?: string;
}

/**
 * User answer for a question
 */
export interface AssessmentAnswer {
  questionId: string;
  selectedValue: number; // 0-100
  confidence?: number; // 1-5 how confident user is
  notes?: string;
  timeSpent?: number; // seconds
}

/**
 * Assessment session/attempt
 */
export interface AssessmentSession {
  id: string;
  userId: string;
  startDate: Date;
  endDate?: Date;
  answers: AssessmentAnswer[];
  isCompleted: boolean;
  currentGroupId?: string;
  totalTimeSpent: number; // seconds
}

/**
 * Khusyu achievement level definition
 */
export interface KhusyuLevel {
  id: string;
  level: number; // 1-5
  arabicName: string;
  indonesianName: string;
  description: string;
  requirements: LevelRequirements;
  characteristics: string[];
  nextSteps: string[];
  icon: string;
  color: string; // For UI theming
}

/**
 * Requirements for each Khusyu level
 */
export interface LevelRequirements {
  intention: string;
  understandingPercentage: number; // minimum percentage
  softVoicePercentage: number; // minimum percentage  
  heartPresencePercentage: number; // minimum percentage
  additionalCriteria: string[];
}

/**
 * Assessment result for a group
 */
export interface GroupResult {
  groupId: string;
  score: number; // 0-100
  totalQuestions: number;
  answeredQuestions: number;
  averageScore: number;
  strengths: string[];
  improvements: string[];
}

/**
 * Complete assessment result
 */
export interface AssessmentResult {
  sessionId: string;
  userId: string;
  date: Date;
  
  // Overall scores
  overallScore: number; // 0-100
  levelAchieved: KhusyuLevel;
  
  // Category scores
  groupResults: GroupResult[];
  
  // Breakdown by aspects
  intentionScore: number;
  understandingScore: number;
  techniqueScore: number;
  spiritualScore: number;
  
  // Recommendations
  strengths: string[];
  improvementAreas: string[];
  recommendedActions: string[];
  suggestedTraining: string[];
  
  // Comparison with previous attempts
  previousScore?: number;
  improvement?: number;
  
  // Detailed feedback
  detailedFeedback: string;
  nextSteps: string[];
  motivationalMessage: string;
}

/**
 * Assessment progress tracking
 */
export interface AssessmentProgress {
  userId: string;
  totalAttempts: number;
  firstAttempt: Date;
  lastAttempt: Date;
  bestScore: number;
  currentLevel: KhusyuLevel;
  levelHistory: LevelHistory[];
  consistencyData: ConsistencyData;
  improvementTrends: ImprovementTrend[];
}

/**
 * Level achievement history
 */
export interface LevelHistory {
  level: number;
  achievedAt: Date;
  score: number;
  sessionId: string;
  notes?: string;
}

/**
 * Consistency tracking data
 */
export interface ConsistencyData {
  assessmentsThisMonth: number;
  assessmentsThisWeek: number;
  longestStreak: number;
  currentStreak: number;
  averageTimeBetween: number; // days
}

/**
 * Improvement trend analysis
 */
export interface ImprovementTrend {
  aspect: 'overall' | 'understanding' | 'technique' | 'spiritual';
  trend: 'improving' | 'stable' | 'declining';
  changeRate: number; // percentage change per assessment
  recentScores: number[];
  analysis: string;
}

/**
 * Assessment configuration
 */
export interface AssessmentConfig {
  id: string;
  version: string;
  title: string;
  description: string;
  groups: AssessmentGroup[];
  levels: KhusyuLevel[];
  scoringMethod: 'weighted' | 'simple';
  timeLimit?: number; // minutes
  allowReview: boolean;
  showResults: 'immediate' | 'after_completion';
}

/**
 * Assessment analytics
 */
export interface AssessmentAnalytics {
  userId: string;
  
  // Performance metrics
  averageScore: number;
  scoreDistribution: Record<string, number>; // score range -> count
  timePerQuestion: number; // average seconds
  
  // Group performance
  strongestGroups: string[];
  weakestGroups: string[];
  groupTrends: Record<string, number>; // group -> trend percentage
  
  // Level progression
  levelProgression: LevelHistory[];
  timeInEachLevel: Record<number, number>; // level -> days
  
  // Behavioral insights
  preferredAssessmentTime: string; // time of day
  assessmentFrequency: number; // per week
  dropoffPoints: string[]; // where users typically stop
}

/**
 * Assessment recommendation engine
 */
export interface AssessmentRecommendation {
  type: 'training' | 'practice' | 'study' | 'review';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedTime: number; // minutes
  resources: string[];
  targetGroups: string[];
  expectedImprovement: string;
}

// Note: All types are already exported individually above
