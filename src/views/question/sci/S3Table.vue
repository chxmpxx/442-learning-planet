<template>
    <div class='qtable'>
        <NavBar />
        <br><br><br><br><br>
        <question-table />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import QuestionTable from "@/components/question/sci/S3Table"
export default {
    components:{
        NavBar,
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
.qtable{
    font-family: 'Prompt';
    font-weight: normal;
    font-style: normal;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
        url("../../../assets/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}
</style>