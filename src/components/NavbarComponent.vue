<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

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

function closeMobileMenu() {
  isMobileMenuOpen.value = false
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

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="border-b border-gray-200/80 bg-white/92 w-full transition-all duration-500 top-0 sticky z-50 backdrop-blur-xl"
    :class="[
      isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
      isScrolled ? 'shadow-[0_14px_34px_rgba(15,23,42,0.10)]' : 'shadow-sm',
    ]"
  >
    <div class="mx-auto px-4 py-2 flex gap-3 min-h-18 items-center justify-between container lg:gap-8 lg:min-h-22">
      <a
        href="/"
        class="rounded-xl flex shrink-0 cursor-pointer transition-all duration-300 ease-out items-center hover:shadow-md hover:scale-[1.03] hover:-translate-y-0.5"
        aria-label="TAUBETON"
      >
        <div class="px-1.5 py-1 border border-gray-200/80 rounded-xl bg-white/95 flex h-11 w-32 shadow-sm transition-colors duration-300 items-center justify-center overflow-hidden hover:border-blue-200 lg:h-15 lg:w-44 sm:h-12 sm:w-36">
          <img src="/logo-navbar.png" alt="TAUBETON" class="h-full w-full object-contain">
        </div>
      </a>

      <div class="flex-1 min-w-0 hidden md:block">
        <div class="text-sm text-gray-600 pb-2 border-b border-gray-200 flex gap-5 items-center justify-end lg:justify-between">
          <p class="hidden truncate lg:block">
            РК, г. Алматы, Улица Казыбаева, 262
          </p>

          <div class="flex gap-4 min-w-0 items-center xl:gap-6">
            <a href="mailto:taubetonkz@mail.ru" class="hidden truncate transition hover:text-blue-600 xl:inline">
              taubetonkz@mail.ru
            </a>
            <a href="tel:+77074852328" class="text-gray-800 font-semibold inline-flex shrink-0 gap-2 transition items-center hover:text-blue-600">
              <span class="text-green-600 rounded-full bg-green-100 flex h-7 w-7 items-center justify-center" aria-hidden="true">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              +7 (707) 485-23-28
            </a>
          </div>
        </div>

        <div class="pt-3 flex gap-5 items-center justify-between">
          <nav class="flex gap-1 min-w-0 items-center">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              class="text-sm text-gray-700 font-semibold px-3 py-2 rounded-lg transition hover:text-blue-600 lg:px-4 hover:bg-gray-100"
            >
              {{ item.name }}
            </a>
          </nav>

          <RequestModal button-text="Оставить заявку" />
        </div>
      </div>

      <div class="flex shrink-0 gap-2 items-center md:hidden">
        <a
          href="tel:+77074852328"
          class="text-sm text-gray-800 font-semibold px-3 border border-gray-200 rounded-xl bg-white inline-flex gap-2 h-11 shadow-sm transition items-center justify-center hover:text-blue-600 hover:border-blue-200"
          aria-label="Позвонить"
        >
          <span class="text-green-600 rounded-full bg-green-100 flex h-7 w-7 items-center justify-center" aria-hidden="true">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.7 0 1.3.6 1.3 1.3v3.4c0 .7-.6 1.3-1.3 1.3C10.3 21.4 2.6 13.7 2.6 4.3 2.6 3.6 3.2 3 3.9 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="hidden sm:inline">Позвонить</span>
        </a>

        <button
          class="text-gray-800 border border-gray-200 rounded-xl bg-white flex h-11 w-11 shadow-sm transition items-center justify-center hover:text-blue-600 hover:border-blue-200"
          type="button"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Открыть меню"
          @click="toggleMobileMenu"
        >
          <svg v-if="!isMobileMenuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <transition name="fade-scale">
      <nav
        v-if="isMobileMenuOpen"
        id="mobile-nav"
        class="px-4 pb-4 md:hidden"
      >
        <ul class="mx-auto p-3 border border-gray-200 rounded-2xl bg-white max-w-md shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-base text-gray-800 font-semibold px-4 py-3 rounded-xl block transition hover:text-blue-600 hover:bg-gray-100"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </a>
          </li>
          <li class="mt-3 pt-3 border-t border-gray-100">
            <a href="tel:+77074852328" class="text-white font-semibold px-4 py-3 rounded-xl bg-gray-950 flex transition items-center justify-center hover:bg-blue-700">
              +7 (707) 485-23-28
            </a>
          </li>
          <li class="mt-3 flex justify-center">
            <RequestModal button-text="Оставить заявку" />
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.22s ease;
}

.fade-scale-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>
