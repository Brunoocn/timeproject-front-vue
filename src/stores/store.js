import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    notification: {
      alerts: [],
      type: null,
    },
  },
  getters: {
    notification(state){
        return state.notification;
    },
    loading(state) {
      return state.loading;
    },
  },
  actions: {
    notify({ commit, state }, payload) {
      if (payload == null) {
        state.notification.alerts = [];
        commit("setNotification", { alerts: [], type: null });
        return;
      }

      commit("setNotification", payload);
    },
    loading({ commit, state }, payload) {
      if (payload == null) commit("setLoading", !state.loading);
      else commit("setLoading", payload);
    },
  },
  mutations: {
    setNotification(state, payload) {
      if (payload.alerts.length == 0) {
        state.notification.alerts = [];
        state.notification.type = null;
        return;
      }

      state.notification.alerts = [
        ...state.notification.alerts,
        ...payload.alerts,
      ];
      state.notification.type = payload.type;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
});
