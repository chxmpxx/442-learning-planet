<template>
  <div >
    <Navbar />
    <div class='leader'><LeaderTable /></div>
  </div>
</template>

<script>
import LeaderTable from "../components/LeaderTable.vue";
import Navbar from "../components/NavBar.vue";
export default {
  components: {
    LeaderTable,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.leader{
  font-family: "PressStart2PRegular";
  font-weight: normal;
  font-style: normal;
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