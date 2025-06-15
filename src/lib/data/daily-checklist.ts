// src/lib/data/daily-checklist.ts
// Daily checklist data with 15 components for Khusyu prayer tracking

import { ChecklistComponent } from '../types/training.types';

/**
 * 15 komponen checklist harian untuk tracking khusyu dalam sholat
 * Berdasarkan Chapter 5 dari buku sumber
 */
export const DAILY_CHECKLIST_COMPONENTS: ChecklistComponent[] = [
  {
    id: 'niat-sadar',
    number: 1,
    title: 'Niat Sadar',
    description: 'Saya menghadirkan niat secara sadar dan tenang sebelum takbir',
    category: 'intention',
    evaluationCriteria: [
      'Niat dihadirkan dengan penuh kesadaran',
      'Mengambil waktu sejenak sebelum takbir',
      'Sadar bahwa akan menghadap Allah',
      'Niat ikhlas karena Allah semata'
    ],
    tips: [
      'Ambil nafas dalam sebelum takbir',
      'Ucapkan dalam hati: "Aku sholat karena Allah"',
      'Diam 5 detik untuk menghadirkan kesadaran',
      'Rasakan akan berdiri di hadapan Allah'
    ]
  },
  {
    id: 'postur-takbir',
    number: 2,
    title: 'Postur Takbir yang Baik',
    description: 'Saya mengendalikan posisi tubuh dan berdiri tegak saat takbir',
    category: 'movement',
    evaluationCriteria: [
      'Berdiri tegak dengan tenang',
      'Mengangkat tangan ke telinga/bahu',
      'Posisi kaki sejajar',
      'Tubuh menghadap kiblat dengan benar'
    ],
    tips: [
      'Pastikan kaki sejajar selebar bahu',
      'Angkat tangan dengan tenang, tidak tergesa',
      'Rapatkan jari-jari tangan',
      'Pandangan ke tempat sujud'
    ]
  },
  {
    id: 'doa-iftitah-tenang',
    number: 3,
    title: 'Doa Iftitah Tenang',
    description: 'Saya membaca doa iftitah dengan tenang, 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'recitation',
    evaluationCriteria: [
      'Membaca dengan suara lembut 30dB',
      'Memahami arti yang dibaca',
      'Hati hadir saat membaca',
      'Tidak tergesa-gesa'
    ],
    tips: [
      'Pilih salah satu doa iftitah yang dipahami',
      'Baca seperti berbisik pada diri sendiri',
      'Renungkan makna "menjauhkan dosa"',
      'Rasakan permohonan kepada Allah'
    ]
  },
  {
    id: 'fatihah-tadabbur',
    number: 4,
    title: 'Al-Fatihah dengan Tadabbur',
    description: 'Saya membaca Al-Fatihah 30 dB dengan jeda per ayat dan merenungkan artinya serta menghadirkan kehadiran hati',
    category: 'recitation',
    evaluationCriteria: [
      'Membaca dengan suara lembut 30dB',
      'Jeda setelah setiap ayat',
      'Memahami arti setiap ayat',
      'Merasakan dialog dengan Allah'
    ],
    tips: [
      'Berhenti sejenak setelah setiap ayat',
      'Ingat bahwa Allah menjawab setiap ayat',
      'Rasakan saat mengucap "Iyyaka na\'budu"',
      'Hayati permohonan petunjuk jalan yang lurus'
    ]
  },
  {
    id: 'surat-pendek-paham',
    number: 5,
    title: 'Surat Pendek yang Dipahami',
    description: 'Saya membaca surat pendek dengan suara lembut (30 dB) dan memahami isi ayat serta menghadirkan kehadiran hati',
    category: 'recitation',
    evaluationCriteria: [
      'Membaca dengan suara lembut 30dB',
      'Memahami kandungan surat',
      'Hati hadir saat membaca',
      'Merenungkan keagungan Allah'
    ],
    tips: [
      'Pilih surat yang sudah dipahami artinya',
      'Mulai dengan Al-Ikhlas tentang keesaan Allah',
      'Rasakan keagungan sifat-sifat Allah',
      'Baca dengan penghayatan, bukan sekedar hafalan'
    ]
  },
  {
    id: 'rukuk-khusyu',
    number: 6,
    title: 'Rukuk dengan Khusyu',
    description: 'Saat rukuk, saya merasakan kerendahan diri dan memuliakan Allah',
    category: 'movement',
    evaluationCriteria: [
      'Posisi rukuk sempurna 90 derajat',
      'Membaca tasbih dengan suara lembut',
      'Merasakan keagungan Allah',
      'Hati hadir dalam kerendahan diri'
    ],
    tips: [
      'Rukuk dengan punggung lurus',
      'Tangan menumpu di lutut',
      'Rasakan betapa kecilnya diri di hadapan Allah',
      'Ucapkan "Subhaana Rabbiyal Azhiim" dengan penghayatan'
    ]
  },
  {
    id: 'itidal-syukur',
    number: 7,
    title: 'I\'tidal dengan Syukur',
    description: 'Saya membaca i\'tidal dengan suara lembut 30 dB, memahami artinya, menghadirkan hati penuh syukur dan pujian',
    category: 'movement',
    evaluationCriteria: [
      'Berdiri tegak dengan tenang',
      'Membaca dengan suara lembut 30dB',
      'Merasakan syukur kepada Allah',
      'Memahami arti "Sami\'allahu liman hamidah"'
    ],
    tips: [
      'Tegakkan tubuh dengan sempurna',
      'Rasakan syukur karena bisa berdiri',
      'Hayati "Allah mendengar orang yang memuji-Nya"',
      'Ucapkan "Rabbanaa lakal hamd" dengan penuh syukur'
    ]
  },
  {
    id: 'sujud-dekat',
    number: 8,
    title: 'Sujud Merasa Dekat',
    description: 'Saat sujud, saya merasa sangat dekat dan berserah diri sepenuhnya kepada Allah sambil membaca dengan suara lembut 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'movement',
    evaluationCriteria: [
      'Posisi sujud dengan 7 anggota tubuh',
      'Membaca tasbih dengan suara lembut',
      'Merasakan kedekatan dengan Allah',
      'Hati hadir dalam ketundukan total'
    ],
    tips: [
      'Pastikan 7 anggota tubuh menyentuh lantai',
      'Rasakan ini posisi terdekat dengan Allah',
      'Ucapkan "Subhaana Rabbiyal A\'laa" dengan khusyu',
      'Manfaatkan momen ini untuk bermunajat'
    ]
  },
  {
    id: 'duduk-doa',
    number: 9,
    title: 'Duduk di Antara Dua Sujud dengan Doa',
    description: 'Saat duduk di antara dua sujud, saya benar-benar meminta ampun dan rahmat sambil membaca dengan suara lembut 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'movement',
    evaluationCriteria: [
      'Duduk dengan posisi iftirasy',
      'Membaca doa dengan suara lembut',
      'Memahami setiap permohonan',
      'Benar-benar merasakan memohon kepada Allah'
    ],
    tips: [
      'Duduk di atas kaki kiri',
      'Baca 8 permintaan: ampun, rahmat, perbaikan, dll',
      'Rasakan benar-benar sedang memohon',
      'Hayati setiap kata permohonan'
    ]
  },
  {
    id: 'tasyahhud-hormat',
    number: 10,
    title: 'Tasyahhud dengan Hormat',
    description: 'Bacaan tasyahhud saya dilakukan dengan penuh kesadaran dan hormat dengan suara lembut 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'recitation',
    evaluationCriteria: [
      'Duduk dengan posisi iftirasy/tawarruk',
      'Membaca dengan suara lembut 30dB',
      'Memahami arti salam dan syahadat',
      'Mengangkat jari telunjuk saat syahadat'
    ],
    tips: [
      'Hayati makna "segala penghormatan bagi Allah"',
      'Rasakan sedang memberi salam kepada Nabi',
      'Ucapkan syahadat dengan penuh keyakinan',
      'Angkat telunjuk sebagai isyarat ketauhidan'
    ]
  },
  {
    id: 'salawat-cinta',
    number: 11,
    title: 'Salawat dengan Cinta',
    description: 'Saya membaca salawat dengan rasa cinta kepada Rasulullah ﷺ dengan suara lembut 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'recitation',
    evaluationCriteria: [
      'Membaca dengan suara lembut 30dB',
      'Merasakan cinta kepada Rasulullah',
      'Memahami permohonan berkah',
      'Hati hadir dalam salawat'
    ],
    tips: [
      'Ingat jasa dan pengorbanan Rasulullah',
      'Rasakan cinta dan rindu kepada beliau',
      'Hayati permohonan berkah untuk Nabi dan keluarganya',
      'Bandingkan dengan salawat untuk Ibrahim AS'
    ]
  },
  {
    id: 'doa-perlindungan-harap',
    number: 12,
    title: 'Doa Perlindungan dengan Harap',
    description: 'Saya membaca doa perlindungan setelah tasyahhud dengan harap perlindungan akhirat dengan suara lembut 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'recitation',
    evaluationCriteria: [
      'Membaca dengan suara lembut 30dB',
      'Memahami 4 perlindungan yang diminta',
      'Benar-benar merasa membutuhkan perlindungan',
      'Hati hadir dalam permohonan'
    ],
    tips: [
      'Hayati 4 hal: siksa kubur, neraka, fitnah hidup-mati, Dajjal',
      'Rasakan betapa butuhnya perlindungan Allah',
      'Baca dengan penuh harap dan takut',
      'Ingat betapa lemahnya diri tanpa Allah'
    ]
  },
  {
    id: 'salam-tenang',
    number: 13,
    title: 'Salam dengan Tenang',
    description: 'Saya memberi salam dengan tenang dan penuh keyakinan menutup ibadah dengan suara lembut 30 dB, memahami artinya dan menghadirkan kehadiran hati',
    category: 'completion',
    evaluationCriteria: [
      'Menoleh kanan dan kiri dengan tenang',
      'Membaca salam dengan suara lembut',
      'Memahami arti salam',
      'Merasakan penutupan ibadah yang sempurna'
    ],
    tips: [
      'Toleh kanan dulu, kemudian kiri',
      'Ucapkan salam seperti benar-benar memberi salam',
      'Rasakan menutup dialog dengan Allah',
      'Bersyukur telah menyelesaikan sholat'
    ]
  },
  {
    id: 'tidak-kosong-pikiran',
    number: 14,
    title: 'Tidak Ada Pikiran yang Melayang',
    description: 'Tidak ada pikiran yang melayang selama sholat (atau langsung ditarik kembali saat mulai menyimpang)',
    category: 'mindfulness',
    evaluationCriteria: [
      'Fokus terjaga sepanjang sholat',
      'Cepat menyadari saat pikiran melayang',
      'Segera menarik kembali fokus ke sholat',
      'Tidak terganggu lingkungan sekitar'
    ],
    tips: [
      'Latihan mindfulness sebelum sholat',
      'Segera kembali fokus saat sadar pikiran melayang',
      'Gunakan suara lembut untuk membantu fokus',
      'Jangan menyalahkan diri, langsung kembali fokus'
    ]
  },
  {
    id: 'tenang-setelah-sholat',
    number: 15,
    title: 'Tenang Setelah Sholat',
    description: 'Saya merasa lebih tenang, khusyu, dan terhubung dengan Allah setelah sholat',
    category: 'completion',
    evaluationCriteria: [
      'Merasakan ketenangan setelah sholat',
      'Hati merasa lebih dekat dengan Allah',
      'Ada perasaan syukur dan lega',
      'Semangat untuk sholat berikutnya meningkat'
    ],
    tips: [
      'Luangkan waktu sejenak untuk merasakan',
      'Bersyukur atas nikmat bisa sholat',
      'Evaluasi kualitas sholat yang baru saja dilakukan',
      'Berdoa agar sholat diterima Allah'
    ]
  }
];

