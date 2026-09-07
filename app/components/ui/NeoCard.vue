<script setup lang="ts">
withDefaults(defineProps<{
  hover?: boolean
}>(), {
  hover: false,
})
</script>

<template>
  <div class="neo-card" :class="{ 'neo-card--hover': hover }">
    <slot />
  </div>
</template>