import { onBeforeUnmount, onMounted } from 'vue';
import type { Ref } from 'vue';

export default function useClickOutside(component: Ref, callback: Function) {
  if (!component || !callback) {
    throw new Error('Component and callback are required');
  }

  const clickOutside = (event: MouseEvent) => {
    console.log('click');
    if (event.target === component.value || event.composedPath().includes(component.value)) {
      return;
    }
    if (typeof callback === 'function') {
      callback();
    }
  };

  onMounted(() => {
    window.addEventListener('click', clickOutside);
  });

  onBeforeUnmount(() => {
    console.log('unmount');
    window.removeEventListener('click', clickOutside);
  });
}