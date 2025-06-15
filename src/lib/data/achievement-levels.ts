// src/lib/data/achievement-levels.ts
// Achievement levels data for Khusyu assessment system

import { KhusyuLevel, LevelRequirements } from '../types/assessment.types';

/**
 * Complete Khusyu achievement levels based on the book content
 * Translated from Chapter 5 assessment system
 */
export const KHUSYU_ACHIEVEMENT_LEVELS: KhusyuLevel[] = [
  {
    id: 'level-1',
    level: 1,
    arabicName: 'Ash-Sholah ash-Shuriyyah',
    indonesianName: 'Sholat Sekedar Formalitas',
    description: 'Ini adalah titik terendah khusyu. Sholat dilakukan dengan cepat, seperti rutinitas mekanis. Tidak ada pemahaman, tidak ada suara lembut, tidak ada kehadiran hati. Sholat hanya memenuhi kewajiban, bahkan terkadang tidak ingat rakaat keberapa. Meski terdengar menyedihkan, ini bisa menjadi awal kebangkitan jika disadari dan mau diperbaiki.',
    requirements: {
      intention: 'Benar',
      understandingPercentage: 0,
      softVoicePercentage: 10,
      heartPresencePercentage: 0,
      additionalCriteria: [
        'Belum memahami makna bacaan',
        'Belum bisa fokus pendengaran',
        'Belum dapat menghadirkan hati saat membaca'
      ]
    },
    characteristics: [
      'Sholat dilakukan tergesa-gesa',
      'Bacaan sekedar hafalan tanpa makna',
      'Gerakan mekanis tanpa kesadaran',
      'Tidak ada ketenangan dalam setiap posisi',
      'Mudah lupa rakaat keberapa',
      'Pikiran sering melayang ke hal lain'
    ],
    nextSteps: [
      'Mulai belajar arti bacaan sholat dasar',
      'Latihan memperlambat gerakan sholat',
      'Menggunakan panduan bergambar atau audio visual',
      'Menghadiri kelas pemahaman makna bacaan sholat',
      'Memulai dengan memahami makna Al-Fatihah'
    ],
    icon: '📝',
    color: '#ef4444' // red-500
  },
  {
    id: 'level-2',
    level: 2,
    arabicName: "Al-'Adah bil Ghaflah",
    indonesianName: 'Kebiasaan dalam Kelalaian',
    description: 'Sholat di level ini masih dilakukan sekedar karena kewajiban. Bacaan diucapkan, gerakan dilakukan, tapi semuanya terjadi cepat dan tanpa perenungan. Hati belum hadir, suara lembut belum digunakan secara sadar, dan makna bacaan belum diketahui. Ini kondisi umum banyak muslim - tahu kewajiban tapi belum merasakan kedekatan.',
    requirements: {
      intention: 'Benar',
      understandingPercentage: 0,
      softVoicePercentage: 25,
      heartPresencePercentage: 0,
      additionalCriteria: [
        'Belum memahami makna bacaan sholat',
        'Hanya lancar karena hafalan',
        'Belum bisa fokus namun mulai mencoba suara lembut'
      ]
    },
    characteristics: [
      'Sholat sebagai rutinitas wajib',
      'Bacaan lancar tapi tanpa pemahaman',
      'Gerakan cepat tanpa kontemplasi',
      'Mulai menyadari perlunya perbaikan',
      'Kadang mencoba memperlambat bacaan',
      'Masih mudah terganggu lingkungan'
    ],
    nextSteps: [
      'Mulai belajar makna takbir dan tasbih dasar',
      'Berlatih membaca dengan suara lebih lembut',
      'Mengikuti mentoring intensif dengan metode tematik',
      'Menggunakan kamus bahasa Arab khusus bacaan sholat',
      'Mulai membiasakan jeda sejenak sebelum takbir'
    ],
    icon: '⚪',
    color: '#f97316' // orange-500
  },
  {
    id: 'level-3',
    level: 3,
    arabicName: 'Al-Hudhur',
    indonesianName: 'Kehadiran Jiwa',
    description: 'Di level ini, kesadaran mulai tumbuh. Seseorang sadar sedang berdiri di hadapan Allah, dan mulai membangun keterlibatan melalui suara lembut, latihan pemahaman, dan memperlambat gerakan. Hati belum sepenuhnya hadir, tapi sedang berusaha menyesuaikan diri. Ini fase transisi penting, dari sholat formal menuju sholat spiritual.',
    requirements: {
      intention: 'Benar',
      understandingPercentage: 20,
      softVoicePercentage: 50,
      heartPresencePercentage: 10,
      additionalCriteria: [
        'Mulai memahami sebagian makna bacaan',
        'Dapat mendengarkan diri sendiri dengan konsentrasi 25%',
        'Mulai merasakan kehadiran jiwa minimal 10%'
      ]
    },
    characteristics: [
      'Mulai sadar berada di hadapan Allah',
      'Berusaha memperlambat gerakan sholat',
      'Mulai memahami beberapa makna bacaan',
      'Berlatih menggunakan suara lembut',
      'Kadang merasakan momen khusyu',
      'Mulai menghargai setiap posisi sholat'
    ],
    nextSteps: [
      'Tingkatkan pemahaman makna Al-Fatihah ayat per ayat',
      'Latihan fokus pendengaran pada bacaan lembut',
      'Pelajari makna bacaan rukuk dan sujud',
      'Berlatih mindfulness dalam setiap gerakan',
      'Mulai merasakan dialog dengan Allah dalam Al-Fatihah'
    ],
    icon: '🌙',
    color: '#eab308' // yellow-500
  },
  {
    id: 'level-4',
    level: 4,
    arabicName: "Al-Khusyu' al-Mutawassith",
    indonesianName: 'Khusyu Menengah',
    description: 'Sholat di level ini sudah menyentuh sebagian besar hati. Suara lembut sudah menjadi kebiasaan, sebagian besar makna bacaan sudah dipahami, dan konsentrasi terjaga selama sebagian besar waktu sholat. Meski belum sempurna, sholat sudah terasa berbeda. Ada getaran, harapan, dan lega yang dirasakan setelah salam.',
    requirements: {
      intention: 'Benar dan sadar',
      understandingPercentage: 50,
      softVoicePercentage: 75,
      heartPresencePercentage: 20,
      additionalCriteria: [
        'Memahami minimal 50% makna bacaan sholat',
        'Berhasil mengarahkan pendengaran 50% untuk mendengarkan dengan konsentrasi penuh',
        'Kehadiran hati tercapai minimal 20%'
      ]
    },
    characteristics: [
      'Suara lembut sudah menjadi kebiasaan',
      'Memahami sebagian besar makna bacaan',
      'Konsentrasi terjaga sepanjang sholat',
      'Merasakan ketenangan setelah sholat',
      'Mulai merasakan dialog dengan Allah',
      'Gerakan lebih tenang dan bermakna'
    ],
    nextSteps: [
      'Sempurnakan pemahaman seluruh bacaan sholat',
      'Tingkatkan kualitas suara lembut ke 30dB konsisten',
      'Perdalam makna spiritual setiap gerakan',
      'Latihan mindfulness yang lebih intens',
      'Mulai mengajarkan orang lain untuk memperdalam pemahaman'
    ],
    icon: '⭐',
    color: '#22c55e' // green-500
  },
  {
    id: 'level-5',
    level: 5,
    arabicName: "Al-Khusyu' al-Kaamil",
    indonesianName: 'Khusyu Sempurna',
    description: 'Di level ini, seseorang benar-benar hadir penuh dalam sholat. Niat lurus, makna bacaan dipahami sempurna, suara lembut terdengar oleh diri sendiri, dan seluruh tubuh serta hati tersinkronisasi dalam satu kesadaran utuh. Bukan hanya ketenangan fisik, tapi juga ketenangan batin. Ini kondisi tertinggi - mungkin tidak mudah dicapai, tapi sangat mungkin jika latihan dilakukan dengan konsistensi dan cinta penuh.',
    requirements: {
      intention: 'Diluruskan dengan kesadaran penuh sebagai ibadah',
      understandingPercentage: 75,
      softVoicePercentage: 100,
      heartPresencePercentage: 50,
      additionalCriteria: [
        'Pemahaman makna ≥ 75% dari seluruh bacaan sholat',
        'Kemampuan bacaan lembut 100% dengan 30dB, mampu mengarahkan indera pendengaran 75% untuk mendengarkan dengan konsentrasi penuh',
        'Kehadiran hati saat membaca lembut ≥ 50%'
      ]
    },
    characteristics: [
      'Niat lurus dengan kesadaran penuh',
      'Memahami makna seluruh bacaan sholat',
      'Suara lembut 30dB konsisten dan terfokus',
      'Kehadiran hati hampir sepanjang sholat',
      'Merasakan dialog intim dengan Allah',
      'Ketenangan fisik dan batin yang sempurna',
      'Sholat menyentuh jiwa secara mendalam'
    ],
    nextSteps: [
      'Pertahankan konsistensi dan kualitas sholat',
      'Ajarkan dan bimbing orang lain',
      'Kembangkan khusyu dalam ibadah lainnya',
      'Tingkatkan kualitas hubungan dengan Allah di luar sholat',
      'Jadikan sholat sebagai sumber kekuatan spiritual harian'
    ],
    icon: '🌟',
    color: '#8b5cf6' // violet-500
  }
];

