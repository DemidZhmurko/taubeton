<script setup lang="ts">
const name = defineModel<string>()
</script>

<template>
  <div class="w-full relative">
    <!-- Иконка -->
    <span class="peer-focus:text-accent text-gray-400 transition-colors duration-300 left-4 top-1/2 absolute -translate-y-1/2" aria-hidden="true">
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" stroke-width="1.8" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
    </span>

    <!-- Инпут -->
    <input
      v-model="name"
      type="text"
      placeholder="Ваше имя"
      class="peer text-textColor border-concrete focus:ring-main hover:border-main text-lg py-3 pl-12 pr-4 border rounded-lg w-full transition-all duration-300 focus:outline-none focus:ring-2 hover:shadow-md"
    >
  </div>
</template>
