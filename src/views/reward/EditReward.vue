<template>
    <div>
        <NavBar/>
        <edit-reward :id="this.id" :index="this.index" />
    </div>
</template>

<script>
import EditReward from '../../components/EditReward.vue'
import NavBar from "@/components/NavBar.vue"
export default {
    components:{
        EditReward,
        NavBar
    },
    data(){
        return{
            id: '',
            index: ''
        }
    },
    created(){
        this.id = this.$route.params.id
        this.index = this.$route.params.id
    }
}
</script>

<style>

</style>