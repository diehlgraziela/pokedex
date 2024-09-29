<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import TypeFilter from '@/components/TypeFilter.vue';
import { computed, ref } from 'vue';
import type { IPokemonDetails, TType } from '@/interfaces/pokedex.interface';

const pokedexStore = usePokedexStore();
const searchQuery = ref<string>('');
const selectedType = ref<TType[]>([]);

const filteredPokemons = computed(() => {
  return pokedexStore.allPokemons.filter((pokemon) => {
    return matchesSearch(pokemon) && matchesType(pokemon);
  });
});

function matchesSearch(pokemon: IPokemonDetails) {
  const searchTerm = searchQuery.value.toLowerCase();
  return (
    pokemon.name.toLowerCase().includes(searchTerm) || pokemon.id.toString().includes(searchTerm)
  );
}

function matchesType(pokemon: IPokemonDetails) {
  if (selectedType.value.length == 0) return true;
  return selectedType.value.some((selected) =>
    pokemon.types.some((pokemonType) => pokemonType.type.name === selected),
  );
}

function searchPokemon(value: string) {
  searchQuery.value = value;
}

function filterPokemon(type: TType[]) {
  selectedType.value = type;
}
</script>

<template>
  <section class="home-section">
    <div class="filters">
      <SearchInput @search="searchPokemon" />
      <TypeFilter @click:type="filterPokemon" />
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
  align-items: end;
  gap: 1rem;
  padding-bottom: 1.5rem;
}

@media screen and (max-width: 960px) {
  .filters {
    flex-direction: column;
  }
}
</style>
