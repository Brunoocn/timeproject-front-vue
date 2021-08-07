import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      loading: false,
    },
    getters:{
        loading(state){
            return state.loading;
        }
    },
    actions: {
      loading({ commit, state }, payload) {
        if (payload == null) commit("setLoading", !state.loading);
        else commit("setLoading", payload);
      },
    },
    mutations: {
      setLoading(state, payload) {
        state.loading = payload;
      },
    },
  });