import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import apiClient from './api/apiClient'

Vue.config.productionTip = false
import VueLocalForage from 'vue-localforage'
Vue.use(VueLocalForage)

Vue.prototype.$http=apiClient

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

