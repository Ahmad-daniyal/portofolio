<script setup lang="ts">
import { hardSkills, softSkills, tools } from '~/data/skills'

useSeo(
  'Keahlian',
  'Keahlian Ahmad Daniyal: front-end, arsitektur program, desain UI, IoT & mikrokontroler.',
)
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container">
        <div class="section-head" style="margin-bottom: 0">
          <span class="section-head__kicker">// Keahlian</span>
          <h1 class="page-head__title">Senjata Utama</h1>
          <p class="page-head__desc">
            nah ini amunisi si guweh buat dibawa ke meja kerja
          </p>
        </div>
      </div>
    </section>

    <div class="page-body">
      <div class="container">
        <SectionHeading
          kicker="// Hard Skills"
          title="Yang Bisa Si Guweh Eksekusi"
        />
        <div class="grid grid--3">
          <NeoCard v-for="skill in hardSkills" :key="skill.title" hover>
            <h3 class="skill-card__title">{{ skill.title }}</h3>
            <p v-if="skill.description" class="skill-card__desc">
              {{ skill.description }}
            </p>
            <div class="skill-card__tags">
              <Tag
                v-for="(item, i) in skill.items"
                :key="item"
                :variant="i % 2 === 0 ? 'yellow' : 'paper'"
              >
                {{ item }}
              </Tag>
            </div>
          </NeoCard>
        </div>

        <div style="margin-top: 3.5rem">
          <SectionHeading
            kicker="// Soft Skills"
            title="Yang Bikin Kerja Enak"
          />
          <div class="grid grid--4">
            <article
              v-for="(skill, i) in softSkills"
              :key="skill.title"
              class="soft-card"
            >
              <p class="soft-card__num">{{ String(i + 1).padStart(2, '0') }}</p>
              <h3 class="soft-card__title">{{ skill.title }}</h3>
              <p class="soft-card__desc">{{ skill.description }}</p>
            </article>
          </div>
        </div>

        <div style="margin-top: 3.5rem">
          <SectionHeading
            kicker="// Tools"
            title="Tools & Lingkungan"
          />
          <NeoCard hover>
            <div class="tools-card__chips">
              <Tag v-for="tool in tools" :key="tool" variant="dark">
                {{ tool }}
              </Tag>
            </div>
          </NeoCard>
        </div>
      </div>
    </div>
  </div>
</template>