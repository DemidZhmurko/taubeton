<script setup lang="ts">
import type { Component } from 'vue'
import { ref } from 'vue'

import Floor from './TabsVariants/Floor.vue'
import Variant1 from './TabsVariants/Variant1.vue'
import Variant2 from './TabsVariants/Variant2.vue'
import Variant3 from './TabsVariants/Variant3.vue'
import Variant4 from './TabsVariants/Variant4.vue'

const tabs = ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4', 'Напольное покрытие'] as const
type TabKey = typeof tabs[number]
const activeTab = ref<TabKey>('Вариант 1')

const components: Record<TabKey, Component> = {
  'Вариант 1': Variant1,
  'Вариант 2': Variant2,
  'Вариант 3': Variant3,
  'Вариант 4': Variant4,
  'Напольное покрытие': Floor,
}
</script>

<template>
  <div class="py-16 bg-gray-50">
    <div class="mx-auto px-4 container">
      <div class="mx-auto mb-10 text-center max-w-3xl">
        <span class="text-sm text-blue-600 tracking-wide font-semibold uppercase">Онлайн-расчёт</span>
        <h2 class="text-3xl text-gray-900 font-bold mt-3 md:text-5xl">
          Калькулятор бетона
        </h2>
        <p class="text-base text-gray-600 leading-relaxed mt-4 md:text-lg">
          Рассчитайте примерный объём бетона для фундамента, плиты, стяжки или другой конструкции.
        </p>
        <p class="text-sm text-gray-500 leading-relaxed mt-3">
          Онлайн-калькулятор помогает быстро рассчитать примерный объём бетона в кубометрах для строительных работ.
        </p>
      </div>

      <div class="mx-auto p-4 border border-gray-200 rounded-xl bg-white max-w-6xl shadow-lg md:p-6">
        <!-- Табы -->
        <div class="p-2 rounded-xl bg-gray-100 flex flex-col gap-2 md:flex-row">
          <button
            v-for="tab in tabs"
            :key="tab"
            class="text-sm font-medium px-4 py-3 rounded-lg flex-1 transition-all duration-300"
            :class="[
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 bg-transparent hover:bg-white hover:text-blue-600',
            ]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Компонент -->
        <keep-alive>
          <component :is="components[activeTab]" />
        </keep-alive>

        <div class="mt-6 p-5 border border-blue-100 rounded-xl bg-blue-50/70 flex flex-col gap-4 items-start justify-between md:flex-row md:items-center">
          <div>
            <h3 class="text-lg text-gray-900 font-bold">
              Хотите точную стоимость с доставкой?
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed mt-1">
              Оставьте заявку — мы рассчитаем объём, марку бетона и стоимость доставки по Алматы.
            </p>
          </div>
          <div class="flex flex-col gap-3 w-full sm:flex-row md:w-auto">
            <RequestModal button-text="Получить точный расчёт" />
            <a
              href="https://wa.me/77074852328"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white font-semibold px-6 py-3 text-center rounded-lg bg-green-500 shadow-md transition-all hover:bg-green-600"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
