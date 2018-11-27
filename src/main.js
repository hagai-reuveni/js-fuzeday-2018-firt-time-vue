import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faQuestion, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss'

library.add(faHome, faSearch, faShoppingCart, faQuestion)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
