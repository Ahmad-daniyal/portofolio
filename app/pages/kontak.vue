<script setup lang="ts">
import { profile, socials } from '~/data/profile'

useSeo(
  'Kontak',
  'Hubungi Ahmad Daniyal lewat email, Instagram, TikTok, atau GitHub.',
)

const mail = `mailto:${profile.email}`
const tel = `tel:${profile.phone.replace(/[^+\d]/g, '')}`
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container">
        <div class="section-head" style="margin-bottom: 0">
          <span class="section-head__kicker">// Kontak</span>
          <h1 class="page-head__title">Mari Terhubung</h1>
          <p class="page-head__desc">
            Butuh bantuin proyek, mau kolaborasi, atau sekadar ngobrol soal
            kode & IoT? Jangan ragu.
          </p>
        </div>
      </div>
    </section>

    <div class="page-body">
      <div class="container">
        <div class="contact-cta">
          <div>
            <p class="contact-cta__sub">Paling cepat dibales via email</p>
            <h2 class="contact-cta__title">{{ profile.email }}</h2>
          </div>
          <NeoButton :href="mail" variant="dark">Kirim Email</NeoButton>
        </div>

        <div style="margin-top: 2.5rem">
          <div class="grid grid--2">
            <NeoCard hover>
              <p class="contact-card__label">Email</p>
              <p class="contact-card__value">{{ profile.email }}</p>
              <div class="contact-card__action">
                <NeoButton :href="mail" size="sm">Kirim Email</NeoButton>
              </div>
            </NeoCard>

            <NeoCard hover>
              <p class="contact-card__label">Telepon / WhatsApp</p>
              <p class="contact-card__value">{{ profile.phone }}</p>
              <div class="contact-card__action">
                <NeoButton :href="tel" variant="line" size="sm">Telepon</NeoButton>
              </div>
            </NeoCard>

            <NeoCard
              v-for="social in socials"
              :key="social.label"
              hover
            >
              <p class="contact-card__label">{{ social.label }}</p>
              <p class="contact-card__value">{{ social.handle }}</p>
              <p class="contact-card__handle">{{ social.url }}</p>
              <div class="contact-card__action">
                <NeoButton :href="social.url" external variant="dark" size="sm">
                  Buka ↗
                </NeoButton>
              </div>
            </NeoCard>

            <NeoCard hover>
              <p class="contact-card__label">Lokasi</p>
              <p class="contact-card__value">{{ profile.location }}</p>
              <p class="contact-card__handle">Jawa Barat, Indonesia</p>
              <div class="contact-card__action">
                <NeoButton :href="mail" variant="red" size="sm">Sapa Saya</NeoButton>
              </div>
            </NeoCard>
          </div>
        </div>

        <p class="contact-note">
          “{{ profile.motto }}” — jadi, langsung aja kenalan.
        </p>
      </div>
    </div>
  </div>
</template>