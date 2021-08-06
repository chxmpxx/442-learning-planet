<template>
  <div>
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

<style>
</style>