import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faNetworkWired} from '@fortawesome/free-solid-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faHtml5)
library.add(faNetworkWired)
library.add(faCss3Alt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
