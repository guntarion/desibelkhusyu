# RENCANA AWAL DESIBEL KHUSYU'

Rencana ini akan menjadi panduan strategis dan teknis, mulai dari konsep, arsitektur konten, hingga usulan implementasi, dengan tujuan menciptakan aplikasi yang fungsional, menarik, dan setia pada esensi buku "Tiga Langkah Mudah Menuju Sholat Khusyu'".

***

### **Rencana Proyek Aplikasi Web: Desibel Khusyu**

#### **1. Konsep dan Tujuan Aplikasi**

* **Nama Aplikasi:** **Desibel Khusyu** (diambil dari nama repositori yang Anda sediakan, ini singkat, modern, dan langsung merujuk pada inti metode).
* **Visi:** Menjadi panduan digital yang praktis, modern, dan menenangkan bagi umat Muslim yang ingin meningkatkan kualitas sholat mereka dari sekadar rutinitas menjadi sebuah dialog yang khusyuk dengan Allah SWT.
* **Tujuan Utama:**
    1.  [cite_start]Memperkenalkan **Metode 30 Desibel Plus** sebagai pendekatan yang mudah diakses untuk mencapai *khusyu'*. [cite: 7]
    2.  Menyajikan esensi dari buku secara ringkas dan terstruktur, fokus pada aspek praktis.
    3.  [cite_start]Menyediakan alat bantu visual (ilustrasi) dan audio (rekaman bacaan) untuk mempermudah pemahaman dan praktik. [cite: 389, 408]
* [cite_start]**Target Pengguna:** Muslim urban dan modern yang akrab dengan teknologi, yang merasakan tantangan menjaga fokus dalam sholat di tengah kesibukan. [cite: 5]
* **Prinsip Desain:**
    * **Mobile-First:** Tampilan dan interaksi dioptimalkan untuk perangkat seluler.
    * **Minimalis & Tenang (Calm UI):** Menggunakan palet warna yang lembut (seperti yang didefinisikan dalam `tailwind.config.js`), ruang kosong yang cukup, dan tipografi yang mudah dibaca (`Geist Sans` & `Mono` dari `layout.tsx` sudah sangat baik).
    * **Intuitif:** Alur navigasi sederhana dan jelas, tanpa memerlukan kurva belajar yang rumit.

---

#### **2. Arsitektur Konten dan Struktur Aplikasi**

Aplikasi akan terdiri dari beberapa halaman atau bagian utama yang dirancang untuk mengarahkan pengguna secara bertahap, dari rasa penasaran hingga pemahaman dan praktik.

##### **A. Halaman Utama / Landing Page (`/`)**

Halaman ini adalah gerbang utama. Tujuannya bukan untuk menyajikan semua informasi, melainkan untuk **membangkitkan ketertarikan** dan empati, lalu mengarahkan pengguna untuk memulai panduan.

* **Hero Section:**
    * **Headline Utama:** Teks besar yang provokatif namun relevan, contoh: *"Sholat Terasa Seperti Rutinitas? Temukan Kembali Dialogmu Dengan-Nya."*
    * **Sub-headline:** Penjelasan singkat yang menawarkan solusi: *"Sebuah panduan praktis untuk sholat yang lebih khusyu' dan menenangkan jiwa dengan Metode 30 Desibel Plus."*
    * **Visual:** Latar belakang video atau gambar abstrak yang bergerak perlahan (misalnya, riak air, partikel cahaya lembut, atau kaligrafi modern) untuk menciptakan suasana tenang. Hindari gambar orang agar lebih universal.
    * **Call to Action (CTA) Utama:** Sebuah tombol menonjol dengan teks seperti **"Mulai Panduan Khusyu'"** atau **"Pelajari Metodenya"**.

* **Bagian "Masalah" (The Problem):**
    * Menyentuh "rasa sakit" pengguna. [cite_start]Contoh narasi: *"Di tengah dunia yang serba cepat, seringkali pikiran kita melayang saat sholat. Bacaan menjadi hafalan tanpa makna, dan koneksi terasa jauh. Anda tidak sendiri."* [cite: 5]

* **Bagian "Solusi" (The Solution): Metode 30 Desibel Plus**
    * Memperkenalkan metode ini sebagai inti dari aplikasi.
    * [cite_start]Gunakan visualisasi interaktif dari infografik di **halaman 77** buku. [cite: 340, 341] Saat pengguna scroll, setiap langkah (1-5) dapat muncul dengan animasi sederhana.
        1.  **Membaca Lirih (±30 dB):** "Mendengar bisikan diri sendiri."
        2.  **Telinga Mendengar Aktif:** "Fokus pada suara yang diucapkan."
        3.  **Sinkronisasi Otak:** "Menghubungkan suara dengan makna."
        4.  **Pesan ke Hati:** "Mengalirkan pemahaman ke perasaan."
        5.  **Sinkronisasi Gerakan:** "Menyelaraskan raga dan jiwa."
    * Ini adalah bagian paling unik dari buku, jadi harus ditonjolkan.

