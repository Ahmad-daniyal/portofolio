<script setup lang="ts">
type CardState = 'hidden' | 'flipped' | 'matched'

interface Card {
  id: number
  pairId: string
  label: string
  state: CardState
}

const PAIRS = [
  { pairId: 'html', label: 'HTML' },
  { pairId: 'css', label: 'CSS' },
  { pairId: 'js', label: 'JS' },
  { pairId: 'vue', label: 'Vue' },
  { pairId: 'cpp', label: 'C++' },
  { pairId: 'esp', label: 'ESP32' },
  { pairId: 'git', label: 'GIT' },
  { pairId: 'npm', label: 'NPM' },
]

const BEST_KEY = 'volio-memory-best'

const cards = ref<Card[]>([])
const moves = ref(0)
const matchedPairs = ref(0)
const elapsed = ref(0)
const status = ref<'idle' | 'playing' | 'won'>('idle')
const bestMoves = ref<number | null>(null)

const firstIndex = ref<number | null>(null)
const lock = ref(false)

let timerId: ReturnType<typeof setInterval> | null = null
let flipTimer: ReturnType<typeof setTimeout> | null = null

function shuffle<T>(list: T[]): T[] {
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function buildDeck(): Card[] {
  return shuffle([...PAIRS, ...PAIRS]).map((pair, i) => ({
    id: i,
    pairId: pair.pairId,
    label: pair.label,
    state: 'hidden' as const,
  }))
}

function formatTime(total: number): string {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function startTimer() {
  if (timerId) return
  timerId = window.setInterval(() => {
    elapsed.value = elapsed.value + 1
  }, 1000)
}

function stopTimer() {
  if (timerId) {
    window.clearInterval(timerId)
    timerId = null
  }
}

function loadBest() {
  const raw = window.localStorage.getItem(BEST_KEY)
  bestMoves.value = raw ? Number(raw) : null
}

function rememberBest() {
  if (bestMoves.value === null || moves.value < bestMoves.value) {
    bestMoves.value = moves.value
    window.localStorage.setItem(BEST_KEY, String(moves.value))
  }
}

function reset() {
  if (flipTimer) {
    window.clearTimeout(flipTimer)
    flipTimer = null
  }
  stopTimer()
  lock.value = false
  firstIndex.value = null
  moves.value = 0
  matchedPairs.value = 0
  elapsed.value = 0
  status.value = 'idle'
  cards.value = buildDeck()
}

function onFlip(index: number) {
  const card = cards.value[index]
  if (lock.value || card.state !== 'hidden') return

  if (firstIndex.value === null) {
    if (status.value === 'idle') {
      status.value = 'playing'
      startTimer()
    }
    firstIndex.value = index
    card.state = 'flipped'
    return
  }

  if (index === firstIndex.value) return

  const first = cards.value[firstIndex.value]
  card.state = 'flipped'
  moves.value = moves.value + 1

  const isMatch = first.pairId === card.pairId
  lock.value = true

  flipTimer = window.setTimeout(() => {
    if (isMatch) {
      first.state = 'matched'
      card.state = 'matched'
      matchedPairs.value = matchedPairs.value + 1

      if (matchedPairs.value === PAIRS.length) {
        stopTimer()
        status.value = 'won'
        rememberBest()
      }
    } else {
      first.state = 'hidden'
      card.state = 'hidden'
    }

    lock.value = false
    firstIndex.value = null
    flipTimer = null
  }, 650)
}

onMounted(() => {
  loadBest()
  reset()
})

onBeforeUnmount(() => {
  stopTimer()
  if (flipTimer) window.clearTimeout(flipTimer)
})
</script>

<template>
  <div class="game">
    <div class="game__board">
      <div class="game__score">
        <span class="game__chip">Pasangan <strong>{{ matchedPairs }}/{{ PAIRS.length }}</strong></span>
        <span class="game__chip">Langkah <strong>{{ moves }}</strong></span>
        <span class="game__chip">Waktu <strong>{{ formatTime(elapsed) }}</strong></span>
      </div>

      <div class="game__grid">
        <button
          v-for="card in cards"
          :key="card.id"
          type="button"
          class="game-card"
          :class="{
            'is-flipped': card.state === 'flipped' || card.state === 'matched',
            'is-matched': card.state === 'matched',
          }"
          :aria-label="card.state === 'hidden' ? 'Kartu tertutup' : card.label"
          :disabled="lock || card.state !== 'hidden'"
          @click="onFlip(card.id)"
        >
          <span class="game-card__inner">
            <span class="game-card__face game-card__face--cover">✦</span>
            <span class="game-card__face game-card__face--value">{{ card.label }}</span>
          </span>
        </button>
      </div>
    </div>

    <div v-if="status === 'won'" class="game__result" role="status">
      <p class="game__result-star">✦ ✦ ✦</p>
      <h3 class="game__result-title">Si Guweh Menang!</h3>
      <p class="game__result-detail">
        {{ matchedPairs }} pasangan cocok dalam {{ moves }} langkah · {{ formatTime(elapsed) }}.
      </p>
      <p v-if="bestMoves !== null" class="game__best">
        Best: {{ bestMoves }} langkah
      </p>
      <button type="button" class="neo-btn neo-btn--dark" @click="reset">
        Main Lagi
      </button>
    </div>
  </div>
</template>