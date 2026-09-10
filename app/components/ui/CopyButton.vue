<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  value: string
  variant?: 'yellow' | 'line' | 'red' | 'dark'
  size?: 'sm' | 'md'
}>(), {
  variant: 'yellow',
  size: 'sm',
})

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

async function onCopy() {
  const text = toValue(props.value)
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    copied.value = true
    if (timer) window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    /* gagal menyalin */
  }
}

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer)
})
</script>

<template>
  <button
    type="button"
    class="neo-btn"
    :class="[`neo-btn--${variant}`, `neo-btn--${size}`]"
    :aria-label="`Salin ${label}`"
    @click="onCopy"
  >
    {{ copied ? 'Tersalin ✓' : `Salin ${label}` }}
  </button>
</template>