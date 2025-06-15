// src/lib/data/theoretical-content.ts
// Theoretical foundation content based on Chapters 1-2 of the book

import { QURANIC_VERSES, HADITH_COLLECTION, SCHOLARS_QUOTES } from '@/lib/constants/islamic.constants';

export interface TheoreticalSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  evidence?: {
    type: 'quran' | 'hadith' | 'scholar';
    arabic?: string;
    transliteration?: string;
    translation: string;
    reference: string;
    explanation?: string;
  }[];
  keyPoints?: string[];
}

export interface TheoreticalChapter {
  id: string;
  title: string;
  subtitle: string;
  sections: TheoreticalSection[];
}

/**
 * Chapter 1: Mengapa Sholat Khusyu Itu Penting?
 */
export const CHAPTER_ONE: TheoreticalChapter = {
  id: 'chapter-1',
  title: 'Mengapa Sholat Khusyu Itu Penting?',
  subtitle: 'Pemahaman fundamental tentang urgensi khusyu dalam sholat',
  sections: [
    {
      id: 'definition-khusyu',
      title: 'Definisi Khusyu Menurut Al-Qur\'an dan Hadits',
      content: [
        'Khusyu secara bahasa (etimologi) berasal dari kata khasya\'a (خشع), yang berarti tunduk, tenang, dan merendah dengan penuh ketundukan.',
        'Dalam istilah syar\'i (terminologi Islam), khusyu berarti ketundukan hati dan anggota badan dalam menghadirkan rasa takut, pengagungan, dan cinta kepada Allah selama ibadah, terutama dalam sholat.',
        'Dengan kata lain, khusyu bukan hanya sekadar ekspresi fisik (seperti menundukkan kepala) tetapi lebih dalam lagi: ketundukan hati dan pikiran di hadapan Allah.'
      ],
      evidence: [
        {
          type: 'quran',
          arabic: QURANIC_VERSES.khusyuBeliever.arabic,
          transliteration: QURANIC_VERSES.khusyuBeliever.transliteration,
          translation: QURANIC_VERSES.khusyuBeliever.translation,
          reference: QURANIC_VERSES.khusyuBeliever.reference,
          explanation: 'Ayat ini menegaskan bahwa kemenangan dan keberuntungan seorang Mukmin sangat erat kaitannya dengan kualitas kekhusyu\'annya dalam sholat.'
        },
        {
          type: 'quran',
          arabic: QURANIC_VERSES.negligentPrayer.arabic,
          transliteration: QURANIC_VERSES.negligentPrayer.transliteration,
          translation: QURANIC_VERSES.negligentPrayer.translation,
          reference: QURANIC_VERSES.negligentPrayer.reference,
          explanation: 'Menurut banyak mufassir, yang dimaksud lalai di sini adalah orang yang sholatnya tanpa hati yang hadir, tanpa kekhusyu\'an, bahkan jika secara fisik ia tetap melaksanakan sholat.'
        },
        {
          type: 'hadith',
          arabic: 'إِنَّ الْعَبْدَ إِذَا قَامَ فِي الصَّلَاةِ فَإِنَّهُ بَيْنَ عَيْنَيِ الرَّحْمَنِ فَإِذَا الْتَفَتَ قَالَ لَهُ رَبُّهُ إِلَى مَنْ تَلْتَفِتُ إِلَى خَيْرٍ مِنِّي',
          transliteration: 'Inna al-\'abda idha qama fi as-salati fa-innahu bayna \'ainay ar-Rahman fa-idha iltafat qala lahu rabbuhu: ila man taltafit? ila khairin minni?',
          translation: 'Sesungguhnya seorang hamba jika sedang sholat, maka ia berada di antara kedua mata Ar-Rahman. Jika ia berpaling, Allah berkata kepadanya: "Kepada siapa kamu berpaling? Kepada yang lebih baik dari-Ku?"',
          reference: 'HR. Ahmad dan Al-Hakim, shahih sanadnya menurut Al-Albani',
          explanation: 'Hadits ini menegaskan bahwa kehadiran hati saat sholat adalah bagian dari adab seorang hamba terhadap Allah.'
        },
        {
          type: 'scholar',
          translation: SCHOLARS_QUOTES.ibnRajab.quote,
          reference: `${SCHOLARS_QUOTES.ibnRajab.scholar} dalam ${SCHOLARS_QUOTES.ibnRajab.source}`,
          explanation: 'Definisi komprehensif tentang khusyu yang meliputi aspek hati dan fisik.'
        }
      ],
      keyPoints: [
        'Khusyu adalah ibadah hati yang nyata dalam perilaku badan',
        'Khusyu bukan hanya gerakan fisik, tetapi ketundukan total kepada Allah',
        'Kehadiran hati dalam sholat adalah kunci utama khusyu'
      ]
    },
    {
      id: 'urgency-khusyu',
      title: 'Urgensi Sholat Khusyu',
      content: [
        'Sholat yang khusyu bukan hanya anjuran, tetapi kebutuhan spiritual yang menentukan kualitas hubungan kita dengan Allah.',
        'Tanpa khusyu, sholat berisiko menjadi rutinitas kosong yang tidak memberikan dampak transformatif pada kehidupan.'
      ],
      evidence: [
        {
          type: 'quran',
          arabic: QURANIC_VERSES.khusyuBeliever.arabic,
          transliteration: QURANIC_VERSES.khusyuBeliever.transliteration,
          translation: QURANIC_VERSES.khusyuBeliever.translation,
          reference: QURANIC_VERSES.khusyuBeliever.reference,
          explanation: 'Menurut tafsir Imam Al-Qurthubi, yang dimaksud "beruntung" di sini adalah berhasil meraih ridha Allah, keselamatan dunia dan surga di akhirat.'
        },
        {
          type: 'hadith',
          arabic: HADITH_COLLECTION.partialReward.arabic,
          transliteration: HADITH_COLLECTION.partialReward.transliteration,
          translation: HADITH_COLLECTION.partialReward.translation,
          reference: HADITH_COLLECTION.partialReward.source,
          explanation: 'Hadits ini mengajarkan bahwa kualitas sholat dinilai berdasarkan kekhusyu\'an dan kehadiran hati. Semakin khusyu seseorang, semakin sempurna pahala sholatnya.'
        },
        {
          type: 'quran',
          arabic: QURANIC_VERSES.prayerPreventsEvil.arabic,
          transliteration: QURANIC_VERSES.prayerPreventsEvil.transliteration,
          translation: QURANIC_VERSES.prayerPreventsEvil.translation,
          reference: QURANIC_VERSES.prayerPreventsEvil.reference,
          explanation: 'Para ulama seperti Imam Al-Ghazali menafsirkan bahwa sholat yang mampu mencegah maksiat adalah sholat yang dilakukan dengan penuh kekhusyu\'an.'
        }
      ],
      keyPoints: [
        'Khusyu sebagai kunci keberuntungan di dunia dan akhirat',
        'Sholat tanpa khusyu beresiko kehilangan pahala',
        'Khusyu menjadi ciri utama orang mukmin sejati',
        'Sholat khusyu mencegah perbuatan keji dan mungkar',
        'Sholat khusyu menjadi bekal terbaik menuju kematian'
      ]
    },
    {
      id: 'causes-lack-khusyu',
      title: 'Sebab-Sebab Kurangnya Kekhusyu\'an dalam Sholat',
      content: [
        'Memahami penyebab kurangnya khusyu adalah langkah penting untuk mengatasinya.',
        'Sebagian besar masalah khusyu berasal dari kurangnya persiapan hati dan pemahaman tentang hakikat sholat.'
      ],
      evidence: [
        {
          type: 'scholar',
          translation: SCHOLARS_QUOTES.ibnulQayyim.quote,
          reference: `${SCHOLARS_QUOTES.ibnulQayyim.scholar} dalam ${SCHOLARS_QUOTES.ibnulQayyim.source}`,
          explanation: 'Pentingnya memahami makna bacaan sebagai fondasi khusyu.'
        },
        {
          type: 'hadith',
          arabic: HADITH_COLLECTION.worstThief.arabic,
          transliteration: HADITH_COLLECTION.worstThief.transliteration,
          translation: HADITH_COLLECTION.worstThief.translation,
          reference: HADITH_COLLECTION.worstThief.source,
          explanation: 'Sholat yang tergesa-gesa menunjukkan kurangnya perhatian hati terhadap sholat tersebut.'
        },
        {
          type: 'hadith',
          arabic: HADITH_COLLECTION.satanDistraction.arabic,
          transliteration: HADITH_COLLECTION.satanDistraction.transliteration,
          translation: HADITH_COLLECTION.satanDistraction.translation,
          reference: HADITH_COLLECTION.satanDistraction.source,
          explanation: 'Gangguan pikiran yang tidak perlu sangat mempengaruhi konsentrasi dan kehadiran hati dalam sholat.'
        }
      ],
      keyPoints: [
        'Kurangnya pemahaman tentang makna sholat',
        'Lalai dan terburu-buru dalam sholat',
        'Banyaknya godaan dan bisikan (waswas)',
        'Cinta dunia yang berlebihan',
        'Lingkungan yang tidak mendukung'
      ]
    }
  ]
};

