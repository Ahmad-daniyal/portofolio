<script setup lang="ts">
withDefaults(defineProps<{
  items: string[]
  variant?: 'dark' | 'yellow' | 'red'
}>(), {
  variant: 'dark',
})
</script>

<template>
  <div class="marquee" :class="`marquee--${variant}`" aria-hidden="true">
    <div class="marquee__track">
      <div v-for="(group, i) in 2" :key="i" class="marquee__group">
        <span v-for="item in items" :key="item" class="marquee__item">
          {{ item }}<span class="marquee__star">✦</span>
        </span>
      </div>
    </div>
  </div>
</template>