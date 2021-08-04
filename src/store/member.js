import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api_endpoint = process.env.VUE_APP_ENDPOINT || "http://localhost:3003"

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
            let res = await axios.get(api_endpoint + "/users?role.id=1")
            commit('fetch', {res} )
        }
    },
    modules: {
    }
})
