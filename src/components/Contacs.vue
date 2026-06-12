<script setup lang="ts">
</script>

<template>
  <section id="contacts" class="pt-20 bg-gray-50">
    <div class="mx-auto px-4 container">
      <div class="rounded-3xl bg-white ring-1 ring-gray-200 shadow-[0_24px_80px_rgba(15,23,42,0.10)] overflow-hidden">
        <div class="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div class="text-white p-6 bg-gray-950 lg:p-12 md:p-10">
            <span class="text-sm text-yellow-300 tracking-wide font-semibold px-4 py-2 rounded-full bg-white/10 inline-flex uppercase ring-1 ring-white/15">
              TAUBETON
            </span>

            <h2 class="text-3xl leading-tight font-bold mt-6 md:text-5xl">
              Свяжитесь с TAUBETON
            </h2>

            <p class="text-base text-gray-200 leading-relaxed mt-5 max-w-xl md:text-lg">
              Закажите бетон с доставкой по Алматы — рассчитаем объём, подберём марку и согласуем удобное время подачи миксера.
            </p>

            <div class="mt-8 py-7 border-y border-white/10 space-y-4">
              <p class="text-base text-gray-200 leading-relaxed">
                TAUBETON — поставщик товарного бетона с доставкой по Алматы и ближайшим районам. Работаем с частным строительством, строительными бригадами и коммерческими объектами.
              </p>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+77074852328"
                class="text-gray-950 font-semibold px-6 py-3 text-center rounded-xl bg-yellow-400 inline-flex min-h-12 shadow-lg shadow-yellow-500/20 transition items-center justify-center focus:outline-none hover:bg-yellow-300 focus:ring-3 focus:ring-yellow-200"
              >
                Позвонить
              </a>
              <a
                href="https://wa.me/77074852328"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white font-semibold px-6 py-3 text-center rounded-xl bg-green-500 inline-flex min-h-12 shadow-green-900/20 shadow-lg transition items-center justify-center focus:outline-none hover:bg-green-600 focus:ring-3 focus:ring-green-200"
              >
                Написать в WhatsApp
              </a>
              <RequestModal button-text="Оставить заявку" />
            </div>
          </div>

          <div class="p-5 bg-gray-50/80 lg:p-10 md:p-8">
            <div class="gap-4 grid sm:grid-cols-2">
              <article class="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div class="flex gap-4 items-start">
                  <span class="text-blue-600 rounded-xl bg-blue-50 flex shrink-0 h-12 w-12 items-center justify-center" aria-hidden="true">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm text-gray-500 tracking-wide font-semibold uppercase">
                      Телефон
                    </p>
                    <a href="tel:+77074852328" class="text-xl text-gray-950 font-bold mt-2 block transition hover:text-blue-600">
                      +7 (707) 485-23-28
                    </a>
                  </div>
                </div>
              </article>

              <article class="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div class="flex gap-4 items-start">
                  <span class="text-green-600 rounded-xl bg-green-50 flex shrink-0 h-12 w-12 items-center justify-center" aria-hidden="true">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M5.2 19.1 6 16.2A8 8 0 1 1 9 19l-3.8.1Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 1.9.2.1.4 0 .5-.1l.5-.6c.2-.2.4-.2.7-.1l1.4.7c.4.2.4.4.4.6 0 .5-.3 1-.8 1.3-.5.3-1.5.4-3.2-.4-2.7-1.2-4.4-3.6-4.6-4.9-.2-.8.1-1.3.4-1.5Z" fill="currentColor" />
                    </svg>
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm text-gray-500 tracking-wide font-semibold uppercase">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/77074852328"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-xl text-gray-950 font-bold mt-2 block transition hover:text-green-600"
                    >
                      Написать в WhatsApp
                    </a>
                  </div>
                </div>
              </article>

              <article class="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div class="flex gap-4 items-start">
                  <span class="text-yellow-600 rounded-xl bg-yellow-50 flex shrink-0 h-12 w-12 items-center justify-center" aria-hidden="true">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                      <path d="M12 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" stroke="currentColor" stroke-width="1.8" />
                    </svg>
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm text-gray-500 tracking-wide font-semibold uppercase">
                      Адрес / зона доставки
                    </p>
                    <p class="text-xl text-gray-950 font-bold mt-2">
                      Ул. Казыбаева 262
                    </p>
                    <p class="text-sm text-gray-600 leading-relaxed mt-2">
                      Доставка по Алматы и ближайшим районам.
                    </p>
                  </div>
                </div>
              </article>

              <article class="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <div class="flex gap-4 items-start">
                  <span class="text-blue-600 rounded-xl bg-blue-50 flex shrink-0 h-12 w-12 items-center justify-center" aria-hidden="true">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-width="1.8" />
                    </svg>
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm text-gray-500 tracking-wide font-semibold uppercase">
                      Время работы
                    </p>
                    <p class="text-xl text-gray-950 font-bold mt-2">
                      Пн-Сб 08:00-20:00
                    </p>
                    <p class="text-sm text-gray-600 leading-relaxed mt-2">
                      Заявки принимаем ежедневно.
                    </p>
                  </div>
                </div>
              </article>

              <article class="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm transition sm:col-span-2 hover:shadow-md hover:-translate-y-0.5">
                <div class="flex gap-4 items-start">
                  <span class="text-gray-700 rounded-xl bg-gray-100 flex shrink-0 h-12 w-12 items-center justify-center" aria-hidden="true">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                      <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm text-gray-500 tracking-wide font-semibold uppercase">
                      Email
                    </p>
                    <a href="mailto:taubetonkz@mail.ru" class="text-xl text-gray-950 font-bold mt-2 block break-words transition hover:text-blue-600">
                      taubetonkz@mail.ru
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ФУТЕР -->
    <footer class="mt-20 py-6 border-t border-gray-200 bg-white">
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
