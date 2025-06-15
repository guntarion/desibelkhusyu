// src/lib/data/training-program.ts
// Three-week training program data based on Chapter 5

import { TrainingProgram, TrainingWeek, DailyTask, PracticeItem } from '../types/training.types';
import { HADITH_COLLECTION, QURANIC_VERSES } from '../constants/islamic.constants';

/**
 * Program training 3 minggu untuk mencapai sholat khusyu
 * Berdasarkan Chapter 5 dari buku sumber
 */
export const THREE_WEEK_TRAINING_PROGRAM: TrainingProgram = {
  id: 'khusyu-3-weeks',
  title: 'Program Training 3 Minggu Menuju Sholat Khusyu',
  description: 'Program terstruktur selama 3 minggu untuk membangun kebiasaan sholat khusyu menggunakan metode 30 Desibel Plus',
  duration: 3,
  overallObjectives: [
    'Membangun niat yang lurus dan sadar dalam setiap sholat',
    'Memahami makna bacaan-bacaan sholat secara bertahap',
    'Menguasai teknik bacaan lembut 30dB dengan mindfulness',
    'Mengembangkan kehadiran hati dalam sholat',
    'Menciptakan kebiasaan sholat khusyu yang konsisten'
  ],
  prerequisites: [
    'Mampu melakukan sholat dengan gerakan yang benar',
    'Hafal bacaan-bacaan wajib dalam sholat',
    'Komitmen untuk berlatih setiap hari selama 3 minggu',
    'Niat yang tulus untuk memperbaiki kualitas sholat'
  ],
  expectedOutcomes: [
    'Sholat menjadi lebih tenang dan bermakna',
    'Merasakan kedekatan dengan Allah saat sholat',
    'Pemahaman yang baik terhadap makna bacaan sholat',
    'Kemampuan fokus dan konsentrasi yang meningkat',
    'Kebiasaan mindfulness dalam beribadah'
  ],
  weeks: [
    // MINGGU 1: Penataan dan Penguatan Niat
    {
      week: 1,
      title: 'Penataan dan Penguatan Niat',
      objective: 'Menghadirkan kesadaran penuh bahwa setiap sholat adalah persembahan murni kepada Allah semata, tanpa riya atau kelalaian',
      description: 'Minggu pertama fokus pada membangun fondasi niat yang benar dan kesadaran spiritual sebelum memulai sholat',
      focusAreas: [
        'Kesadaran niat sebelum sholat',
        'Persiapan hati dan pikiran',
        'Membangun rutinitas mindfulness',
        'Menghilangkan gangguan dan waswas'
      ],
      dailyTasks: [
        {
          day: 1,
          title: 'Memahami Pentingnya Niat',
          objective: 'Memahami konsep niat dalam Islam dan menerapkannya sebelum sholat',
          practiceItems: [
            {
              id: 'niat-study-1',
              title: 'Mempelajari Hadith tentang Niat',
              description: 'Membaca dan merenungkan hadith "Innama al-a\'malu bin-niyyat"',
              type: 'understanding',
              target: 'Memahami bahwa semua amalan tergantung pada niat',
              method: 'Baca hadith, terjemahan, dan penjelasannya',
              duration: 10,
              order: 1
            },
            {
              id: 'niat-practice-1',
              title: 'Latihan Niat Sadar',
              description: 'Sebelum setiap sholat, latihan menghadirkan niat dengan sadar',
              type: 'intention',
              target: 'Menghadirkan niat: "Aku sholat karena Allah Ta\'ala"',
              method: 'Diam 5 detik sebelum takbir, sadari niat dalam hati',
              duration: 5,
              order: 2
            }
          ],
          reflection: 'Bagaimana perasaan saya ketika menghadirkan niat dengan sadar? Apakah ada perbedaan yang dirasakan?',
          tips: [
            'Jangan tergesa-gesa saat akan memulai sholat',
            'Ambil nafas dalam sebelum takbir',
            'Sadari bahwa akan berdiri di hadapan Allah'
          ],
          checklistItems: [
            'Membaca hadith tentang niat',
            'Latihan niat sadar sebelum setiap sholat',
            'Merasakan perbedaan dengan sholat biasa'
          ]
        }
        // Additional daily tasks would continue here...
      ],
      weeklyGoals: [
        'Menghadirkan niat sadar di minimal 80% sholat',
        'Membangun kebiasaan doa sebelum sholat',
        'Mengurangi gangguan pikiran saat sholat',
        'Merasakan perbedaan kualitas sholat dibanding sebelumnya'
      ],
      evaluationCriteria: [
        'Konsistensi dalam menghadirkan niat sadar',
        'Kemampuan mengatasi gangguan pikiran',
        'Kualitas persiapan sebelum sholat',
        'Perasaan kedekatan dengan Allah yang meningkat'
      ],
      references: [
        {
          id: 'hadith-niat',
          type: 'hadith',
          arabic: HADITH_COLLECTION.intentionMatters.arabic,
          transliteration: HADITH_COLLECTION.intentionMatters.transliteration,
          translation: HADITH_COLLECTION.intentionMatters.translation,
          source: HADITH_COLLECTION.intentionMatters.source,
          context: HADITH_COLLECTION.intentionMatters.context
        }
      ]
    },
    // MINGGU 2 dan 3 akan ditambahkan dengan struktur serupa...
  ]
};

/**
 * Helper functions for training program
 */

export function getTrainingWeek(weekNumber: number): TrainingWeek | undefined {
  return THREE_WEEK_TRAINING_PROGRAM.weeks.find(week => week.week === weekNumber);
}

export function getDailyTask(weekNumber: number, dayNumber: number): DailyTask | undefined {
  const week = getTrainingWeek(weekNumber);
  return week?.dailyTasks.find(task => task.day === dayNumber);
}

export function calculateTrainingProgress(completedWeeks: number, completedDays: number): number {
  const totalDays = THREE_WEEK_TRAINING_PROGRAM.weeks.length * 7;
  const completedDaysList = (completedWeeks - 1) * 7 + completedDays;
  return Math.round((completedDaysList / totalDays) * 100);
}

export default THREE_WEEK_TRAINING_PROGRAM;
