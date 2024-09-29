import axios, { type AxiosResponse } from 'axios';
import type { IPokemonsResponse, IPokemonDetails } from '@/interfaces/pokedex.interface';
import type { ISpecies } from '@/interfaces/species.interface';
import type { IEvolutionChain } from '@/interfaces/evolutions.interface';

const baseUrl: string = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (): Promise<AxiosResponse<IPokemonsResponse>> => {
  return await axios.get(`${baseUrl}/pokemon?limit=12`);
};

export const fetchPokemonDetails = async (
  name: string,
): Promise<AxiosResponse<IPokemonDetails>> => {
  return await axios.get(`${baseUrl}/pokemon/${name}`);
};

export const fetchPokemonSpecies = async (id: number): Promise<AxiosResponse<ISpecies>> => {
  return axios.get(`${baseUrl}/pokemon-species/${id}`);
};

export const fetchPokemonEvolutionChain = async (
  url: string,
): Promise<AxiosResponse<IEvolutionChain>> => {
  return axios.get(url);
};
