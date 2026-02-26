import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: () => import('../pages/HomePage.vue') },
      { path: '/about', name: 'about', component: () => import('../pages/AboutPage.vue') },
      { path: '/services', name: 'services', component: () => import('../pages/ServicesPage.vue') },
      { path: '/portfolio', name: 'portfolio', component: () => import('../pages/PortfolioPage.vue') },
      { path: '/contact', name: 'contact', component: () => import('../pages/ContactPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
