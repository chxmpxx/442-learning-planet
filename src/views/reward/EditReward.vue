<template>
    <div class='editR'>
        <NavBar/>
        <edit-reward :id="this.id" :index="this.index" />
    </div>
</template>

<script>
import EditReward from '../../components/EditReward.vue'
import NavBar from "@/components/NavBar.vue"
export default {
    components:{
        EditReward,
        NavBar
    },
    data(){
        return{
            id: '',
            index: ''
        }
    },
    created(){
        this.id = this.$route.params.id
        this.index = this.$route.params.id
    }
}
</script>

<style lang="scss" scoped>
.editR{
  color:black;
  font-family: 'Prompt';
  font-weight: normal;
  font-style: normal;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
    url("../../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>