<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex';
import PokeCard from './PokeCard.vue';
import PokemonDetails from './PokemonDetails.vue';
import { ref } from 'vue';

const pokedexStore = usePokedexStore();
const showDetails = ref<boolean>(false);

function openDetails() {
  showDetails.value = true;
}
</script>

<template>
  <div class="list">
    <PokeCard
      v-for="pokemon in pokedexStore.allPokemons"
      :key="pokemon.id"
      :name="pokemon.name"
      :number="pokemon.id"
      :image="pokemon.sprites.other['official-artwork'].front_default"
      :types="pokemon.types"
      @click="openDetails"
    ></PokeCard>
  </div>

  <Transition name="slide-fade">
    <PokemonDetails v-if="showDetails" @click:close="showDetails = false" />
  </Transition>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(40%);
  opacity: 0;
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
