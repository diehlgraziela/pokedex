<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePokedexStore } from './stores/pokedex';
import { onMounted } from 'vue';
import BaseHeader from './components/BaseHeader.vue';

const pokedexStore = usePokedexStore();

onMounted(() => {
  pokedexStore.getPokemonsList();
});
</script>

<template>
  <BaseHeader />

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
