// src/lib/constants/app.constants.ts
// Application constants for Desibel Khusyu app

/**
 * Application metadata
 */
export const APP_INFO = {
  name: 'Desibel Khusyu',
  subtitle: 'Panduan Sholat Khusyu dengan Metode 30 Desibel Plus',
  version: '1.0.0',
  author: 'Berdasarkan buku oleh Iwan Efrulwan Muhajirin',
  description: 'Aplikasi panduan praktis mencapai sholat khusyu menggunakan metode 3 langkah dan teknik 30 desibel',
  keywords: ['sholat', 'khusyu', 'islam', 'ibadah', '30 desibel', 'panduan'],
} as const;

/**
 * Prayer names in Indonesian
 */
export const PRAYER_NAMES = {
  fajr: 'Subuh',
  dhuhr: 'Dzuhur', 
  asr: 'Ashar',
  maghrib: 'Maghrib',
  isha: 'Isya',
  jumuah: 'Jumat',
  sunnah: 'Sunnah',
} as const;

/**
 * Prayer step categories
 */
export const STEP_CATEGORIES = {
  persiapan: 'Persiapan',
  rakaat: 'Dalam Rakaat',
  duduk: 'Posisi Duduk',
  penutup: 'Penutup',
} as const;

/**
 * Training focus areas for each week
 */
export const TRAINING_FOCUS = {
  week1: 'Penataan dan Penguatan Niat',
  week2: 'Pemahaman Makna Bacaan Sholat',
  week3: 'Praktik Bacaan Lembut dan Mindfulness',
} as const;

/**
 * Assessment group categories
 */
export const ASSESSMENT_CATEGORIES = {
  persiapan: 'Persiapan',
  bacaan: 'Bacaan',
  gerakan: 'Gerakan',
  doa: 'Doa',
} as const;

/**
 * Khusyu levels in Indonesian
 */
export const KHUSYU_LEVELS = {
  level1: {
    arabicName: 'Ash-Sholah ash-Shuriyyah',
    indonesianName: 'Sholat Sekedar Formalitas',
    shortName: 'Formalitas',
  },
  level2: {
    arabicName: "Al-'Adah bil Ghaflah",
    indonesianName: 'Kebiasaan dalam Kelalaian',
    shortName: 'Kebiasaan',
  },
  level3: {
    arabicName: 'Al-Hudhur',
    indonesianName: 'Kehadiran Jiwa',
    shortName: 'Kehadiran',
  },
  level4: {
    arabicName: "Al-Khusyu' al-Mutawassith",
    indonesianName: 'Khusyu Menengah',
    shortName: 'Menengah',
  },
  level5: {
    arabicName: "Al-Khusyu' al-Kaamil",
    indonesianName: 'Khusyu Sempurna',
    shortName: 'Sempurna',
  },
} as const;

/**
 * Assessment score ranges
 */
export const SCORE_RANGES = {
  excellent: { min: 91, max: 100, label: 'Sangat Baik - Sangat Memahami' },
  good: { min: 76, max: 90, label: 'Baik - Memahami Sebagian Besar' },
  moderate: { min: 51, max: 75, label: 'Sedang - Cukup Memahami' },
  low: { min: 26, max: 50, label: 'Rendah - Sedikit Memahami' },
  veryLow: { min: 0, max: 25, label: 'Sangat Rendah - Tidak Memahami' },
} as const;

/**
 * Daily checklist categories
 */
export const CHECKLIST_CATEGORIES = {
  intention: 'Niat',
  recitation: 'Bacaan',
  movement: 'Gerakan',
  mindfulness: 'Kesadaran',
  completion: 'Penyelesaian',
} as const;

/**
 * Audio volume levels
 */
export const VOLUME_LEVELS = {
  silent: { db: 0, label: 'Dalam Hati' },
  whisper: { db: 20, label: 'Bisikan Sangat Lembut' },
  soft30db: { db: 30, label: '30dB - Target Ideal' },
  soft40db: { db: 40, label: '40dB - Agak Lembut' },
  normal: { db: 60, label: 'Normal' },
  loud: { db: 80, label: 'Keras' },
} as const;

/**
 * Navigation routes
 */
export const ROUTES = {
  home: '/',
  teori: '/teori',
  persiapan: '/persiapan',
  panduan: '/panduan',
  prayerStep: '/panduan/[step]',
  latihan: '/latihan',
  penilaian: '/penilaian',
  profil: '/profil',
} as const;

/**
 * Theme colors for UI consistency
 */
