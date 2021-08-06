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
                            <th>FROM</th>
                            <th>CHECK&nbsp;&nbsp;&nbsp;&nbsp;</th>
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
        <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
  margin: 0em 19em 0em 19em;
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

button{
    border-radius: 5px;
    border-width: 1px;
    width: 5em;
    height: 2em;
    margin: 0.5em 1em 0.5em 0em;
}
button:hover{
    background-color: tomato;
    color: #ffffff;
    border-color: #ffffff;
    transition: 0.5s;
}

// ------------------Block Rotation--------------------
.box div {
  height: 6px;
  width: 6px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
}
.box div:nth-child(1) {
  top: 12%;
  left: 42%;
  animation: animate 10s linear infinite;
}
.box div:nth-child(2) {
  top: 70%;
  left: 50%;
  animation: animate 7s linear infinite;
}
.box div:nth-child(3) {
  top: 17%;
  left: 6%;
  animation: animate 9s linear infinite;
}
.box div:nth-child(4) {
  top: 20%;
  left: 60%;
  animation: animate 8s linear infinite;
}
.box div:nth-child(5) {
  top: 67%;
  left: 10%;
  animation: animate 6s linear infinite;
}
.box div:nth-child(6) {
  top: 80%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.box div:nth-child(7) {
  top: 60%;
  left: 80%;
  animation: animate 9s linear infinite;
}
.box div:nth-child(8) {
  top: 32%;
  left: 25%;
  animation: animate 10s linear infinite;
}
.box div:nth-child(9) {
  top: 90%;
  left: 25%;
  animation: animate 9s linear infinite;
}
.box div:nth-child(10) {
  top: 20%;
  left: 80%;
  animation: animate 6s linear infinite;
}
.box div:nth-child(11) {
  top: 40%;
  left: 90%;
  animation: animate 10s linear infinite;
}
.box div:nth-child(12) {
  top: 35%;
  left: 45%;
  animation: animate 7s linear infinite;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadede {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.35;
  }
}
@keyframes animate {
  0% {
    opacity: 0;
  }
  50% {
    transform: scale(1.5) translateY(-45px) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(2) translateY(-90px) rotate(360deg);
    opacity: 0;
  }
}
</style>