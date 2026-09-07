export interface Project {
  name: string
  subtitle?: string
  role: string
  tech?: string[]
  highlight?: string
  repo?: string
}

export const projects: Project[] = [
  {
    name: 'Web Kelas Interaktif',
    subtitle: 'webkelas',
    role: 'Front-end developer',
    tech: ['Vue 3', 'Vite', 'vue-router', 'CSS murni'],
    highlight:
      'Desain neo-brutalism monokrom sebagai identitas visual, mode gelap, pencarian global, lazy-load CSS, arsitektur berjajar rapi.',
    repo: 'https://github.com/Ahmad-daniyal/11pplg2',
  },
  {
    name: 'Edquest',
    subtitle: 'Komunitas Belajar Cerdas',
    role: 'Front-end developer & perancang arsitektur',
    tech: ['Vanilla JS (ES Modules)', 'Hash routing', 'Tailwind CDN + CSS variables', 'localStorage'],
    highlight:
      'Platform belajar digital untuk siswa SMA/SMK: forum diskusi anonim per mapel, study buddy matching, jurnal belajar dengan poin & badge, mode gelap.',
    repo: 'https://github.com/Ahmad-daniyal/web-design-adayuna',
  },
  {
    name: 'Web Forum Edukasi Online',
    role: 'Front-end developer',
    highlight: 'Forum diskusi edukasi online.',
  },
  {
    name: 'Web E-commerce',
    role: 'Front-end developer',
    highlight: 'Website toko online untuk jual-beli produk.',
  },
  {
    name: 'S.A.G.A',
    subtitle: 'Smart Gathering Automated Area',
    role: 'Programmer di balik sistem (tim 4 orang)',
    tech: ['ESP32', 'Servo MG995', 'C++', 'Arduino IDE', 'Blynk via Wi-Fi'],
    highlight:
      'Aula serbaguna cerdas untuk memperingati HUT ke-50 Yadika Pamor: lantai dan panggung bergerak otomatis sesuai mode kegiatan, dikendalikan dari jarak jauh.',
    repo: 'https://github.com/aussenseiter-Vs/S.A.G.A',
  },
  {
    name: 'Pakan Lele Otomatis',
    role: 'Programmer di balik sistem',
    tech: ['ESP32', 'C++', 'Arduino IDE'],
    highlight: 'Alat pemberi pakan lele otomatis berbasis mikrokontroler.',
  },
]