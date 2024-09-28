<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';

const pokedexStore = usePokedexStore();
</script>

<template>
  <section class="section">
    <SearchInput />

    <PokeList />
  </section>
</template>
