<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Detail</th>
          <th>Point</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(history, index) in histories" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ history.date }}</td>
          <td>{{ history.heading }}</td>
          <td>{{ history.point }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
import moment from "moment";
export default {
  data() {
    return {
      histories: {},
      a: {},
    };
  },
  created() {
    this.createHistories();
  },
  methods: {
    createHistories() {
      this.a = AuthUser.getters.user;
      this.histories = this.a.histories;
    },
  },
};
</script>

<style>
th,
td {
  text-align: left;
  padding: 8px;
  font-size: 20px;
}
</style>