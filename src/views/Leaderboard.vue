<template>
  <div >
    <Navbar />
    <div class='leader'><LeaderTable /></div>
  </div>
</template>

<script>
import LeaderTable from "../components/LeaderTable.vue";
import Navbar from "../components/NavBar.vue";
import AuthUser from '../store/AuthUser'
export default {
  components: {
    LeaderTable,
    Navbar,
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
      return AuthUser.getters.isAdmin ===3
    },
    isAuthen(){
      return AuthUser.getters.isAuthen
    }
  }
};
</script>

<style lang="scss" scoped>
.leader{
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
    url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>