/**
 * Helper function to get level by score
 */
export function getLevelByScore(overallScore: number): KhusyuLevel {
  if (overallScore >= 91) return KHUSYU_ACHIEVEMENT_LEVELS[4]; // Level 5
  if (overallScore >= 76) return KHUSYU_ACHIEVEMENT_LEVELS[3]; // Level 4
  if (overallScore >= 51) return KHUSYU_ACHIEVEMENT_LEVELS[2]; // Level 3
  if (overallScore >= 26) return KHUSYU_ACHIEVEMENT_LEVELS[1]; // Level 2
  return KHUSYU_ACHIEVEMENT_LEVELS[0]; // Level 1
}

/**
 * Helper function to get level by detailed criteria
 */
export function getLevelByDetailedCriteria(
  understanding: number,
  softVoice: number,
  heartPresence: number
): KhusyuLevel {
  // Level 5 criteria
  if (understanding >= 75 && softVoice >= 100 && heartPresence >= 50) {
    return KHUSYU_ACHIEVEMENT_LEVELS[4];
  }
  
  // Level 4 criteria
  if (understanding >= 50 && softVoice >= 75 && heartPresence >= 20) {
    return KHUSYU_ACHIEVEMENT_LEVELS[3];
  }
  
  // Level 3 criteria
  if (understanding >= 20 && softVoice >= 50 && heartPresence >= 10) {
    return KHUSYU_ACHIEVEMENT_LEVELS[2];
  }
  
  // Level 2 criteria
  if (understanding === 0 && softVoice >= 25 && heartPresence === 0) {
    return KHUSYU_ACHIEVEMENT_LEVELS[1];
  }
  
  // Level 1 (default)
  return KHUSYU_ACHIEVEMENT_LEVELS[0];
}

