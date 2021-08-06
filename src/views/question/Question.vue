<template>
    <div class='question'>
        <NavBar />
        <br><br><br><br><br>
        <question :id="this.id" :type="this.type" :path="this.path" />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
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
        NavBar,
        Question
    },
    created(){
        this.path = this.$route.params.path
        this.type = this.$route.params.type
        this.id = this.$route.params.id
    }
}
</script>

<style lang="scss" scoped>
.question{
    font-family: 'Prompt';
    font-weight: normal;
    font-style: normal;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
        url("../../assets/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}
</style>