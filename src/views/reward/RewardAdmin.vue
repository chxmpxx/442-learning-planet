<template>
  <div>
    <NavBar />
    <div><RewardAdmin /></div>
  </div>
</template>

<script>
import RewardAdmin from "@/components/RewardAdmin.vue";
import NavBar from "@/components/NavBar.vue";
import AuthUser from '../../store/AuthUser'
export default {
  components: {
    RewardAdmin,
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

<style>
</style>