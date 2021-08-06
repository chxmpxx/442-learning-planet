<template>
  <div class="addform">
    <div>Add</div>
    <div>
      <div><label>Name : </label><input type="text" v-model="form.name" /></div>
      <div>
        <label>Point : </label><input type="number" v-model="form.point" />
      </div>
      <div>
        <label>Amount : </label><input type="number" v-model="form.amount" />
      </div>
      <div>
        <label for="type">Upload image :</label>
        <input type="file" @change="handleChange" />
      </div>
      <div>
        <button
          @click="addReward"
          type="submit"
          :disabled="form.name == '' || form.point == '' || form.amount == ''"
        >
          Confirm
        </button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";
import Axios from "axios";
import AuthService from "@/services/AuthService";

export default {
  data() {
    return {
      form: { name: "", point: "", amount: "", image: "" },
      respone: "",
    };
  },
  methods: {
    // async addReward() {
    //   let payload = {
    //     name: this.form.name,
    //     point: this.form.point,
    //     amount: this.form.amount,
    //     image: this.form.image,
    //   };
    //   await RewardApiStore.dispatch("addReward", payload);
    //   this.$swal({ title: "Add Success", icon: "success" });
    //   this.$router.push({ path: "/rewardadmin" });
    // },
    handleChange(event) {
      this.file = event.target.files[0];
    },
    cancel() {
      this.$router.push({ path: "/rewardadmin" });
    },
    async uploadImage() {
      const data = new FormData();
      data.append("files", this.file);
      this.respone = await Axios.post(
        "http://localhost:1337" + "/upload",
        data,
        {
          headers: {
            Authorization: `Bearer ${AuthService.getJwt()}`,
          },
        }
      );
    },
    async addReward() {
      if (this.file) {
        await this.uploadImage();
      }
      this.postReward();
      await RewardApiStore.dispatch("fetchReward");
    },
    async postReward() {
      let payload = {
        name: this.form.name,
        point: this.form.point,
        amount: this.form.amount,
        image: this.respone.data[0].id,
      };
      await RewardApiStore.dispatch("addReward", payload);
      this.$swal({ title: "Add Success", icon: "success" });
      this.$router.push({ path: "/rewardadmin" });
    },
  },
};
</script>

<style>
.addform {
  padding-top: 100px;
  text-align: left;
  margin-left: 20%;
  font-size: 20px;
}
</style>