/**
 * Get next level for progression
 */
export function getNextLevel(currentLevel: number): KhusyuLevel | null {
  if (currentLevel >= 5) return null; // Already at highest level
  return KHUSYU_ACHIEVEMENT_LEVELS[currentLevel]; // Next level (0-indexed)
}

/**
 * Get previous level
 */
export function getPreviousLevel(currentLevel: number): KhusyuLevel | null {
  if (currentLevel <= 1) return null; // Already at lowest level
  return KHUSYU_ACHIEVEMENT_LEVELS[currentLevel - 2]; // Previous level (0-indexed)
}

/**
 * Calculate progress to next level
 */
export function calculateProgressToNextLevel(
  currentScore: number,
  currentLevel: number
): number {
  const scoreRanges = [
    { min: 0, max: 25 },   // Level 1
    { min: 26, max: 50 },  // Level 2
    { min: 51, max: 75 },  // Level 3
    { min: 76, max: 90 },  // Level 4
    { min: 91, max: 100 }, // Level 5
  ];
  
  if (currentLevel >= 5) return 100; // Already at max level
  
  const currentRange = scoreRanges[currentLevel - 1];
  const nextRange = scoreRanges[currentLevel];
  
  if (currentScore >= nextRange.min) return 100;
  
  const rangeSize = currentRange.max - currentRange.min + 1;
  const progress = currentScore - currentRange.min;
  
  return Math.max(0, Math.min(100, (progress / rangeSize) * 100));
}

