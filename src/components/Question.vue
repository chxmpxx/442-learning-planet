<template>
    <div>
        <h1>{{this.path}}{{this.type}}</h1>
        <h2>{{qs.question}}</h2>
        <div class="choice">
            <div>
                <button @click="select(qs.c1)" v-if="!status">1</button>
                <h2>{{ qs.c1 }}</h2>
            </div>
            <div>
                <button @click="select(qs.c2)" v-if="!status">2</button>
                <h2>{{ qs.c2 }}</h2>
            </div>
            <div>
                <button @click="select(qs.c3)" v-if="!status">3</button>
                <h2>{{ qs.c3 }}</h2>
            </div>
            <div>
                <button @click="select(qs.c4)" v-if="!status">4</button>
                <h2>{{ qs.c4 }}</h2>
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

<style>

</style>