<script lang="ts" setup>
import TicTacToeBoard from '@/components/TicTacToeBoard.vue'
import type { Cell, Player } from '@/types/tic-tac-toe'
import { ref } from 'vue'

const board = ref<Array<Cell | 'Cat'>>(Array.from({ length: 9 }, () => ''))
const currentPlayer = ref<Player>('X')
const currentBoardIndex = ref<number | null>(null)
const winningCombo = ref<number[] | null>(null)

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
    if (player && player !== 'Cat' && combo.every((i) => board.value[i] === player)) return combo
  }

  return null
}

const handleSubGameOver = (winner: Player | 'Cat', i: number) => {
  board.value[i] = winner
  winningCombo.value = checkForWinner()
}
</script>

<template>
  <h1>Ultimate Tic Tac Toe</h1>
  <h2 v-if="winningCombo">Player {{ winningCombo[0] }} wins!</h2>

  <div class="board">
    <div
      class="cell"
      v-for="(cell, i) in board"
      :key="i"
      :class="[
        currentBoardIndex !== null && i !== currentBoardIndex && 'disabled',
        winningCombo?.includes(i) && 'winning',
      ]"
    >
      <TicTacToeBoard
        v-model:currentPlayer="currentPlayer"
        :disabled="!!winningCombo || (currentBoardIndex !== null && i !== currentBoardIndex)"
        @select-cell="(cellI: number) => (currentBoardIndex = cellI)"
        @full-board="currentBoardIndex = null"
        @game-over="(winner) => handleSubGameOver(winner, i)"
        mini
      />
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  max-width: 600px;

  & > .cell {
    max-width: 29vw;
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

    &.disabled {
      opacity: 0.5;
    }

    &.winning {
      background-color: rgba(var(--v-theme-primary), 0.3);
    }
  }
}
</style>
