<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import TypeFilter from '@/components/TypeFilter.vue';
import { computed, ref } from 'vue';

const pokedexStore = usePokedexStore();
const searchQuery = ref<string>('');

const filteredPokemons = computed(() => {
  return pokedexStore.allPokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      pokemon.id.toString().includes(searchQuery.value),
  );
});

function searchPokemon(value: string) {
  searchQuery.value = value;
}
</script>

<template>
  <section class="home-section">
    <div class="filters">
      <SearchInput @search="searchPokemon" />
      <TypeFilter />
    </div>

    <PokeList :pokemons="filteredPokemons" />
  </section>
</template>

<style scoped>
.home-section {
  padding-bottom: 3rem;
}

.filters {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
}
</style>
