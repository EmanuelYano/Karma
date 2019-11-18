import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Cadastro from './views/cadastroUser.vue'
import Home from './views/Home.vue'
import Livros from './views/lista-livros.vue'
import cadBook from './views/cadastroBook.vue'
import Agua from './views/agua-html.vue'
import perfil from './views/perfil-usuario.vue'
import usuarios from './views/controleUser.vue'
import RecSenha from './views/recSenha.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/recuperar-senha',
      nem: 'Recuperar senha',
      component: RecSenha
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
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
      path: '/controle-livros',
      name: 'Cadastro de livros',
      component: cadBook
    },
    {
      path: '/agua',
      name: 'AGUA',
      component: Agua
    },
    {
      path: '/perfil',
      name: 'Perfil do Usuário',
      component: perfil
    },
    {
      path: '/controle-usuarios',
      name: 'Controle dos usuários',
      component: usuarios
    }
  ]
})
