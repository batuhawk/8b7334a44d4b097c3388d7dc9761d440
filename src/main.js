import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import scss from './scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faBed, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* FontAwesome */
library.add(faCalendarAlt)
library.add(faBed)
library.add(faCreditCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Request */
Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  scss,
  render: h => h(App)
}).$mount('#app')
