<template>
    <div class='quiz'>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โจทย์ : {{ q.heading }}</h1>
        <div class="choice">
            <div>
                <button>A</button>
                <span>&nbsp;&nbsp; {{ q.c1 }}</span>
            </div>
            <div>
                <button>B</button>
                <span>&nbsp;&nbsp; {{ q.c2 }}</span>
            </div>
            <div>
                <button>C</button>
                <span>&nbsp;&nbsp; {{ q.c3 }}</span>
            </div>
            <div>
                <button>D</button>
                <span>&nbsp;&nbsp; {{ q.c4 }}</span>
            </div>
        </div>
        <h2>เฉลย : {{ this.q.ans }}</h2>
        <div class='check'>
            <div>
                <label for="point">&nbsp;&nbsp;&nbsp;Point : &nbsp;</label>
                <input type="number" v-model="q.points">
            </div>
            <div>
                <button class='but' @click="approve">Approve</button>
                <button class='but' @click="disApprove">Disapprove</button>
            </div>
        </div>
    </div>
</template>

<script>
    import History from '../../store/HistoryApi' 
    import Extra from '../../store/extra'
    import Question from '../../store/proposition'
    import DocService from '../../services/DocService'
    import moment from 'moment'
    export default {
        name: 'Check',
        props:{
            id: ''
        },
        data(){
            return{
                q:{
                    heading:'',
                    c1: '',
                    c2: '',
                    c3: '',
                    c4: '',
                    ans: '',
                    points: 0,
                    user: ''
                },
            }
        },
        async created(){
            let question = await DocService.getWaitApproveById(this.id,'wait-approve')
            this.q.heading = question.Heading
            this.q.c1 = question.choice1
            this.q.c2 = question.choice2
            this.q.c3 = question.choice3
            this.q.c4 = question.choice4
            this.q.ans = question.answer
            this.q.user = question.users_permissions_user.id
        },
        methods:{
            async disApprove(){
                await Question.dispatch('deleteQuestion',{id:this.id})
                this.$router.push('/wait')
            },
            async approve(){
                let payload = {
                    heading: this.q.heading,
                    c1: this.q.c1,
                    c2: this.q.c2,
                    c3: this.q.c3,
                    c4: this.q.c4,
                    ans: this.q.ans,
                    points: this.q.points,
                }
                await Extra.dispatch('addExtra', payload)
                let date = moment().toISOString()
                let payload1 = {
                    date: moment(date).format('YYYY-MM-DD'),
                    heading: "Add Question",
                    point: this.q.points,
                    type: 'get',
                    id: this.q.user
                }
                await History.dispatch('addHistory', payload1)
                await Question.dispatch('deleteQuestion',{id:this.id})
                this.$router.push('/wait')
            }
        }
    }
</script>

<style lang="scss" scoped>
.quiz{
    color: #4B4B4B;
    background-color: rgba(255, 255, 255, 0.9);
    border-style: solid;
    border-width: 0.3em;
    border-radius: 15px;
    border-color: tomato;
    margin: 0em 7em 5em 7em;
    padding: 1em 2em 2.5em 2em;
    text-align: left;
}
h1{
    font-size: 2em;
    line-height: 1.6em;
    text-align: left;
}
h2{
    font-size: 2em;
    line-height: 1.6em;
    text-align: center;
}
.choice{
    margin-top: 0.5em;
    font-size: 2em;
    padding-left: 5em;
}
button{
    font-size: 1em;
    padding: 0 0.4em 0 0.4em;
    margin-top: 0.5em;
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
.check{
    font-size: 1.5em;
    text-align: center;
}
label{
    color:tomato
}
input{
    width: 8em;
    text-align: center;
}
.but{
    border-radius: 5px;
    border-width: 1px;
    width: 6.4em;
    height: 2em;
    margin: 0.5em 1em 0.5em 0em;
}
</style>