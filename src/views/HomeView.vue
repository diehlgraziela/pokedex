<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import TypeFilter from '@/components/TypeFilter.vue';

const pokedexStore = usePokedexStore();
</script>

<template>
  <section class="section">
    <div class="filters">
      <SearchInput />
      <TypeFilter />
    </div>

    <PokeList />
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
