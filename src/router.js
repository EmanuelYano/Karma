import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/cadastro.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
