import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import AuthService from "@/services/AuthService";

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
    add(state, payload) {
      state.data.push(payload);
    },
  },
  actions: {
    async fetchHistory({ commit }) {
      let res = await axios.get(api_endpoint + "/histories");
      commit("fetch", { res });
    },
    async addHistory({ commit }, payload1) {
      let url = `${api_endpoint}/histories`;
      let body = {
        date: payload1.date,
        heading: payload1.heading,
        point: payload1.point,
        type: payload1.type,
        user: [payload1.id],
      };
      await axios.post(url, body, headers);
    },
  },
  modules: {},
});
