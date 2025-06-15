// src/lib/constants/islamic.constants.ts
// Islamic content constants for Desibel Khusyu app

/**
 * Common Islamic phrases and expressions
 */
export const ISLAMIC_PHRASES = {
  bismillah: {
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    transliteration: 'Bismillahirrahmanirrahim',
    translation: 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang',
  },
  allahuAkbar: {
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    translation: 'Allah Maha Besar',
  },
  subhanallah: {
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'Subhanallah',
    translation: 'Maha Suci Allah',
  },
  alhamdulillah: {
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    translation: 'Segala puji bagi Allah',
  },
  laHaulaWalaQuwwata: {
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: 'La hawla wa la quwwata illa billah',
    translation: 'Tiada daya dan kekuatan kecuali dari Allah',
  },
} as const;

/**
 * Quranic verses about Khusyu and prayer
 */
export const QURANIC_VERSES = {
  khusyuBeliever: {
    arabic: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ',
    transliteration: 'Qad aflaha al-mu\'minun, alladhina hum fi salatihim khashi\'un',
    translation: 'Sungguh beruntung orang-orang yang beriman, (yaitu) mereka yang khusyu dalam salatnya',
    reference: 'QS. Al-Mu\'minun: 1-2',
    context: 'Ayat tentang ciri-ciri orang beriman yang beruntung',
  },
  negligentPrayer: {
    arabic: 'فَوَيْلٌ لِّلْمُصَلِّينَ الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ',
    transliteration: 'Fa waylun lil-musallin, alladhina hum \'an salatihim sahun',
    translation: 'Maka celakalah bagi orang-orang yang shalat, (yaitu) mereka yang lalai terhadap salatnya',
    reference: 'QS. Al-Ma\'un: 4-5',
    context: 'Peringatan tentang bahaya sholat tanpa kehadiran hati',
  },
  prayerPreventsEvil: {
    arabic: 'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',
    transliteration: 'Inna as-salata tanha \'an al-fahsha\'i wal-munkar',
    translation: 'Sesungguhnya shalat itu mencegah dari (perbuatan-perbuatan) keji dan mungkar',
    reference: 'QS. Al-Ankabut: 45',
    context: 'Hikmah dan manfaat sholat yang dilakukan dengan benar',
  },
  humbleSupplication: {
    arabic: 'ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً',
    transliteration: 'Ud\'u rabbakum tadarru\'an wa khufyatan',
    translation: 'Berdoalah kepada Tuhanmu dengan rendah diri dan suara lembut',
    reference: 'QS. Al-A\'raf: 55',
    context: 'Adab berdoa dan berdzikir dengan suara lembut',
  },
  closestToAllah: {
    arabic: 'وَاسْجُدْ وَاقْتَرِب',
    transliteration: 'Wasjud waqtarib',
    translation: 'Dan sujudlah dan dekatkanlah (diri kepada Allah)',
    reference: 'QS. Al-Alaq: 19',
    context: 'Sujud sebagai posisi terdekat dengan Allah',
  },
} as const;

/**
 * Authentic Hadith about prayer and Khusyu
 */
export const HADITH_COLLECTION = {
  intentionMatters: {
    arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
    transliteration: 'Innama al-a\'malu bin-niyyat',
    translation: 'Sesungguhnya setiap amalan tergantung pada niatnya',
    source: 'HR. Bukhari no. 1; Muslim no. 1907',
    context: 'Pentingnya niat yang benar dalam setiap ibadah',
  },
  prayAsYouSeeMe: {
    arabic: 'صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي',
    transliteration: 'Sallu kama ra\'aytumuni usalli',
    translation: 'Shalatlah kalian sebagaimana kalian melihat aku shalat',
    source: 'HR. Bukhari no. 631',
    context: 'Pentingnya mengikuti tata cara sholat Rasulullah',
  },
  bestPrayerWithKhusyu: {
    arabic: 'أَفْضَلُ الصَّلَاةِ طُولُ الْقُنُوتِ',
    transliteration: 'Afdhal as-salati tul al-qunut',
    translation: 'Shalat yang paling utama adalah yang paling khusyu di dalamnya',
    source: 'HR. Ahmad, Abu Dawud',
    context: 'Kualitas sholat ditentukan oleh tingkat khusyu',
  },
  closestInSujud: {
    arabic: 'أَقْرَبُ مَا يَكُونُ الْعَبْدُ إِلَى رَبِّهِ وَهُوَ سَاجِدٌ',
    transliteration: 'Aqrabu ma yakun al-\'abdu ila rabbihi wa huwa sajid',
    translation: 'Seorang hamba paling dekat kepada Tuhannya ketika ia sedang sujud',
    source: 'HR. Muslim no. 482',
    context: 'Keutamaan posisi sujud dalam sholat',
  },
  partialReward: {
    arabic: 'إِنَّ الرَّجُلَ لَيَنْصَرِفُ وَمَا كُتِبَ لَهُ إِلَّا عُشْرُ صَلَاتِهِ',
    transliteration: 'Inna ar-rajula la-yansarifu wa ma kutiba lahu illa \'ushr salatih',
    translation: 'Sesungguhnya seseorang selesai sholat namun tidak dicatat baginya kecuali sepersepuluh dari sholatnya',
    source: 'HR. Abu Dawud, hasan sahih',
    context: 'Pahala sholat tergantung pada tingkat kehadiran hati',
  },
  worstThief: {
    arabic: 'أَسْوَأُ النَّاسِ سَرِقَةً الَّذِي يَسْرِقُ مِنْ صَلَاتِهِ',
    transliteration: 'Aswa\'u an-nasi sariqatan alladhi yasriqu min salatih',
    translation: 'Seburuk-buruk pencuri adalah yang mencuri dari sholatnya',
    source: 'HR. Ahmad, 5/310; dinyatakan hasan oleh Al-Albani',
    context: 'Bahaya tergesa-gesa dalam sholat',
  },
  satanDistraction: {
    arabic: 'إِنَّ الشَّيْطَانَ يَأْتِي أَحَدَكُمْ فِي صَلَاتِهِ فَيَقُولُ اذْكُرْ كَذَا وَكَذَا',
    transliteration: 'Inna ash-shaytana ya\'ti ahadakum fi salatih fa-yaqul udhkur kadha wa kadha',
    translation: 'Sesungguhnya setan datang kepada salah seorang dari kalian dalam sholatnya lalu berkata: ingatlah ini dan itu',
    source: 'HR. Bukhari no. 1231 dan Muslim no. 389',
    context: 'Gangguan waswas setan dalam sholat',
  },
} as const;

