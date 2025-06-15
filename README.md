# Desibel Khusyu
## Panduan Sholat Khusyu dengan Metode 30 Desibel Plus

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-blue.svg)

---

## 📖 Tentang Proyek

**Desibel Khusyu** adalah aplikasi web progressive yang membantu umat Muslim mencapai sholat khusyu menggunakan metode 30 Desibel Plus. Aplikasi ini berdasarkan buku "*Tiga Langkah Mudah menuju Sholat Khusyu' dengan metode 30 desibel plus*" oleh **Iwan Efrulwan Muhajirin**.

### 🎯 Tujuan Utama
- Membantu umat Muslim memahami dan mempraktikkan sholat khusyu
- Menyediakan panduan praktis metode 30 Desibel Plus
- Memberikan assessment untuk mengukur level khusyu
- Menyediakan program training terstruktur selama 3 minggu

---

## 🏗️ Arsitektur Aplikasi

### Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Lucide React
- **Font:** Inter (Google Fonts)
- **State Management:** React Context API
- **Data Storage:** Local Storage (browser)

### Struktur Proyek
```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout dengan Header/Footer
│   ├── page.tsx                 # Landing page
│   ├── teori/                   # Halaman teori khusyu
│   ├── persiapan/              # Halaman persiapan sholat
│   ├── panduan/                # Panduan 13 gerakan sholat
│   ├── latihan/                # Program training 3 minggu
│   └── penilaian/              # Assessment system
│
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Header, Footer, Navigation
│   ├── prayer/                 # Komponen gerakan sholat
│   ├── training/               # Komponen program training
│   ├── assessment/             # Komponen assessment
│   └── shared/                 # Komponen yang dibagi
│
├── lib/
│   ├── types/                  # TypeScript interfaces
│   │   ├── prayer.types.ts     # Types untuk gerakan sholat
│   │   ├── training.types.ts   # Types untuk training system
│   │   └── assessment.types.ts # Types untuk assessment
│   │
│   ├── data/                   # Data dan content
│   │   ├── achievement-levels.ts    # 5 level khusyu
│   │   ├── daily-checklist.ts      # 15 komponen checklist
│   │   ├── training-program.ts     # Program 3 minggu
│   │   └── prayer-steps.ts         # 13 gerakan sholat
│   │
│   ├── constants/              # Konstanta aplikasi
│   │   ├── app.constants.ts    # Konstanta umum
│   │   └── islamic.constants.ts # Konten Islam
│   │
│   └── utils/                  # Utility functions
│
└── styles/
    └── globals.css             # Global styles
```

---

## 🎨 Design System

### Color Palette
- **Primary:** Emerald (Green) - `#10b981` - Melambangkan kedamaian dan spiritualitas
- **Secondary:** Amber (Gold) - `#f59e0b` - Aksen untuk highlight
- **Success:** Green - `#22c55e` - Untuk feedback positif
- **Warning:** Yellow - `#eab308` - Untuk peringatan
- **Error:** Red - `#ef4444` - Untuk error states
- **Neutral:** Stone Gray - Untuk teks dan background

### Typography
- **Font Family:** Inter (Google Fonts)
- **Arabic Text:** Font khusus untuk teks Arab (akan ditambahkan)
- **Hierarchy:** H1-H6 dengan ukuran yang responsif

### Mobile-First Approach
- **Breakpoints:** sm(640px), md(768px), lg(1024px), xl(1280px)
- **Navigation:** Bottom navigation untuk mobile, top navigation untuk desktop
- **Touch-Friendly:** Minimum 44px touch targets
- **Responsive:** Semua komponen responsive dengan grid system

---

## 📱 Fitur Utama

### 1. **Landing Page**
- Hero section dengan value proposition
- Problem statement yang relatable
- Preview metode 3 langkah
- Features overview
- Benefits khusyu
- Call-to-action yang jelas

### 2. **Teori Khusyu** (`/teori`)
- Definisi khusyu menurut Al-Quran dan Hadith
- Urgensi sholat khusyu
- Penyebab kurangnya khusyu
- Dalil-dalil dan rujukan ilmiah

