<template>
    <div>
        <x-question-table :path="this.path" :type="this.type" />
    </div>
</template>

<script>
import XQuestionTable from "../../components/question/XQuestionTable.vue"
export default {
    components:{
        XQuestionTable
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