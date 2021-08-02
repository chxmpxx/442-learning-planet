import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api_endpoint = process.env.ENDPOINT || "http://localhost:3031"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: []
    },
    getters:{
        members: (state) => state.data
    },
    mutations: {
        fetch(state, {res} ){
            state.data = res.data
        }
    },
    actions: {
        async fetchMember ({ commit }) {
            let res = await axios.get(api_endpoint + "/accounts?role=user")
            commit('fetch', {res} )
        }
    },
    modules: {
    }
})
