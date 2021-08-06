<template>
    <div>
        <h1>{{this.path}}&nbsp;{{this.type}}</h1>
        <br><br>
        <div class='quiz'>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{qs.question}}</h2>
            <div class="choice">
                <div>
                    <button @click="select(qs.c1)" v-if="!status">A</button>
                    <span>&nbsp;&nbsp; {{ qs.c1 }}</span>
                </div>
                <div>
                    <button @click="select(qs.c2)" v-if="!status">B</button>
                    <span>&nbsp;&nbsp; {{ qs.c2 }}</span>
                </div>
                <div>
                    <button @click="select(qs.c3)" v-if="!status">C</button>
                    <span>&nbsp;&nbsp; {{ qs.c3 }}</span>
                </div>
                <div>
                    <button @click="select(qs.c4)" v-if="!status">D</button>
                    <span>&nbsp;&nbsp; {{ qs.c4 }}</span>
                </div>
            </div>
        </div>
        
        <div>
            <button v-if="status" @click="back">BACK</button>
        </div>
        <div>
            <h2 v-if="status">You already do this question!</h2>
        </div>
        <div>
            <h2 v-if="status">Answer is {{ qs.ans}}</h2>
        </div>
    </div>
</template>

<script>
import DocService from '../services/DocService'
export default {
    props:{
        id: '',
        path: '',
        type: ''
    },
    data(){
        return{
            qs: {
                question: '',
                c1: '',
                c2: '',
                c3: '',
                c4: '',
                ans: '',
                point: 0
            },
            status: false //ตอนหลังต้องแก้เป็นเช็คว่าทำหรือยัง
        }
    },
    async created(){
        let q = await DocService.getWaitApproveById(this.id, this.path)
        this.qs.question = q.question
        this.qs.c1 = q.c1
        this.qs.c2 = q.c2
        this.qs.c3 = q.c3
        this.qs.c4 = q.c4
        this.qs.ans  = q.ans
        this.qs.point = q.point
    },
    methods:{
        back(){
            this.$router.push({name: 'QuestionTable', params: {path:this.path, type: this.type}})
        },
        select(c){
            this.status = true //ตอนหลังต้องแก้เป็นเช็คว่าทำหรือยัง
            if(c=== this.qs.ans){
                this.$swal("Your answer is correct!", `You get ${this.qs.point} point!`,'success')
            }else{
                this.$swal({title: "Your answer is incorrect!", icon: 'error'})
            }
            this.$router.push({name: 'QuestionTable', params: {path: this.path, type: this.type}})
        }
    }
}
</script>

<style lang="scss" scoped>
.quiz{
    color: #4B4B4B;
    background-color: rgba(255, 255, 255, 0.9);
    border-width: 1.5px;
    border-radius: 15px;
    margin: 0em 7em 5em 7em;
    padding: 1em 2em 2.5em 2em;
    text-align: left;
}
.choice{
    margin-top: 0.5em;
    font-size: 2em;
    padding-left: 5em;
}
button{
    font-size: 1em;
    padding: 0 0.4em 0 0.4em;
    margin-top: 1em;
    border-radius: 50%;
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
h2{
    font-size: 2em;
    line-height: 1.6em;
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