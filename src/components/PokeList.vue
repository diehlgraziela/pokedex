<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeCard from './PokeCard.vue';

const pokedexStore = usePokedexStore();
</script>

<template>
  <article class="list">
    <PokeCard
      v-for="pokemon in pokedexStore.allPokemons"
      :key="pokemon.id"
      :name="pokemon.name"
      :number="pokemon.id"
      :image="pokemon.sprites.other['official-artwork'].front_default"
      :types="pokemon.types"
    ></PokeCard>
  </article>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media screen and (max-width: 960px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>