/**
 * Scholars' quotes about Khusyu and prayer
 */
export const SCHOLARS_QUOTES = {
  ibnRajab: {
    quote: 'Khusyu adalah kehadiran hati di hadapan Allah dengan penuh ketundukan dan hormat, sehingga anggota badan pun menjadi tenang dan tidak melakukan gerakan yang sia-sia',
    scholar: 'Imam Ibn Rajab Al-Hanbali',
    source: 'Fath Al-Bari',
    context: 'Definisi khusyu menurut ulama',
  },
  alGhazali: {
    quote: 'Hakikat sholat tidak sah tanpa memahami maknanya',
    scholar: 'Imam Al-Ghazali',
    source: 'Ihya\' Ulumuddin, Kitab Asrar Ash-Sholah',
    context: 'Pentingnya memahami makna dalam sholat',
  },
  ibnulQayyim: {
    quote: 'Khusyu dalam sholat bergantung pada pemahaman makna bacaan dan dzikir yang diucapkan',
    scholar: 'Ibnul Qayyim',
    source: 'Madarijus Salikin, 1/521',
    context: 'Hubungan pemahaman dengan khusyu',
  },
  ibnQudamah: {
    quote: 'Niat tempatnya di hati, bukan di lisan',
    scholar: 'Ibn Qudamah',
    source: 'Al-Mughni, 1/287',
    context: 'Penjelasan tentang niat dalam sholat',
  },
  alNawawi: {
    quote: 'Yang dimaksud dengan membaca dengan suara lembut dalam sholat adalah mengeluarkan suara yang terdengar oleh dirinya sendiri',
    scholar: 'Al-Nawawi',
    source: 'Al-Majmu\' Syarh Al-Muhadzdzab, 3/399',
    context: 'Teknik membaca dengan suara lembut',
  },
} as const;

/**
 * Names and attributes of Allah related to prayer
 */
export const ASMAUL_HUSNA_PRAYER = {
  arRahman: {
    arabic: 'الرَّحْمَٰنُ',
    transliteration: 'Ar-Rahman',
    translation: 'Yang Maha Pengasih',
    meaning: 'Allah yang memberikan kasih sayang kepada seluruh makhluk',
  },
  arRahim: {
    arabic: 'الرَّحِيمُ',
    transliteration: 'Ar-Rahim',
    translation: 'Yang Maha Penyayang',
    meaning: 'Allah yang memberikan kasih sayang khusus kepada orang beriman',
  },
  alMalik: {
    arabic: 'الْمَلِكُ',
    transliteration: 'Al-Malik',
    translation: 'Yang Maha Menguasai',
    meaning: 'Allah yang menguasai hari pembalasan',
  },
  asSubbuh: {
    arabic: 'السُّبُّوحُ',
    transliteration: 'As-Subbuh',
    translation: 'Yang Maha Suci',
    meaning: 'Allah yang suci dari segala kekurangan',
  },
  alAzim: {
    arabic: 'الْعَظِيمُ',
    transliteration: 'Al-Azim',
    translation: 'Yang Maha Agung',
    meaning: 'Allah yang memiliki keagungan sempurna',
  },
  alAla: {
    arabic: 'الْأَعْلَىٰ',
    transliteration: 'Al-A\'la',
    translation: 'Yang Maha Tinggi',
    meaning: 'Allah yang tinggi derajat dan kedudukannya',
  },
} as const;