/**
 * Chapter 2: Persiapan Sebelum Memulai Sholat
 */
export const CHAPTER_TWO: TheoreticalChapter = {
  id: 'chapter-2',
  title: 'Persiapan Sebelum Memulai Sholat',
  subtitle: 'Langkah-langkah penting untuk menyiapkan fisik dan hati sebelum sholat',
  sections: [
    {
      id: 'perfect-wudu',
      title: 'Menyempurnakan Wudhu dengan Kesadaran',
      content: [
        'Wudhu bukan sekadar ritual bersuci, melainkan ibadah yang agung dalam Islam.',
        'Menyempurnakan wudhu dengan kesadaran penuh adalah kunci untuk mendapatkan keutamaan besar yang dijanjikan Allah dan Rasul-Nya.',
        'Menyempurnakan wudhu berarti membasuh semua anggota wudhu dengan sempurna, melaksanakan sunnah-sunnah wudhu, dan berwudhu dengan kesadaran hati.'
      ],
      evidence: [
        {
          type: 'quran',
          arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ',
          transliteration: 'Ya ayyuha alladhina amanu idha qumtum ila as-salati faghsilu wujuhakum wa aidiyakum ila al-marafiq',
          translation: 'Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan sholat, basuhlah wajahmu dan tanganmu sampai siku',
          reference: 'QS. Al-Ma\'idah: 6',
          explanation: 'Allah memerintahkan wudhu dengan tata cara yang teratur dan sempurna, bukan asal-asalan.'
        },
        {
          type: 'hadith',
          arabic: 'أَسْبِغُوا الْوُضُوءَ وَيْلٌ لِلْأَعْقَابِ مِنَ النَّارِ',
          transliteration: 'Asbighu al-wudhu\'a waylu lil-a\'qab min an-nar',
          translation: 'Sempurnakanlah wudhu, celakalah tumit-tumit dari api neraka',
          reference: 'HR. Bukhari no. 60 dan Muslim no. 241',
          explanation: 'Hadits ini menunjukkan pentingnya menyempurnakan basuhan, karena kelalaian sedikit saja dapat berdampak besar.'
        }
      ],
      keyPoints: [
        'Niat yang benar saat berwudhu',
        'Menghadirkan hati dalam setiap basuhan',
        'Memahami bahwa setiap tetes air menghapus dosa',
        'Mengamalkan sunnah-sunnah wudhu',
        'Membaca doa setelah wudhu'
      ]
    },
    {
      id: 'prepare-clothing-place',
      title: 'Menyiapkan Pakaian dan Tempat yang Layak',
      content: [
        'Dalam Islam, kebersihan, kerapihan, dan kesucian sangat ditekankan, terutama dalam pelaksanaan ibadah seperti shalat.',
        'Menyiapkan pakaian dan tempat yang layak menjadi bagian dari adab beribadah kepada Allah, sebagai bentuk penghormatan kepada-Nya.'
      ],
      evidence: [
        {
          type: 'quran',
          arabic: 'يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ',
          transliteration: 'Ya bani Adama khudhu zinatakum \'inda kulli masjid',
          translation: 'Wahai anak Adam! Pakailah pakaianmu yang indah di setiap (memasuki) masjid',
          reference: 'QS. Al-A\'raf: 31',
          explanation: 'Ibnu Katsir menjelaskan: "Pakailah pakaian yang bersih, suci, dan menutupi aurat setiap kali hendak melaksanakan sholat."'
        },
        {
          type: 'hadith',
          arabic: 'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ',
          transliteration: 'Inna Allaha jamilun yuhibbu al-jamal',
          translation: 'Sesungguhnya Allah itu indah dan mencintai keindahan',
          reference: 'HR. Muslim no. 91',
          explanation: 'Berpakaian rapi dan bersih saat sholat adalah bagian dari memuliakan perintah Allah.'
        }
      ],
      keyPoints: [
        'Pakaian harus suci dari najis',
        'Menutup aurat dengan sempurna',
        'Tidak transparan atau ketat',
        'Tempat sholat harus suci dan tenang',
        'Menghadap kiblat dengan benar'
      ]
    },
    {
      id: 'prepare-heart',
      title: 'Menyiapkan Hati Sebelum Sholat',
      content: [
        'Sholat bukan sekadar gerakan fisik, tetapi hakikatnya adalah hubungan antara seorang hamba dengan Rabb-nya.',
        'Sebelum melaksanakan sholat, penting untuk menyiapkan hati, agar sholat benar-benar menjadi sumber ketenangan, kekuatan iman, dan pendekatan diri kepada Allah.',
        'Khusyuk tidak mungkin tercapai tanpa persiapan hati yang baik sebelum sholat.'
      ],
      evidence: [
        {
          type: 'hadith',
          arabic: 'أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ',
          transliteration: 'Ala wa inna fi al-jasadi mudhghatan idha salahat salaha al-jasadu kulluhu wa idha fasadat fasada al-jasadu kulluhu ala wa hiya al-qalb',
          translation: 'Ketahuilah bahwa dalam tubuh ada segumpal daging; jika ia baik, maka baiklah seluruh tubuh, dan jika ia rusak, maka rusaklah seluruh tubuh. Ketahuilah bahwa itu adalah hati',
          reference: 'HR. Bukhari no. 52 dan Muslim no. 1599',
          explanation: 'Hati adalah pusat segala amal, termasuk sholat. Hati yang baik akan menghasilkan sholat yang baik.'
        },
        {
          type: 'quran',
          arabic: 'وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
          transliteration: 'Wa aqim as-salata li-dhikri',
          translation: 'Dan dirikanlah shalat untuk mengingat-Ku',
          reference: 'QS. Tha-Ha: 14',
          explanation: 'Sholat adalah sarana utama untuk mengingat Allah, sehingga hati harus disiapkan untuk fokus kepada-Nya.'
        }
      ],
      keyPoints: [
        'Membersihkan hati dari kesibukan dunia',
        'Menyadari akan menghadap Allah Yang Maha Kuasa',
        'Menghadirkan rasa butuh dan rendah diri',
        'Menguatkan niat bahwa sholat untuk Allah semata',
        'Mengingat kematian dan akhirat'
      ]
    }
  ]
};

