export interface TimelinePhase {
  phase: string
  description: string
}

export const timeline: TimelinePhase[] = [
  {
    phase: 'Dasar Web',
    description: 'HTML, CSS, JavaScript murni — proyek latihan & tugas kelas.',
  },
  {
    phase: 'Arsitektur',
    description:
      'Belajar merancang struktur program: separation of concern, routing, state, services.',
  },
  {
    phase: 'SPA Vanilla',
    description:
      'Edquest — aplikasi satu halaman modular tanpa framework: ES Modules + hash routing.',
  },
  {
    phase: 'Framework Vue',
    description: 'webkelas — Vue 3 + Vite + vue-router.',
  },
  {
    phase: 'IoT / C++',
    description: 'S.A.G.A & pakan lele otomatis — ESP32/Arduino, servo, Blynk.',
  },
]