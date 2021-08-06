<template>
    <div class='waitapprove'>
        <NavBar />
        <br><br><br><br><br><br>
        <wait></wait>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Wait from '@/components/extra/Wait'
export default {
    components:{
        NavBar,
        Wait
    },
}
</script>

<style lang="scss" scoped>
.waitapprove{
  font-family: "PressStart2PRegular";
  font-weight: normal;
  font-style: normal;
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