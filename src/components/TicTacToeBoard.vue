<script setup lang="ts">
import type { Cell, Player } from '@/types/tic-tac-toe'
import { ref, watch } from 'vue'

const { mini, disabled } = defineProps<{ mini?: boolean; disabled?: boolean }>()
const emit = defineEmits<{
  (event: 'game-over', winner: Player | 'Cat'): void
  (event: 'select-cell', cellIndex: number): void
  (event: 'full-board'): void
}>()

watch(
  () => disabled,
  (newVal) => {
    if (!newVal && board.value.every((cell) => cell)) {
      emit('full-board')
    }
  },
)

const board = ref<Cell[]>(Array.from({ length: 9 }, () => ''))
const currentPlayer = defineModel<Player>('currentPlayer', { required: true })
const winningCombo = ref<number[] | null>(null)
const winningPlayer = ref<Cell>('')

const checkForWinner = () => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const combo of winningCombos) {
    const player = board.value[combo[0]]
    if (player && combo.every((i) => board.value[i] === player)) return combo
  }

  return null
}

const handleSelectCell = (i: number) => {
  if (board.value?.[i]) return
  if (board.value?.length || 0 > i) {
    board.value[i] = currentPlayer.value
    currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
  }
  emit('select-cell', i)
  if (winningCombo.value) return

  winningCombo.value = checkForWinner()
  if (winningCombo.value) {
    winningPlayer.value = currentPlayer.value
  }

  if (winningCombo.value) {
    const winningPlayer = board.value[winningCombo.value[0]]
    emit('game-over', winningPlayer as Player)
  } else if (!board.value.includes('')) {
    emit('game-over', 'Cat')
  }
}
</script>

<template>
  <div
    class="board"
    :class="[
      (!winningCombo || mini) && 'playing',
      mini ? 'mini' : 'full-sized',
      winningPlayer && `player-${winningPlayer}-wins`,
    ]"
  >
    <button
      class="cell"
      :class="[cell ? 'set' : 'empty', winningCombo?.includes(i) && 'winning']"
      v-for="(cell, i) in board"
      :key="i"
      @click="() => handleSelectCell(i)"
      :disabled="disabled"
    >
      <v-text>{{ cell || currentPlayer }}</v-text>
    </button>
  </div>
</template>

<style scoped>
.board.full-sized {
  width: clamp(10px, 80vw, 600px);
  .cell {
    font-size: clamp(2em, 15vw, 6em);
  }
}

.board.mini {
  .cell {
    font-size: clamp(10px, 5vw, 2em);
  }

  &.player-X-wins {
    .cell {
      background-color: unset;

      &:nth-child(1),
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(7),
      &:nth-child(9) {
        background-color: rgba(var(--v-theme-primary), 0.4);
      }
    }
  }

  &.player-O-wins {
    .cell {
      background-color: unset;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(8),
      &:nth-child(9) {
        background-color: rgba(var(--v-theme-primary), 0.4);
      }
    }
  }
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  max-width: 100%;

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    border-right: 1px solid rgb(var(--v-theme-on-background));
    border-bottom: 1px solid rgb(var(--v-theme-on-background));
    min-width: 0;
    min-height: 0;
    aspect-ratio: 1;

    &:nth-child(3n) {
      border-right: none;
    }

    &:nth-last-child(-n + 3) {
      border-bottom: none;
    }

    &.empty > v-text {
      visibility: hidden;
    }

    &.winning {
      background-color: rgba(var(--v-theme-primary), 0.2);
      color: rgb(var(--v-theme-secondary));
      font-weight: bolder !important;
    }
  }

  &.playing {
    .cell.empty:not(:disabled):hover {
      background-color: rgb(var(--v-theme-surface));
      position: relative;

      v-text {
        visibility: visible;
        opacity: 0.5;
      }
    }
  }
}
</style>
