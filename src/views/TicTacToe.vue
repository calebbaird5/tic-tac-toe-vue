<script lang="ts" setup>
import TicTacToeBoard from '@/components/TicTacToeBoard.vue'
import type { Player } from '@/types/tic-tac-toe'
import { ref } from 'vue'

const currentPlayer = ref<Player>('X')
</script>

<template>
  <h1>Tic Tac Toe</h1>

  <TicTacToeBoard v-model:currentPlayer="currentPlayer" />
</template>
