export interface SocialLink {
  label: string
  handle: string
  url: string
}

export const profile = {
  name: 'Ahmad Daniyal',
  nickname: 'Daniyall',
  role: 'Front-end Developer & IoT Programmer',
  email: 'daniyalhamim@gmail.com',
  phone: '+62 812-1493-2213',
  location: 'Soreang, Bandung',
  status: 'Siswa SMK Yadika Soreang',
  classYear: 'Kelas XI PPLG 2',
  major: 'Pengembangan Perangkat Lunak & Gim',
  classRole: 'main character si anti menyerah',
  motto: 'Kalo belum coba, jangan surend.',
  summary:
    'Pengembang web (fokus front-end) sekaligus pemrogram sistem IoT, jurusan PPLG. Tidak hanya menulis kode — memikirkan arsitektur program, dokumentasi, dan pengalaman pengguna. Perpindahan dari web (Vue/vanilla JS) sampai IoT (C++) menunjukkan cara belajar lintas teknologi. Terbiasa memimpin (Ketua Kelas), bicara di depan umum, dan beradaptasi cepat dengan lingkungan baru.',
  personality:
    'Santai dan humoris, punya gaya bahasa khas anak kelas, tapi serius mengejar hasil. Sebagai Ketua Kelas, terbiasa mengkoordinasi dan memimpin teman-teman, sehingga nyaman bicara di depan umum. Keyakinan yang dipegang: sebelum menyerah pada sesuatu, coba dulu.',
  wayOfWork: [
    {
      title: 'Berpijak Bertahap',
      desc: 'Kerja iteratif — memakai git dengan commit kecil dan sering.',
    },
    {
      title: 'Telaten Sampai Beres',
      desc: 'Terbiasa debug dan revisi desain berulang sampai tuntas.',
    },
    {
      title: 'Mendokumentasikan',
      desc: 'Mendokumentasikan apa yang dibangun agar bisa dipakai atau dilanjutkan orang lain.',
    },
    {
      title: 'Konsisten Beridentitas',
      desc: 'Menjaga identitas visual sejak desain hingga implementasi.',
    },
  ],
}

export const socials: SocialLink[] = [
  { label: 'Instagram', handle: '@daniyal_hmm', url: 'https://www.instagram.com/daniyal_hmm' },
  { label: 'GitHub', handle: 'Ahmad-daniyal', url: 'https://github.com/Ahmad-daniyal' },
  { label: 'TikTok', handle: '@Doal', url: 'https://www.tiktok.com/@doal' },
]