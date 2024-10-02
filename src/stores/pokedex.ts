import { defineStore } from 'pinia';
import { useSnackbarStore } from './snackbar';
import { onMounted, ref } from 'vue';
import {
  fetchPokemons,
  fetchPokemonDetails,
  fetchPokemonSpecies,
  fetchPokemonEvolutionChain,
} from '@/services/pokedex';
import type { IPokemonDetails, INameUrl } from '@/interfaces/pokedex.interface';
import type { IEvolutions, INameImage } from '@/interfaces/evolutions.interface';

export const usePokedexStore = defineStore('pokedex', () => {
  const snackbarStore = useSnackbarStore();
  const allPokemons = ref<IPokemonDetails[]>([]);
  const evolutions = ref<IEvolutions>({} as IEvolutions);
  const favorites = ref<IPokemonDetails[]>([]);
  const isLoadingPokemons = ref<boolean>(false);

  async function getPokemonsList(offset?: number): Promise<void> {
    isLoadingPokemons.value = true;
    try {
      const response = await fetchPokemons(offset);

      await getPokemonsDetailsList(response.data.results);
    } catch (error: any) {
      snackbarStore.showSnackbar('Ocorreu um erro ao listar os pokémons!', 'error');
      throw new Error(error);
    } finally {
      isLoadingPokemons.value = false;
    }
  }

  async function getPokemonsDetailsList(pokemons: INameUrl[]): Promise<void> {
    try {
      for (const pokemon of pokemons) {
        const response = await fetchPokemonDetails(pokemon.name);

        allPokemons.value = [...allPokemons.value, response.data];
      }
    } catch (error: any) {
      snackbarStore.showSnackbar('Ocorreu um erro ao listar os pokémons!', 'error');
      throw new Error(error);
    }
  }

  async function getEvolutionData(name: string): Promise<INameImage> {
    try {
      const pokemon = await fetchPokemonDetails(name);
      return {
        name: pokemon.data.name,
        image: pokemon.data.sprites.other['official-artwork'].front_default,
      };
    } catch (error: any) {
      snackbarStore.showSnackbar('Ocorreu um erro ao listar as evoluções!', 'error');
      throw new Error(error);
    }
  }

  async function getPokemonEvolutions(id: number): Promise<void> {
    try {
      const species = await fetchPokemonSpecies(id);
      const evolution = await fetchPokemonEvolutionChain(species.data.evolution_chain.url);
      const chain = evolution.data.chain;

      evolutions.value.first_evolution = await getEvolutionData(chain.species.name);

      if (chain.evolves_to.length > 0) {
        const secondChain = chain.evolves_to[0];
        evolutions.value.second_evolution = await getEvolutionData(secondChain.species.name);

        if (secondChain.evolves_to.length > 0) {
          const thirdChain = secondChain.evolves_to[0];
          evolutions.value.third_evolution = await getEvolutionData(thirdChain.species.name);
        }
      }
    } catch (error: any) {
      snackbarStore.showSnackbar('Ocorreu um erro ao listar as evoluções!', 'error');
      throw new Error(error);
    }
  }

  function addPokemonToFavorites(pokemon: IPokemonDetails): void {
    const index = favorites.value.indexOf(pokemon);
    index === -1 ? favorites.value.push(pokemon) : favorites.value.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  onMounted(() => {
    if (localStorage.getItem('favorites')) {
      favorites.value = JSON.parse(localStorage.getItem('favorites')!);
    }
  });

  return {
    allPokemons,
    getPokemonsList,
    getPokemonEvolutions,
    evolutions,
    addPokemonToFavorites,
    favorites,
    isLoadingPokemons,
  };
});