### 3. **Persiapan Sholat** (`/persiapan`)
- Panduan wudhu dengan kesadaran
- Persiapan pakaian dan tempat
- Persiapan hati sebelum sholat
- Tips praktis

### 4. **Panduan Praktik** (`/panduan`)
- 13 gerakan sholat lengkap dengan:
  - Posisi dan ilustrasi
  - Bacaan Arab + transliterasi + terjemahan
  - Teknik 30dB yang benar
  - Panduan mindfulness
  - Tips khusyu untuk setiap gerakan

### 5. **Program Training** (`/latihan`)
- **Minggu 1:** Penataan dan Penguatan Niat
- **Minggu 2:** Pemahaman Makna Bacaan Sholat
- **Minggu 3:** Praktik Bacaan Lembut dan Mindfulness
- Daily checklist 15 komponen
- Progress tracking
- Motivational messages

### 6. **Assessment System** (`/penilaian`)
- 13 grup pertanyaan (Al-Fatihah, Rukuk, Sujud, dll)
- 5-point scale untuk setiap pertanyaan
- Kalkulator otomatis level khusyu:
  - **Level 1:** Ash-Sholah ash-Shuriyyah (Formalitas)
  - **Level 2:** Al-'Adah bil Ghaflah (Kebiasaan)
  - **Level 3:** Al-Hudhur (Kehadiran Jiwa)
  - **Level 4:** Al-Khusyu' al-Mutawassith (Khusyu Menengah)
  - **Level 5:** Al-Khusyu' al-Kaamil (Khusyu Sempurna)

---

## 🔧 Pengembangan

### Prerequisites
```bash
Node.js 18+ 
npm atau yarn
Git
```

### Installation
```bash
# Clone repository
git clone [repository-url]
cd desibelkhusyu

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Development Guidelines

#### 1. **Coding Standards**
- **Language:** TypeScript untuk semua file
- **Naming:** 
  - Files: kebab-case (`prayer-step.tsx`)
  - Components: PascalCase (`PrayerStep`)
  - Functions: camelCase (`getPrayerStep`)
  - Constants: UPPER_SNAKE_CASE (`PRAYER_NAMES`)
- **Comments:** Bahasa Inggris untuk code, detail functionality
- **Content:** Bahasa Indonesia untuk user-facing content

#### 2. **Component Structure**
```typescript
// File header dengan path dan description
// src/components/prayer/PrayerStep.tsx
// Prayer step component for individual prayer movement

'use client'; // Jika perlu client-side

import { ... } from '...';
import { PrayerStep } from '@/lib/types/prayer.types';

interface PrayerStepProps {
  step: PrayerStep;
  // ... other props
}

export default function PrayerStepComponent({ step }: PrayerStepProps) {
  // Component logic
  return (
    // JSX
  );
}
```

#### 3. **Data Management**
- **Local Storage:** Untuk progress dan preferences
- **Context API:** Untuk state management
- **Types:** Strict TypeScript interfaces
- **Validation:** Input validation dengan Zod (jika diperlukan)

#### 4. **Islamic Content Guidelines**
- **Accuracy:** Semua konten Islam harus akurat
- **Sources:** Cantumkan sumber (QS., HR., dll)
- **Respect:** Format yang respectful untuk teks Arab
- **Review:** Konten Islam harus direview oleh ahli

---

## 📚 Data Structure

### Prayer Step Interface
```typescript
interface PrayerStep {
  id: string;
  title: string;
  order: number;
  category: 'persiapan' | 'rakaat' | 'duduk' | 'penutup';
  
  position: {
    name: string;
    description: string;
    illustration: string;
    keyPoints: string[];
  };
  
  recitation: {
    arabic: string;
    transliteration: string;
    translation: string;
    segments?: RecitationSegment[];
  };
  
  technique: {
    physical: string[];
    breathing: string;
    voiceGuidance: string; // 30dB technique
    mindfulnessPoints: string[];
  };
  
