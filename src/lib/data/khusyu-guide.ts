// src/lib/data/khusyu-guide.ts

/**
 * Mendefinisikan struktur untuk setiap langkah dalam panduan sholat khusyu'.
 */
export interface PrayerStep {
  id: string;
  title: string;
  subtitle?: string;
  illustrationUrl: string;
  audioUrl: string;
  recitations: Array<{
    title?: string;
    arabic: string;
    latin: string;
    translation: string;
    // Kolom tambahan untuk jawaban Allah dari Hadits Qudsi, khusus untuk Al-Fatihah
    responseFromAllah?: string;
  }>;
  guidance: {
    physical: string[];
    mindfulness: string[];
  };
  focusTips: string[];
}

/**
 * Konten panduan praktik sholat berdasarkan Bab 4 dari buku
 * "Tiga Langkah Mudah Menuju Sholat Khusyu'".
 * * Catatan: URL Ilustrasi dan Audio menggunakan path absolut dari folder /public
 */
export const khusyuGuide: PrayerStep[] = [
  {
    id: 'niat',
    title: 'Niat Sholat',
    subtitle: 'Fondasi Seluruh Ibadah',
    illustrationUrl: '/images/guide/standing.png',
    audioUrl: '', // Niat tidak dilafazkan, hanya dalam hati
    recitations: [
      {
        title: 'Contoh Niat (Dalam Hati)',
        arabic: `نَوَيْتُ أَنْ أُصَلِّيَ فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مَأْمُومًا لِلهِ تَعَالَى`,
        latin: `Nawaitu an ushalliya fardhaṣ-ṣubhi rak'ataini ma'mūman lillāhi ta'ālā.`,
        translation: `Aku berniat sholat fardhu Subuh dua rakaat sebagai makmum karena Allah Ta'ala.`,
      },
    ],
    guidance: {
      physical: [
        'Berdiri tenang dan stabil, kedua kaki sejajar, bahu rileks.',
        'Jangan bergerak atau menengok ke kanan-kiri.',
        'Pandangan lurus ke arah tempat sujud, wajah tenang.',
      ],
      mindfulness: [
        'Hadirkan sepenuh hati bahwa Anda akan melakukan ibadah sholat karena Allah semata.',
        'Sadari jenis sholat yang akan dilakukan: waktunya, jumlah rakaat, dan posisi (berjamaah atau sendiri).',
        'Lepaskan semua pikiran dari urusan dunia. Ini adalah momen awal menyambung hubungan dengan Allah.',
      ],
    },
    focusTips: [
      'Ambil jeda 2-3 detik sebelum takbir untuk menenangkan hati.',
      'Rasakan bahwa Anda akan menghadap langsung kepada Allah.',
      'Kuatkan niat sebagai fondasi khusyu dalam seluruh sholat.',
    ],
  },
  {
    id: 'takbir',
    title: 'Gerakan 1: Takbiratul Ihram',
    subtitle: 'Gerbang Memasuki Sholat',
    illustrationUrl: '/images/guide/takbir.png',
    audioUrl: '/audio/guide/takbir.mp3',
    recitations: [
      {
        arabic: 'اللَّهُ أَكْبَرُ',
        latin: 'Allahu Akbar',
        translation: 'Allah Maha Besar.',
      },
    ],
    guidance: {
      physical: [
        'Angkat kedua tangan sejajar dengan pundak atau daun telinga, telapak tangan menghadap kiblat.',
        'Setelah takbir, lipat tangan di dada: tangan kanan di atas tangan kiri.',
        'Arahkan pandangan ke tempat sujud.',
      ],
      mindfulness: [
        'Hadirkan kesadaran penuh bahwa saat ini Anda sedang memutuskan diri dari dunia dan menghadap Allah sepenuhnya.',
        'Saat mengangkat tangan, niatkan seakan membuang seluruh urusan dunia ke belakang punggung Anda.',
        'Rasakan keagungan Allah saat mengucapkan "Allahu Akbar".',
      ],
    },
    focusTips: [
      'Tarik nafas perlahan sebelum mengangkat tangan.',
      'Saat membaca "Allahu Akbar", hadirkan di hati: "Aku mengagungkan Allah, bukan sekadar berbicara."',
      'Berhenti sejenak setelah takbir untuk memastikan hati sudah hadir sebelum melanjutkan ke bacaan berikutnya.',
    ],
  },
    {
    id: 'iftitah',
    title: 'Doa Iftitah',
    subtitle: 'Doa Pembuka Komunikasi',
    illustrationUrl: '/images/guide/sedekap.png',
    audioUrl: '/audio/guide/iftitah-allahumma-baid.mp3',
    recitations: [
      {
        title: 'Pilihan 1: Allahumma Baa\'id',
        arabic: `اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ. اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ. اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ.`,
        latin: `Allahumma baa'id baynii wa bayna khathaayaaya kamaa baa'adta baynal-masyriqi wal-maghrib. Allahumma naqqinii min khathaayaaya kamaa yunaqqats-tsawbul-abyadhu minad-danas. Allahummaghsilnii min khathaayaaya bil-maai wats-tsalji wal-barad.`,
        translation: `Ya Allah, jauhkanlah antara aku dan kesalahan-kesalahanku sebagaimana Engkau telah menjauhkan antara timur dan barat. Ya Allah, bersihkanlah aku dari kesalahan-kesalahanku sebagaimana kain putih dibersihkan dari kotoran. Ya Allah, cucilah kesalahanku dengan air, salju, dan embun.`,
      },
      {
        title: 'Pilihan 2: Inni Wajjahtu',
        arabic: `إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ. إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ.`,
        latin: `Innii wajjahtu wajhiya lilladzii fatharas-samaawaati wal-ardha haniifan wa maa ana minal-musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil-'aalamiin, laa syariika lahu wa bidzaalika umirtu wa ana minal-muslimiin.`,
        translation: `Sesungguhnya aku hadapkan wajahku kepada Dzat yang menciptakan langit dan bumi dengan lurus dan aku bukan termasuk orang-orang musyrik. Sesungguhnya sholatku, ibadahku, hidupku, dan matiku hanyalah untuk Allah, Tuhan semesta alam. Tiada sekutu bagi-Nya, dan dengan itu aku diperintahkan, dan aku termasuk orang-orang Muslim.`,
      },
    ],
    guidance: {
      physical: ['Posisi masih berdiri dengan tangan bersedekap di atas dada.', 'Tubuh tenang, tidak banyak bergerak, dan pandangan tetap fokus ke tempat sujud.'],
      mindfulness: ['Sadari bahwa Anda sedang memulai dialog dengan memuji Allah dan memohon penyucian diri sebelum meminta apa pun.', 'Hayati setiap kalimat sebagai pengakuan dan permohonan yang tulus.'],
    },
    focusTips: [
      'Baca dengan lirih (sekitar 30 dB), cukup terdengar oleh telinga sendiri.',
      'Jangan terburu-buru melanjutkan ke Al-Fatihah, resapi permohonan ampunan dan pembersihan diri ini.',
      'Hayati setiap lafaz sebagai permohonan untuk perbaikan diri di hadapan Allah.',
    ],
  },
  {
    id: 'al-fatihah',
    title: 'Membaca Surat Al-Fatihah',
    subtitle: 'Dialog Interaktif dengan Allah',
    illustrationUrl: '/images/guide/sedekap.png',
    audioUrl: '/audio/guide/al-fatihah.mp3',
    recitations: [
      {
        title: 'Ta\'awuz (Perlindungan)',
        arabic: 'أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        latin: 'A\'uudzu billaahi minasy-syaithaanir-rajiim',
        translation: 'Aku berlindung kepada Allah dari godaan setan yang terkutuk.',
      },
      { arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Bismillaahir-rahmaanir-rahiim', translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.', responseFromAllah: 'Pada ayat ini, Allah memulai dengan Asma-Nya yang Agung.' },
      { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', latin: 'Al-hamdu lillaahi rabbil-\'aalamiin', translation: 'Segala puji bagi Allah, Tuhan seluruh alam.', responseFromAllah: 'Allah menjawab: "Hamba-Ku telah memuji-Ku."' },
      { arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', latin: 'Ar-rahmaanir-rahiim', translation: 'Yang Maha Pengasih, Maha Penyayang.', responseFromAllah: 'Allah menjawab: "Hamba-Ku telah menyanjung-Ku."' },
      { arabic: 'مَالِكِ يَوْمِ الدِّينِ', latin: 'Maaliki yawmid-diin', translation: 'Pemilik hari pembalasan.', responseFromAllah: 'Allah menjawab: "Hamba-Ku telah mengagungkan-Ku."' },
      { arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', latin: 'Iyyaaka na\'budu wa iyyaaka nasta\'iin', translation: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.', responseFromAllah: 'Allah menjawab: "Ini antara Aku dan hamba-Ku, dan bagi hamba-Ku apa yang ia minta."' },
      { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', latin: 'Ihdinash-shiraathal-mustaqiim', translation: 'Tunjukilah kami jalan yang lurus.', responseFromAllah: 'Allah menjawab: "Ini untuk hamba-Ku, dan bagi hamba-Ku apa yang ia minta."' },
      { arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', latin: 'Shiraathal-ladziina an\'amta \'alayhim ghayril-maghdhuubi \'alayhim wa ladh-dhaalliin', translation: '(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.', responseFromAllah: 'Allah menjawab: "Ini untuk hamba-Ku, dan bagi hamba-Ku apa yang ia minta."' },
    ],
    guidance: { physical: ['Posisi tubuh tetap rileks, tidak kaku, dan tidak goyah.', 'Ucapkan dengan jelas makhraj huruf sesuai kemampuan.'], mindfulness: ['Hadirkan rasa bahwa kita sedang berdialog langsung dengan Allah.', 'Bayangkan Allah mendengar dan menjawab setiap lafaz yang kita ucapkan, sebagaimana dijelaskan dalam Hadits Qudsi.'] },
    focusTips: ['Baca satu ayat, berhenti sejenak, lalu hayati maknanya dan jawaban dari Allah.', 'Saat membaca "Iyyaaka na\'budu wa iyyaaka nasta\'iin", tekankan rasa bergantung penuh hanya kepada Allah.', 'Jangan terburu-buru menyambung bacaan tanpa kesadaran.']
  },
  {
    id: 'surat-pendek',
    title: 'Membaca Surat Pendek',
    subtitle: 'Melengkapi Bacaan dalam Rakaat',
    illustrationUrl: '/images/guide/sedekap.png',
    audioUrl: '/audio/guide/al-ikhlas.mp3',
    recitations: [
      {
        title: 'Contoh: Surat Al-Ikhlas',
        arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ (١) اللَّهُ الصَّمَدُ (٢) لَمْ يَلِدْ وَلَمْ يُولَدْ (٣) وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ (٤)`,
        latin: `Qul huwallahu ahad. Allahush-shamad. Lam yalid wa lam yuulad. Wa lam yakun lahu kufuwan ahad.`,
        translation: `Katakanlah: "Dia-lah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tiada beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia."`
      }
    ],
    guidance: {
      physical: ['Posisi tetap berdiri tegak dengan tangan bersedekap.', 'Bacaan dengan suara lirih sekitar 30dB.'],
      mindfulness: ['Hayati keesaan Allah yang mutlak dalam setiap ayat.', 'Rasakan keagungan Allah yang tidak memiliki kesamaan dengan makhluk apapun.']
    },
    focusTips: ['Pilih surat pendek yang sudah hafal dengan baik.', 'Baca dengan penuh penghayatan, bukan sekedar hafalan.', 'Resapi makna setiap ayat sebagai pengakuan keesaan Allah.']
  },
  {
    id: 'rukuk',
    title: 'Gerakan 2: Rukuk',
    subtitle: 'Menunduk Mengagungkan-Nya',
    illustrationUrl: '/images/guide/rukuk.png',
    audioUrl: '/audio/guide/rukuk.mp3',
    recitations: [{ arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ', latin: `Subhaana Rabbiyal 'Azhiim`, translation: 'Maha Suci Tuhanku Yang Maha Agung. (Dibaca minimal 3 kali)' }],
    guidance: { physical: ['Badan membungkuk sempurna hingga punggung rata, seperti meja.', 'Kepala sejajar dengan punggung, pandangan ke tempat sujud.', 'Kedua tangan menggenggam lutut dengan jari-jari direnggangkan.'], mindfulness: ['Sadari bahwa kita sedang mengagungkan Allah Yang Maha Agung.', 'Rasakan kerendahan diri kita di hadapan kebesaran-Nya.'] },
    focusTips: ['Tarik nafas perlahan sebelum membaca, lalu hembuskan sambil membaca lirih.', 'Ulangi bacaan dengan penuh kesadaran, bukan hitungan mekanis.']
  },
  {
    id: 'itidal',
    title: `Gerakan 3: I'tidal`,
    subtitle: 'Bangkit dengan Penuh Pujian',
    illustrationUrl: '/images/guide/standing.png',
    audioUrl: '/audio/guide/itidal.mp3',
    recitations: [
        { title: 'Saat Bangkit dari Rukuk', arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ', latin: `Sami'allaahu liman hamidah`, translation: 'Allah Maha Mendengar orang yang memuji-Nya.' },
        { title: 'Setelah Berdiri Tegak', arabic: 'رَبَّنَا وَلَكَ الْحَمْدُ', latin: `Rabbanaa wa lakal-hamd`, translation: 'Wahai Rabb kami, bagi-Mu segala pujian.' }
    ],
    guidance: { physical: ['Bangkit dari rukuk dengan perlahan dan tenang.', 'Berdiri tegak sempurna, pastikan tubuh stabil sebelum membaca.', 'Tangan lurus di samping badan.'], mindfulness: ['Rasakan syukur kepada Allah karena dapat berdiri kembali dengan kekuatan dari-Nya.', 'Hadirkan rasa hormat dan pengagungan dalam sikap berdiri tegak ini.'] },
    focusTips: ['Setelah bangkit dari rukuk, diam sesaat sebelum membaca.', 'Hayati rasa syukur karena bisa kembali berdiri untuk beribadah.', 'Ucapkan "Rabbanaa wa lakal-hamd" dengan hati yang penuh pujian.']
  },
  {
    id: 'sujud',
    title: 'Gerakan 4: Sujud',
    subtitle: 'Puncak Kedekatan Hamba',
    illustrationUrl: '/images/guide/sujud.png',
    audioUrl: '/audio/guide/sujud.mp3',
    recitations: [{ arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى', latin: `Subhaana Rabbiyal A'laa`, translation: 'Maha Suci Tuhanku Yang Maha Tinggi. (Dibaca minimal 3 kali)' }],
    guidance: { physical: ['Turun sujud dengan tenang.', 'Sentuhkan tujuh anggota sujud ke lantai: dahi dan hidung, dua telapak tangan, dua lutut, dan dua ujung jari kaki.', 'Ujung jari-jari kaki ditekuk menghadap kiblat.'], mindfulness: ['Sadari bahwa sujud adalah saat paling dekat dengan Allah.', 'Rasakan kerendahan total di hadapan Allah.', 'Hadirkan dalam hati: "Aku sujud karena Engkau, Ya Allah. Aku hina, Engkau Maha Mulia."'] },
    focusTips: ['Rasakan rendahnya diri di hadapan kebesaran Allah.', 'Perlambat bacaan, jangan tergesa-gesa.', 'Nikmati sujud, karena ini adalah momen terdekat seorang hamba dengan Rabb-nya.']
  },
  {
    id: 'duduk-antara-sujud',
    title: 'Gerakan 5: Duduk di Antara Dua Sujud',
    subtitle: 'Jeda untuk Memohon Segalanya',
    illustrationUrl: '/images/guide/duduk.png',
    audioUrl: '/audio/guide/duduk-antara-sujud.mp3',
    recitations: [{ arabic: 'رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاجْبُرْنِي، وَارْفَعْنِي، وَارْزُقْنِي، وَاهْدِنِي، وَعَافِنِي، وَاعْفُ عَنِّي', latin: `Rabbighfir lii, warhamnii, wajburnii, warfa'nii, warzuqnii, wahdinii, wa 'aafinii, wa'fu 'annii.`, translation: 'Ya Tuhanku, ampunilah aku, rahmatilah aku, perbaikilah keadaanku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, sehatkanlah aku, dan maafkanlah aku.' }],
    guidance: { physical: ['Bangkit dari sujud dengan perlahan.', 'Duduk dengan cara iftirasy (duduk di atas telapak kaki kiri, sementara telapak kaki kanan ditegakkan).', 'Kedua tangan diletakkan di atas paha dekat lutut.'], mindfulness: ['Rasakan bahwa saat ini kita sedang memohon 8 permintaan agung langsung kepada Allah.', 'Setiap kalimat adalah permohonan keselamatan, rahmat, dan pengampunan untuk dunia dan akhirat.'] },
    focusTips: ['Hayati setiap permohonan satu per satu, jangan sekadar hafalan.', 'Perlambat bacaan agar bisa menghadirkan makna.', 'Sadari bahwa Allah Maha Mendengar, bahkan bisikan hati kita.']
  },
  {
    id: 'sujud-kedua',
    title: 'Gerakan 6: Sujud Kedua',
    subtitle: 'Melengkapi Satu Rakaat dengan Sujud',
    illustrationUrl: '/images/guide/sujud.png',
    audioUrl: '/audio/guide/sujud.mp3',
    recitations: [{ arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى', latin: `Subhaana Rabbiyal A'laa`, translation: 'Maha Suci Tuhanku Yang Maha Tinggi. (Dibaca minimal 3 kali)' }],
    guidance: { physical: ['Posisi sujud yang sama seperti sujud pertama.', 'Pastikan tujuh anggota sujud menyentuh lantai dengan sempurna.', 'Baca tasbih dengan khusyu dan tidak terburu-buru.'], mindfulness: ['Rasakan bahwa ini adalah sujud kedua untuk melengkapi satu rakaat.', 'Manfaatkan momen kedekatan ini untuk bermunajat kepada Allah.', 'Sadari bahwa setelah ini kita akan bangkit untuk rakaat berikutnya atau duduk tasyahhud.'] },
    focusTips: ['Jangan merasa terburu-buru karena ini sujud kedua.', 'Gunakan kesempatan ini untuk berdoa dengan bahasa sendiri setelah tasbih.', 'Rasakan ketenangan dan kedamaian dalam posisi terdekat dengan Allah.']
  },
  {
    id: 'tasyahhud-pertama',
    title: 'Gerakan 7: Tasyahhud Pertama',
    subtitle: 'Duduk Tahiyat di Tengah Sholat',
    illustrationUrl: '/images/guide/tasyahud.png',
    audioUrl: '/audio/guide/tasyahud-pertama.mp3',
    recitations: [
        { title: 'Bacaan Tahiyat', arabic: `التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ`, latin: `At-tahiyyaatu lillaahi wash-shalawaatu wath-thayyibaat, as-salaamu 'alaika ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh, as-salaamu 'alainaa wa 'alaa 'ibaadillaahish-shaalihiin, asyhadu an laa ilaaha illallaah, wa asyhadu anna muhammadan rasuulullaah.`, translation: `Segala kehormatan, keberkahan, dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat, dan berkah Allah tercurah atasmu, wahai Nabi. Keselamatan atas kami dan atas hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.` }
    ],
    guidance: { physical: ['Duduk dengan cara iftirasy (duduk di atas telapak kaki kiri, sementara telapak kaki kanan ditegakkan).', 'Tangan diletakkan di atas paha. Jari telunjuk tangan kanan menunjuk saat membaca syahadat.', 'Setelah selesai tasyahhud, langsung berdiri untuk rakaat berikutnya tanpa salam.'], mindfulness: ['Sadari bahwa ini adalah jeda di tengah sholat untuk menghormati Allah dan Rasul-Nya.', 'Hayati pengakuan keimanan dalam bacaan syahadat.', 'Persiapkan hati untuk melanjutkan rakaat-rakaat berikutnya dengan lebih khusyu.'] },
    focusTips: ['Jangan membaca shalawat dalam tasyahhud pertama, cukup sampai syahadat.', 'Langsung berdiri setelah selesai tanpa berlama-lama.', 'Gunakan moment ini untuk memperbaharui niat dan fokus untuk rakaat selanjutnya.']
  },
  {
    id: 'tasyahhud-akhir',
    title: 'Gerakan 9: Tasyahhud Akhir',
    subtitle: 'Salam Penghormatan & Doa Penutup',
    illustrationUrl: '/images/guide/tasyahud.png',
    audioUrl: '/audio/guide/tasyahud-akhir.mp3',
    recitations: [
        { title: 'Bacaan Tahiyat', arabic: `التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ`, latin: `At-tahiyyaatu lillaahi wash-shalawaatu wath-thayyibaat, as-salaamu 'alaika ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh, as-salaamu 'alainaa wa 'alaa 'ibaadillaahish-shaalihiin, asyhadu an laa ilaaha illallaah, wa asyhadu anna muhammadan rasuulullaah.`, translation: `Segala kehormatan, keberkahan, dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat, dan berkah Allah tercurah atasmu, wahai Nabi. Keselamatan atas kami dan atas hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.` },
        { title: 'Bacaan Shalawat Nabi', arabic: `اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ`, latin: `Allahumma ṣalli ‘alā Muhammad wa ‘alā āli Muhammad, kamā ṣallayta ‘alā Ibrāhīm wa ‘alā āli Ibrāhīm, wabārik ‘alā Muhammad wa ‘alā āli Muhammad, kamā bārakta ‘alā Ibrāhīm wa ‘alā āli Ibrāhīm, innaka ḥamīdun majīd.`, translation: `Ya Allah, limpahkanlah salawat kepada Muhammad dan kepada keluarga Muhammad, sebagaimana Engkau telah melimpahkan salawat kepada Ibrahim dan keluarganya. Dan berikanlah berkah kepada Muhammad dan keluarganya, sebagaimana Engkau telah memberikan berkah kepada Ibrahim dan keluarganya. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.` },
        { title: 'Doa Perlindungan Sebelum Salam', arabic: `اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ`, latin: `Allahumma innii a'uudzubika min 'adzaabil qabri, wa min 'adzaabi jahannam, wa min fitnatil mahyaa wal mamaat, wa min syarri fitnatil masiihid-dajjaal.`, translation: `Ya Allah, aku berlindung kepada-Mu dari siksa kubur, dari siksa neraka Jahannam, dari fitnah kehidupan dan kematian, dan dari keburukan fitnah Al-Masih Ad-Dajjal.` }
    ],
    guidance: { physical: ['Duduk dengan cara tawarruk (pantat langsung di lantai, kaki kiri diselipkan di bawah betis kanan, dan telapak kaki kanan ditegakkan).', 'Tangan diletakkan di atas paha. Jari telunjuk tangan kanan bisa menunjuk saat membaca syahadat.', 'Pandangan diarahkan ke jari telunjuk atau ke tempat sujud.'], mindfulness: ['Sadari bahwa ini adalah momen perpisahan dalam sholat, diisi dengan penghormatan, shalawat, dan doa perlindungan.', 'Hayati kecintaan kepada Nabi Muhammad ﷺ saat membaca shalawat.', 'Rasakan beratnya permohonan perlindungan dari empat perkara besar di akhir zaman.'] },
    focusTips: ['Bacalah dengan sikap penuh hormat dan lembut.', 'Ketika mengucap "Asyhadu...", hadirkan kesaksian dari lubuk hati, bukan sekadar lisan.', 'Jangan membaca doa perlindungan dengan terburu-buru, rasakan setiap permohonan.']
  },
  {
    id: 'salam',
    title: 'Gerakan 10: Salam',
    subtitle: 'Menutup Sholat, Menebar Kedamaian',
    illustrationUrl: '/images/guide/salam.png',
    audioUrl: '/audio/guide/salam.mp3',
    recitations: [{ arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ', latin: `As-salaamu 'alaikum wa rahmatullaah`, translation: 'Semoga keselamatan dan rahmat Allah tercurah kepadamu.' }],
    guidance: { physical: ['Ucapkan salam sambil menoleh ke kanan hingga pipi terlihat dari belakang.', 'Ucapkan salam kedua sambil menoleh ke kiri (sunnah).', 'Gerakan kepala dilakukan perlahan dan wajar.'], mindfulness: ['Hadirkan niat bahwa dengan salam ini, Anda menyelesaikan ibadah dan menebarkan doa keselamatan kepada malaikat dan sesama muslim di sekitar Anda.', 'Hayati bahwa salam adalah bentuk penyebaran doa kedamaian.'] },
    focusTips: ['Ucapkan salam dengan penuh harapan bahwa Allah menerima seluruh sholat kita.', 'Selesaikan salam dengan suara penuh penghayatan, bukan sekadar formalitas penutup.', 'Ingatkan diri sendiri bahwa sholat telah usai, dan bawalah ketenangan dari sholat ke dalam aktivitas berikutnya.']
  },
];
