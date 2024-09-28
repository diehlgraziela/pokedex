<script setup lang="ts">
import type { ITypes } from '@/interfaces/pokedex.interface';
import { getTypeColor } from '@/utils/global';

defineProps<{
  name: string;
  number: number;
  image: string;
  types: ITypes[];
}>();
</script>

<template>
  <div class="card">
    <small class="number">Nº {{ number }}</small>

    <img class="image" :src="image" alt="Imagem pokémon" />

    <h2>{{ name }}</h2>

    <div class="types">
      <span
        v-for="type in types"
        :key="type.type.name"
        class="type"
        :style="`background: ${getTypeColor(type.type.name)}`"
      >
        {{ type.type.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

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

.number {
  color: var(--grey-color);
}

.types {
  display: flex;
  gap: 8px;
}

.type {
  color: var(--light-color);
  border-radius: var(--border-radius-xs);
  padding: 4px 8px;
}
</style>
