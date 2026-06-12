<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface NavItem {
  name: string
  href: string
}

const navItems = ref<NavItem[]>([
  { name: 'Бетон', href: '#assortiment' },
  { name: 'О нас', href: '#about' },
  { name: 'Услуги', href: '#pumps' },
  { name: 'Контакты', href: '#contacts' },
])

const isMobileMenuOpen = ref(false)
const isReady = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 100)

  window.addEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="bg-gray-100 w-full transition-all duration-500 top-0 sticky z-50"
    :class="[
      isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
      isScrolled ? 'shadow-lg' : 'shadow-md',
    ]"
  >
    <div class="mx-auto px-4 py-1 flex items-center justify-between container">
      <!-- Логотип -->
      <a href="/" class="flex items-center">
        <div class="p-2 rounded bg-blue-500 overflow-hidden">
          <img src="/logo.png" alt="Logo" class="h-20 w-35 scale-140 transform object-cover">
        </div>
      </a>

      <div class="w-[70%] block">
        <div class="border-concrete pb-2 border-b-2 border-gray-300 hidden md:block">
          <ul class="text-sm text-gray-700 flex justify-between space-x-4">
            <li>РК, г. Алматы, Улица Казыбаева, 262</li>
            <li class="flex items-center">
              <span class="text-green-600 mr-2 rounded-full bg-green-100 flex h-6 w-6 items-center justify-center" aria-hidden="true">
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <a href="tel:+77074852328" class="transition hover:underline">
                +7 (707) 485-23-28
              </a>
            </li>
            <!-- почта -->
            <li><a href="malto:demidbeton@mail.ru" class="hover:underline" />taubetonkz@mail.ru</li>
          </ul>
        </div>
        <!-- Десктоп-навигация -->
        <nav class="ml-auto pt-2 w-[70%] hidden space-x-8 md:flex md:justify-between">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-700 transition hover:text-blue-600"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>

      <!-- Мобильный блок -->
      <div class="flex items-center space-x-4 md:hidden">
        <a
          href="tel:+7(707)485-23-28"
          class="text-gray-700 font-semibold flex transition items-center hover:text-blue-600"
        >
          <span class="text-green-600 mr-2 rounded-full bg-green-100 flex h-7 w-7 items-center justify-center" aria-hidden="true">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="text-sm">Позвонить</span>
        </a>

        <!-- Бургер -->
        <div
          class="text-3xl text-gray-700 flex h-8 w-8 cursor-pointer transition-all duration-300 items-center justify-center"
          @click="toggleMobileMenu"
        >
          <span aria-hidden="true">{{ isMobileMenuOpen ? '×' : '☰' }}</span>
        </div>
      </div>
    </div>

    <!-- Мобильное меню -->
    <transition name="fade-scale">
      <nav
        v-if="isMobileMenuOpen"
        class="bg-white shadow-lg md:hidden"
      >
        <ul class="py-6 flex flex-col items-center space-y-6">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-lg text-gray-700 transition hover:text-red-600"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </a>
          </li>
          <li>
            <RequestModal />
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
/* Плавная анимация fade + scale для мобильного меню */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Плавная анимация появления хедера */
</style>
