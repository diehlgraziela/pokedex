<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePokedexStore } from '@/stores/pokedex';
import { useFiltersStore } from '@/stores/filters';
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import TypeFilter from '@/components/TypeFilter.vue';

const pokedexStore = usePokedexStore();
const filtersStore = useFiltersStore();
const offset = ref<number>(12);

const filteredPokemons = computed(() => {
  return pokedexStore.allPokemons.filter((pokemon) => {
    return filtersStore.matchesSearch(pokemon) && filtersStore.matchesType(pokemon);
  });
});

function loadMorePokemons() {
  pokedexStore.getPokemonsList(offset.value);
}
</script>

<template>
  <section class="home-section">
    <div class="filters">
      <SearchInput @search="filtersStore.searchPokemon" />
      <TypeFilter @click:type="filtersStore.filterPokemon" />
    </div>

    <PokeList :pokemons="filteredPokemons" />
    <div class="see-more-container">
      <button class="see-more" @click="loadMorePokemons">+</button>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  padding-bottom: 3rem;
}

.filters {
  display: flex;
  align-items: end;
  gap: 1rem;
  padding-bottom: 1.5rem;
}

.see-more-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.see-more {
  display: grid;
  place-content: center;
  padding: 16px;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  background: var(--dark-blue-color);
  box-shadow: var(--box-shadow-type-1);
  border-radius: 50%;
  text-align: center;
  color: var(--light-color);
  cursor: pointer;
}

@media screen and (max-width: 960px) {
  .filters {
    flex-direction: column;
  }
}
</style>
