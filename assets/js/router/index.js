import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
<<<<<<< HEAD
    path: '/signup',
=======
    path: '/',
>>>>>>> 05cf8da26dfb6b724c518a256660a83e14fdf421
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
<<<<<<< HEAD
    path: '/acceuil',
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
=======
    path: '/home',
    name: 'home',
    component: () => import('../components/home.vue')
>>>>>>> 05cf8da26dfb6b724c518a256660a83e14fdf421
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
