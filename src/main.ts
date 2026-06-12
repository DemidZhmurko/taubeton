import { SchemaOrgUnheadPlugin } from '@unhead/schema-org'
import { createHead } from '@unhead/vue/client'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import './styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    const head = createHead()

    head.use(
      SchemaOrgUnheadPlugin(
        {
          host: 'https://taubeton.kz',
          canonicalHost: 'https://taubeton.kz',
        },
        () => ({
          // Можно задать мета-данные по умолчанию
          title: 'Бетон в Алматы с доставкой — TAUBETON',
          description: 'Товарный бетон М100–М400 с доставкой миксером по Алматы и ближайшим районам.',
        }),
      ),
    )

    ctx.app.use(head)
    ctx.head = head
  },
)
