<script setup lang="ts">
import type { ITypes } from '@/interfaces/pokedex.interface';
import { getTypeColor, getTypeText } from '@/utils/global';

defineProps<{
  types: ITypes[];
}>();
</script>

<template>
  <div class="types">
    <span
      v-for="type in types"
      :key="type.type.name"
      :style="`background: ${getTypeColor(type.type.name)}`"
      class="type"
    >
      {{ getTypeText(type.type.name) }}
    </span>
  </div>
</template>

<style scoped>
.types {
  display: flex;
  gap: 8px;
}

.type {
  color: #f5f5f5;
  border-radius: var(--border-radius-xs);
  padding: 4px 8px;
}
</style>
