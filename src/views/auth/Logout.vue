<template></template>

<script>
import AuthUser from "@/store/AuthUser";
export default {
  mounted() {
    if(!this.isAuthen()){
      this.$swal("Restricted Area", "You have no permission", 'warning')
      this.$router.push('/')
    }
    AuthUser.dispatch("logout");
    this.$swal({title: "Logout Success!", icon: 'success'})
    this.$router.push("/");
  },
  methods:{
    isAuthen(){
      return AuthUser.getters.isAuthen
    }
  }
};
</script>

<style>
</style>