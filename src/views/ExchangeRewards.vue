<template>
  <div>
    <NavBar />
    <div><reward-table></reward-table></div>
  </div>
</template>

<script>
import RewardTable from "@/components/RewardTable.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    RewardTable,
    NavBar,
  },
};
</script>

<style>
</style>