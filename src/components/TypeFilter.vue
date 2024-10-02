<script setup lang="ts">
import { computed, ref } from 'vue';
import type { TType } from '@/interfaces/pokedex.interface';
import useClickOutside from '@/composables/useClickOutside';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['click:type']);
const { t } = useI18n();

const selectedTypes = ref<TType[]>([]);
const showOptions = ref<boolean>(false);
const filterRef = ref();

const types = computed<TType[]>(() => [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
]);

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

function selectItem(type: TType) {
  const index = selectedTypes.value.indexOf(type);
  index === -1 ? selectedTypes.value.push(type) : selectedTypes.value.splice(index, 1);
  emit('click:type', selectedTypes.value);
}

useClickOutside(filterRef, () => {
  showOptions.value = false;
});
</script>

<template>
  <div class="select-container" ref="filterRef">
    <div :class="['select-input', { active: showOptions }]" @click="toggleOptions">
      <span class="input-text">
        <v-icon name="la-filter-solid" scale="1.5" label="Filtro" fill="grey"></v-icon>
        {{ selectedTypes.join(', ') || t('type') }}
      </span>
      <v-icon name="bi-chevron-down" scale="1" label="Seta" fill="grey"></v-icon>
    </div>

    <ul v-if="showOptions" class="types-list">
      <li v-for="type in types" class="list-item" :key="type" @click="selectItem(type)">
        <div class="checkbox">
          <v-icon v-if="selectedTypes.includes(type)" name="hi-check" fill="#3c5aa6"></v-icon>
        </div>
        <span class="item-text">{{ type }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select-container {
  position: relative;
  min-height: 60px;
  width: 25%;
}

.select-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  min-height: 60px;
  height: auto;
  border-radius: var(--border-radius-md);
  background: var(--light-color);
  box-shadow: var(--box-shadow-type-1);
  color: var(--grey-2-color);
  border: none;
}

.select-input.active {
  outline: 1px solid var(--grey-2-color);
}

.input-text {
  margin-left: 4px;
}

.types-list {
  background: var(--light-color);
  border-radius: var(--border-radius-xs);
  box-shadow: var(--box-shadow-type-1);
  max-height: 300px;
  overflow: auto;
  position: absolute;
  top: 100%;
  width: 100%;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
}

.list-item:hover {
  cursor: pointer;
  background: var(--base-color);
}

.checkbox {
  display: grid;
  place-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid var(--grey-2-color);
  border-radius: var(--border-radius-xs);
}

@media screen and (max-width: 960px) {
  .select-container {
    width: 100%;
  }
}
</style>
