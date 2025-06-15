// src/lib/data/preparation-guide.ts
// Preparation guide content for practical prayer preparation

export interface PreparationStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  importance: 'essential' | 'recommended' | 'optional';
  duration: string;
  steps: {
    id: string;
    instruction: string;
    tips?: string[];
    commonMistakes?: string[];
  }[];
  benefits: string[];
  evidence?: {
    type: 'quran' | 'hadith';
    arabic?: string;
    transliteration?: string;
    translation: string;
    reference: string;
  };
}

export interface PreparationChecklist {
  category: string;
  items: {
    id: string;
    task: string;
    description: string;
    completed?: boolean;
  }[];
}

/**
 * Physical Preparation Steps
 */
export const WUDU_PREPARATION: PreparationStep = {
  id: 'wudu-preparation',
  title: 'Menyempurnakan Wudhu dengan Kesadaran',
  subtitle: 'Bersuci lahir dan batin sebagai gerbang sholat khusyu',
  description: 'Wudhu bukan sekadar ritual pembersihan fisik, tetapi juga persiapan spiritual untuk menghadap Allah dengan hati yang bersih.',
  importance: 'essential',
  duration: '5-10 menit',
  steps: [
    {
      id: 'intention',
      instruction: 'Niatkan wudhu dalam hati karena Allah',
      tips: [
        'Sadari bahwa wudhu adalah ibadah tersendiri',
        'Niatkan untuk bersuci agar bisa menghadap Allah',
        'Tidak perlu mengucapkan niat dengan lisan'
      ]
    },
    {
      id: 'bismillah',
      instruction: 'Ucapkan "Bismillahirrahmanirrahim"',
      tips: [
        'Ucapkan dengan penuh kesadaran',
        'Ingat bahwa Allah melihat setiap tindakan kita'
      ]
    },
    {
      id: 'hands',
      instruction: 'Cuci kedua telapak tangan hingga pergelangan 3 kali',
      tips: [
        'Gosok sela-sela jari dengan teliti',
        'Pastikan air mencapai seluruh permukaan tangan',
        'Mulai dari tangan kanan'
      ],
      commonMistakes: [
        'Tidak membersihkan sela-sela jari',
        'Tergesa-gesa sehingga tidak menyeluruh'
      ]
    },
    {
      id: 'mouth',
      instruction: 'Berkumur 3 kali sambil membersihkan mulut',
      tips: [
        'Gerakkan air di dalam mulut',
        'Bersihkan gigi dan gusi',
        'Sadari bahwa dosa-dosa keluar dari mulut'
      ]
    },
    {
      id: 'nose',
      instruction: 'Hirup air ke hidung dan keluarkan 3 kali',
      tips: [
        'Gunakan tangan kanan untuk menghirup',
        'Gunakan tangan kiri untuk mengeluarkan',
        'Jangan berlebihan jika sedang puasa'
      ]
    },
    {
      id: 'face',
      instruction: 'Basuh wajah 3 kali dari dahi hingga dagu',
      tips: [
        'Dari telinga kanan ke telinga kiri',
        'Pastikan air merata di seluruh wajah',
        'Gosok perlahan dengan kedua telapak tangan'
      ]
    },
    {
      id: 'arms',
      instruction: 'Basuh tangan dari ujung jari hingga siku 3 kali',
      tips: [
        'Mulai dari tangan kanan',
        'Gosok sela-sela jari',
        'Pastikan air mencapai siku'
      ],
      commonMistakes: [
        'Tidak sampai siku',
        'Melewatkan bagian siku'
      ]
    },
    {
      id: 'head',
      instruction: 'Usap kepala 1 kali dari dahi ke tengkuk',
      tips: [
        'Gunakan kedua telapak tangan',
        'Mulai dari depan ke belakang, lalu kembali',
        'Usap telinga bagian dalam dan luar'
      ]
    },
    {
      id: 'feet',
      instruction: 'Basuh kaki dari ujung jari hingga mata kaki 3 kali',
      tips: [
        'Mulai dari kaki kanan',
        'Gosok sela-sela jari kaki',
        'Pastikan mata kaki terbasahi'
      ],
      commonMistakes: [
        'Hanya membasahi bagian atas kaki',
        'Tidak membersihkan sela-sela jari'
      ]
    },
    {
      id: 'dua',
      instruction: 'Baca doa setelah wudhu',
      tips: [
        'Ucapkan dengan penuh penghayatan',
        'Sadari bahwa Allah telah membersihkan dosa-dosa kecil',
        'Niatkan untuk menjaga kesucian'
      ]
    }
  ],
  benefits: [
    'Menghapus dosa-dosa kecil',
    'Membersihkan jiwa dari kotoran spiritual',
    'Menyiapkan hati untuk menghadap Allah',
    'Mendapat cahaya di wajah pada hari kiamat',
    'Merasakan kesegaran lahir dan batin'
  ],
  evidence: {
    type: 'hadith',
    arabic: 'إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ',
    transliteration: 'Idha tawadda\'al \'abdu al-muslim awi al-mu\'min fa-ghasala wajhahu kharaja min wajhihi kullu khati\'ah nazara ilayha bi-\'aynayhi ma\'a al-ma\'',
    translation: 'Apabila seorang hamba Muslim atau mukmin berwudhu lalu membasuh wajahnya, keluarlah dari wajahnya setiap dosa yang dilihat oleh kedua matanya bersama air',
    reference: 'HR. Muslim no. 244'
  }
};