  // ... other properties
}
```

### Assessment System
```typescript
interface AssessmentResult {
  overallScore: number; // 0-100
  levelAchieved: KhusyuLevel;
  groupResults: GroupResult[];
  strengths: string[];
  improvementAreas: string[];
  recommendedActions: string[];
}
```

### Training Program
```typescript
interface TrainingWeek {
  week: number; // 1-3
  title: string;
  objective: string;
  dailyTasks: DailyTask[];
  weeklyGoals: string[];
}
```

---

## 🎯 Performance & Optimization

### Performance Targets
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

### Optimization Strategies
- **Next.js Image Optimization:** Untuk semua gambar
- **Code Splitting:** Automatic dengan Next.js App Router
- **Lazy Loading:** Untuk komponen berat
- **Caching:** Browser caching untuk assets
- **Bundle Analysis:** Monitoring bundle size

### Accessibility (a11y)
- **WCAG 2.1 AA Compliance**
- **Keyboard Navigation:** Semua fungsi accessible via keyboard
- **Screen Reader:** Proper ARIA labels
- **Color Contrast:** Minimum 4.5:1 ratio
- **Focus Management:** Clear focus indicators

---

## 🔒 Security & Privacy

### Data Privacy
- **No Personal Data Collection:** Aplikasi tidak mengumpulkan data personal
- **Local Storage Only:** Progress disimpan di browser user
- **No Analytics:** Tidak ada tracking external
- **GDPR Compliant:** Design yang privacy-first

### Security Measures
- **Content Security Policy (CSP)**
- **XSS Protection**
- **HTTPS Only** (production)
- **Secure Headers**

---

## 🚀 Deployment

### Production Checklist
- [ ] Environment variables configured
- [ ] Build optimization verified
- [ ] Performance tested
- [ ] Accessibility audit passed
- [ ] Islamic content reviewed
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility checked

### Deployment Platforms
- **Recommended:** Vercel (optimal Next.js integration)
- **Alternative:** Netlify, AWS Amplify
- **Domain:** Custom domain dengan HTTPS

---

## 🤝 Contributing

### Contribution Guidelines
1. **Islamic Content:** Harus direview oleh ahli agama
2. **Code Quality:** Follow established patterns
3. **Testing:** Test di berbagai device dan browser
4. **Documentation:** Update dokumentasi jika perlu

### Development Workflow
1. Create feature branch
2. Implement feature dengan tests
3. Submit PR dengan description lengkap
4. Code review
5. Islamic content review (jika applicable)
6. Merge after approval

---

## 📞 Support & Contact

### Issues & Bug Reports
- **GitHub Issues:** Untuk bug reports dan feature requests
- **Documentation:** Check README.md dan inline comments
- **Community:** Discussion forum (TBD)

### Maintenance
- **Regular Updates:** Security dan performance
- **Content Updates:** Review periodic konten Islam
- **Feature Additions:** Based on user feedback

---

## 📜 License & Credits

### Credits
- **Original Book:** "Tiga Langkah Mudah menuju Sholat Khusyu' dengan metode 30 desibel plus" oleh Iwan Efrulwan Muhajirin
- **Islamic Content:** Verified dengan sumber-sumber yang shahih
- **Development:** Built with modern web technologies

### License
**Open Source** - Untuk kebaikan umat Muslim worldwide

---

## 🔮 Roadmap

### Phase 1 (Current)
- [x] Core application structure
- [x] Landing page
- [x] Basic layout components
- [ ] All main pages implementation
- [ ] Assessment system
- [ ] Training program

### Phase 2 (Next)
- [ ] Audio integration (30dB samples)
- [ ] Offline capability (PWA)
- [ ] Enhanced animations
- [ ] Advanced progress tracking

### Phase 3 (Future)
- [ ] Community features
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Mobile app (React Native)

---

**Dibuat dengan ❤️ untuk umat Muslim di seluruh dunia**

*"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"*

*"Dan dirikanlah sholat, tunaikanlah zakat, dan rukuklah bersama orang-orang yang rukuk" (QS. Al-Baqarah: 43)*
