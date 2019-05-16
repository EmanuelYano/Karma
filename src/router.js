import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/cadastroUser.vue'
import Home from './views/Home.vue'
import Livros from './views/Livros.vue'
import cadBook from './views/cadastroBook.vue'

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
    },
    {
      path: '/Livros',
      name: 'Livros',
      component: Livros
    },
    {
      path: '/Book',
      name: 'Cadastro de livros',
      component: cadBook
    },
  ]
})
