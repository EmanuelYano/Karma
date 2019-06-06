import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/cadastro.vue'
import T from './views/tarefamarc.vue'
import cremedemilho from './views/cremedemilho.vue'
import cremedealho from './views/cremedealho.vue'
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
    }
  ]
})
