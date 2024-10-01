<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';

const props = defineProps<{
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timeout?: number;
  persistent?: boolean;
}>();

const snackbarStore = useSnackbarStore();

const snackbarColor = computed(() => {
  switch (props.type) {
    case 'success':
      return '#24b85a';
    case 'error':
      return '#e33327';
    case 'warning':
      return '#ff9b05';
    case 'info':
      return '#3c5aa6';
    default:
      return '#a5a5a5';
  }
});

onMounted(() => {
  if (!props.persistent) {
    setTimeout(() => {
      snackbarStore.snackbar = false;
    }, props.timeout);
  }
});
</script>

<template>
  <div class="snackbar" :style="`background: ${snackbarColor}`">
    {{ message }}
    <button @click="$emit('click:close')">
      <v-icon name="md-close" scale="1" label="Fechar" fill="white"></v-icon>
    </button>
  </div>
</template>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%);
  background: var(--light-color);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--box-shadow-type-1);
  color: var(--light-color);
  width: 70%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
