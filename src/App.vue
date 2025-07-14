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
    <v-main>
      <v-app-bar :elevation="2" class="px-2">
        <v-container class="d-flex align-center">
          <v-tabs>
            <v-tab to="/tic-tac-toe">Tic Tac Toe</v-tab>
            <v-tab to="/ultimate-tic-tac-toe">Ultimate Tic Tac Toe</v-tab>
          </v-tabs>
          <v-spacer />
          <v-btn @click="toggleTheme" icon="$mdiThemeLightDark" />
        </v-container>
      </v-app-bar>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
:root {
  --v-theme-on-surface: var(--v-theme-primary);
}
#app {
  padding: 0;
  width: 100dvw;
  max-width: unset;
  margin: 0;
  box-sizing: border-box;
}

.v-application {
  max-width: unset;
  width: 100dvw;
}
</style>
