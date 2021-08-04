import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import AuthService from "@/services/AuthService";

let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    rewards: (state) => state.data,
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
    async fetchReward({ commit }) {
      let headers = AuthService.getApiHeader;
      let res = await Axios.get(api_endpoint + "/rewards", headers);
      commit("fetch", { res });
    },
    addReward({ commit }, payload) {
      commit("add", { payload });
    },
  },
  modules: {},
});
