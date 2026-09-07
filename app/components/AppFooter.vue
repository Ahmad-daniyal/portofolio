<script setup lang="ts">
import { profile } from '~/data/profile'

const marqueeItems = [
  'Front-end Developer',
  'IoT Programmer',
  'Soreang · Bandung',
  'Kelas XI PPLG 2',
  'Ketua Kelas',
]

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer">
    <BrandMarquee :items="marqueeItems" />

    <div class="container footer-bar">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}.</p>
      <p class="footer-bar__note">Dibuat dengan Nuxt & banyak coba-coba.</p>
      <button type="button" class="footer-bar__top" @click="scrollTop">
        <span>↑</span> Kembali ke atas
      </button>
    </div>
  </footer>
</template>