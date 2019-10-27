import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import T from './views/tarefamarc.vue'
import cremedemilho from './views/cremedemilho.vue'
import cremedealho from './views/cremedealho.vue'
import Cadastro from './views/cadastroUser.vue'
import Home from './views/Home.vue'
import Livros from './views/lista-livros.vue'
import cadBook from './views/cadastroBook.vue'
import Agua from './views/agua-html.vue'

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
      path: '/lista-livros',
      name: 'Livros',
      component: Livros
    },
    {
      path: '/Book',
      name: 'Cadastro de livros',
      component: cadBook
    },
    {
      path: '/agua',
      name: 'AGUA',
      component: Agua
    }
  ]
})
