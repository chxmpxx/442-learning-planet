<template>
    <div class='check'>
        <NavBar />
        <br><br><br><br><br><br>
        <check :id="this.id"/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Check from '../../components/extra/Check'
export default {
    components:{
        NavBar,
        Check
    },
    data(){
        return{
            id:''
        }
    },
    created(){
        this.id = this.$route.params.id
    }
}
</script>

<style lang="scss" scoped>
.check{
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
}
</style>