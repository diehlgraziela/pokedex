import type { IPokemonDetails, TType } from '@/interfaces/pokedex.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useFiltersStore = defineStore('filters', () => {
  const router = useRouter();
  const searchQuery = ref<string>('');
  const selectedType = ref<TType[]>([]);

  function matchesSearch(pokemon: IPokemonDetails) {
    return (
      pokemon.name.toLowerCase().includes(searchQuery.value) ||
      pokemon.id.toString().includes(searchQuery.value)
    );
  }

  function matchesType(pokemon: IPokemonDetails) {
    if (selectedType.value.length == 0) return true;
    return selectedType.value.some((selected) =>
      pokemon.types.some((pokemonType) => pokemonType.type.name === selected),
    );
  }

  function searchPokemon(value: string) {
    searchQuery.value = value.toLowerCase();
  }

  function filterPokemon(type: TType[]) {
    selectedType.value = type;
  }

  router.afterEach(() => {
    searchQuery.value = '';
    selectedType.value = [];
  });

  return { matchesSearch, matchesType, searchPokemon, filterPokemon, searchQuery };
});
