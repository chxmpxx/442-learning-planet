<template>
  <div class="sci">
    <NavBar/>
    <SciPlanet/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import SciPlanet from '../components/SciPlanet.vue'
import AuthUser from '../store/AuthUser'

export default {
  name: "Sci",
  components: {
    NavBar,
    SciPlanet,
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

<style lang="scss" scoped>
.sci{
  background: linear-gradient(#080e1a, #182b4c, #405a74, #a7dbff);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>