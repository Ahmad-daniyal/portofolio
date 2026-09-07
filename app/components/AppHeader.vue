<script setup lang="ts">
import { NuxtLink } from '#components'

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Keahlian', to: '/keahlian' },
  { label: 'Proyek', to: '/proyek' },
  { label: 'Kontak', to: '/kontak' },
]

const open = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" @click="open = false">
        DANIYAL<span class="logo__dot">.</span>
      </NuxtLink>

      <nav class="nav" :class="{ 'nav--open': open }" aria-label="Navigasi utama">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="burger"
        :aria-expanded="open"
        aria-label="Buka menu"
        @click="open = !open"
      >
        <span class="burger__bar" />
        <span class="burger__bar" />
        <span class="burger__bar" />
      </button>
    </div>
  </header>
</template>