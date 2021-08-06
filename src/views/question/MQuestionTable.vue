<template>
    <div>
        <m-question-table :path="this.path" :type="this.type" />
    </div>
</template>

<script>
import MQuestionTable from "../../components/question/MQuestionTable.vue"
export default {
    components:{
        MQuestionTable
    },
    data(){
        return{
            type: '',
            path: ''
        }
    },
    created(){
        this.path = this.$route.params.path
        this.type = this.$route.params.type
    }
}
</script>

<style>

</style>