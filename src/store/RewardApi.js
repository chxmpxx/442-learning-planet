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
    edit(state, { payload }) {
      state.data[payload.index].name = payload.name;
      state.data[payload.index].point = payload.point;
      state.data[payload.index].image = payload.image;
      state.data[payload.index].amount = payload.amount;
    },
  },
  actions: {
    async fetchReward({ commit }) {
      let headers = AuthService.getApiHeader();
      let res = await Axios.get(api_endpoint + "/rewards", headers);
      commit("fetch", { res });
    },
    addReward({ commit }, payload) {
      commit("add", { payload });
    },
    // editReward({ commit }, payload) {
    //   let headers = AuthService.getApiHeader();
    //   let res = await Axios.put(api_endpoint + "/rewards", headers);
    //   commit("edit", { payload });
    // },
  },
  modules: {},
});
