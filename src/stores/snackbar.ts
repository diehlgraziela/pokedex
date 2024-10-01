import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ISnackbarType } from '@/interfaces/common.interfaces';

export const useSnackbarStore = defineStore('snackbar', () => {
  const snackbar = ref<boolean>(false);
  const text = ref<string>('');
  const timeout = ref<number>(5000);
  const type = ref<ISnackbarType>('info');

  function showSnackbar(message: string, colorType: ISnackbarType, timer: number = 5000) {
    snackbar.value = true;
    text.value = message;
    type.value = colorType;
    timeout.value = timer;
  }

  return {
    snackbar,
    text,
    type,
    timeout,
    showSnackbar,
  };
});
