<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'
import { defineLocalBusiness, defineWebPage, defineWebSite, useSchemaOrg } from '@vueuse/schema-org'
import { ref } from 'vue'

defineOptions({
  name: 'IndexPage',
})

const faqItems = [
  {
    question: 'Сколько стоит бетон с доставкой в Алматы?',
    answer: 'Цена бетона зависит от марки, объёма заказа и района доставки. Чтобы узнать точную стоимость бетона за куб с доставкой по Алматы, оставьте заявку или свяжитесь с нами по телефону.',
  },
  {
    question: 'Какую марку бетона выбрать для фундамента?',
    answer: 'Для фундамента частного дома чаще всего используют бетон М250 или М300. Точная марка зависит от проекта, нагрузки, типа грунта и назначения конструкции.',
  },
  {
    question: 'Чем отличается бетон М200 от М300?',
    answer: 'Бетон М300 прочнее и лучше подходит для фундаментов, плит, монолитных работ и конструкций с повышенной нагрузкой. М200 чаще используют для стяжек, дорожек и менее нагруженных элементов.',
  },
  {
    question: 'Можно ли заказать бетон небольшим объёмом?',
    answer: 'Да, можно заказать бетон как для небольших частных работ, так и для крупных строительных объектов. Минимальный объём лучше уточнить у менеджера.',
  },
  {
    question: 'Как быстро осуществляется доставка бетона?',
    answer: 'Доставка бетона по Алматы обычно выполняется в день заказа или на следующий день, в зависимости от загруженности и доступности миксеров.',
  },
  {
    question: 'Как рассчитать нужный объём бетона?',
    answer: 'Чтобы рассчитать объём бетона, нужно умножить длину, ширину и высоту конструкции. Если вы не уверены в расчётах, мы поможем рассчитать нужное количество бесплатно.',
  },
  {
    question: 'Есть ли документы и сертификаты на бетон?',
    answer: 'Да, товарный бетон поставляется с необходимыми документами, подтверждающими качество продукции.',
  },
  {
    question: 'Можно ли заказать бетон с доставкой на объект?',
    answer: 'Да, вы можете заказать бетон с доставкой прямо на строительный объект в Алматы и ближайшие районы.',
  },
]

const activeFaqIndex = ref(0)

function toggleFaq(index: number) {
  activeFaqIndex.value = activeFaqIndex.value === index ? -1 : index
}

// ✅ FAQ Schema (JSON-LD)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqItems.map(item => ({
    '@type': 'Question',
    'name': item.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.answer,
    },
  })),
}

