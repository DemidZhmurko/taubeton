<script setup lang="ts">

</script>

<template>
  <section id="about" class="py-20 bg-gray-50 md:py-24">
    <div class="mx-auto px-4 container">
      <div class="p-5 border border-gray-200 rounded-3xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:p-10 sm:p-8">
        <!-- Заголовок -->
        <div class="mx-auto mb-12 text-center max-w-3xl md:mb-14">
          <span class="text-sm text-blue-600 tracking-wide font-semibold px-4 py-2 rounded-full bg-blue-50 inline-flex uppercase">
            TAUBETON
          </span>
          <h2 class="text-3xl text-gray-950 leading-tight font-bold mt-4 md:text-5xl">
            О компании и наши преимущества
          </h2>
          <div class="mx-auto mt-5 rounded-full bg-blue-600 h-1 w-20" aria-hidden="true" />
        </div>

        <!-- Преимущества -->
        <div class="mb-10 gap-5 grid grid-cols-1 md:mb-12 lg:grid-cols-4 sm:grid-cols-2">
          <div class="group p-6 text-center border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-blue-50 flex h-14 w-14 transition items-center justify-center group-hover:scale-105">
              🚛
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Собственный автопарк
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Гарантируем своевременную доставку без посредников.
            </p>
          </div>
          <div class="group p-6 text-center border border-gray-200 rounded-2xl bg-gray-50/70 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-white flex h-14 w-14 shadow-sm transition items-center justify-center group-hover:scale-105">
              ⏱️
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Доставка в день заказа
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Оперативно поставим бетон прямо на ваш объект.
            </p>
          </div>
          <div class="group bg-gradient-to-br p-6 text-center border border-blue-100 rounded-2xl shadow-sm transition-all duration-300 from-blue-50/80 to-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-white flex h-14 w-14 shadow-sm transition items-center justify-center group-hover:scale-105">
              💰
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Работаем с юр. и физ. лицами
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Любая форма оплаты — наличный и безналичный расчёт.
            </p>
          </div>
          <div class="group p-6 text-center border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-blue-50 flex h-14 w-14 transition items-center justify-center group-hover:scale-105">
              🕐
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Круглосуточная работа
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Принимаем и выполняем заказы 24/7, без выходных.
            </p>
          </div>
        </div>

        <!-- Дополнительные факты о компании -->
        <div class="gap-5 grid grid-cols-1 md:grid-cols-3">
          <div class="group p-6 text-center border border-gray-200 rounded-2xl bg-gray-50/70 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-white flex h-14 w-14 shadow-sm transition items-center justify-center group-hover:scale-105">
              🏗️
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Опыт в строительстве
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Более 10 лет и десятки реализованных проектов.
            </p>
          </div>
          <div class="group p-6 text-center border border-blue-100 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-blue-50 flex h-14 w-14 transition items-center justify-center group-hover:scale-105">
              🤝
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Надёжные партнёры
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Работаем напрямую с бетонными и щебёночными заводами.
            </p>
          </div>
          <div class="group bg-gradient-to-br p-6 text-center border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 from-white to-blue-50/70 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
            <div class="text-3xl mx-auto mb-5 rounded-2xl bg-white flex h-14 w-14 shadow-sm transition items-center justify-center group-hover:scale-105">
              📄
            </div>
            <h3 class="text-lg text-gray-950 font-semibold mb-2">
              Сертификаты качества
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Продукция сертифицирована по ГОСТ и ТР РК.
            </p>
          </div>
        </div>

        <!-- Сертификаты -->
      </div>
    </div>
  </section>
</template>
