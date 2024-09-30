<script setup lang="ts">
import { computed } from 'vue';
import { usePokedexStore } from '@/stores/pokedex';
import { useFiltersStore } from '@/stores/filters';
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import TypeFilter from '@/components/TypeFilter.vue';

const pokedexStore = usePokedexStore();
const filtersStore = useFiltersStore();

const filteredPokemons = computed(() => {
  return pokedexStore.favorites.filter((pokemon) => {
    return filtersStore.matchesSearch(pokemon) && filtersStore.matchesType(pokemon);
  });
});
</script>

<template>
  <section class="favorites-section">
    <div class="filters">
      <SearchInput @search="filtersStore.searchPokemon" />
      <TypeFilter @click:type="filtersStore.filterPokemon" />
    </div>

    <PokeList :pokemons="filteredPokemons" />
  </section>
</template>

<style scoped>
.favorites-section {
  padding-bottom: 3rem;
}

.filters {
  display: flex;
  align-items: end;
  gap: 1rem;
  padding-bottom: 1.5rem;
}
</style>
