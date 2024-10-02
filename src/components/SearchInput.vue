<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const searchQuery = ref<string>('');
</script>

<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      class="search"
      :placeholder="t('search')"
      @input="$emit('search', searchQuery)"
    />
    <button class="search-icon">
      <v-icon name="bi-search" scale="1.5" fill="grey" :label="t('search')"></v-icon>
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
  background: var(--light-color);
  padding-left: 8px;
  position: absolute;
  right: 16px;
  top: 15px;
}
</style>