// ✅ Head (GA + FAQ)
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://taubeton.kz/',
    },
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-EK35CW4WFV',
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){ dataLayer.push(arguments); };

        gtag('js', new Date());

        gtag('config', 'G-EK35CW4WFV', {
          page_path: window.location.pathname
        });

        gtag('config', 'AW-17169847962');
      `,
      type: 'text/javascript',
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema),
    },
  ],
})

// ✅ SEO Meta (под TAUBETON)
useSeoMeta({
  title: 'Бетон в Алматы с доставкой | Купить товарный бетон — TAUBETON',
  description: 'TAUBETON поставляет товарный бетон в Алматы и ближайшие районы. Марки М100–М400, доставка миксером, бетон для фундамента, плит, стяжек и монолитных работ.',
  robots: 'index, follow',
  ogType: 'website',
  ogTitle: 'Бетон в Алматы с доставкой — TAUBETON',
  ogDescription: 'Товарный бетон М100–М400 с доставкой по Алматы. Бетон для фундамента, плит, стяжек и монолитных работ.',
  ogUrl: 'https://taubeton.kz',
  ogSiteName: 'TAUBETON',
  twitterCard: 'summary',
  twitterTitle: 'Бетон в Алматы с доставкой — TAUBETON',
  twitterDescription: 'Купить товарный бетон М100–М400 с доставкой миксером по Алматы и ближайшим районам.',
})

// ✅ Schema.org
useSchemaOrg([
  defineWebPage({
    name: 'Бетон в Алматы с доставкой | TAUBETON',
    description: 'Купить товарный бетон в Алматы с доставкой миксером. Марки М100, М150, М200, М250, М300, М350 и М400 для фундамента, плит и стяжек.',
  }),

  defineWebSite({
    name: 'TAUBETON',
    url: 'https://taubeton.kz',
    description: 'Товарный бетон в Алматы с доставкой для частных и коммерческих строительных объектов.',
  }),

  defineLocalBusiness({
    name: 'TAUBETON',
    url: 'https://taubeton.kz',
    image: 'https://taubeton.kz/logo.png',
    telephone: '+77074852328',
    description: 'Поставка товарного бетона М100–М400 с доставкой по Алматы и ближайшим районам.',
    address: {
      streetAddress: 'Ул. Казыбаева 262',
      addressLocality: 'Алматы',
      addressCountry: 'KZ',
    },
    openingHours: ['Mo-Sa 08:00-20:00'],
  }),
])
</script>

<template>
  <!-- Hero -->
  <section
    id="hero"
    class="bg-[url('/background.png')] flex min-h-screen items-center relative bg-cover bg-center scroll-mt-16"
  >
    <div class="bg-black/60 inset-0 absolute z-0" aria-hidden="true" />
    <div class="mx-auto px-4 relative z-10 container">
      <div class="md:items-left text-white py-12 flex flex-col min-h-[70vh] items-start justify-center md:text-left md:w1/2">
        <div class="text-center w-full space-y-6 md:text-left">
          <h1 class="text-2xl leading-tight font-bold md:text-6xl sm:text-5xl">
            Бетон в Алматы с доставкой
          </h1>
          <p class="text-base sm:text-lg">
            Компания «TAUBETON» занимается производством и доставкой бетона и строительных растворов по всей территории Казахстана, гарантируя высокое качество продукции и соблюдение сроков
          </p>
          <div class="mt-6">
            <RequestModal />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Калькулятор -->
  <section id="calc" class="scroll-mt-16">
    <CalcTabs />
  </section>

  <!-- Ассортимент -->
  <section id="assortiment" class="scroll-mt-16">
    <ProductGrid />
  </section>

  <!-- Автобетононасосы -->
  <section id="pumps" class="scroll-mt-16">
    <Pumps />
  </section>

  <!-- О компании -->
  <section id="about" class="scroll-mt-16">
    <AboutUs />
  </section>
  <!-- FAQ -->
  <section class="py-16 bg-gray-50 scroll-mt-16">
    <div class="mx-auto px-4 max-w-5xl container">
      <div class="mb-10 text-center">
        <span class="text-sm text-blue-600 tracking-wide font-semibold uppercase">FAQ</span>
        <h2 class="text-2xl text-gray-900 font-bold mt-3 md:text-4xl">
          Часто задаваемые вопросы о бетоне
        </h2>
        <p class="text-gray-600 leading-relaxed mx-auto mt-4 max-w-2xl">
          Собрали ответы про бетон Алматы, доставку, цену бетона за куб и подбор марки под фундамент или монолитные работы.
        </p>
      </div>

      <div class="gap-4 grid">
        <article
          v-for="(item, index) in faqItems"
          :key="item.question"
          class="border border-gray-200 rounded-xl bg-white shadow-sm transition-all duration-300 overflow-hidden hover:border-blue-200 hover:shadow-md"
        >
          <button
            class="p-5 text-left flex gap-4 w-full items-start justify-between sm:p-6"
            :aria-expanded="activeFaqIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="toggleFaq(index)"
          >
            <span class="text-base text-gray-900 leading-snug font-semibold sm:text-lg">
              {{ item.question }}
            </span>
            <span
              class="border rounded-full flex h-8 min-w-8 transition-all duration-300 items-center justify-center"
              :class="activeFaqIndex === index ? 'rotate-45 border-blue-600 bg-blue-600 text-white' : 'border-gray-200 bg-gray-50 text-blue-600'"
              aria-hidden="true"
            >
              <span class="text-xl leading-none">+</span>
            </span>
          </button>

          <div
            :id="`faq-answer-${index}`"
            class="grid transition-all duration-300 ease-in-out"
            :class="activeFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="text-gray-600 leading-relaxed px-5 pb-5 sm:px-6 sm:pb-6">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-8 p-6 border border-blue-100 rounded-xl bg-white flex flex-col gap-5 shadow-sm items-start justify-between sm:flex-row sm:items-center">
        <div>
          <h3 class="text-xl text-gray-900 font-bold">
            Не нашли ответ на свой вопрос?
          </h3>
          <p class="text-gray-600 leading-relaxed mt-2">
            Оставьте заявку — мы бесплатно проконсультируем и поможем подобрать марку бетона под ваш объект.
          </p>
        </div>

        <div class="flex flex-col gap-3 w-full sm:flex-row sm:w-auto">
          <RequestModal button-text="Получить консультацию" />
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
  </section>
  <!-- Контакты -->
  <section id="contacts" class="scroll-mt-16">
    <Contacs />
  </section>
</template>
