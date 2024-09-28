import type {
  IGenerationI,
  IGenerationII,
  IGenerationIII,
  IGenerationIV,
  IGenerationV,
  IGenerationVI,
  IGenerationVII,
  IGenerationVIII,
} from './generation.interface';

export interface IPokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface INameUrl {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IAbilities[];
  forms: INameUrl[];
  game_indices: IGameIndices[];
  held_items: IHeldItems[];
  location_area_encounters: string;
  moves: IMoves[];
  past_types: IPastTypes[];
  sprites: ISprites;
  cries: ICries[];
  species: INameUrl[];
  stats: IStats[];
  types: ITypes[];
}

interface IAbilities {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface ICries {
  latest: string;
  legacy: string;
}

interface IGameIndices {
  game_index: number;
  version: INameUrl;
}

interface IHeldItems {
  item: INameUrl;
  version_details: IVersionDetails[];
}

interface IVersionDetails {
  rarity: number;
  version: INameUrl;
}

interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: INameUrl;
  version_group: INameUrl;
}

interface IMoves {
  move: INameUrl;
  version_group_details: IVersionGroupDetails[];
}

interface IPastTypes {
  generation: INameUrl;
  types: ITypes[];
}

interface ISprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: IOtherSprites;
  versions: ISpritesVersions;
}

interface IOtherSprites {
  dream_world: {
    front_default: string;
    front_female: string | null;
  };
  home: {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string;
  };
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  };
  showdown: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
}

interface ISpritesVersions {
  'generation-i': IGenerationI;
  'generation-ii': IGenerationII;
  'generation-iii': IGenerationIII;
  'generation-iv': IGenerationIV;
  'generation-v': IGenerationV;
  'generation-vi': IGenerationVI;
  'generation-vii': IGenerationVII;
  'generation-viii': IGenerationVIII;
}

interface IStats {
  base_stat: number;
  effort: number;
  stat: INameUrl;
}

export interface ITypes {
  slot: number;
  type: {
    name: TType;
    url: string;
  };
}

export type TType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';
