<script setup lang="ts">
import type { IPokemonDetails } from '@/interfaces/pokedex.interface';
import { usePokedexStore } from '@/stores/pokedex';
import { getTypeColor } from '@/utils/global';
import PokemonTypes from './PokemonTypes.vue';

defineProps<{
  pokemon: IPokemonDetails;
}>();

const pokedexStore = usePokedexStore();

function getStatColor(value: number) {
  return value < 50 ? '#ff470f' : value <= 65 ? '#ffbf0f' : '#09db33';
}
</script>

<template>
  <section class="drawer">
    <button class="close" @click="$emit('click:close')">
      <v-icon name="md-close" scale="1.5" label="Fechar"></v-icon>
    </button>

    <header class="header" :style="`background: ${getTypeColor(pokemon.types[0].type.name)}`">
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
        class="pokemon-sprite"
      />

      <small class="number">Nº {{ pokemon.id }}</small>
      <h3>{{ pokemon.name }}</h3>
    </header>

    <div class="details">
      <PokemonTypes :types="pokemon.types" class="types" />

      <div class="stats">
        <h4 class="text-center">Estatísticas</h4>
        <ul class="stats-list">
          <li v-for="stat in pokemon.stats" :key="stat.stat.name" class="stats-item">
            <span class="stat-name">{{ stat.stat.name }}</span>
            <span class="stat-value text-end">{{ stat.base_stat }}</span>
            <div
              class="progress-bar"
              :style="`
              width: ${stat.base_stat}%;
              background:${getStatColor(stat.base_stat)};
              height:4px;
              `"
            ></div>
          </li>
        </ul>
      </div>

      <div class="evolutions">
        <h4 class="text-center">Evoluções</h4>
        <ul class="evolutions-list">
          <li
            v-for="evolution in pokedexStore.evolutions"
            :key="evolution.name"
            class="evolution-item"
          >
            <img class="evolution-image" :src="evolution.image" :alt="evolution.name" />
            <small>{{ evolution.name }}</small>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.drawer {
  width: 40%;
  height: 100vh;
  overflow: hidden;

  background: var(--light-color);
  box-shadow: var(--box-shadow-left);
  border-top-left-radius: var(--border-radius-xl);
  border-bottom-left-radius: var(--border-radius-xl);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  border: none;
}

.header {
  padding: 1rem;
  display: grid;
  place-content: center;
  gap: 8px;
  text-align: center;
  text-transform: capitalize;
  color: var(--light-color);
}

.pokemon-sprite {
  width: 150px;
  height: 150px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.types {
  justify-content: center;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.stats-item {
  display: grid;
  grid-template-columns: 20% 10% 60%;
  align-items: center;
  gap: 1rem;
}

.stat-name {
  color: var(--grey-color);
}

.stat-value {
  font-weight: 500;
}

.evolutions-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.evolution-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.evolution-image {
  width: 80px;
  height: 80px;
}
</style>
