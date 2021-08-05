<template>
    <div>
        <h1>WAIT FOR APPROVE</h1>
       <div class="page">
            <div>
            <table>
                    <thead>
                        <tr>
                            <th>From</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(info, index) in questions" :key="index">
                            <td>{{ info.users_permissions_user.username }}</td>
                            <td>
                                <button @click="check(info)">Check</button>
                                <!-- <router-link :to="{name: 'Check',params: {id:info.id}}">Check</router-link> -->
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>

        </div> 
    </div>
    
</template>

<script>
    import Check from '@/components/extra/Check'
    import Question from '@/store/proposition'
    import AuthUser from '../../store/AuthUser'
    export default {
        components:{
            Check
        },
        data(){
            return{
                questions: []
            }
        },
        created(){
            this.fetchQuestion()
        },
        methods:{
            async fetchQuestion(){
                await Question.dispatch('fetchQuestion')
                this.questions = Question.getters.questions
            },
            check(info){
                this.$router.push({name: 'Check',params: {id:info.id}})
            }
        }
    }
</script>

<style>
    table{
        width: 50%;
    }
    .page{
        display: grid;
        grid-template-columns: 100% 0%;
    }
    .check{
        width: 100%;
    }
</style>