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
        
        <div class='answer'>
            <div>
                <h2 v-if="status">You already do this question!</h2>
            </div>
            <div>
                <h2 v-if="status">Answer is <span class='ans'>{{ qs.ans}}</span></h2>
            </div>  
        </div>
        <div>
            <button class='back' v-if="status" @click="back">BACK</button>
        </div>
    </div>
</template>

<script>
import DocService from '../../services/DocService'
import AuthUser from '../../store/AuthUser'
import History from '../../store/HistoryApi'
import Member from '../../store/member'
import moment from 'moment'
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
            user: {},
            i: false,
            user_id:'',
            status: false //ตอนหลังต้องแก้เป็นเช็คว่าทำหรือยัง
        }
    },
    async created(){
        let q = await DocService.getWaitApproveById(this.id, this.path)
        this.user_id = JSON.parse(localStorage.getItem('auth-user')).user.id
        this.user = await Member.dispatch('searchMe', {id:this.user_id})
        this.qs.question = q.question
        this.qs.c1 = q.c1
        this.qs.c2 = q.c2
        this.qs.c3 = q.c3
        this.qs.c4 = q.c4
        this.qs.ans  = q.ans
        this.qs.point = q.point
        this.checkDo()
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        async select(c){
            this.status = true //ตอนหลังต้องแก้เป็นเช็คว่าทำหรือยัง
            if(c.trim()=== this.qs.ans.trim()){
                await this.addHistory(this.path)
                await this.addDo(this.path)
                this.$swal("Your answer is correct!", `You get ${this.qs.point} point!`,'success')
                this.$router.go(-1)
            }else{
                await this.addDo(this.path)
                this.$swal({title: "Your answer is incorrect!", icon: 'error'})
            }
            
        },
        checkDo(){
            if(this.path==='math'){
                this.checkM(this.id)
                if(this.i){
                    this.status = true
                }
            }else if(this.path==='sci'){
                this.checkS(this.id)
                if(this.i){
                    this.status = true
                }
            }else if(this.path==='extra'){
                this.checkX(this.id)
                if(this.i){
                    this.status = true
                }
            }
        },
        checkM(id){
            this.user.maths.forEach(element => {
                if(id==element.id){
                    this.i = true
                }
            });
        },
        checkS(id){
            this.user.scis.forEach(element => {
                if(id==element.id){
                    this.i = true
                }
            });
        },
        checkX(id){
            this.user.extras.forEach(element => {
                if(id==element.id){
                    this.i = true
                }
            });
        },
        async addHistory(path){
            let date = moment().toISOString()
            let payload1 = {
                date: moment(date).format('YYYY-MM-DD'),
                heading: `Do ${path} quiz corretly (${this.id})`,
                point: ''+this.qs.point,
                type: 'get',
                id: this.user.id
            }
            await History.dispatch('addHistory', payload1)
        },
        async addDo(path){
            if(path==='math'){
                let m = this.user.maths.map(it => it.id)
                m.push(this.id)
                let payload = {
                    id : this.user.id,
                    maths: m
                }
                await AuthUser.dispatch('DoMQuiz', payload)
            }else if(path === 'sci'){
                let s = this.user.scis.map(it => it.id)
                s.push(this.id)
                let payload = {
                    id: this.user.id,
                    scis: s
                }
                await AuthUser.dispatch('DoSQuiz', payload)
            }else if(path === 'extra'){
                let x = this.user.extras.map(it => it.id)
                x.push(this.id)
                let payload = {
                    id: this.user.id,
                    extras: x
                }
                await AuthUser.dispatch('DoXQuiz', payload)
            }
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
    border-style: solid;
    border-width: 0.3em;
    border-radius: 15px;
    border-color: tomato;
}
.choice{
    margin-top: 0.5em;
    font-size: 2em;
    padding-left: 5em;
}
button{
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1em;
    padding: 0 0.4em 0 0.4em;
    margin-top: 1em;
    border-radius: 50%;
    transition: 0.5s;
    border-width: 1px;
}
.back{
    font-size: 1.5em;
    border-radius: 5px;
    border-width: 1px;
    width: 6.4em;
    height: 2em;
    margin: -2em 1em 1.5em 0em;
}
button:hover{
    background-color: tomato;
    color: #ffffff;
    border-color: #ffffff;
    transition: 0.5s;
}
.answer{
    color:#fff;
    text-shadow: 0 0 20px #fff;
    margin-top: -4em;
    margin-bottom: 3.5em;
    font-size: 0.8em;
}
.ans{
    color:gold;
}
h1{
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
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