<script setup lang="ts">
import { profile } from '~/data/profile'
import { timeline } from '~/data/timeline'

useSeo(
  'Tentang',
  'Kenalan dengan Ahmad Daniyal: developer web & programmer IoT dari Soreang, Bandung.',
)
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container">
        <div class="section-head" style="margin-bottom: 0">
          <span class="section-head__kicker">// Tentang</span>
          <h1 class="page-head__title">Kenalan Sama Saya</h1>
          <p class="page-head__desc">
            Bukan cuma nulis kode — tapi mikirin arsitektur, dokumentasi, dan
            pengalaman pengguna.
          </p>
        </div>
      </div>
    </section>

    <div class="page-body">
      <div class="container">
        <div class="section-head">
          <span class="section-head__kicker">// Ringkasan</span>
        </div>
        <NeoCard hover>
          <p style="font-size: 1.1rem; margin-bottom: 0">
            {{ profile.summary }}
          </p>
        </NeoCard>

        <div style="margin-top: 2.5rem">
          <div class="quote-card">
            <span class="quote-card__mark">— moto hidup</span>
            <p class="quote-card__text">“{{ profile.motto }}”</p>
          </div>
        </div>

        <div style="margin-top: 2.5rem">
          <div class="section-head">
            <span class="section-head__kicker">// Kepribadian</span>
          </div>
          <NeoCard hover>
            <p style="margin-bottom: 0">{{ profile.personality }}</p>
          </NeoCard>
        </div>

        <!-- Cara kerja -->
        <div style="margin-top: 3.5rem">
          <SectionHeading
            kicker="// Cara Kerja"
            title="Gimana Saya Bekerja"
            desc="Cara saya ngoding dan nyelesaiin sesuatu."
          />
          <div class="grid grid--2">
            <NeoCard
              v-for="(item, i) in profile.wayOfWork"
              :key="item.title"
              hover
            >
              <span class="method__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="method__title">{{ item.title }}</h3>
              <p class="method__desc">{{ item.desc }}</p>
            </NeoCard>
          </div>
        </div>

        <!-- Linimasa -->
        <div style="margin-top: 3.5rem">
          <SectionHeading
            kicker="// Perjalanan"
            title="Linimasa Pembelajaran"
            desc="Dari HTML murni sampai sistem IoT — belajar lintas teknologi."
          />
          <ol class="timeline">
            <li v-for="(item, i) in timeline" :key="item.phase" class="timeline__item">
              <span class="timeline__mark">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="timeline__phase">{{ item.phase }}</h3>
              <p class="timeline__desc">{{ item.description }}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>