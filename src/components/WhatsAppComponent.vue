<script setup lang="ts">
const message = 'Здравствуйте! Я хочу заказать Бетон. Подскажите, пожалуйста, как оформить заказ?'
</script>

<template>
  <div class="bottom-4 right-4 fixed z-50">
    <!-- Кнопка -->
    <div class="p-4 rounded-full bg-green-500 shadow-lg transition-all duration-300 relative hover:shadow-xl">
      <a
        target="_blank"
        :href="`https://wa.me/77074852328?text=${encodeURIComponent(message)}`"

        aria-label="Открыть чат в WhatsApp"
      >
        <span class="text-lg text-white leading-none font-bold" aria-hidden="true">WA</span>
      </a>
    </div>
  </div>
</template>
