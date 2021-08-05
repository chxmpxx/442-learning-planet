import Vue from "vue";
import Vuex from "vuex";
import AuthService from "@/services/AuthService";

Vue.use(Vuex);

let auth_key = "auth-user";
let auth = JSON.parse(localStorage.getItem(auth_key));

const initialState = {
  user: auth ? auth.user : "",
  jwt: auth ? auth.jwt : "",
  isAuthen: auth ? true : false,
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    loginSuccess(state, res) {
      state.user = res.user;
      state.jwt = res.jwt;
      state.isAuthen = true;
    },
    logoutSuccess(state) {
      state.user = "";
      state.jwt = "";
      state.isAuthen = false;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      let res = await AuthService.login({ username, password });
      if (res.success) {
        commit("loginSuccess", res);
      }
      return res;
    },
    async register({ commit }, { username, email, password }) {
      let res = await AuthService.register({ username, email, password });
      if (res.success) {
        commit("loginSuccess", res);
      }
      return res;
    },
    async logout({ commit }) {
      AuthService.logout();
      commit("logoutSuccess");
    },
  },
  getters: {
    user: (state) => state.user,
    jwt: (state) => state.jwt,
    isAuthen: (state) => state.isAuthen,
  },
  modules: {},
});