export const CLOTHING_PREPARATION: PreparationStep = {
  id: 'clothing-preparation',
  title: 'Menyiapkan Pakaian yang Layak',
  subtitle: 'Berpakaian dengan sopan dan bersih sebagai bentuk penghormatan kepada Allah',
  description: 'Pakaian dalam sholat mencerminkan adab kita di hadapan Allah. Pakaian yang bersih dan sopan membantu menjaga fokus dan khusyu.',
  importance: 'essential',
  duration: '5 menit',
  steps: [
    {
      id: 'check-cleanliness',
      instruction: 'Periksa kebersihan pakaian dari najis',
      tips: [
        'Pastikan tidak ada bekas urine, darah, atau kotoran',
        'Ganti pakaian jika terkena najis',
        'Gunakan pakaian yang baru dicuci jika memungkinkan'
      ]
    },
    {
      id: 'cover-awrah',
      instruction: 'Pastikan pakaian menutup aurat dengan sempurna',
      tips: [
        'Laki-laki: minimal dari pusar hingga lutut',
        'Perempuan: seluruh tubuh kecuali wajah dan telapak tangan',
        'Pilih pakaian yang longgar dan tidak transparan'
      ]
    },
    {
      id: 'avoid-distraction',
      instruction: 'Hindari pakaian dengan corak yang mengganggu konsentrasi',
      tips: [
        'Pilih pakaian dengan warna yang tenang',
        'Hindari gambar atau tulisan yang tidak pantas',
        'Lepas aksesoris yang berlebihan'
      ]
    },
    {
      id: 'comfort',
      instruction: 'Pastikan pakaian nyaman untuk gerakan sholat',
      tips: [
        'Tidak terlalu ketat saat rukuk dan sujud',
        'Tidak terlalu longgar hingga mengganggu',
        'Sesuaikan dengan cuaca dan kondisi'
      ]
    }
  ],
  benefits: [
    'Menunjukkan penghormatan kepada Allah',
    'Membantu menjaga fokus dalam sholat',
    'Mencerminkan kesucian lahir dan batin',
    'Memberikan kenyamanan saat beribadah'
  ],
  evidence: {
    type: 'quran',
    arabic: 'يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ',
    transliteration: 'Ya bani Adama khudhu zinatakum \'inda kulli masjid',
    translation: 'Wahai anak Adam! Pakailah pakaianmu yang indah di setiap (memasuki) masjid',
    reference: 'QS. Al-A\'raf: 31'
  }
};

