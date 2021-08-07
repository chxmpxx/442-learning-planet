<template>
  <div class='addR'>
    <NavBar />
    <div><AddRewardTable /></div>
  </div>
</template>

<script>
import AddRewardTable from "@/components/AddRewardTable.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    AddRewardTable,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.addR{
  color:black;
  font-family: 'Prompt';
  font-weight: normal;
  font-style: normal;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
    url("../../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>