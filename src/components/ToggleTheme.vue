<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { ITheme } from '@/interfaces/common.interfaces';

const theme = ref<ITheme>('light');

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark-theme');
  localStorage.setItem('theme', theme.value);
}

onMounted(() => {
  theme.value = (localStorage.getItem('theme') as ITheme) || 'light';
  document.documentElement.classList.toggle('dark-theme', theme.value === 'dark');
});
</script>

<template>
  <button @click="toggleTheme">
    <v-icon
      :name="theme == 'dark' ? 'fa-regular-moon' : 'hi-sun'"
      :scale="theme == 'dark' ? 1.5 : 1.7"
      fill="grey"
    ></v-icon>
  </button>
</template>

<style scoped></style>
