<script setup lang="ts">
useSeo(
  'Game',
  'Game memori kartu berpasangan bertema web dev & IoT di portofolio Ahmad Daniyal.',
)
</script>

<template>
  <div>
    <BrandMarquee
      variant="red"
      :items="['Memori', 'Pasangan', 'HTML', 'CSS', 'JS', 'Vue', 'ESP32', 'C++']"
    />

    <section class="page-head">
      <div class="container">
        <div class="section-head" style="margin-bottom: 0">
          <span class="section-head__kicker">// Game</span>
          <h1 class="page-head__title">Pancing Memori Si Guweh</h1>
          <p class="page-head__desc">
            Cari pasangan kartu bertema web dev &amp; IoT. Semakin sedikit
            langkah, semakin jago memorimu.
          </p>
        </div>
      </div>
    </section>

    <div class="page-body">
      <div class="container">
        <MemoryGame />
      </div>
    </div>
  </div>
</template>