<script setup lang="ts">
type Cell = 'X' | 'O' | ''

import { ref } from 'vue'

const board = ref<Cell[]>(Array.from({ length: 9 }, () => ''))
</script>

<template>
  <div class="board">
    <div v-for="cell in board">
      {{ cell }}
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  border: 1px solid #000;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    border-right: 1px solid #000;

    &:nth-child(3n) {
      border-right: none;
    }
  }
}
</style>
