import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRouters from '~pages'

import '@/styles/main.scss'
import 'uno.css'

export const app = createApp(App)
export const routes = setupLayouts(generatedRouters)
export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, _, savedPosition) {
    if (to.meta.top === true) return { top: 0 }

    if (savedPosition) return savedPosition
  },
})
app.use(router)
app.mount('#app')

Object.values(
  import.meta.glob<{ install?: UserModule }>('./modules/*.ts', { eager: true }),
).forEach(i => {
  i.install?.({ app, routes, router })
})
