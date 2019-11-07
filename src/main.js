import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from "axios"
import VueTheMask from 'vue-the-mask'
import VImageInput from 'vuetify-image-input'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faNetworkWired} from '@fortawesome/free-solid-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {faUserAlt} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {faLock}  from '@fortawesome/free-solid-svg-icons'
import {faUnlock}  from '@fortawesome/free-solid-svg-icons'
import { VBtn, VIcon, VSlider, VSpacer } from 'vuetify/lib'

 
Vue.component('VImageInput', VImageInput);
Vue.component('VBtn', VBtn);
Vue.component('VIcon', VIcon);
Vue.component('VSlider', VSlider);
Vue.component('VSpacer', VSpacer);
Vue.use(VueTheMask)
library.add(faUserSecret)
library.add(faHtml5)
library.add(faNetworkWired)
library.add(faCss3Alt)
library.add(faTimes)
library.add(faEdit)
library.add(faTrashAlt)
library.add(faUserAlt)
library.add(faSignOutAlt)
library.add(faLock)
library.add(faUnlock)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
