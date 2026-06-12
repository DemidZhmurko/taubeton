<script setup lang="ts">
const name = defineModel<string>()
</script>

<template>
  <div class="w-full relative">
    <!-- Иконка -->
    <span class="peer-focus:text-accent text-sm text-gray-400 font-semibold transition-colors duration-300 left-4 top-1/2 absolute -translate-y-1/2" aria-hidden="true">Имя</span>

    <!-- Инпут -->
    <input
      v-model="name"
      type="text"
      placeholder="Ваше имя"
      class="peer text-textColor border-concrete focus:ring-main hover:border-main text-lg py-3 pl-12 pr-4 border rounded-lg w-full transition-all duration-300 focus:outline-none focus:ring-2 hover:shadow-md"
    >
  </div>
</template>
