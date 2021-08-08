<template>
    <div class='editR'>
        <NavBar/>
        <edit-reward :id="this.id" :index="this.index" />
    </div>
</template>

<script>
import EditReward from '../../components/EditReward.vue'
import NavBar from "@/components/NavBar.vue"
import AuthUser from '../../store/AuthUser'
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
    },
    mounted(){
    if(!this.isAuthen()){
      this.$swal("Restricted Area", "You have no permission", 'warning')
      this.$router.push('/')
    }else if(!this.isAdmin()){
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

<style lang="scss" scoped>
.editR{
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color:black;
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