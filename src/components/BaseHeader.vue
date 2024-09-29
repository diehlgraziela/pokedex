<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <header class="header">
    <ul class="header-items">
      <li class="header-item active" @click="router.push({ name: 'home' })">Pokédex</li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  margin: 3rem 0;
  background: var(--light-color);
  box-shadow: var(--box-shadow-type-2);
  border-radius: var(--border-radius-md);
}

.header-items {
  height: 100%;
  display: flex;
  justify-content: center;
}

.header-item {
  display: grid;
  place-content: center;
  height: 100%;
  font-weight: 500;
  cursor: pointer;
  color: var(--dark-color);
}

.header-item.active {
  border-bottom: 4px solid var(--dark-blue-color);
  color: var(--dark-blue-color);
}
</style>
