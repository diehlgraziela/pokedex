import type { TType } from '@/interfaces/pokedex.interface';

export function getTypeColor(type: TType) {
  switch (type) {
    case 'bug':
      return '#A6B91A';
    case 'dark':
      return '#705746';
    case 'dragon':
      return '#6F35FC';
    case 'electric':
      return '#F7D02C';
    case 'fairy':
      return '#D685AD';
    case 'fighting':
      return '#C22E28';
    case 'fire':
      return '#EE8130';
    case 'flying':
      return '#D685AD';
    case 'ghost':
      return '#735797';
    case 'grass':
      return '#7AC74C';
    case 'ground':
      return '#E2BF65';
    case 'ice':
      return '#96D9D6';
    case 'normal':
      return '#A8A77A';
    case 'poison':
      return '#A33EA1';
    case 'psychic':
      return '#F95587';
    case 'rock':
      return '#B6A136';
    case 'steel':
      return '#B7B7CE';
    case 'water':
      return '#6390F0';
    default:
      return 'grey';
  }
}
