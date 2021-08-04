<template></template>

<script>
import AuthUser from "@/store/AuthUser";
export default {
  mounted() {
    AuthUser.dispatch("logout");
    this.$router.push("/");
  },
};
</script>

<style>
</style>