import type { TType } from '@/interfaces/pokedex.interface';
import { i18n } from '@/main';

export function getTypeColor(type: TType) {
  const colors = {
    bug: '#A6B91A',
    dark: '#705746',
    dragon: '#6F35FC',
    electric: '#F7D02C',
    fairy: '#D685AD',
    fighting: '#C22E28',
    fire: '#EE8130',
    flying: '#D685AD',
    ghost: '#735797',
    grass: '#7AC74C',
    ground: '#E2BF65',
    ice: '#96D9D6',
    normal: '#A8A77A',
    poison: '#A33EA1',
    psychic: '#F95587',
    rock: '#B6A136',
    steel: '#B7B7CE',
    water: '#6390F0',
  };

  return colors[type] || 'grey';
}

export function getTypeText(type: TType) {
  const translations = {
    bug: i18n.global.t('bug'),
    dark: i18n.global.t('dark'),
    dragon: i18n.global.t('dragon'),
    electric: i18n.global.t('electric'),
    fairy: i18n.global.t('fairy'),
    fighting: i18n.global.t('fighting'),
    fire: i18n.global.t('fire'),
    flying: i18n.global.t('flying'),
    ghost: i18n.global.t('ghost'),
    grass: i18n.global.t('grass'),
    ground: i18n.global.t('ground'),
    ice: i18n.global.t('ice'),
    normal: i18n.global.t('normal'),
    poison: i18n.global.t('poison'),
    psychic: i18n.global.t('psychic'),
    rock: i18n.global.t('rock'),
    steel: i18n.global.t('steel'),
    water: i18n.global.t('water'),
  };

  return translations[type] || 'Desconhecido';
}
