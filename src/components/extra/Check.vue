<template>
    <div>
        <h2>{{ q.heading }}</h2>
        <div class="choice">
            <div><h2>{{ q.c1 }}</h2></div>
            <div><h2>{{ q.c2 }}</h2></div>
            <div><h2>{{ q.c3 }}</h2></div>
            <div><h2>{{ q.c4 }}</h2></div>
        </div>
        <h2>เฉลย: {{ this.q.ans }}</h2>
        <div>
            <label for="point">Point: </label>
            <input type="number" v-model="q.points">
        </div>
        <div>
            <button @click="approve">Approve</button>
            <button @click="disApprove">Disapprove</button>
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
                    user: this.q.user
                }
                await History.dispatch('addHistory', payload1)
                await Question.dispatch('deleteQuestion',{id:this.id})
                this.$router.push('/wait')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .choice{
        display: grid;
        grid-template-columns: 50% 50%;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        grid-row-gap: 30px;
    }
</style>