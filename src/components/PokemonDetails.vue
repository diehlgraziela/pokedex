<script setup lang="ts">
import type { IPokemonDetails } from '@/interfaces/pokedex.interface';
import { usePokedexStore } from '@/stores/pokedex';
import { useI18n } from 'vue-i18n';
import { getTypeColor } from '@/utils/global';
import PokemonTypes from './PokemonTypes.vue';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps<{
  pokemon: IPokemonDetails;
}>();
const emit = defineEmits(['click:close']);
const { t } = useI18n();
const pokedexStore = usePokedexStore();
const favorite = ref<boolean>(false);

const isPokemonFavorite = computed<boolean>(() =>
  pokedexStore.favorites.some((favorite) => favorite.name === props.pokemon.name),
);

watch(
  () => props.pokemon.name,
  () => {
    favorite.value = isPokemonFavorite.value;
  },
);

onMounted(() => {
  favorite.value = isPokemonFavorite.value;
});

function getStatColor(value: number) {
  return value < 50 ? '#ff470f' : value <= 65 ? '#ffbf0f' : '#09db33';
}

function toggleFavorite() {
  favorite.value = !favorite.value;
  pokedexStore.addPokemonToFavorites(props.pokemon);
}

function closeDrawer() {
  favorite.value = false;
  emit('click:close');
}
</script>

<template>
  <section class="drawer">
    <button class="close" @click="closeDrawer">
      <v-icon name="md-close" scale="1.5" label="Fechar" fill="white"></v-icon>
    </button>
    <button class="add-to-favorite">
      <v-icon
        scale="1.5"
        fill="white"
        :label="favorite ? t('remove-from-favorites') : t('add-to-favorites')"
        :name="favorite ? 'bi-bookmark-heart-fill' : 'bi-bookmark-heart'"
        @click="toggleFavorite"
      ></v-icon>
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
        <h4 class="text-center">{{ t('statistics') }}</h4>
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
        <h4 class="text-center">{{ t('evolutions') }}</h4>
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
  min-width: 35%;
  height: 100vh;
  overflow: hidden;

  background: var(--light-color);
  box-shadow: var(--box-shadow-left);
  border-top-left-radius: var(--border-radius-xl);
  border-bottom-left-radius: var(--border-radius-xl);
  transition: var(--transition);

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
  height: 30%;
  text-align: center;
  text-transform: capitalize;
  color: var(--light-color);
}

.pokemon-sprite {
  max-width: 130px;
  max-height: 130px;
}

.details {
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  overflow-y: auto;
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

.add-to-favorite {
  position: absolute;
  top: 1rem;
  right: 3rem;
  cursor: pointer;
  border: none;
  background: none;
}

@media screen and (max-width: 960px) {
  .drawer {
    width: 60%;
  }

  .pokemon-sprite {
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 600px) {
  .drawer {
    width: 100%;
    border-radius: 0;
  }

  .pokemon-sprite {
    width: 120px;
    height: 120px;
  }

  .evolution-image {
    width: 70px;
    height: 70px;
  }
}
</style>
