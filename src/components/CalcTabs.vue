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

const isCalculatorOpen = ref(false)

function toggleCalculator() {
  isCalculatorOpen.value = !isCalculatorOpen.value
}

function beforeEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.opacity = '0'
  element.style.overflow = 'hidden'
}

function enter(el: Element) {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`
    element.style.opacity = '1'
  })
}

function afterEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = 'auto'
  element.style.overflow = 'visible'
}

function beforeLeave(el: Element) {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  element.style.opacity = '1'
  element.style.overflow = 'hidden'
}

function leave(el: Element) {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    element.style.height = '0'
    element.style.opacity = '0'
  })
}
</script>

<template>
  <div class="py-16 bg-gray-50">
    <div class="mx-auto px-4 container">
      <div class="mx-auto p-6 text-center border border-blue-100 rounded-xl bg-white max-w-4xl shadow-md md:p-8">
        <h2 class="text-3xl text-gray-900 font-bold md:text-4xl">
          Калькулятор бетона
        </h2>
        <p class="text-base text-gray-600 leading-relaxed mx-auto mt-3 max-w-2xl">
          Быстро рассчитайте необходимый объём бетона для фундамента, плиты, стяжки и других строительных работ.
        </p>
        <button
          class="text-lg text-white font-semibold mt-6 px-8 py-4 rounded-lg bg-blue-600 shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          :aria-expanded="isCalculatorOpen"
          @click="toggleCalculator"
        >
          {{ isCalculatorOpen ? 'Скрыть калькулятор' : 'Открыть калькулятор' }}
        </button>
      </div>

      <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="isCalculatorOpen" class="transition-all duration-500 ease-in-out">
          <div class="pt-8">
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
      </Transition>
    </div>
  </div>
</template>
