import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './stores/store'
import apiClient from './api/apiClient'
import AppDialog from "./components/dialogs/AppDialog.vue";
import AppTable from "./components/tables/AppTable.vue";
import AppTitle from './components/texts/AppTitle.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false
import VueLocalForage from 'vue-localforage'
Vue.use(VueLocalForage)

Vue.prototype.$http=apiClient

Vue.component('app-dialog',AppDialog)
Vue.component('app-table',AppTable)
Vue.component('app-title',AppTitle)




new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

