import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import TestNote from './views/Note.vue'
import TestDetail from './views/Detail.vue'
import ShoppingCart from './views/Shop.vue'
import Address from './views/Address.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepalive: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/testcomponents/note',
      name: 'TestNote',
      component: TestNote
    },
    {
      path: '/product/:id/detail',
      name: 'TestDetail',
      component: TestDetail,
      meta: {
        keepalive: false
      }
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
