import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/',
    name: 'acceuil',
    component: () => import('../components/acceuil.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../components/services.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/contact.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
