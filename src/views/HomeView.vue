<script setup lang="ts">
import PokeList from '@/components/PokeList.vue';
import SearchInput from '@/components/SearchInput.vue';
import TypeFilter from '@/components/TypeFilter.vue';
</script>

<template>
  <section class="home-section">
    <div class="filters">
      <SearchInput />
      <TypeFilter />
    </div>

    <PokeList />
  </section>
</template>

<style scoped>
.home-section {
  padding-bottom: 3rem;
}

.filters {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
