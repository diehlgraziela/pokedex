<script setup lang="ts">
import { computed, ref } from 'vue';
import type { TType } from '@/interfaces/pokedex.interface';

const selectedType = ref<TType | 'type'>('type');

const types = computed<TType[]>(() => [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
]);
</script>

<template>
  <div class="select-container">
    <select v-model="selectedType" name="types" id="types" class="select">
      <option value="type" class="placeholder" disabled hidden selected>Tipo</option>
      <option v-for="type in types" :key="type" :value="type" class="option">
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </option>
    </select>
    <button class="filter-icon">
      <v-icon name="la-filter-solid" scale="1.5" label="Filtro" fill="grey"></v-icon>
    </button>
  </div>
</template>

<style scoped>
.select-container {
  position: relative;
  width: 20%;
}

.select {
  width: 100%;
  padding-left: 40px;
}

.option {
  color: var(--dark-color);
}

.filter-icon {
  position: absolute;
  left: 12px;
  top: 15px;
}
</style>
