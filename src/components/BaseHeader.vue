<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import LanguageMenu from './LanguageMenu.vue';

const router = useRouter();

const navOptions = computed(() => [
  {
    name: 'home',
    text: 'Pokédex',
  },
  {
    name: 'favorites',
    text: 'Favoritos',
  },
]);
</script>

<template>
  <header class="header">
    <ul class="header-items">
      <li
        v-for="nav in navOptions"
        :class="['header-item', { active: router.currentRoute.value.name === nav.name }]"
        :key="nav.name"
        @click="router.push({ name: nav.name })"
      >
        {{ nav.text }}
      </li>
    </ul>

    <LanguageMenu />
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  margin: 3rem 0;
  padding: 0 3rem;
  background: var(--light-color);
  box-shadow: var(--box-shadow-type-2);
  border-radius: var(--border-radius-md);

  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 0 12px;
  color: var(--dark-color);
  border-bottom: 4px solid var(--light-color);
}

.header-item.active {
  border-bottom: 4px solid var(--dark-blue-color);
  color: var(--dark-blue-color);
}
</style>
