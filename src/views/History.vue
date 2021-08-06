<template>
  <div class='history'>
    <NavBar />
    <br><br><br><br><br><br>
    <div class="table"><history-table></history-table></div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HistoryTable from "@/components/HistoryTable.vue";
export default {
  components: { NavBar, HistoryTable },
};
</script>

<style lang="scss" scoped>
.history{
  font-family: "PressStart2PRegular";
  font-weight: normal;
  font-style: normal;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
      url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>