/**
 * Prayer times in Arabic
 */
export const PRAYER_TIMES_ARABIC = {
  fajr: {
    arabic: 'صَلَاةُ الْفَجْرِ',
    transliteration: 'Salatul Fajr',
  },
  dhuhr: {
    arabic: 'صَلَاةُ الظُّهْرِ',
    transliteration: 'Salatul Dhuhr',
  },
  asr: {
    arabic: 'صَلَاةُ الْعَصْرِ',
    transliteration: 'Salatul Asr',
  },
  maghrib: {
    arabic: 'صَلَاةُ الْمَغْرِبِ',
    transliteration: 'Salatul Maghrib',
  },
  isha: {
    arabic: 'صَلَاةُ الْعِشَاءِ',
    transliteration: 'Salatul Isha\'',
  },
} as const;

/**
 * Islamic calendar and important dates
 */
export const ISLAMIC_CALENDAR = {
  months: [
    'Muharram', 'Safar', 'Rabi\'ul Awwal', 'Rabi\'ul Akhir',
    'Jumadil Awwal', 'Jumadil Akhir', 'Rajab', 'Sya\'ban',
    'Ramadhan', 'Syawwal', 'Dzulqaidah', 'Dzulhijjah'
  ],
  importantDates: {
    laylatulQadr: 'Lailatul Qadr - Malam yang lebih baik dari seribu bulan',
    isrmiraj: 'Isra Mi\'raj - Perjalanan malam Rasulullah',
    maulidNabi: 'Maulid Nabi - Kelahiran Rasulullah SAW',
  },
} as const;

/**
 * Dua collection for various occasions
 */
export const DUA_COLLECTION = {
  beforePrayer: {
    arabic: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي وَنِيَّتِي فِي هَذِهِ الصَّلَاةِ',
    transliteration: 'Allahumma ashlih li dini wa niyyati fi hadhihi as-salah',
    translation: 'Ya Allah, perbaikilah agama dan niatku dalam sholat ini',
  },
  afterWudu: {
    arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: 'Asyhadu an la ilaha illallahu wahdahu la syarika lah, wa asyhadu anna Muhammadan \'abduhu wa rasuluh',
    translation: 'Aku bersaksi bahwa tidak ada Tuhan selain Allah yang Esa, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya',
  },
  enteringMasjid: {
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Allahumma aftah li abwaba rahmatik',
    translation: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu',
  },
  leavingMasjid: {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ',
    transliteration: 'Allahumma inni as\'aluka min fadhlika wa rahmatik',
    translation: 'Ya Allah, sesungguhnya aku memohon kepada-Mu dari karunia dan rahmat-Mu',
  },
} as const;

/**
 * Common mistakes in prayer (to avoid)
 */
export const COMMON_PRAYER_MISTAKES = {
  intention: [
    'Mengucapkan niat dengan suara keras',
    'Niat yang tidak ikhlas karena Allah',
    'Tidak sadar akan tujuan sholat',
  ],
  recitation: [
    'Membaca terlalu cepat tanpa makna',
    'Tidak memahami arti bacaan',
    'Suara terlalu keras mengganggu orang lain',
  ],
  movement: [
    'Tergesa-gesa dalam gerakan',
    'Tidak sempurna rukuk dan sujud',
    'Tidak tuma\'ninah (tenang) dalam setiap posisi',
  ],
  focus: [
    'Pikiran melayang ke hal duniawi',
    'Tidak fokus pada Allah',
    'Mudah terganggu lingkungan sekitar',
  ],
} as const;

/**
 * Benefits of Khusyu prayer
 */
export const KHUSYU_BENEFITS = {
  spiritual: [
    'Mendekatkan diri kepada Allah SWT',
    'Merasakan ketenangan jiwa',
    'Meningkatkan kualitas iman',
    'Membersihkan hati dari dosa',
  ],
  psychological: [
    'Mengurangi stress dan kecemasan',
    'Meningkatkan focus dan konsentrasi',
    'Memberikan ketenangan batin',
    'Melatih kesabaran dan keikhlasan',
  ],
  behavioral: [
    'Mencegah perbuatan keji dan mungkar',
    'Membentuk akhlak yang baik',
    'Meningkatkan kedisiplinan',
    'Mengembangkan empati dan kasih sayang',
  ],
  social: [
    'Memperbaiki hubungan dengan sesama',
    'Meningkatkan rasa syukur',
    'Mengembangkan sikap rendah hati',
    'Memperkuat ikatan persaudaraan',
  ],
} as const;

export default {
  ISLAMIC_PHRASES,
  QURANIC_VERSES,
  HADITH_COLLECTION,
  SCHOLARS_QUOTES,
  ASMAUL_HUSNA_PRAYER,
  PRAYER_TIMES_ARABIC,
  ISLAMIC_CALENDAR,
  DUA_COLLECTION,
  COMMON_PRAYER_MISTAKES,
  KHUSYU_BENEFITS,
};
