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
    editUserData(state, res){
      state.user = res.data 
    }
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
    async DoMQuiz({commit}, payload){
      let res = await AuthService.doMQuiz(payload)
      if(res.success){
        commit('editUserData', res)
      }
      return res
    },
    async DoSQuiz({commit}, payload){
      let res = await AuthService.doSQuiz(payload)
      if(res.success){
        commit('editUserData', res)
      }
      return res
    },
    async DoXQuiz({commit}, payload){
      let res = await AuthService.doXQuiz(payload)
      if(res.success){
        commit('editUserData', res)
      }
      return res
    }
  },
  getters: {
    user: (state) => state.user,
    jwt: (state) => state.jwt,
    isAuthen: (state) => state.isAuthen,
  },
  modules: {},
});
