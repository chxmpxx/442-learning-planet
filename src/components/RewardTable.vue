<template>
  <div class="reward-page">
    <br /><br /><br /><br /><br />
    <div class="add-btn">
      <button class="addReward btn">{{ this.current_point }} POINTS</button>
    </div>

    <div class="show-reward">
      <div v-for="(reward, index) in rewards" :key="index">
        <div
          class="card"
          @click="exchange(reward, index)"
          :disabled="reward.amount == 0"
        >
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
import AuthUser from "@/store/AuthUser";
import moment from "moment";
import HistoryApiStore from "@/store/HistoryApi";
import Member from "../store/member";
let api_endpoint = process.env.VUE_APP_USER_ENDPOINT || "http://localhost:1337";
export default {
  data() {
    return {
      rewards: [],
      user: {},
      current_point: 0,
      id: "",
    };
  },

  async created() {
    this.fetchReward();
    this.id = JSON.parse(localStorage.getItem("auth-user")).user.id;
    this.user = await Member.dispatch("searchMe", { id: this.id });
    this.calPoint();
  },
  methods: {
    getApi() {
      return api_endpoint;
    },
    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward");
      this.rewards = RewardApiStore.getters.rewards;
    },
    async fetchUser() {
      this.a = AuthUser.getters.user;
      this.point = this.a.histories;
      this.calpoint();
    },
    async fetchReward() {
      await RewardApiStore.dispatch("fetchReward");
      this.rewards = RewardApiStore.getters.rewards;
    },
    calPoint() {
      let get = 0;
      let use = 0;
      this.user.histories.forEach((element) => {
        if (element.type === "get") {
          get += parseInt(element.point);
        } else {
          use += parseInt(element.point);
        }
      });
      this.current_point = get - use;
    },
    async exchange(reward, index) {
      this.$swal({
        title: 'Are you sure to exchange?',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Yes, exchange it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red'

      }).then(async (result) =>{
        if(result.isConfirmed){
          if (reward.amount > 0) {
            if (this.current_point >= reward.point) {
              let date = moment().toISOString();
              let payload1 = {
                date: moment(date).format("YYYY-MM-DD"),
                heading: `Buy a ${reward.name} ${reward.point}`,
                point: "" + reward.point,
                type: "use",
                id: this.user.id,
              };
              await HistoryApiStore.dispatch("addHistory", payload1);
              reward.amount -= 1;
              let payload = {
                amount: "" + reward.amount,
                id: reward.id,
                index: index,
              };
              await RewardApiStore.dispatch("exchangeReward", payload);
              this.id = await AuthUser.getters.user.id;
              this.user = await Member.dispatch("searchMe", { id: this.id });
              this.calPoint();
              this.$swal("Exchange Success", `You got ${reward.name}`, "success");
            } else {
              this.$swal("Exchange Failed", "Not enough points", "error");
            }
          } else {
            this.$swal("Exchange Failed", "Out of stock", "error");
          }
        }else{
          this.$swal({title: 'Cancel', icon: 'error'})
        }
      })
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
}

h1 {
  color: gold;
  text-align: right;
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