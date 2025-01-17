<script setup lang="ts">
import type { IPokemonDetails } from '@/interfaces/pokedex.interface';
import { onUnmounted, ref } from 'vue';
import { usePokedexStore } from '@/stores/pokedex';
import PokeCard from './PokeCard.vue';
import PokemonDetails from './PokemonDetails.vue';

defineProps<{
  pokemons: IPokemonDetails[];
}>();

const pokedexStore = usePokedexStore();
const showDetails = ref<boolean>(false);
const selectedPokemon = ref<IPokemonDetails>({} as IPokemonDetails);

function openDetails(pokemon: IPokemonDetails) {
  showDetails.value = true;
  selectedPokemon.value = pokemon;

  pokedexStore.getPokemonEvolutions(pokemon.id);
}

onUnmounted(() => {
  showDetails.value = false;
});
</script>

<template>
  <TransitionGroup name="list" tag="div" class="list">
    <PokeCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :name="pokemon.name"
      :number="pokemon.id"
      :image="pokemon.sprites.other['official-artwork'].front_default"
      :types="pokemon.types"
      @click="openDetails(pokemon)"
    ></PokeCard>
  </TransitionGroup>

  <Transition name="slide-fade">
    <PokemonDetails
      v-if="showDetails"
      :pokemon="selectedPokemon"
      @click:close="showDetails = false"
    />
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
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
