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
    add(state, payload) {
      state.data.push(payload);
    },
    edit(state, payload) {
      state.data[payload.index] = payload;
    },
  },
  actions: {
    async fetchReward({ commit }) {
      let headers = AuthService.getApiHeader();
      let res = await Axios.get(api_endpoint + "/rewards", headers);
      commit("fetch", { res });
    },
    async addReward({ commit }, payload) {
      let headers = AuthService.getApiHeader();
      let url = `${api_endpoint}/rewards`;
      let body = {
        name: payload.name,
        point: payload.point,
        image: payload.image,
        amount: payload.amount,
      };
      let res = await Axios.post(url, body, headers);
      commit("add", { payload });
      console.log(res);
    },

    async exchangeReward({ commit }, payload) {
      let body = {
        amount: payload.amount,
      };
      let headers = AuthService.getApiHeader();
      await Axios.put(api_endpoint + "/rewards/" + payload.id, body, headers);
      commit("edit", { payload });
    },
    async editReward({ commit }, payload) {
      let body = {
        name: payload.name,
        point: payload.point,
        image: payload.image,
        amount: payload.amount,
      };
      let headers = AuthService.getApiHeader();
      await Axios.put(api_endpoint + "/rewards/" + id, body, headers);
      commit("edit", { payload });
    },
  },
  modules: {},
});
