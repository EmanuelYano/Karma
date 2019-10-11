import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from "axios";
Vue.config.productionTip = false
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
