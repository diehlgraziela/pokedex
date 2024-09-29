import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  fetchPokemons,
  fetchPokemonDetails,
  fetchPokemonSpecies,
  fetchPokemonEvolutionChain,
} from '@/services/pokedex';
import type { IPokemonDetails, INameUrl } from '@/interfaces/pokedex.interface';
import type { IEvolutions } from '@/interfaces/evolutions.interface';

export const usePokedexStore = defineStore('pokedex', () => {
  const allPokemons = ref<IPokemonDetails[]>([]);
  const evolutions = ref<IEvolutions>({} as IEvolutions);

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

  async function getPokemon(name: string): Promise<IPokemonDetails> {
    try {
      const response = await fetchPokemonDetails(name);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function getPokemonEvolutions(id: number): Promise<void> {
    //TODO - IMPROVE THIS FUNCTION LEGIBILITY
    try {
      const species = await fetchPokemonSpecies(id);
      const evolution = await fetchPokemonEvolutionChain(species.data.evolution_chain.url);

      const firstEvolution = await getPokemon(evolution.data.chain.species.name);
      const secondEvolution = await getPokemon(evolution.data.chain.evolves_to[0].species.name);
      const thirdEvolution = await getPokemon(
        evolution.data.chain.evolves_to[0].evolves_to[0].species.name,
      );

      evolutions.value = {
        first_evolution: {
          name: firstEvolution.name,
          image: firstEvolution.sprites.other['official-artwork'].front_default,
        },
        second_evolution: {
          name: secondEvolution.name,
          image: secondEvolution.sprites.other['official-artwork'].front_default,
        },
        third_evolution: {
          name: thirdEvolution.name,
          image: thirdEvolution.sprites.other['official-artwork'].front_default,
        },
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { allPokemons, getPokemonsList, getPokemonEvolutions, evolutions };
});
