import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import './plugins/gates'
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./stores/store";
import apiClient from "./api/apiClient";
import AppDialog from "./components/dialogs/AppDialog.vue";
import AppTable from "./components/tables/AppTable.vue";
import AppDialogConfirm from "./components/dialogs/AppDialogConfirm.vue";
import AppAlert from "./components/alerts/AppAlert.vue";
import DateInput from "./components/dates/DateInput.vue";

import Vuex from "vuex";
Vue.use(Vuex);

import VueMask from 'v-mask'
Vue.use(VueMask);

import DatetimePicker from 'vuetify-datetime-picker'
// (Optional) import 'vuetify-datetime-picker/src/stylus/main.styl'
 
Vue.use(DatetimePicker)

Vue.config.productionTip = false;
import VueLocalForage from "vue-localforage";
Vue.use(VueLocalForage);

Vue.prototype.$http = apiClient;

Vue.component("app-dialog", AppDialog);
Vue.component("app-table", AppTable);
Vue.component("app-alert", AppAlert);
Vue.component("date-input", DateInput);

Vue.prototype.$notify = (type, alerts) => {
  if (!type || !alerts)  { store.dispatch("notify", null); return;}
  store.dispatch("notify", { type, alerts });
};

Vue.prototype.$confirm = (title, message) => {
  var vueContainer = new Vue({
    vuetify,
    render: (h) => h(AppDialogConfirm),
  }).$mount();
  var appDialogConfirm = vueContainer.$children[0];
  return appDialogConfirm.show(title, message);
};

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