/**
 * Helper function to get checklist components by category
 */
export function getChecklistByCategory(category: string): ChecklistComponent[] {
  return DAILY_CHECKLIST_COMPONENTS.filter(component => component.category === category);
}

/**
 * Helper function to calculate completion percentage
 */
export function calculateCompletionPercentage(completedItems: number): number {
  return Math.round((completedItems / DAILY_CHECKLIST_COMPONENTS.length) * 100);
}

/**
 * Helper function to get checklist component by ID
 */
export function getChecklistById(id: string): ChecklistComponent | undefined {
  return DAILY_CHECKLIST_COMPONENTS.find(component => component.id === id);
}

/**
 * Helper function to get evaluation message based on completion rate
 */
export function getEvaluationMessage(completionRate: number): string {
  if (completionRate >= 90) {
    return 'Masya Allah! Sholat Anda sudah sangat berkualitas. Pertahankan!';
  } else if (completionRate >= 75) {
    return 'Alhamdulillah! Sholat Anda sudah baik. Terus tingkatkan!';
  } else if (completionRate >= 50) {
    return 'Sholat Anda sudah mulai membaik. Terus berlatih!';
  } else if (completionRate >= 25) {
    return 'Masih perlu banyak latihan. Jangan menyerah!';
  } else {
    return 'Mulai dari hal-hal kecil. Setiap usaha Allah nilai!';
  }
}

/**
 * Helper function to get priority areas for improvement
 */
export function getPriorityAreas(checkedItems: string[]): string[] {
  const uncheckedItems = DAILY_CHECKLIST_COMPONENTS.filter(
    component => !checkedItems.includes(component.id)
  );
  
  // Priority order: intention -> recitation -> movement -> mindfulness -> completion
  const priorityOrder = ['intention', 'recitation', 'movement', 'mindfulness', 'completion'];
  
  const groupedByCategory = uncheckedItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.title);
    return acc;
  }, {} as Record<string, string[]>);
  
  const priorityAreas: string[] = [];
  priorityOrder.forEach(category => {
    if (groupedByCategory[category]) {
      priorityAreas.push(...groupedByCategory[category]);
    }
  });
  
  return priorityAreas.slice(0, 3); // Return top 3 priority areas
}

/**
 * Export the checklist data
 */
export default DAILY_CHECKLIST_COMPONENTS;
