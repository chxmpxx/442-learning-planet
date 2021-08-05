import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    histories: (state) => state.data,
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data;
    },
    add(state, { payload }) {
      state.data.push(payload);
    },
  },
  actions: {
    async fetchHistory({ commit }) {
      let res = await Axios.get(api_endpoint + "/histories");
      commit("fetch", { res });
    },
    addHistory({ commit }, payload) {
      commit("add", { payload });
    },
  },
  modules: {},
});
