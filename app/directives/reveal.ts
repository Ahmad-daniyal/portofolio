import type { Directive, DirectiveBinding } from 'vue'

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (observer) return observer
  observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const el = entry.target as HTMLElement
      obs.unobserve(el)
      el.classList.add('is-visible')
    }
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px',
  })
  return observer
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const vReveal: Directive<HTMLElement, number | { delay?: number }> = {
  mounted(el: HTMLElement, binding: DirectiveBinding<number | { delay?: number }>) {
    const raw = binding.value
    const delay = typeof raw === 'number' ? raw : (raw?.delay ?? 0)

    el.classList.add('reveal')
    if (delay) el.style.transitionDelay = `${delay}ms`

    if (prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    getObserver().observe(el)
  },
  unmounted(el: HTMLElement) {
    observer?.unobserve(el)
  },
}