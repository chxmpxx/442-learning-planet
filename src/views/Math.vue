<template>
  <div class="math">
    <NavBar />
    <MathPlanet />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import MathPlanet from "../components/MathPlanet.vue";
import AuthUser from '../store/AuthUser'

export default {
  name: "Math",
  components: {
    NavBar,
    MathPlanet,
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
};
</script>

<style lang="scss" scoped>
.math {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // overflow: hidden;
  // position: absolute;
}
</style>
