import axios, { type AxiosResponse } from 'axios';
import type { IPokemonsResponse, IPokemonDetails } from '@/interfaces/pokedex.interface';

export const fetchPokemons = async (): Promise<AxiosResponse<IPokemonsResponse>> => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`);
};

export const fetchPokemonDetails = async (
  name: string,
): Promise<AxiosResponse<IPokemonDetails>> => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
};
