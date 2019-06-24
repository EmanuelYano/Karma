import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/cadastroUser.vue'
import T from './views/tarefamarc.vue'
import cremedemilho from './views/cremedemilho.vue'
import cremedealho from './views/cremedealho.vue'
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
      path: '/T',
      name: 'T',
      component: T
    },
    {
      path: '/cremedemilho',
      name: 'cremedemilho',
      component: cremedemilho
    },
    {
      path: '/cremedealho',
      name: 'cremedealho',
      component: cremedealho
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