/**
 * Get level description by level number
 */
export function getLevelDescription(level: number): string {
  const levelData = KHUSYU_ACHIEVEMENT_LEVELS[level - 1];
  return levelData?.description || '';
}

/**
 * Get level color by level number
 */
export function getLevelColor(level: number): string {
  const levelData = KHUSYU_ACHIEVEMENT_LEVELS[level - 1];
  return levelData?.color || '#6b7280'; // gray-500 as default
}

/**
 * Get level icon by level number
 */
export function getLevelIcon(level: number): string {
  const levelData = KHUSYU_ACHIEVEMENT_LEVELS[level - 1];
  return levelData?.icon || '📝';
}

/**
 * Check if user has improved from previous assessment
 */
export function hasImproved(currentLevel: number, previousLevel: number): boolean {
  return currentLevel > previousLevel;
}

/**
 * Get improvement message
 */
export function getImprovementMessage(currentLevel: number, previousLevel: number): string {
  if (!previousLevel) {
    return `Selamat! Anda berada di level ${currentLevel}: ${KHUSYU_ACHIEVEMENT_LEVELS[currentLevel - 1].indonesianName}`;
  }
  
  if (currentLevel > previousLevel) {
    return `Alhamdulillah! Anda naik dari level ${previousLevel} ke level ${currentLevel}!`;
  } else if (currentLevel === previousLevel) {
    return `Anda tetap di level ${currentLevel}. Terus berlatih untuk mencapai level berikutnya!`;
  } else {
    return `Level Anda turun dari ${previousLevel} ke ${currentLevel}. Jangan berkecil hati, terus semangat berlatih!`;
  }
}

/**
 * Get motivational message based on level
 */
export function getMotivationalMessage(level: number): string {
  const messages = [
    'Setiap langkah kecil menuju khusyu adalah langkah besar menuju ridha Allah. Terus semangat!',
    'Anda sudah mulai menyadari pentingnya khusyu. Ini adalah awal yang baik!',
    'Jiwa Anda mulai hadir dalam sholat. Teruskan latihan dengan konsisten!',
    'Subhanallah! Sholat Anda sudah menyentuh hati. Pertahankan dan tingkatkan lagi!',
    'Masya Allah! Anda telah mencapai level khusyu yang luar biasa. Semoga Allah menerima ibadah Anda!'
  ];
  
  return messages[level - 1] || messages[0];
}

/**
 * Export commonly used data and functions
 */
export {
  KHUSYU_ACHIEVEMENT_LEVELS as default,
};

/**
 * Level thresholds for quick reference
 */
export const LEVEL_THRESHOLDS = {
  LEVEL_1: { min: 0, max: 25 },
  LEVEL_2: { min: 26, max: 50 },
  LEVEL_3: { min: 51, max: 75 },
  LEVEL_4: { min: 76, max: 90 },
  LEVEL_5: { min: 91, max: 100 },
} as const;

/**
 * Quick level lookup by name
 */
export const LEVELS_BY_NAME = {
  'Ash-Sholah ash-Shuriyyah': KHUSYU_ACHIEVEMENT_LEVELS[0],
  "Al-'Adah bil Ghaflah": KHUSYU_ACHIEVEMENT_LEVELS[1],
  'Al-Hudhur': KHUSYU_ACHIEVEMENT_LEVELS[2],
  "Al-Khusyu' al-Mutawassith": KHUSYU_ACHIEVEMENT_LEVELS[3],
  "Al-Khusyu' al-Kaamil": KHUSYU_ACHIEVEMENT_LEVELS[4],
} as const;
