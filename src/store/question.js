import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AuthService from '../services/AuthService'

let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: []
    },
    getters:{
        qs: (state) => state.data
    },
    mutations: {
        fetch(state, {res} ){
            state.data = res.data
        }
    },
    actions: {
        async fetchQ ({ commit }, payload) {
            let url = `${api_endpoint}/${payload.path}s?type=${payload.type}`
            let headers = AuthService.getApiHeader()
            let res = await axios.get(url, headers)
            commit('fetch', {res} )
        }
    },
    modules: {
    }
})
