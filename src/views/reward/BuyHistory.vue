<template>
  <div class='buyhis'>
    <Navbar />
    <br><br><br><br><br><br>
    <div class="table"><buy-history></buy-history></div>
  </div>
</template>

<script>
import BuyHistory from "../../components/BuyHistory.vue";
import Navbar from "../../components/NavBar.vue";

export default {
  components: {
    BuyHistory,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.buyhis{
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