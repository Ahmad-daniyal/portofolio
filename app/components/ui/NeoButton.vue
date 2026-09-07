<script setup lang="ts">
import { NuxtLink } from '#components'

withDefaults(defineProps<{
  to?: string
  href?: string
  external?: boolean
  variant?: 'yellow' | 'line' | 'red' | 'dark'
  size?: 'md' | 'sm'
}>(), {
  variant: 'yellow',
  size: 'md',
})
</script>

<template>
  <component
    :is="to ? NuxtLink : 'a'"
    v-bind="to ? { to } : { href }"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="neo-btn"
    :class="[`neo-btn--${variant}`, `neo-btn--${size}`]"
  >
    <slot />
  </component>
</template>