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
        questions: (state) => state.data
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
        async fetchQuestion ({ commit }) {
            let url = `${api_endpoint}/wait-approves`
            let headers = AuthService.getApiHeader()
            let res = await axios.get(url, headers)
            commit('fetch', {res} )
        },
        async deleteQuestion({commit},{id}){
            let url = `${api_endpoint}/wait-approves/${id}`
            let headers = AuthService.getApiHeader()
            await axios.delete(url, headers)
        },
        async addQuestion({commit}, payload){
            let url = `${api_endpoint}/wait-approves`
            let body = {
                "Heading": payload.q,
                "choice1": payload.c1,
                "choice2": payload.c2,
                "choice3": payload.c3,
                "choice4": payload.c4,
                "answer": payload.ans,
                "users_permissions_user": [payload.id]
            }
            try{
                let headers = AuthService.getApiHeader()
                let res = await axios.post(url, body, headers)
                if(res.status===200){
                    commit('add', res.data)
                    return{
                        success: true,
                        data: res.data
                    }
                }else{
                    return{
                        success: false,
                        message: "Unknow status code"+ res.status
                    }
                }   
            }catch(e){
                if(e.response.status === 403){
                    return{
                        success: false,
                        message: e.response.data.message
                    }
                }
                return{
                    success: false,
                    message: "Unknow error" + e.response.data
                }
            }
        }
    },
    modules: {
    }
})
