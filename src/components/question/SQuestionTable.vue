<template>
    <div>
        <h1>{{this.path}}{{this.type}}</h1>
        <table>
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Point</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="q in qs" :key="q.id">
                    <td>{{q.question}}</td>
                    <td>{{q.point}}</td>
                    <td>
                        <button @click="view(q)">View</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import QuestionTable from '../../store/question'
export default {
    props:{
        path:'',
        type: ''
    },
    data(){
        return{
           qs: []
        }
    },
    created(){
        this.fetchQ()
    },
    methods:{
        async fetchQ(){
            let payload = {
                path: this.path,
                type: this.type
            } 
            await QuestionTable.dispatch('fetchQ', payload)
            this.qs = QuestionTable.getters.qs
        },
        view(q){
            this.$router.push({name: "Question", params: {path:this.path, type:this.type, id:q.id}})
        }
    }
}
</script>

<style>

</style>