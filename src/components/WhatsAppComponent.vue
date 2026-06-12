<script setup lang="ts">
const message = 'Здравствуйте! Я хочу заказать Бетон. Подскажите, пожалуйста, как оформить заказ?'
</script>

<template>
  <div class="bottom-4 right-4 fixed z-50">
    <!-- Кнопка -->
    <div class="rounded-full bg-green-500 shadow-lg transition-all duration-300 relative hover:bg-green-600 hover:shadow-xl">
      <a
        target="_blank"
        :href="`https://wa.me/77074852328?text=${encodeURIComponent(message)}`"
        class="flex h-14 w-14 items-center justify-center"

        aria-label="Открыть чат в WhatsApp"
      >
        <svg class="text-white h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5.2 19.1 6 16.2A8 8 0 1 1 9 19l-3.8.1Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 1.9.2.1.4 0 .5-.1l.5-.6c.2-.2.4-.2.7-.1l1.4.7c.4.2.4.4.4.6 0 .5-.3 1-.8 1.3-.5.3-1.5.4-3.2-.4-2.7-1.2-4.4-3.6-4.6-4.9-.2-.8.1-1.3.4-1.5Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  </div>
</template>
