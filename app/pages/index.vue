<script setup lang="ts">
import { profile } from '~/data/profile'
import { projects } from '~/data/projects'

useSeo(
  'Ahmad Daniyal — Front-end Developer & IoT Programmer',
  'Portofolio Ahmad Daniyal: front-end developer & programmer IoT dari Soreang, Bandung. Vue, C++/ESP32, dan desain neo-brutalism.',
)

const featured = projects.slice(0, 3)
const marqueeItems = [
  'Front-end Developer',
  'IoT Programmer',
  'Design Neo-Brutalism',
  'Soreang · Bandung',
  'Kelas XI PPLG 2',
  'Ketua Kelas',
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__text">
          <span class="hero__badge">
            <span class="hero__badge-dot" />
            Terbuka untuk proyek & kolaborasi
          </span>

          <p class="hero__hello">Halo, saya</p>
          <h1 class="hero__title">{{ profile.name }}</h1>
          <h2 class="hero__role">{{ profile.role }}</h2>
          <p class="hero__meta">
            {{ profile.status }} · {{ profile.classYear }} — {{ profile.major }}
          </p>
          <p class="hero__motto">“{{ profile.motto }}”</p>

          <div class="hero__cta">
            <NeoButton to="/proyek">Lihat Proyek</NeoButton>
            <NeoButton to="/kontak" variant="line">Kontak Saya</NeoButton>
          </div>
        </div>

        <div class="hero__media">
          <div class="neo-card hero__card">
            <div class="hero__card-head">
              <span class="hero__card-avatar">AD</span>
              <div>
                <p class="hero__card-name">{{ profile.name }}</p>
                <p class="hero__card-handle">@{{ profile.nickname }}</p>
              </div>
            </div>

            <div class="hero__card-list">
              <div class="hero__card-row">
                <span>Peran</span>
                <strong>{{ profile.classRole }}</strong>
              </div>
              <div class="hero__card-row">
                <span>Lokasi</span>
                <strong>{{ profile.location }}</strong>
              </div>
              <div class="hero__card-row">
                <span>Status</span>
                <strong>{{ profile.status }}</strong>
              </div>
              <div class="hero__card-row">
                <span>Jurusan</span>
                <strong>{{ profile.major }}</strong>
              </div>
            </div>
          </div>

          <span class="hero__sticker hero__sticker--yellow" />
          <span class="hero__sticker hero__sticker--red" />
        </div>
      </div>
    </section>

    <BrandMarquee :items="marqueeItems" :variant="'yellow'" />

    <!-- Fakta cepat -->
    <section class="section">
      <div class="container">
        <div class="facts">
          <NeoCard hover>
            <p class="fact__title">Lokasi</p>
            <p class="fact__value">{{ profile.location }}</p>
            <p class="fact__sub">Jawa Barat, Indonesia</p>
          </NeoCard>
          <NeoCard hover>
            <p class="fact__title">Langkah berikut</p>
            <p class="fact__value">{{ profile.classYear }} PPLG</p>
            <p class="fact__sub">Pengembangan Perangkat Lunak & Gim</p>
          </NeoCard>
          <NeoCard hover>
            <p class="fact__title">Saat ini</p>
            <p class="fact__value">{{ profile.classRole }}</p>
            <p class="fact__sub">Di kelas {{ profile.classYear }}</p>
          </NeoCard>
        </div>
      </div>
    </section>

    <!-- Proyek unggulan -->
    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="section-head">
          <span class="section-head__kicker">// Portofolio</span>
          <h2 class="section-head__title">Proyek Unggulan</h2>
          <p class="section-head__desc">
            Beberapa proyek yang paling sering saya kerjakan — dari web app sampai
            sistem IoT berbasis mikrokontroler.
          </p>
        </div>

        <div class="grid grid--3">
          <ProjectCard
            v-for="(project, i) in featured"
            :key="project.name"
            :project="project"
            :index="i + 1"
          />
        </div>

        <div class="projects-cta">
          <NeoButton to="/proyek" variant="dark">Lihat Semua Proyek</NeoButton>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="padding-top: 3rem">
      <div class="container">
        <div class="contact-cta">
          <div>
            <p class="contact-cta__sub">Punya ide atau mau kolaborasi?</p>
            <h2 class="contact-cta__title">Tertarik ngobrol sama saya?</h2>
          </div>
          <NeoButton to="/kontak" variant="dark">Hubungi Saya</NeoButton>
        </div>
      </div>
    </section>
  </div>
</template>