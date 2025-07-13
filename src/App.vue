<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'lightMode' : 'darkMode'
}
</script>

<template>
  <v-app>
    <v-main class="px-5">
      <v-app-bar :elevation="2" class="px-2">
        <v-tabs>
          <v-tab to="/tic-tac-toe">Tic Tac Toe</v-tab>
          <v-tab to="/ultimate-tic-tac-toe">Ultimate Tic Tac Toe</v-tab>
        </v-tabs>
        <v-spacer />
        <v-btn @click="toggleTheme" icon="$mdiThemeLightDark" />
      </v-app-bar>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
:root {
  --v-theme-on-surface: var(--v-theme-primary);
}
#app {
  padding: 0;
}
.v-main {
  width: 100vw;
}
</style>
