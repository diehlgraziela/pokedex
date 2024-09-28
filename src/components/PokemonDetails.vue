<script setup lang="ts"></script>

<template>
  <section class="drawer">
    <button class="close" @click="$emit('click:close')">
      <v-icon name="md-close" scale="1.5" label="Fechar" fill="grey"></v-icon>
    </button>
  </section>
</template>

<style scoped>
.drawer {
  min-width: 40%;
  height: 100vh;

  background: var(--light-color);
  box-shadow: var(--box-shadow-left);
  border-top-left-radius: var(--border-radius-xl);
  border-bottom-left-radius: var(--border-radius-xl);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  border: none;
}
</style>
