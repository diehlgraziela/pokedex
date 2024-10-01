<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useClickOutside from '@/composables/useClickOutside';

const { locale } = useI18n();
const showMenu = ref<boolean>(false);
const languagesRef = ref();

const languages = computed(() => [
  {
    title: 'Português',
    value: 'pt',
  },
  {
    title: 'Inglês',
    value: 'en',
  },
]);

function changeLanguage(language: string) {
  locale.value = language;
  showMenu.value = false;
}

function toggleLanguageMenu() {
  showMenu.value = !showMenu.value;
}

useClickOutside(languagesRef, () => {
  showMenu.value = false;
});
</script>

<template>
  <div class="languages-container" ref="languagesRef">
    <button class="languages-button">
      <v-icon
        @click="toggleLanguageMenu"
        name="md-language-outlined"
        label="Idioma"
        fill="grey"
        scale="1.5"
      ></v-icon>
    </button>

    <ul v-if="showMenu" class="languages-list">
      <li
        v-for="language in languages"
        :key="language.value"
        class="list-item"
        @click="changeLanguage(language.value)"
      >
        {{ language.title }}
        <v-icon v-if="locale === language.value" name="hi-check"></v-icon>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.languages-container {
  position: relative;
}

.languages-list {
  background: var(--light-color);
  border-radius: var(--border-radius-xs);
  box-shadow: var(--box-shadow-type-1);
  z-index: 9;
  position: absolute;
  overflow: auto;
  top: 100%;
  width: 140px;
  right: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px;
}

.list-item:hover {
  cursor: pointer;
  background: var(--base-color);
}
</style>
