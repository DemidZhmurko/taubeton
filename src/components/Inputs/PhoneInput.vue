<script setup lang="ts">
import Inputmask from 'inputmask'
import { onMounted, ref } from 'vue'

const phone = defineModel<string>()
const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (input.value) {
    Inputmask({
      mask: '+7 (999) 999-99-99',
      showMaskOnHover: false,
      showMaskOnFocus: true,
      placeholder: '_',
      clearIncomplete: true,
    }).mask(input.value)
  }
})
</script>

<template>
  <div class="w-full relative">
    <!-- Иконка -->
    <span class="peer-focus:text-accent text-gray-400 transition-colors duration-300 left-4 top-1/2 absolute -translate-y-1/2" aria-hidden="true">
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>

    <!-- Инпут -->
    <input
      ref="input"
      v-model="phone"
      type="tel"
      placeholder="Номер телефона"
      class="peer text-textColor border-concrete focus:ring-main hover:border-main text-lg py-3 pl-12 pr-4 border rounded-lg w-full transition-all duration-300 focus:outline-none focus:ring-2 hover:shadow-md"
    >
  </div>
</template>
