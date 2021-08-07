<template>
    <div class='addquestion'>
        <NavBar />
        <br><br><br><br><br><br>
        <add-extra :path="this.path" />    
    </div>

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddExtra from '@/components/extra/AddExtra'
export default {
    components:{
        NavBar,
        AddExtra
    },
    data(){
        return{
            path: ''
        }
    },
    created(){
        this.path = this.$route.params.path
    }
}
</script>

<style lang="scss" scoped>
.addquestion{
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