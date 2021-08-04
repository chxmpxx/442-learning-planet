<template>
  <div class="show1">
    <div v-for="reward in rewards" :key="reward.id">
      <div>
        <img v-bind:src="reward.image" alt="reward.name" class="img" />
        <div>{{ reward.name }}</div>
        <div>{{ reward.point }} points</div>
        <div>Stock : {{ reward.amount }}</div>
        <button>Exchange</button>
      </div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";
export default {
  data() {
    return {
      rewards: [],
    };
  },

  created() {
    this.fetchReward();
  },
  methods: {
    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward");
      this.rewards = RewardApiStore.getters.rewards;
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
.img {
  width: 150px;
  height: 150px;
}
</style>