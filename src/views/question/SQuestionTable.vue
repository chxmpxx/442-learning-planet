<template>
    <div>
        <s-question-table :path="this.path" :type="this.type" />
    </div>
</template>

<script>
import SQuestionTable from "../../components/question/SQuestionTable.vue"
export default {
    components:{
        SQuestionTable
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