<template>
  <div>
    <br /><br /><br /><br /><br /><br />
    <h1>Add Reward</h1>
    <br /><br />
    <div class="addform">
      <div>
        <label>&nbsp;&nbsp;Name : &nbsp;&nbsp;</label>
        <input style="width: 1000px"  type="text" v-model="form.name"/>
      </div>
      <div>
        <label>&nbsp;&nbsp;&nbsp;Point : &nbsp;&nbsp;</label>
        <input type="number" v-model="form.point" />
        <label>Amount : &nbsp;</label>
        <input type="number" v-model="form.amount" />
      </div>
      <br /><br /><br />

      <div class="infobottom">
        <div>
          <label for="type">Upload image</label>
          <input class='fileimage' type="file" id="img" accept="image/*" @change="handleChange" />
          <div>
            <img id="img-preview">
          </div>
        </div>
        <br />
        <div class="butbottom">
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

    <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import RewardApiStore from "@/store/RewardApi";
import Upload from "../services/UploadService";

export default {
  data() {
    return {
      form: { name: "", point: "", amount: "", image: "" },
      response: "",
      file: "",
    };
  },
  methods: {
    handleChange(event) {
      this.file = event.target.files[0];
      if(this.file){
        var src = URL.createObjectURL(event.target.files[0])
        var preview = document.getElementById('img-preview')
        preview.src = src
      }
    },
    cancel() {
      this.$router.push({ path: "/reward-admin" });
    },
    async uploadImage() {
      const data = new FormData();
      data.append("files", this.file);
      this.response = await Upload.uploadImage(data);

      // this.respone = await Axios.post(
      //   "http://localhost:1337" + "/upload",
      //   data,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${AuthService.getJwt()}`,
      //     },
      //   }
      // );
    },
    async addReward() {
      if (this.file) {
        await this.uploadImage();
      }
      this.postReward();
    },
    async postReward() {
      let payload = {
        name: this.form.name,
        point: this.form.point,
        amount: this.form.amount,
        image: this.response.data[0].id,
      };
      await RewardApiStore.dispatch("addReward", payload);
      this.$swal({ title: "Add Success", icon: "success" });
      this.$router.push({ path: "/reward-admin" });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: gold;
  margin-top: -0.35em;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 3em;
}
.addform {
  text-align: left;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 0.3em;
  border-radius: 15px;
  border-color: gold;
  margin: 0.5em 7em 5em 7em;
  padding: 2em 5em 2em 2em;
}
label {
  font-size: 2em;
  text-align: left;
  margin-left: 2em;
}
input {
  width: 400px;
  font-size: 2em;
  line-height: 1.6em;
  text-align: left;
  margin-top: 1em;
}
.infobottom {
  text-align: center;
}
.fileimage {
  margin-left: 23em;
  font-size: 1.5em;
}
button {
  font-size: 1.5em;
  border-radius: 5px;
  border-width: 1px;
  width: 6.4em;
  height: 2em;
  margin: 0.5em 1em 0.5em 0em;
}
button:hover {
  background-color: tomato;
  color: #ffffff;
  border-color: #ffffff;
  transition: 0.5s;
}
.butbottom {
  margin-left: 4em;
}

// ------------------Block Rotation--------------------
.box div {
  height: 6px;
  width: 6px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  position: absolute;
}
.box div:nth-child(1) {
  top: 12%;
  left: 42%;
  animation: animate 10s linear infinite;
}
.box div:nth-child(2) {
  top: 70%;
  left: 50%;
  animation: animate 7s linear infinite;
}
.box div:nth-child(3) {
  top: 17%;
  left: 6%;
  animation: animate 9s linear infinite;
}
.box div:nth-child(4) {
  top: 20%;
  left: 60%;
  animation: animate 8s linear infinite;
}
.box div:nth-child(5) {
  top: 67%;
  left: 10%;
  animation: animate 6s linear infinite;
}
.box div:nth-child(6) {
  top: 80%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.box div:nth-child(7) {
  top: 60%;
  left: 80%;
  animation: animate 9s linear infinite;
}
.box div:nth-child(8) {
  top: 32%;
  left: 25%;
  animation: animate 10s linear infinite;
}
.box div:nth-child(9) {
  top: 90%;
  left: 25%;
  animation: animate 9s linear infinite;
}
.box div:nth-child(10) {
  top: 20%;
  left: 80%;
  animation: animate 6s linear infinite;
}
.box div:nth-child(11) {
  top: 40%;
  left: 90%;
  animation: animate 10s linear infinite;
}
.box div:nth-child(12) {
  top: 35%;
  left: 45%;
  animation: animate 7s linear infinite;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadede {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.35;
  }
}
@keyframes animate {
  0% {
    opacity: 0;
  }
  50% {
    transform: scale(1.5) translateY(-45px) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(2) translateY(-90px) rotate(360deg);
    opacity: 0;
  }
}
</style>