/**
 * Special section about the 30 Decibel Plus Method
 */
export const METHOD_OVERVIEW = {
  id: 'method-overview',
  title: 'Metode 30 Desibel Plus',
  subtitle: 'Pendekatan praktis untuk mencapai khusyu dalam sholat',
  description: [
    'Metode 30 Desibel Plus adalah pendekatan terstruktur yang terdiri dari tiga langkah utama untuk mencapai khusyu dalam sholat.',
    'Metode ini menggabungkan pemahaman spiritual dengan teknik praktis yang dapat dipelajari dan diterapkan oleh siapa saja.',
    'Komponen "Plus" mengacu pada teknik mindfulness yang mengintegrasikan suara, pendengaran, pemahaman, dan hati secara bersamaan.'
  ],
  steps: [
    {
      number: 1,
      title: 'Menata dan Menguatkan Niat',
      description: 'Menghadirkan kesadaran penuh bahwa kita sedang menghadap Allah semata',
      techniques: [
        'Niat dalam hati, bukan diucapkan',
        'Pause sejenak sebelum takbir',
        'Menghadirkan kesadaran spiritual',
        'Melepaskan pikiran duniawi'
      ]
    },
    {
      number: 2,
      title: 'Memahami Makna Bacaan Sholat',
      description: 'Mengubah hafalan menjadi dialog bermakna dengan Allah',
      techniques: [
        'Mempelajari terjemahan setiap bacaan',
        'Menghayati makna saat melafazkan',
        'Membuat koneksi emosional dengan bacaan',
        'Memahami konteks setiap doa'
      ]
    },
    {
      number: 3,
      title: 'Teknik 30 Desibel Plus (Mindfulness)',
      description: 'Membaca dengan suara lirih sambil mengaktifkan kesadaran penuh',
      techniques: [
        'Suara lirih sekitar 30 desibel',
        'Mendengarkan aktif terhadap bacaan sendiri',
        'Sinkronisasi otak: suara, makna, dan kesadaran',
        'Mengirim pesan dari otak ke hati',
        'Sinkronisasi gerakan dan bacaan'
      ]
    }
  ],
  scientificBasis: [
    'Berdasarkan prinsip mindfulness yang terbukti ilmiah',
    'Menggunakan multiple senses untuk meningkatkan fokus',
    'Menciptakan ruang virtual dialog dengan Allah',
    'Melatih otak untuk tetap present dan aware',
    'Membangun habit khusyu melalui repetition yang sadar'
  ]
};

/**
 * Combine all theoretical content
 */
export const THEORETICAL_CONTENT = {
  chapters: [CHAPTER_ONE, CHAPTER_TWO],
  methodOverview: METHOD_OVERVIEW,
  introduction: {
    title: 'Fondasi Teoritis Sholat Khusyu',
    subtitle: 'Memahami hakikat dan urgensi khusyu dalam perspektif Al-Qur\'an, Hadits, dan ulama',
    description: [
      'Sebelum mempraktikkan metode 30 Desibel Plus, penting untuk memahami fondasi teoritis yang kuat tentang khusyu dalam sholat.',
      'Pemahaman ini akan memberikan motivasi spiritual dan kejelasan intelektual yang diperlukan untuk komitmen jangka panjang dalam melatih khusyu.',
      'Materi ini disarikan dari Bab 1-2 buku "Tiga Langkah Mudah menuju Sholat Khusyu\'" dengan referensi authentic dari Al-Qur\'an dan Hadits shahih.'
    ]
  }
};

export default THEORETICAL_CONTENT;
