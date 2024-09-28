import { defineStore } from 'pinia';
import { fetchPokemons, fetchPokemonDetails } from '@/services/pokedex';
import { ref } from 'vue';
import type { IPokemonDetails, INameUrl } from '@/interfaces/pokedex.interface';

export const usePokedexStore = defineStore('pokedex', () => {
  const allPokemons = ref<IPokemonDetails[]>([]);

  async function getPokemonsList(): Promise<void> {
    try {
      const response = await fetchPokemons();

      await getPokemonsDetailsList(response.data.results);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function getPokemonsDetailsList(pokemons: INameUrl[]): Promise<void> {
    try {
      for (const pokemon of pokemons) {
        const response = await fetchPokemonDetails(pokemon.name);

        allPokemons.value = [...allPokemons.value, response.data];
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { allPokemons, getPokemonsList };
});
