# Portofolio — Ahmad Daniyal

Web portofolio pribadi bergaya **neo-brutalism monokrom** yang dibangun
dengan **Nuxt 3** (Vue 3). Semua konten bersumber dari `profil.md` dan
disimpan sebagai data statis di `app/data/`.

## Stack

- **Nuxt 3** (SSR + prerender static) · Vue 3 · Vite
- CSS murni dengan design system berbasis CSS variables
- Font: Archivo Black + Space Grotesk (Google Fonts)

## Halaman

1. `/` — Beranda (hero, fakta cepat, proyek unggulan)
2. `/tentang` — Ringkasan, kepribadian, cara kerja, linimasa
3. `/keahlian` — Hard & soft skills, tools
4. `/proyek` — Grid semua proyek
5. `/kontak` — Kontak & sosmed

## Struktur

```
app/
  assets/css/main.css   → design tokens + base + utilitas
  components/           → AppHeader, AppFooter, ui/*, project/*
  composables/useSeo.ts → SEO meta per halaman
  data/                 → profile, skills, projects, timeline (dari profil.md)
  layouts/default.vue
  pages/                → 5 rute
public/
nuxt.config.ts
```

## Perintah

```bash
npm install     # pasang dependensi
npm run dev     # development server
npm run build   # build production
npm run preview # preview hasil build
```