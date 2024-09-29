<script setup lang="ts">
import type { ITypes } from '@/interfaces/pokedex.interface';
import { getTypeColor } from '@/utils/global';
import PokemonTypes from './PokemonTypes.vue';

defineProps<{
  name: string;
  number: number;
  image: string;
  types: ITypes[];
}>();
</script>

<template>
  <article class="card">
    <small class="number">Nº {{ number }}</small>

    <img class="image" :src="image" alt="Imagem pokémon" />

    <h2 class="name">{{ name }}</h2>

    <PokemonTypes :types="types" />
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 100%;
  padding: 1rem;
  background: var(--light-color);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-type-2);
  transition: var(--transition);
  border: 1px solid var(--light-color);
}

.card:hover {
  cursor: pointer;
  border: 1px solid #e3e3e3;
}

.image {
  width: 140px;
  height: 140px;
}

.name {
  text-transform: capitalize;
}

.number {
  color: var(--grey-color);
}
</style>