* **Bagian Testimoni Semu / Quote:**
    * Kutipan inspiratif dari buku atau dari ulama yang relevan tentang pentingnya *khusyu'*. Contoh: *"'Sungguh beruntung orang-orang beriman, (yaitu) orang-orang yang khusyu' dalam sholatnya.' [cite_start](QS. Al-Mu'minun: 1-2)"* [cite: 57]

* **Footer:**
    * [cite_start]Informasi singkat tentang buku: "Aplikasi ini diadaptasi dari buku 'Tiga Langkah Mudah Menuju Sholat Khusyu'' oleh Iwan Muhajirin." [cite: 1]
    * Link (jika ada) untuk membeli buku atau ke profil penulis.
    * Kredit untuk pengembang.

##### **B. Halaman Panduan (`/panduan`)**

Ini adalah halaman inti tempat semua materi disajikan. Untuk menjaga kesederhanaan dan pengalaman mobile yang baik, kita akan menggunakan **struktur Tabs** atau **Accordion** daripada banyak halaman terpisah.

**Struktur Konten di `/panduan`:**

**Tab 1: Persiapan - Kunci Pembuka Pintu Khusyu'**
* [cite_start]Ringkasan dari **Bab 2**[cite: 96], fokus pada *mengapa* ini penting.
* **Accordion 1: Menyempurnakan Wudhu:**
    * [cite_start]Bukan sekadar membersihkan, tapi "menghapus dosa-dosa kecil dengan kesadaran." [cite: 105, 106, 109]
* **Accordion 2: Menyiapkan Tempat & Pakaian:**
    * [cite_start]Bentuk penghormatan: "Berpakaianlah yang terbaik saat bertemu dengan Yang Maha Indah." [cite: 122, 127]

**Tab 2: Tiga Langkah Inti**
* [cite_start]Ringkasan dari **Bab 3** dan langkah-langkah utama. [cite: 164]
* **Langkah 1: Menata Niat:**
    * [cite_start]"Pondasi setiap amal. Luruskan hanya untuk Allah, bukan sekadar kebiasaan." [cite: 174, 191]
* **Langkah 2: Menghayati Makna Bacaan:**
    * [cite_start]"Mengubah lafaz yang diucapkan menjadi dialog yang dipahami." [cite: 239]
* **Langkah 3: Teknik 30 Desibel Plus:**
    * [cite_start]Penjelasan lebih detail tentang teknik membaca lirih dan *mindfulness* (kesadaran penuh). [cite: 297, 313]

**Tab 3: Panduan Praktik Sholat (Gerakan demi Gerakan)**
* [cite_start]Ini adalah bagian paling interaktif, mengadaptasi **Bab 4**. [cite: 389]
* Setiap gerakan sholat (Takbiratul Ihram, Rukuk, Sujud, dst.) akan ditampilkan sebagai *card* atau item dalam daftar yang bisa di-klik untuk melihat detailnya.

    * **Struktur Detail per Gerakan (Contoh: Sujud):**
        1.  [cite_start]**Judul:** Sujud - Momen Terdekat dengan Rabb. [cite: 462]
        2.  [cite_start]**Ilustrasi:** Gambar posisi sujud yang benar. [cite: 453]
        3.  **Audio Player:** Tombol play untuk mendengarkan bacaan *Subhaana Rabbiyal A'laa*. Audio direkam dengan suara lirih dan tenang.
        4.  **Bacaan Lengkap:**
            * Teks Arab: `سُبْحَانَ رَبِّيَ الْأَعْلَى`
            * Transliterasi: *Subhaana Rabbiyal A'laa*
            * [cite_start]Terjemahan: "Maha Suci Tuhanku Yang Maha Tinggi." [cite: 460]
        5.  **Panduan Praktik (dalam Accordion/Collapsible):**
            * [cite_start]**Fisik:** "Turun dengan tenang, pastikan 7 anggota sujud menyentuh lantai: dahi & hidung, dua telapak tangan, dua lutut, dan dua ujung jari kaki." [cite: 456]
            * [cite_start]**Mindfulness (Kesadaran Hati):** "Hadirkan dalam hati: 'Ya Allah, di sinilah posisi tertinggi seorang hamba—saat ia merendahkan dirinya sepenuhnya di hadapan-Mu.'" [cite: 459]

---

#### **3. Usulan Teknis**

Berdasarkan file yang Anda berikan, berikut adalah usulan teknis yang selaras.

* **Teknologi:**
    * **Framework:** Next.js 15+ (App Router) dengan Turbopack.
    * **Bahasa:** TypeScript.
    * **Styling:** Tailwind CSS.
    * **UI Components:** **shadcn/ui** sangat direkomendasikan. Kita akan butuh: `Button`, `Card`, `Tabs`, `Accordion`, `Tooltip`.
    * **Icons:** `lucide-react` (sudah ada di `package.json`).
    * **Deployment:** Vercel (sesuai `README.md`).

* **Struktur Folder:**

    ```
    /
    ├── src/
    │   ├── app/
    │   │   ├── page.tsx             # Halaman Utama (Landing Page)
    │   │   ├── panduan/
    │   │   │   └── page.tsx         # Halaman Panduan Inti (dengan Tabs)
    │   │   ├── layout.tsx           # Layout utama
    │   │   └── globals.css          # Global styles
    │   │
    │   ├── components/
    │   │   ├── ui/                  # Komponen dari shadcn/ui
    │   │   ├── AudioPlayer.tsx      # Komponen audio player kustom
    │   │   ├── PrayerStepCard.tsx   # Card untuk setiap gerakan sholat
    │   │   ├── Navbar.tsx           # Navigasi (opsional, bisa sangat simpel)
    │   │   └── Footer.tsx           # Footer aplikasi
    │   │
    │   ├── lib/
    │   │   ├── utils.ts             # Fungsi utilitas (cn)
    │   │   └── prayer-data.ts       # === PENTING: Semua data konten di sini ===
    │
    ├── public/
    │   ├── images/
    │   │   ├── takbir.png
    │   │   ├── rukuk.png
    │   │   ├── sujud.png
    │   │   └── ... (semua ilustrasi)
    │   └── audio/
    │       ├── al-fatihah.mp3
    │       ├── rukuk.mp3
    │       ├── sujud.mp3
    │       └── ... (semua rekaman bacaan)
    │
    ├── package.json
    └── tailwind.config.js
    ```

* **File `prayer-data.ts`:**
    * Karena tidak ada database, semua konten akan disimpan dalam sebuah file TypeScript sebagai array of objects. Ini memisahkan data dari logika tampilan dan membuat pengelolaan konten menjadi mudah.

    ```typescript
    // src/lib/prayer-data.ts

    export interface PrayerStep {
      id: string;
      title: string;
      subtitle: string;
      illustrationUrl: string;
      audioUrl: string;
      recitation: {
        arabic: string;
        latin: string;
        translation: string;
      };
      guidance: {
        physical: string;
        mindfulness: string;
      };
    }

    export const prayerSteps: PrayerStep[] = [
      {
        id: 'takbir',
        title: 'Takbiratul Ihram',
        subtitle: 'Gerbang Memasuki Hadirat Allah',
        illustrationUrl: '/images/takbir.png',
        audioUrl: '/audio/takbir.mp3',
        recitation: {
          arabic: 'اللَّهُ أَكْبَرُ',
          latin: 'Allahu Akbar',
          translation: 'Allah Maha Besar.'
        },
        guidance: {
          physical: 'Angkat kedua tangan sejajar pundak atau telinga. Ucapkan takbir, lalu lipat tangan di dada.',
          mindfulness: 'Niatkan dalam hati seolah-olah Anda "melempar" semua urusan dunia ke belakang punggung.'
        }
      },
      // ... objek untuk Rukuk, Sujud, dst.
    ];
    ```

---

#### **4. Konten Tambahan (Usulan di Luar Buku)**

* **Audio Profesional:** Rekaman audio harus sangat jernih, diucapkan dengan tartil (tidak terburu-buru), dan dengan volume yang benar-benar "lirih" untuk mencontohkan metode 30 desibel.
* **Mode Gelap (Dark Mode):** Sangat penting untuk pengalaman yang menenangkan, terutama saat digunakan di malam hari. Konfigurasi Tailwind CSS Anda sudah mendukung ini.
* [cite_start]**Halaman "Tentang Metode Ini":** Sebuah halaman singkat yang menjelaskan filosofi di balik aplikasi dan memberikan kredit penuh kepada penulis buku, Iwan Muhajirin. [cite: 50] Ini membangun kepercayaan dan menghargai sumber.
* [cite_start]**Checklist Interaktif (Opsional, Tanpa Simpan):** Di akhir panduan praktik, bisa ditampilkan sebuah checklist sederhana berdasarkan **Bab 5** [cite: 546] yang bisa dicentang pengguna untuk refleksi diri. Status checklist akan hilang saat halaman di-refresh (sesuai syarat "tanpa simpan"), namun memberikan rasa pencapaian sesaat.
* **Animasi Halus:** Gunakan `tailwindcss-animate` untuk transisi yang lembut pada saat membuka accordion atau berpindah tab, untuk memperkuat nuansa tenang.

Dengan rencana ini, aplikasi **Desibel Khusyu** tidak hanya menjadi versi digital dari buku, tetapi sebuah pengalaman terkurasi yang dirancang khusus untuk platform web modern, dengan tujuan utama membantu pengguna mencapai sholat yang lebih bermakna.