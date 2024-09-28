<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePokedexStore } from './stores/pokedex';
import { onMounted } from 'vue';

const pokedexStore = usePokedexStore();

onMounted(() => {
  console.log(pokedexStore.allPokemons);
  pokedexStore.getPokemonsList();
});
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
