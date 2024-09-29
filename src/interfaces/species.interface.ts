import type { INameUrl } from './pokedex.interface';

export interface ISpecies {
  base_happines: number;
  capture_rate: number;
  color: INameUrl;
  egg_groups: INameUrl[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: INameUrl | null;
  flavor_text_entries: IFlavorTextEntries[];
  form_descriptions: INameUrl[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: IGenera[];
  generation: INameUrl;
  growth_rate: INameUrl;
  habitat: INameUrl;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: INames[];
  order: number;
  pal_park_encounters: IPalParkEncounters[];
  pokedex_numbers: IPokedexNumbers[];
  shape: INameUrl;
  varieties: IVarieties[];
}

interface IFlavorTextEntries {
  flavor_text: string;
  language: INameUrl;
  version: INameUrl;
}

interface IGenera {
  genus: string;
  language: INameUrl;
}

interface INames {
  language: INameUrl;
  name: string;
}

interface IPalParkEncounters {
  area: INameUrl;
  base_score: number;
  rate: number;
}

interface IPokedexNumbers {
  entry_number: number;
  pokedex: INameUrl;
}

interface IVarieties {
  is_default: boolean;
  pokemon: INameUrl;
}
