export interface SkillCategory {
  title: string
  description?: string
  items?: string[]
}

export const hardSkills: SkillCategory[] = [
  {
    title: 'Web Front-End',
    description: 'Membangun antarmuka web modern & responsif.',
    items: ['HTML', 'CSS', 'JavaScript (ES Modules)', 'Vue 3 + Vite + vue-router'],
  },
  {
    title: 'Arsitektur Front-End',
    description: 'Merancang struktur program yang rapi & terpisah.',
    items: [
      'Separation of concern',
      'Layering core/services/components/features/utils/data',
      'Centralized store',
      'Lazy-load CSS',
    ],
  },
  {
    title: 'Desain UI',
    description: 'Design system berbasis CSS variables.',
    items: ['CSS murni', 'Design system', 'Responsive', 'Neo-brutalism monokrom'],
  },
  {
    title: 'IoT & Sistem',
    description: 'Memrogram sistem mikrokontroler.',
    items: ['C++ (Arduino / ESP32)', 'Blynk', 'Servo MG995'],
  },
  {
    title: 'Dokumentasi',
    description: 'Menulis dokumentasi yang terstruktur & jelas.',
    items: ['README', 'Flow', 'Panduan arsitektur'],
  },
]

export const softSkills: SkillCategory[] = [
  {
    title: 'Komunikasi',
    description: 'Komunikasi dan public speaking yang baik.',
  },
  {
    title: 'Adaptif',
    description: 'Mampu beradaptasi cepat dengan lingkungan baru.',
  },
  {
    title: 'Kepemimpinan',
    description: 'Terbiasa mengkoordinasi dan memimpin tim.',
  },
  {
    title: 'Pemecahan Masalah',
    description: 'Berpikir kritis dalam memecahkan masalah.',
  },
]

export const tools: string[] = [
  'Git & GitHub',
  'Vite',
  'npm / pnpm',
  'Arduino IDE',
  'Google Fonts',
  'Font Awesome',
]