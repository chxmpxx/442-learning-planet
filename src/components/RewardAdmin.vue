<template>
  <div class="reward-page">
    <br><br><br><br><br>
    <div class="add-btn">
      <button class="addReward btn" @click="click('/add-reward')">
        Add reward
      </button>
    </div>
    
    <div class="show-reward">
      <div v-for="(reward, index) in rewards" :key="index">
        <div class="card" @click="edit(reward, index)">
          <div class="card-image">
            <img
              class="img"
              :src="getApi() + reward.image.url"
              :alt="reward.name"
            />
          </div>
          <div class="card-text">
            <h2>{{ reward.name }}</h2>
          </div>
          <div class="card-stats">
            <div class="stat border">
              <div class="value">{{ reward.point }}</div>
              <div class="type">Points</div>
            </div>
            <div class="stat">
              <div class="value">{{ reward.amount }}</div>
              <div class="type">Stock</div>
            </div>
          </div>
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
      this.rewards = res.data;
    },

    click(path) {
      this.$router.push({ path: path });
    },
    edit(reward, index) {
      this.$router.push({
        name: "EditReward",
        params: { id: reward.id, index: index },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  flex-wrap: wrap;
}

.reward-page {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
    url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
}

.add-btn {
  display: flex;
  justify-content: center;
}
.show-reward {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
.addReward {
  margin-top: 100px;
}
.img {
  width: 250px;
  height: 250px;
  margin: 0.5rem;
  filter: drop-shadow(0 0 0.5em rgb(255, 255, 255));
}

.btn {
  font-size: 1.7em;
  position: relative;
  display: inline-block;
  padding: 15px 40px 15px 40px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.3em;
  border-radius: 20px;
  border-width: 0em;
  background: linear-gradient(90deg, #755bea, #ff72c0);

  // color: black;
  // width: 10%;
  // background: tomato;
  // color: white;
  // font-weight: 700;
  // border: none;
  // padding: 0.75rem;
  // border-radius: 0.75rem;
  // text-transform: uppercase;
  // letter-spacing: 0.5px;
  // transition: 0.2s;
  // font-size: 1.15em;
}

.btn:hover {
  background: linear-gradient(90deg, tomato, gold);
  filter: drop-shadow(0 0 1em #755bea);
  cursor: pointer;
  transition: 0.2s;
}

.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 300px 60px 80px;
  grid-template-areas: "image" "text" "stats";
  font-family: "Montserrat", sans-serif;
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 2em;
  transition: 0.25s;
  cursor: pointer;
}

.card-image {
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-text {
  display: flex;
  grid-area: text;
  align-items: center;
  justify-content: center;
}

.card-text h2 {
  font-size: 2em;
}

.card-stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(90deg, #755bea, #ff72c0);
}

.card-stats .stat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: white;
}

.card-stats .type {
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
}

.card-stats .value {
  font-size: 22px;
  font-weight: 500;
}

.card-stats .border {
  border-right: 1px solid rgb(255, 130, 255);
}

.card:hover {
  transform: scale(1.05);
  transition: 0.25s;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
}
</style>