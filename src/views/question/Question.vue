<template>
    <div>
        <question :id="this.id" :type="this.type" :path="this.path" />
    </div>
</template>

<script>
import Question from '../../components/Question.vue'
export default {
    data(){
        return{
            path: '',
            type: '',
            id: ''
        }
    },
    components:{
        Question
    },
    created(){
        this.path = this.$route.params.path
        this.type = this.$route.params.type
        this.id = this.$route.params.id
    }
}
</script>

<style>

</style>