import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import AuthService from "../services/AuthService";

let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    members: (state) => state.data,
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data;
    },
    edit(state, { res }) {
      state.data.push(res.data);
    },
  },
  actions: {
    async fetchMember({ commit }) {
      let url = `${api_endpoint}/users?role.id=1`;
      let headers = AuthService.getApiHeader();
      let res = await axios.get(url, headers);
      commit("fetch", { res });
    },
    async searchMe({ commit }, { id }) {
      let url = `${api_endpoint}/users/${id}`;
      let headers = AuthService.getApiHeader();
      let res = await axios.get(url, headers);
      return res.data;
    },
  },
  modules: {},
});