export const THEME_COLORS = {
  primary: {
    light: '#10b981', // emerald-500
    main: '#047857', // emerald-700
    dark: '#064e3b', // emerald-900
  },
  secondary: {
    light: '#fbbf24', // amber-400
    main: '#d97706', // amber-600
    dark: '#92400e', // amber-800
  },
  success: {
    light: '#34d399', // emerald-400
    main: '#10b981', // emerald-500
    dark: '#047857', // emerald-700
  },
  warning: {
    light: '#fbbf24', // amber-400
    main: '#f59e0b', // amber-500
    dark: '#d97706', // amber-600
  },
  error: {
    light: '#f87171', // red-400
    main: '#ef4444', // red-500
    dark: '#dc2626', // red-600
  },
  neutral: {
    50: '#fafaf9', // stone-50
    100: '#f5f5f4', // stone-100
    200: '#e7e5e4', // stone-200
    500: '#78716c', // stone-500
    700: '#44403c', // stone-700
    900: '#1c1917', // stone-900
  },
} as const;

/**
 * Animation durations in milliseconds
 */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  userProgress: 'desibelkhusyu_user_progress',
  assessmentResults: 'desibelkhusyu_assessment_results',
  trainingProgress: 'desibelkhusyu_training_progress',
  userPreferences: 'desibelkhusyu_preferences',
  audioSettings: 'desibelkhusyu_audio_settings',
} as const;

/**
 * Default settings
 */
export const DEFAULT_SETTINGS = {
  audioVolume: 0.7,
  autoAdvance: false,
  showArabicText: true,
  showTransliteration: true,
  showTranslation: true,
  reminderEnabled: true,
  reminderTime: '05:00',
  darkMode: false,
  fontSize: 'medium',
} as const;

/**
 * Feature flags for development
 */
export const FEATURE_FLAGS = {
  audioPlayback: true,
  offlineMode: true,
  analytics: false,
  betaFeatures: false,
} as const;

/**
 * API endpoints (for future backend integration)
 */
export const API_ENDPOINTS = {
  base: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  progress: '/progress',
  assessment: '/assessment',
  training: '/training',
  audio: '/audio',
} as const;

/**
 * Maximum values for various inputs
 */
export const MAX_VALUES = {
  sessionDuration: 120, // minutes
  noteLength: 500, // characters
  assessmentTime: 60, // minutes
  trainingWeeks: 3,
  checklistItems: 15,
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  networkError: 'Koneksi bermasalah. Silakan coba lagi.',
  audioLoadError: 'Audio gagal dimuat. Periksa koneksi internet.',
  saveError: 'Gagal menyimpan data. Silakan coba lagi.',
  validationError: 'Data yang dimasukkan tidak valid.',
  notFound: 'Halaman tidak ditemukan.',
  serverError: 'Terjadi kesalahan pada server.',
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  progressSaved: 'Progress berhasil disimpan!',
  assessmentCompleted: 'Assessment berhasil diselesaikan!',
  trainingCompleted: 'Training hari ini berhasil diselesaikan!',
  levelUp: 'Selamat! Anda naik ke level yang lebih tinggi!',
  streakAchieved: 'Hebat! Anda berhasil konsisten!',
} as const;

/**
 * Loading messages
 */
export const LOADING_MESSAGES = {
  default: 'Memuat...',
  savingProgress: 'Menyimpan progress...',
  loadingAudio: 'Memuat audio...',
  processingAssessment: 'Memproses hasil assessment...',
  loadingContent: 'Memuat konten...',
} as const;

/**
 * Validation rules
 */
export const VALIDATION_RULES = {
  minNoteLength: 5,
  maxNoteLength: 500,
  minRating: 1,
  maxRating: 5,
  minPercentage: 0,
  maxPercentage: 100,
} as const;

/**
 * Performance settings
 */
export const PERFORMANCE = {
  lazyLoadingOffset: 100, // pixels
  debounceDelay: 300, // milliseconds
  cacheExpiry: 86400000, // 24 hours in milliseconds
  maxCacheSize: 50, // number of items
} as const;

/**
 * Social sharing configuration
 */
export const SOCIAL_SHARING = {
  title: 'Saya sedang belajar mencapai sholat khusyu dengan Desibel Khusyu',
  description: 'Aplikasi panduan praktis sholat khusyu dengan metode 30 Desibel Plus',
  hashtags: ['SholatKhusyu', 'DecibelKhusyu', 'Islam', 'Ibadah'],
} as const;

export default {
  APP_INFO,
  PRAYER_NAMES,
  STEP_CATEGORIES,
  TRAINING_FOCUS,
  ASSESSMENT_CATEGORIES,
  KHUSYU_LEVELS,
  SCORE_RANGES,
  CHECKLIST_CATEGORIES,
  VOLUME_LEVELS,
  ROUTES,
  THEME_COLORS,
  ANIMATION_DURATION,
  STORAGE_KEYS,
  DEFAULT_SETTINGS,
  FEATURE_FLAGS,
  API_ENDPOINTS,
  MAX_VALUES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  LOADING_MESSAGES,
  VALIDATION_RULES,
  PERFORMANCE,
  SOCIAL_SHARING,
};
