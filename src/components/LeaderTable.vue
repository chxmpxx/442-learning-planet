<template>
    <div class="container">
        <div>
            <h2>EARN BOARD</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>total Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(member, index) in sortedArry_get" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ member.username }}</td>
                        <td>{{ member.point }}</td>

                    </tr>
                </tbody>
            </table>
        </div>

        <div class="select_time">
            <h2 style="margin:10px 0px;">Time Select</h2>
            <div>
                <div style="margin-bottom: 10px">
                    <label for="text">Between</label>
                </div>
                <div style="margin-bottom: 10px">
                    <input type="date" v-model="date.first">
                </div>
                <div style="margin-bottom: 10px">
                    <input type="date" v-model="date.second">
                </div>
            </div>
        </div>

        <div>
            <h2>USE BOARD</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>total Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(member, index) in sortedArry_use" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ member.username }}</td>
                        <td>{{ member.point }}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import Member from '../store/member'
    export default {
        data(){
            return{
                members: [],
                get: [],
                use:[],
                total_get: 0,
                total_use: 0,
                data_get: [],
                data_use: [],
                date:{
                    first: '',
                    second: ''
                }
            }
        },
        created(){
            this.fetchMember()
        },
        beforeUpdate(){
            this.calpoint()
            this.mergeArr()
        },
        methods: {
            async fetchMember(){
                await Member.dispatch('fetchMember')
                this.members = Member.getters.members
                this.calpoint()
                this.mergeArr()
            },
            calpoint(){
                this.use = []
                this.get = []
                this.members.forEach((element) =>{
                    this.total_get = 0
                    this.total_use = 0
                    element.histories.forEach((check) =>{
                        if(this.date.first=='' || this.date.second==''){
                            if(check.type=='get'){
                                this.total_get += parseInt(check.point)
                            }else{
                                this.total_use += parseInt(check.point)
                            }
                        }else{
                            if(moment(moment(this.date.first).format('YYYY/MM/DD')).isBefore(moment(this.date.second).format('YYYY/MM/DD'))){
                                if(moment(moment(check.date).format('YYYY/MM/DD')).isBetween(moment(this.date.first).format('YYYY/MM/DD'),moment(this.date.second).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }else if(moment(moment(check.date).format('YYYY/MM/DD')).isSame(moment(this.date.first).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }else if(moment(moment(check.date).format('YYYY/MM/DD')).isSame(moment(this.date.second).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }
                            }else if(moment(moment(this.date.first).format('YYYY/MM/DD')).isAfter(moment(this.date.second).format('YYYY/MM/DD'))){
                                if(moment(moment(check.date).format('YYYY/MM/DD')).isBetween(moment(this.date.second).format('YYYY/MM/DD'),moment(this.date.first).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }else if(moment(moment(check.date).format('YYYY/MM/DD')).isSame(moment(this.date.first).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }else if(moment(moment(check.date).format('YYYY/MM/DD')).isSame(moment(this.date.second).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }
                            }else{
                                if(moment(moment(check.date).format('YYYY/MM/DD')).isSame(moment(this.date.first).format('YYYY/MM/DD'))){
                                    if(check.type==='get'){
                                        this.total_get += parseInt(check.point)
                                    }else{
                                        this.total_use += parseInt(check.point)
                                    }
                                }
                            }
                        }
                        
                    })
                    let obj = {
                        username: '',
                        point: 0
                    }
                    obj.username = element.username
                    obj.point = this.total_get
                    this.get.push(obj)
                    let obj1 = {
                        username: '',
                        point: 0
                    }
                    obj1.username = element.username
                    obj1.point = this.total_use
                    this.use.push(obj1)
                })
            },
            mergeArr(){
                this.data_get = this.members.map((item,i) => Object.assign({}, item, this.get[i]))
                this.data_use = this.members.map((item,i) => Object.assign({}, item, this.use[i]))
            }
        },
        computed:{
            sortedArry_get: function() {
                function compare(a, b){
                    if(parseInt(a.point) < parseInt(b.point)){
                        return 1
                    }
                    if(parseInt(a.point)> parseInt(b.point)){
                        return -1
                    }
                    return 0
                }
                return this.data_get.sort(compare)
            },
            sortedArry_use: function() {
                function compare(a, b){
                    if(parseInt(a.point) < parseInt(b.point)){
                        return 1
                    }
                    if(parseInt(a.point)> parseInt(b.point)){
                        return -1
                    }
                    return 0
                }
                return this.data_use.sort(compare)
            }
        }

    }
</script>

<style>
    .container{
        display: grid;
        grid-template-columns:40% 20% 40%;
        color: white
    }
    table{
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        border-spacing: 0px;
    }
    th{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    td{
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .select_time{
        background-color: lightgray;
        width: 150px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
    }
</style>