export const PLACE_PREPARATION: PreparationStep = {
  id: 'place-preparation',
  title: 'Menyiapkan Tempat Sholat yang Layak',
  subtitle: 'Menciptakan lingkungan yang mendukung kekhusyuan',
  description: 'Tempat sholat yang bersih, tenang, dan layak membantu hati lebih fokus untuk menghadap Allah.',
  importance: 'recommended',
  duration: '3-5 menit',
  steps: [
    {
      id: 'clean-area',
      instruction: 'Bersihkan tempat sholat dari kotoran',
      tips: [
        'Sapu atau lap area yang akan digunakan',
        'Singkirkan barang-barang yang tidak perlu',
        'Pastikan tidak ada najis di sekitar tempat sholat'
      ]
    },
    {
      id: 'prayer-mat',
      instruction: 'Letakkan sajadah atau alas yang bersih',
      tips: [
        'Gunakan sajadah yang bersih dan suci',
        'Pastikan sajadah tidak licin',
        'Orientasikan sajadah menghadap kiblat'
      ]
    },
    {
      id: 'minimize-distraction',
      instruction: 'Kurangi gangguan di sekitar tempat sholat',
      tips: [
        'Matikan TV, radio, atau musik',
        'Silent notifikasi HP',
        'Minta keluarga untuk tidak mengganggu',
        'Tutup pintu jika memungkinkan'
      ]
    },
    {
      id: 'qibla-direction',
      instruction: 'Pastikan arah kiblat sudah benar',
      tips: [
        'Gunakan kompas kiblat atau aplikasi',
        'Jika ragu, tanyakan kepada yang mengetahui',
        'Konsistensi arah kiblat di rumah'
      ]
    },
    {
      id: 'lighting',
      instruction: 'Atur pencahayaan yang cukup',
      tips: [
        'Tidak terlalu terang hingga silau',
        'Tidak terlalu gelap hingga mengantuk',
        'Cahaya alami lebih baik jika tersedia'
      ]
    }
  ],
  benefits: [
    'Membantu konsentrasi dan khusyu',
    'Menghormati nilai kesucian tempat ibadah',
    'Menciptakan suasana spiritual yang tenang',
    'Menghindari gangguan eksternal'
  ]
};

export const HEART_PREPARATION: PreparationStep = {
  id: 'heart-preparation',
  title: 'Menyiapkan Hati Sebelum Sholat',
  subtitle: 'Menghadirkan kesadaran spiritual untuk dialog dengan Allah',
  description: 'Persiapan hati adalah yang terpenting dalam sholat. Hati yang hadir akan menghasilkan sholat yang bermakna.',
  importance: 'essential',
  duration: '2-5 menit',
  steps: [
    {
      id: 'pause-worldly',
      instruction: 'Hentikan sementara aktivitas duniawi',
      tips: [
        'Selesaikan pekerjaan yang urgent',
        'Simpan HP atau gadget',
        'Kosongkan pikiran dari masalah dunia'
      ]
    },
    {
      id: 'remember-allah',
      instruction: 'Ingat keagungan Allah yang akan dihadapi',
      tips: [
        'Sadari bahwa akan menghadap Pencipta alam semesta',
        'Ingat rahmat dan kasih sayang Allah',
        'Renungkan tujuan diciptakan manusia'
      ]
    },
    {
      id: 'seek-forgiveness',
      instruction: 'Mohon ampun atas dosa-dosa yang telah dilakukan',
      tips: [
        'Baca istighfar dalam hati',
        'Sadari kelemahan dan kesalahan diri',
        'Niatkan untuk tidak mengulangi dosa'
      ]
    },
    {
      id: 'set-intention',
      instruction: 'Kuatkan niat bahwa sholat ini murni untuk Allah',
      tips: [
        'Bukan untuk dilihat orang lain',
        'Bukan karena terpaksa atau kebiasaan',
        'Murni karena cinta dan taat kepada Allah'
      ]
    },
    {
      id: 'seek-khusyu',
      instruction: 'Berdoa memohon kekhusyuan dalam sholat',
      tips: [
        'Mohon hati yang hadir dan fokus',
        'Mohon dijauhkan dari gangguan setan',
        'Mohon sholat yang diterima Allah'
      ]
    }
  ],
  benefits: [
    'Sholat menjadi lebih bermakna dan khusyu',
    'Hati lebih tenang dan fokus',
    'Merasakan kedekatan dengan Allah',
    'Mendapat pahala yang lebih sempurna'
  ],
  evidence: {
    type: 'quran',
    arabic: 'وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
    transliteration: 'Wa aqim as-salata li-dhikri',
    translation: 'Dan dirikanlah shalat untuk mengingat-Ku',
    reference: 'QS. Tha-Ha: 14'
  }
};

