import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AuthService from '../services/AuthService'

let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:3003"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: []
    },
    getters:{
        extras: (state) => state.data
    },
    mutations: {
        fetch(state, {res} ){
            state.data = res.data
        },
        add(state, payload){
            state.data.push(payload)
        }
    },
    actions: {
        async fetchExtra ({ commit }) {
            let url = `${api_endpoint}/extras`
            let headers = AuthService.getApiHeader()
            let res = await axios.get(url, headers)
            commit('fetch', {res} )
        },
        async addExtra({commit}, payload){
            let url = `${api_endpoint}/extras`
            let body={
                "question": payload.heading,
                "c1": payload.c1,
                "c2": payload.c2,
                "c3": payload.c3,
                "c4": payload.c4,
                "ans": payload.ans,
                "point": payload.points,
                "type": "1"
            }
            let headers = AuthService.getApiHeader()
            let res = await axios.post(url, body, headers)
            // let url1 = `${api_endpoint}/extra-storages`
            // users.forEach((element) =>{
            //     body1 ={
            //         "users_permissions_user": element.id,
            //         "extra": payload.id
            //     }
            //     axios.post(url1,body1)
            // })
            commit('add', res.data)
        }
    },
    modules: {
    }
})
