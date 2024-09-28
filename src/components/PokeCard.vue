<script setup lang="ts">
import type { ITypes } from '@/interfaces/pokedex.interface';

defineProps<{
  name: string;
  number: number;
  image: string;
  types: ITypes[];
}>();
</script>

<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>{{ number }}</p>
    <span class="type">{{ types }}</span>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: var(--light-color);
  border-radius: var(--border-radius-md);
}

.type {
  background: purple;
}
</style>
