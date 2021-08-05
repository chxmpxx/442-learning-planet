<template>
  <div>
    <div class="point">{{ this.current_point }} points</div>
    <div class="show1">
      <div v-for="reward in rewards" :key="reward.id">
        <div>
          <img v-bind:src="reward.image" alt="reward.name" class="img" />
          <div>{{ reward.name }}</div>
          <div>{{ reward.point }} points</div>
          <div>Stock : {{ reward.amount }}</div>
          <button @click="exchange(reward.point)">Exchange</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";
import AuthUser from "@/store/AuthUser";
import moment from "moment";
import HistoryApiStore from "@/store/HistoryApi";
export default {
  data() {
    return {
      rewards: [],
      point: [],
      a: {},
      get: [],
      use: [],
      total_get: 0,
      total_use: 0,
      current_point: 0,
    };
  },

  created() {
    this.fetchReward();
    this.fetchUser();
    this.calpoint();
  },
  beforeUpdate() {
    this.fetchReward();
  },
  methods: {
    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward");
      this.rewards = RewardApiStore.getters.rewards;
    },
    async fetchUser() {
      this.a = AuthUser.getters.user;
      this.point = this.a.histories;
      this.calpoint;
    },
    calpoint() {
      this.total_get = 0;
      this.total_use = 0;
      this.point.forEach((element) => {
        if (element.type == "get") {
          this.total_get += parseInt(element.point);
        } else if (element.type == "use") {
          this.total_use += parseInt(element.point);
        }
      });
      this.current_point = this.total_get - this.total_use;
    },
    async exchange(reward_point) {
      if (this.current_point >= reward_point) {
        let date = moment().toISOString();
        let payload1 = {
          date: moment(date).format("YYYY-MM-DD"),
          heading: "Exchange reward",
          point: reward_point,
          type: "use",
          user: AuthUser.getters.user,
        };
        await HistoryApiStore.dispatch("addHistory", payload1);
      } else {
        this.$swal("Exchange Failed", "Not enough points", "error");
      }
    },
  },
};
</script>

<style>
.show1 {
  padding-top: 80px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.show1 > div {
  width: 20%;
}
.point {
  padding-top: 100px;
  text-align: right;
  padding-right: 30px;
  font-size: 20px;
}
.img {
  width: 200px;
  height: 200px;
}
</style>