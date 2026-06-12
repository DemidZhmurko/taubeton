<script setup lang="ts">
interface ProductItem {
  image: string
  price?: string
  note?: string
  description: string
  features: string[]
}

const products: ProductItem[] = [
  {
    image: '/marks/100.webp',
    note: 'Бетон B 7.5 (M100)',
    price: '17 000',
    description: 'Подходит для подготовительных работ, бетонной подушки и чернового основания.',
    features: ['Для подготовительных работ', 'Экономичный вариант', 'Перед основным бетонированием'],
  },
  {
    image: '/marks/150.webp',
    note: 'Бетон B 12.5 (M150)',
    price: '18 000',
    description: 'Используется для стяжек, садовых дорожек, площадок и лёгких конструкций.',
    features: ['Для стяжек и дорожек', 'Прочность для бытовых задач', 'Для частного строительства'],
  },
  {
    image: '/marks/200.webp',
    note: 'Бетон B 15 (M200)',
    price: '19 000',
    description: 'Универсальный бетон для лестниц, отмостки, площадок и ненагруженных фундаментов.',
    features: ['Универсальное применение', 'Для частных объектов', 'Баланс цены и прочности'],
  },
  {
    image: '/marks/250.webp',
    note: 'Бетон B 20 (M250)',
    price: '20 000',
    description: 'Подходит для фундаментов частных домов, плит и монолитных конструкций.',
    features: ['Для фундаментов', 'Повышенная прочность', 'Для малоэтажного строительства'],
  },
  {
    image: '/marks/300.webp',
    note: 'Бетон B 22.5 (M300)',
    price: '21 000',
    description: 'Один из самых популярных вариантов для фундаментов, перекрытий и монолитных работ.',
    features: ['Популярный выбор', 'Для фундамента и монолита', 'Устойчив к нагрузкам'],
  },
  {
    image: '/marks/350.webp',
    note: 'Бетон B 25 (M350)',
    price: '22 000',
    description: 'Применяется для ответственных конструкций, плит, колонн и объектов с высокой нагрузкой.',
    features: ['Для серьёзных нагрузок', 'Для коммерческих объектов', 'Высокая прочность'],
  },
  {
    image: '/marks/400.webp',
    note: 'Бетон B 30 (M400)',
    price: '23 000',
    description: 'Используется для промышленных объектов, мостов, гидротехнических и особо прочных конструкций.',
    features: ['Максимальная прочность', 'Для промышленных задач', 'Для сложных объектов'],
  },
  {
    image: '/marks/450.webp',
    note: 'Бетон B 35 (M450)',
    price: '24 000',
    description: 'Выбирают для особо ответственных конструкций, где нужна высокая марочная прочность.',
    features: ['Для высоких нагрузок', 'Усиленные конструкции', 'Профессиональное строительство'],
  },
]
</script>

<template>
  <section id="assortment" class="py-16 bg-gray-100">
    <div class="mx-auto px-4 container">
      <h2 class="text-3xl font-bold mb-4 text-center">
        Марки бетона с доставкой по Алматы
      </h2>
      <p class="text-gray-600 mx-auto mb-10 text-center max-w-xl">
        Подберите подходящую марку товарного бетона для фундамента, стяжки, дорожек, монолитных и промышленных работ.
      </p>

      <div class="gap-6 grid grid-cols-1 items-stretch lg:grid-cols-3 sm:grid-cols-2">
        <div
          v-for="(item, i) in products"
          :key="i"
          class="p-6 rounded-xl bg-white flex flex-col h-full shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="text-center flex flex-col items-center">
            <div class="mb-4">
              <img
                :src="item.image"
                :alt="item.note"
                class="border border-gray-200 rounded-full h-24 w-24 shadow-sm object-contain"
              >
            </div>
            <h3 class="text-lg text-gray-900 font-bold">
              {{ item.note }}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed mt-3">
              {{ item.description }}
            </p>
          </div>

          <ul class="text-sm text-gray-700 mt-5 space-y-3">
            <li
              v-for="feature in item.features"
              :key="feature"
              class="flex gap-2 items-start"
            >
              <span class="text-blue-600 mt-0.5 rounded-full bg-blue-100 flex h-5 min-w-5 items-center justify-center">
                <span class="text-xs leading-none font-bold">✓</span>
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="mt-auto pt-6 flex flex-col gap-4 items-center">
            <div class="text-gray-700 flex items-center justify-center">
              от <span class="text-xl text-gray-900 font-bold ml-2">{{ item.price }}</span>
              <span class="text-lg text-gray-500 ml-1">₸</span>
            </div>
            <OrderComponent />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
