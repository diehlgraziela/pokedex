import type { INameUrl } from './pokedex.interface';

export interface IEvolutionChain {
  baby_trigger_item: null | INameUrl;
  chain: {
    evolution_details: [];
    evolves_to: {
      evolution_details: IEvolutionDetails[];
      evolves_to: {
        evolution_details: IEvolutionDetails[];
        evolves_to: [];
        is_baby: boolean;
        species: INameUrl;
      }[];
      is_baby: boolean;
      species: INameUrl;
    }[];
    is_baby: boolean;
    species: INameUrl;
  };
  id: number;
}

interface IEvolutionDetails {
  gender: null | string;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: INameUrl;
  turn_upside_down: boolean;
}

export interface IEvolutions {
  first_evolution: INameImage;
  second_evolution: INameImage;
  third_evolution: INameImage;
}

export interface INameImage {
  name: string;
  image: string;
}
