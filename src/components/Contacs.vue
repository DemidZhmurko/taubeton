<script setup lang="ts">
</script>

<template>
  <section id="contacts" class="pt-20 bg-gray-50">
    <div class="mx-auto px-4 container">
      <h2 class="text-4xl font-bold mb-12 text-center">
        Контакты
      </h2>

      <!-- Контактная информация и описание -->
      <div class="mb-20 gap-10 grid items-start md:grid-cols-2">
        <!-- Левая колонка -->
        <div class="space-y-5">
          <div class="p-5 border border-gray-200 rounded-xl bg-white flex gap-4 shadow-sm items-center">
            <span class="text-blue-600 rounded-full bg-blue-100 flex h-12 min-w-12 items-center justify-center" aria-hidden="true">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div>
              <p class="text-sm text-gray-500 font-medium">
                Телефон
              </p>
              <a href="tel:+77074852328" class="text-xl text-blue-600 font-bold transition hover:text-blue-700">
                +7 (707) 485-23-28
              </a>
            </div>
          </div>

          <div class="p-5 border border-gray-200 rounded-xl bg-white flex gap-4 shadow-sm items-center">
            <span class="text-green-600 rounded-full bg-green-100 flex h-12 min-w-12 items-center justify-center" aria-hidden="true">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M5.2 19.1 6 16.2A8 8 0 1 1 9 19l-3.8.1Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 1.9.2.1.4 0 .5-.1l.5-.6c.2-.2.4-.2.7-.1l1.4.7c.4.2.4.4.4.6 0 .5-.3 1-.8 1.3-.5.3-1.5.4-3.2-.4-2.7-1.2-4.4-3.6-4.6-4.9-.2-.8.1-1.3.4-1.5Z" fill="currentColor" />
              </svg>
            </span>
            <div>
              <p class="text-sm text-gray-500 font-medium">
                WhatsApp
              </p>
              <a
                href="https://wa.me/77074852328"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl text-green-600 font-bold transition hover:text-green-700"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div class="p-5 border border-gray-200 rounded-xl bg-white flex gap-4 shadow-sm items-center">
            <span class="text-yellow-600 rounded-full bg-yellow-100 flex h-12 min-w-12 items-center justify-center" aria-hidden="true">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                <path d="M12 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" stroke="currentColor" stroke-width="1.8" />
              </svg>
            </span>
            <div>
              <p class="text-sm text-gray-500 font-medium">
                Адрес
              </p>
              <p class="text-xl text-gray-800 font-bold">
                Ул. Казыбаева 262
              </p>
            </div>
          </div>
        </div>

        <!-- Правая колонка: описание компании -->
        <div class="p-6 border-l-4 border-yellow-400 rounded-xl bg-white shadow-md">
          <h3 class="text-2xl text-blue-700 font-bold mb-4">
            О компании TAUBETON
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            TAUBETON — это надёжный поставщик качественного бетона с современным подходом к строительству.
            Мы работаем как с частными клиентами, так и с крупными подрядчиками, предлагая проверенный материал,
            точные сроки и открытые условия сотрудничества.
          </p>
          <ul class="text-base text-gray-800 mt-4 pl-5 list-disc space-y-2">
            <li><span class="text-blue-600 font-medium">Точное соблюдение марки бетона</span></li>
            <li><span class="text-yellow-600 font-medium">Доставка точно в срок</span></li>
            <li><span class="text-blue-600 font-medium">Честная цена без скрытых наценок</span></li>
            <li><span class="text-yellow-600 font-medium">Прямой контакт с производством</span></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ФУТЕР -->
    <footer class="py-6 border-t border-gray-200 bg-white">
      <div class="text-sm text-gray-600 mx-auto px-4 flex flex-col gap-4 items-center justify-between container sm:flex-row">
        <div class="text-center sm:text-left">
          © {{ new Date().getFullYear() }} «TAUBETON». Все права защищены.
        </div>
        <div class="text-center space-x-4 sm:text-right">
          <a href="#about" class="hover:text-yellow-600">О нас</a>
          <a href="#assoritment" class="hover:text-yellow-600">Ассортимент</a>
          <a href="#contacts" class="hover:text-yellow-600">Контакты</a>
        </div>
      </div>
    </footer>
  </section>
</template>
