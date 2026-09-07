<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'cream' | 'yellow' | 'red' | 'dark' | 'paper'
}>(), {
  variant: 'cream',
})
</script>

<template>
  <span class="tag" :class="`tag--${variant}`">
    <slot />
  </span>
</template>