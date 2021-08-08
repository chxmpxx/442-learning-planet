<template>
    <div class='qtable'>
        <NavBar />
        <br><br><br><br><br>
        <question-table />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import QuestionTable from "@/components/question/sci/S2Table"
import AuthUser from '../../../store/AuthUser'
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
    },
    mounted(){
    if(!this.isAuthen()){
      this.$swal("Restricted Area", "You have no permission", 'warning')
      this.$router.push('/')
    }else if(this.isAdmin()){
      this.$swal("Restricted Area", "You have no permission", 'warning')
      this.$router.push('/home')
    }
  },
  methods:{
    isAdmin(){
      return AuthUser.getters.isAdmin === 3
    },
    isAuthen(){
      return AuthUser.getters.isAuthen
    }
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