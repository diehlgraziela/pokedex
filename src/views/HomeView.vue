<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeList from '@/components/PokeList.vue';

const pokedexStore = usePokedexStore();
</script>

<template>
  <section class="section">
    <PokeList />
  </section>
</template>
