<template>
  <div class="show">
    <div v-for="reward in rewards" :key="reward.id">
      <div>
        <img v-bind:src="reward.image" alt="reward.name" class="img" />
        <div>{{ reward.name }}</div>
        <div>{{ reward.point }} points</div>
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
.show {
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
.show > div {
  width: 20%;
}
.img {
  width: 150px;
  height: 150px;
}
</style>