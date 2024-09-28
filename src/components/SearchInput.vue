<script setup lang="ts"></script>

<template>
  <div class="search-container">
    <input type="text" placeholder="Pesquise o nome ou número de um pokémon..." class="search" />
    <button class="search-icon">
      <v-icon name="bi-search" scale="1.5" label="Fechar" fill="grey"></v-icon>
    </button>
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
}

.search {
  padding: 12px 16px;
  width: 100%;
  height: 60px;
  margin-bottom: 1.5rem;
  border-radius: var(--border-radius-md);
  background: var(--light-color);
  box-shadow: var(--box-shadow-type-1);
  border: none;
}

.search:focus {
  outline: 1px solid var(--grey-color);
}

.search::placeholder {
  color: var(--grey-lighter-color);
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 15px;
  border: none;
}
</style>
