<template>
  <div>
    <NavBar />
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

<style style lang="scss" scoped>
.table {
  padding-top: 120px;
}
</style>