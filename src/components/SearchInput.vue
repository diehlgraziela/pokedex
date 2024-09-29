<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref<string>('');
</script>

<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Pesquise o nome ou número de um pokémon..."
      class="search"
      @input="$emit('search', searchQuery)"
    />
    <button class="search-icon">
      <v-icon name="bi-search" scale="1.5" label="Lupa" fill="grey"></v-icon>
    </button>
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
}

.search {
  width: 100%;
}

.search-icon {
  position: absolute;
  right: 16px;
  top: 15px;
}
</style>
