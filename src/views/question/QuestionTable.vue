<template>
    <div>
        <question-table :path="this.path" :type="this.type" />
    </div>
</template>

<script>
import QuestionTable from '../../components/QuestionTable.vue'
export default {
    components:{
        QuestionTable
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