/**
 * Complete preparation checklist
 */
export const PREPARATION_CHECKLIST: PreparationChecklist[] = [
  {
    category: 'Persiapan Fisik',
    items: [
      {
        id: 'wudu-complete',
        task: 'Wudhu sempurna',
        description: 'Wudhu dilakukan dengan sempurna sesuai sunnah'
      },
      {
        id: 'clothing-appropriate',
        task: 'Pakaian layak',
        description: 'Pakaian bersih, suci, dan menutup aurat'
      },
      {
        id: 'place-clean',
        task: 'Tempat bersih',
        description: 'Tempat sholat bersih dan menghadap kiblat'
      }
    ]
  },
  {
    category: 'Persiapan Mental',
    items: [
      {
        id: 'distraction-minimal',
        task: 'Gangguan diminimalkan',
        description: 'HP silent, lingkungan tenang'
      },
      {
        id: 'worldly-pause',
        task: 'Urusan dunia ditunda',
        description: 'Pikiran dibebaskan dari kesibukan duniawi'
      },
      {
        id: 'heart-present',
        task: 'Hati dihadirkan',
        description: 'Kesadaran akan menghadap Allah'
      }
    ]
  },
  {
    category: 'Persiapan Spiritual',
    items: [
      {
        id: 'intention-pure',
        task: 'Niat murni',
        description: 'Niat sholat semata-mata karena Allah'
      },
      {
        id: 'forgiveness-sought',
        task: 'Istighfar dibaca',
        description: 'Mohon ampun atas dosa-dosa sebelumnya'
      },
      {
        id: 'khusyu-requested',
        task: 'Doa khusyu',
        description: 'Berdoa memohon kekhusyuan dalam sholat'
      }
    ]
  }
];

/**
 * Complete preparation guide
 */
export const PREPARATION_GUIDE = {
  introduction: {
    title: 'Persiapan Sholat Khusyu',
    subtitle: 'Menyiapkan diri secara fisik, mental, dan spiritual untuk menghadap Allah',
    description: [
      'Persiapan yang baik adalah kunci keberhasilan sholat khusyu. Seperti halnya pertemuan penting dengan orang terhormat, menghadap Allah dalam sholat juga memerlukan persiapan yang matang.',
      'Persiapan ini meliputi tiga aspek: fisik (wudhu, pakaian, tempat), mental (ketenangan pikiran), dan spiritual (persiapan hati).',
      'Dengan persiapan yang baik, hati akan lebih mudah hadir dan fokus saat menghadap Allah dalam sholat.'
    ]
  },
  steps: [
    WUDU_PREPARATION,
    CLOTHING_PREPARATION,
    PLACE_PREPARATION,
    HEART_PREPARATION
  ],
  checklist: PREPARATION_CHECKLIST,
  tips: [
    'Buatlah rutinitas persiapan yang konsisten setiap sholat',
    'Jangan terburu-buru dalam persiapan, luangkan waktu yang cukup',
    'Persiapan terbaik adalah yang dilakukan dengan kesadaran penuh',
    'Sesuaikan persiapan dengan kondisi dan situasi saat itu',
    'Ingat bahwa persiapan ini adalah bagian dari ibadah itu sendiri'
  ]
};

export default PREPARATION_GUIDE;
