<template>
    <div class='extra'>
        <NavBar />
        <br><br><br><br><br><br>
        <extra-select :path="this.path"/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ExtraSelect from '@/components/extra/ExtraSelect'
export default {
    components:{
        NavBar,
        ExtraSelect
    },
    data(){
        return{
            path:''
        }
    },
    created(){
        this.path = this.$route.params.path
    }
}
</script>

<style lang="scss" scoped>
.extra{
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