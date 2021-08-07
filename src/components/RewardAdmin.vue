<template>
  <div>
    <button class="addre" @click="click('/addreward')">Add reward</button>

    <div class="show1">
      <div v-for="(reward, index) in rewards" :key="index">
        <div>
          <img
            class="img"
            :src="getApi() + reward.image.url"
            :alt="reward.name"
          />
          <div>{{ reward.name }}</div>
          <div>{{ reward.point }} points</div>
          <div>Stock : {{ reward.amount }}</div>
          <button @click="edit(reward, index)">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";

let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";

export default {
  data() {
    return {
      rewards: [],
      point: [],
      a: {},
    };
  },

  async created() {
    this.fetchReward();
  },
  methods: {
    getApi() {
      return api_endpoint;
    },
    async fetchReward() {
      let res = await RewardApiStore.dispatch("fetchReward");
      this.rewards = res.data
    },

    click(path) {
      this.$router.push({ path: path });
    },
    edit(reward, index){
      this.$router.push({name: 'EditReward', params: {id: reward.id, index:index}})
    }
  },
};
</script>

<style lang="scss" scoped>
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
.addre {
  margin-top: 100px;
  text-align: center;
  float: left;
  margin-left: 5%;
  font-size: 20px;
}
.img {
  width: 160px;
  height: 160px;
}
</style>