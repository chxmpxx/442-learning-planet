<template>
    <div>
        <h1>WAIT FOR APPROVE</h1>
        <br><br>
       <div class="page">
            <div>
            <table>
                <div class='waittable'>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(info, index) in questions" :key="index">
                            <td>{{ info.users_permissions_user.username }}</td>
                            <td>
                                <button @click="check(info)">CHECK</button>
                                <!-- <router-link :to="{name: 'Check',params: {id:info.id}}">Check</router-link> -->
                            </td>
                        </tr>
                    </tbody>
                </div>    
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

<style lang="scss" scoped>
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
    
///////////////////

h1 {
  color: gold;
  margin-top: -0.35em;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 3em;
}
.waittable{
  color: black;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 0.3em;
  border-radius: 15px;
  border-color: gold;
  padding: 1.5em 3em 1.5em 3em;
  margin: 0em 20em 0em 20em;
}
th, td {
  text-align: center;
  padding: 8px;
}
th{
  font-size: 24px;
  padding: 0.5em 8em 0.5em 8em;
}
td{
  font-size: 20px;
}
</style>