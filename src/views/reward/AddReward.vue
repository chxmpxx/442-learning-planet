<template>
  <div class='addR'>
    <NavBar />
    <div><AddRewardTable /></div>
  </div>
</template>

<script>
import AddRewardTable from "@/components/AddRewardTable.vue";
import NavBar from "@/components/NavBar.vue";
import AuthUser from '../../store/AuthUser'
export default {
  components: {
    AddRewardTable,
    NavBar,
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
};
</script>

<style lang="scss" scoped>
.addR{
  color:black;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
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