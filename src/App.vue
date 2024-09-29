<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePokedexStore } from './stores/pokedex';
import { onMounted, onUnmounted, ref } from 'vue';
import BaseHeader from './components/BaseHeader.vue';

const pokedexStore = usePokedexStore();
const scrollComponent = ref();

const offset = ref<number>(12);

function loadMorePokemons() {
  pokedexStore.getPokemonsList(offset.value);
}

const handleScroll = () => {
  let element = scrollComponent.value;

  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMorePokemons();

    offset.value += 12;
  }
};

onMounted(() => {
  pokedexStore.getPokemonsList();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <BaseHeader />

  <main>
    <RouterView />
  </main>

  <div ref="scrollComponent"></div>
</template>

<style scoped></style>
