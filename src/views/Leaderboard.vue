<template>
  <div>
    <Navbar />
    <LeaderTable />
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

<style lang="scss" scoped></style>
