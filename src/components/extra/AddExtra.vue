<template>
    <div>
        <h1>ADD EXTRA QUESTION</h1>
        <div style="margin-bottom: 50px">
            <label for="head" style="font-size: 2em">Question : &nbsp;</label>
            <input type="text" v-model="form.q" style="width: 700px;font-size: 2em;">
        </div>
        <div class="choice" style="width: 100%">
            <div>
                <label for="c1" style="font-size: 2em;">Choice A : &nbsp;</label>
                <input type="text" v-model="form.c1" style="width: 400px;font-size: 2em">
            </div>
            <div>
                <label for="c2" style="font-size: 2em;">Choice B : &nbsp;</label>
                <input type="text" v-model="form.c2" style="width: 400px;font-size: 2em">
            </div>
            <div>
                <label for="c3" style="font-size: 2em;">Choice C : &nbsp;</label>
                <input type="text" v-model="form.c3" style="width: 400px;font-size: 2em">
            </div>
            <div>
                <label for="c4" style="font-size: 2em;">Choice D : &nbsp;</label>
                <input type="text" v-model="form.c4" style="width: 400px;font-size: 2em">
            </div>
        </div>
        <div style="margin: 50px 0px">
            <label for="ans" style="font-size: 2em;">Answer: </label>
            <input type="text" v-model="form.ans" style="width: 400px;font-size: 2em">
        </div>
        <div>
            <button style="font-size: 2em;width: 130px" @click="send">SEND</button>
            <button style="font-size: 2em;width: 130px" @click="back">CANCEL</button>
        </div>
    </div>
</template>

<script>
import AuthUser from '../../store/AuthUser'
import Proposation from '../../store/proposition'
export default {
    data(){
        return{
            form:{
                q: '',
                c1: '',
                c2: '',
                c3: '',
                c4: '',
                ans: ''
            }
        }
    },
    methods:{
        back(){
            return this.$router.push({name: "ExtraSelect", params: {path:this.path}})
        },
        async send(){
            let payload = {
                q: this.form.q,
                c1: this.form.c1,
                c2: this.form.c2,
                c3: this.form.c3,
                c4: this.form.c4,
                ans: this.form.ans,
                id: AuthUser.getters.user.id
            }
            let res = await Proposation.dispatch('addQuestion', payload)
            if(res.success){
                this.$swal({title: "Send Success",icon: 'success'})
                this.$router.push({name: "ExtraSelect", params: {path: this.path}})
            }else{
                this.$swal('Send Failed!', res.message, 'error')
            }
        }
    },
    props:{
        path: ''
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: gold;
    margin-top: -0.35em;
    font-family: "8BITWONDERNominal";
    font-weight: normal;
    font-style: normal;
    font-size: 3em;
}
</style>