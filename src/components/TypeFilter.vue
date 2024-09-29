<script setup lang="ts">
import { computed, ref } from 'vue';
import type { TType } from '@/interfaces/pokedex.interface';
import Multiselect from 'vue-multiselect';

const selectedType = ref<TType>();

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
    <div class="select-input">
      <v-icon name="la-filter-solid" scale="1.5" label="Filtro" fill="grey"></v-icon>
      <span class="input-text">Tipo</span>
      <v-icon name="la-filter-solid" scale="1.5" label="Filtro" fill="grey"></v-icon>
    </div>

    <ul class="list-items" v-if="false">
      <li class="item">
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">HTML & CSS</span>
      </li>
      <li class="item">
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">Bootstrap</span>
      </li>
      <li class="item">
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">JavaScript</span>
      </li>
      <li class="item">
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">Node.Js</span>
      </li>
      <li class="item">
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">React JS</span>
      </li>
      <li class="item">
        <span class="checkbox">
          <i class="fa-solid fa-check check-icon"></i>
        </span>
        <span class="item-text">Mango DB</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select-container {
  position: relative;
  height: 60px;
  width: 25%;
}

.select-input {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  height: 60px;
  border-radius: var(--border-radius-md);
  background: var(--light-color);
  box-shadow: var(--box-shadow-type-1);
  color: var(--grey-lighter-color);
  border: none;
}

.input-text {
  margin-left: 4px;
}
</style>
