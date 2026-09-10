<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
  index: number
}>()

const expanded = ref(false)
</script>

<template>
  <article class="neo-card neo-card--hover project-card">
    <span class="project-card__idx">{{ String(index).padStart(2, '0') }}</span>

    <div class="project-card__top">
      <h3 class="project-card__name">{{ project.name }}</h3>
      <span v-if="project.subtitle" class="project-card__sub">{{ project.subtitle }}</span>
    </div>

    <div
      class="project-card__detail"
      :class="{ 'is-open': expanded }"
    >
      <div class="project-card__detail-inner">
        <p class="project-card__role">{{ project.role }}</p>

        <div v-if="project.tech?.length" class="project-card__tech">
          <Tag v-for="tech in project.tech ?? []" :key="tech">{{ tech }}</Tag>
        </div>

        <p v-if="project.highlight" class="project-card__highlight">{{ project.highlight }}</p>

        <div v-if="project.repo" class="project-card__action">
          <NeoButton :href="project.repo" external variant="dark" size="sm">
            Repo ↗
          </NeoButton>
        </div>
        <div v-else class="project-card__action">
          <span class="tag tag--paper">Studi kasus kelas</span>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="project-card__toggle"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      {{ expanded ? 'Tutup ↥' : 'Lihat Detail ↧' }}
    </button>
  </article>
</template>