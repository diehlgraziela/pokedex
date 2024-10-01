<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { usePokedexStore } from './stores/pokedex';
import { useSnackbarStore } from './stores/snackbar';
import BaseHeader from './components/BaseHeader.vue';
import SnackBar from './components/SnackBar.vue';

const pokedexStore = usePokedexStore();
const snackbarStore = useSnackbarStore();

onMounted(() => {
  pokedexStore.getPokemonsList();
});
</script>

<template>
  <BaseHeader />

  <main>
    <RouterView />
  </main>

  <SnackBar
    v-if="snackbarStore.snackbar"
    :message="snackbarStore.text"
    :type="snackbarStore.type"
    :timeout="snackbarStore.timeout"
    @click:close="snackbarStore.snackbar = false"
  />
</template>

<style scoped></style>
