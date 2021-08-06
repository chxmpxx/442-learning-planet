<template>
    <div>
        <h1>{{this.path}}&nbsp;{{this.type}}</h1>
        <br><br>
        <div>
          <table>
              <div class='textcenter'>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Point</th>
                    </tr>
                </thead>  
                <tbody>
                    <tr v-for="q in qs" :key="q.id">
                        <td>{{q.question}}</td>
                        <td>&nbsp;&nbsp;{{q.point}}</td>
                        <td>
                            <button @click="view(q)">VIEW</button>
                        </td>
                    </tr>
                </tbody> 
              </div>
                
            </table>
        </div>
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

<style lang="scss" scoped>
.textcenter{
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
    border-style: solid;
    border-width: 0.3em;
    border-radius: 15px;
    border-color: tomato;
    padding: 0.5em 2em 0.5em 2em;

    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
th{
    color: tomato;
    font-size: 2em;
}
td{
  font-size: 1.4em;
}
th, td {
  text-align: left;
  padding: 8px;
}
button{
  font-size: 1em;
  padding: 0.5em 1em 0.4em 1em;
  border-radius: 30px;
  transition: 0.5s;
  border-width: 1px;
}
button:hover{
  background-color: tomato;
  color: #ffffff;
  border-color: #ffffff;
  transition: 0.5s;
}
h1{
  margin-top: 0em;
  color: #ffffff;
  font-size: 4em;
  text-shadow: 0 0 20px #fff;
  animation: pulse 2s ease-in infinite;
  cursor: default;
}
@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>