<script lang="ts">
import TicTacToeBoard from '@/components/TicTacToeBoard.vue'
</script>

<template>
  <div class="tic-tac-toe">
    <h1>Tic Tac Toe</h1>
    <TicTacToeBoard />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .tic-tac-toe {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
