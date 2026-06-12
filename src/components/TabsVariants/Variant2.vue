<script setup lang="ts">
import { computed, ref } from 'vue'

const a = ref<number | null>(null)
const b = ref<number | null>(null)
const c = ref<number | null>(null)
const d = ref<number | null>(null)

const volume = computed(() => {
  if (a.value && b.value && c.value && d.value) {
    const result = (2 * a.value + 3 * b.value) * (c.value / 100) * (d.value / 100)
    return result.toFixed(2)
  }
  return '0'
})
</script>

<template>
  <div class="py-6">
    <div class="gap-6 grid lg:grid-cols-[1.1fr_0.9fr]">
      <div class="p-1 rounded-xl bg-white">
        <div class="mb-5">
          <h3 class="text-2xl text-gray-900 font-bold">
            Лента с внутренними перемычками
          </h3>
          <p class="text-sm text-gray-500 mt-2">
            Подходит для расчёта фундамента с несколькими внутренними участками.
          </p>
        </div>

        <div class="gap-4 grid sm:grid-cols-2">
          <label class="block">
            <span class="text-sm text-gray-700 font-medium">Длина A, м</span>
            <input
              v-model.number="a"
              type="number"
              step="0.01"
              placeholder="Например: 6"
              class="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50 w-full transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            >
          </label>
          <label class="block">
            <span class="text-sm text-gray-700 font-medium">Ширина B, м</span>
            <input
              v-model.number="b"
              type="number"
              step="0.01"
              placeholder="Например: 4"
              class="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50 w-full transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            >
          </label>
          <label class="block">
            <span class="text-sm text-gray-700 font-medium">Высота C, см</span>
            <input
              v-model.number="c"
              type="number"
              step="1"
              placeholder="Например: 60"
              class="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50 w-full transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            >
          </label>
          <label class="block">
            <span class="text-sm text-gray-700 font-medium">Ширина D, см</span>
            <input
              v-model.number="d"
              type="number"
              step="1"
              placeholder="Например: 40"
              class="mt-2 p-4 border border-gray-200 rounded-lg bg-gray-50 w-full transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            >
          </label>
        </div>
      </div>

      <div class="p-5 rounded-xl bg-gray-50 flex flex-col gap-5">
        <div class="p-3 rounded-lg bg-white flex min-h-56 shadow-sm items-center justify-center">
          <img
            src="https://optim.tildacdn.pro/tild3336-6334-4832-b231-356363326632/-/resize/720x/-/format/webp/2.jpg.webp"
            alt="Ленточный фундамент с перегородками"
            class="max-h-64 max-w-full object-contain"
          >
        </div>
        <div class="text-white p-5 rounded-xl bg-blue-600 shadow-md">
          <p class="text-sm text-blue-100">
            Необходимый объём
          </p>
          <p class="text-4xl font-bold mt-2">
            {{ volume }} м³
          </p>
          <p class="text-sm text-blue-50 leading-relaxed mt-3">
            Рекомендуем добавить 5–10% запаса на потери и неровности основания.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
