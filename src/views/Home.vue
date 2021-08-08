<template>
  <div class="home">
    <NavBar />
    <Planet />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Planet from "@/components/Planet.vue";
import AuthUser from '../store/AuthUser'

export default {
  name: "Home",
  components: {
    NavBar,
    Planet,
  },
  mounted() {
    if(!this.isAuthen()){
      this.$swal("Restricted Area", "You have no permission", 'warning')
      this.$router.push('/')
    }
  },
  methods:{
    isAuthen(){
      return AuthUser.getters.isAuthen
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  position: absolute;
}
</style>
