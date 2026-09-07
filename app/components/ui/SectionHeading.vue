<script setup lang="ts">
defineProps<{
  kicker?: string
  title: string
  desc?: string
}>()
</script>

<template>
  <header class="section-head">
    <span v-if="kicker" class="section-head__kicker">{{ kicker }}</span>
    <h2 class="section-head__title">{{ title }}</h2>
    <p v-if="desc" class="section-head__desc">{{ desc }}</p>
  </header>
</template>