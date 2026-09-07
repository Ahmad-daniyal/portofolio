<script setup lang="ts">
import { projects } from '~/data/projects'

useSeo(
  'Proyek',
  'Proyek Ahmad Daniyal: web kelas interaktif, Edquest, e-commerce, dan sistem IoT berbasis ESP32.',
)
</script>

<template>
  <div>
    <BrandMarquee
      variant="dark"
      :items="['Web', 'IoT', 'Arsitektur', 'Desain', 'Dokumentasi']"
    />

    <section class="page-head">
      <div class="container">
        <div class="section-head" style="margin-bottom: 0">
          <span class="section-head__kicker">// Proyek</span>
          <h1 class="page-head__title">Yang Pernah Si Guweh Bangun</h1>
          <p class="page-head__desc">
            Dari aplikasi web interaktif sampai sistem IoT yang digerakkan
            mikrokontroler — semuanya dibuat bertahap dan terstruktur.
          </p>
        </div>
      </div>
    </section>

    <div class="page-body">
      <div class="container">
        <div class="grid grid--3">
          <ProjectCard
            v-for="(project, i) in projects"
            :key="project.name"
            :project="project"
            :index="i + 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>