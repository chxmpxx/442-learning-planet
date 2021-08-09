<template>
  <div>
    <br /><br /><br /><br /><br /><br />
    <h1>Edit Reward</h1>
    <br /><br />

    <div class="addform">
      <div>
        <label for="name">&nbsp;&nbsp;Name : &nbsp;&nbsp;</label>
        <input type="text" v-model="reward.name" style="width: 1000px" />
      </div>
      <div>
        <label for="point">&nbsp;&nbsp;&nbsp;Point : &nbsp;&nbsp;</label>
        <input type="number" v-model="reward.point" style="width: 416px" />

        <label for="stock">Stock : &nbsp;</label>
        <input type="number" v-model="reward.amount" style="width: 416px" />
      </div>

      <br /><br /><br />
      <div class="infobottom">
        <div>
          <label for="type">Upload image</label>
          <input
            class="fileimage"
            type="file"
            @change="handleChange"
            style="padding-left: 630px"
          />
          <div>
            <img :src="getApi() + reward.image.url" id="img-preview" />
          </div>
        </div>

        <div class="butbottom">
          <div>
            <button
              @click="edit"
              :disabled="
                this.reward.name == '' ||
                this.reward.point <= 0 ||
                this.reward.amount <= -1
              "
            >
              Edit
            </button>
            <button @click="deleteR">Delete</button>
          </div>
          <div>
            <button @click="back">Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reward from "../store/RewardApi";
import RewardService from "../services/RewardService";
import UploadImage from "../services/UploadService";
let api_endpoint = process.env.VUE_APP_USER_ENDPOINT;
export default {
  props: {
    id: "",
    index: "",
  },
  data() {
    return {
      reward: {
        image: {
          url: "",
        },
      },
      file: "",
      response: "",
    };
  },
  async created() {
    this.reward = await RewardService.getRewardById(this.id);
  },
  methods: {
    back() {
      this.$router.push("/reward-admin");
    },
    getApi() {
      return api_endpoint;
    },
    handleChange(event) {
      this.file = event.target.files[0];
      if (this.file) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("img-preview");
        preview.src = src;
      }
    },
    async uploadImage() {
      const data = new FormData();
      data.append("files", this.file);
      this.response = await UploadImage.uploadImage(data);
    },
    async edit() {
      if (this.file) {
        await this.uploadImage();
      }
      this.putReward();
    },
    async deleteR() {
      this.$swal({
        title: 'Are you sure to delete?',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red'

      }).then(async (result) =>{
        if(result.isConfirmed){
          await Reward.dispatch("deleteReward", { id: this.id });
          this.$router.push("/reward-admin");
          this.$swal({ title: "Delete Success", icon: "success" });
        }else{
          this.$swal({title: 'Cancel', icon: 'error'})
        }
      })
    },
    async putReward() {
      if (this.file) {
        let payload = {
          name: this.reward.name,
          point: this.reward.point,
          amount: this.reward.amount,
          image: this.response.data[0].id,
          id: this.id,
          index: this.index,
        };
        await Reward.dispatch("editRewardWithImage", payload);
        this.$swal({ title: "Edit Success", icon: "success" });
        this.$router.push({ path: "/reward-admin" });
      } else {
        let payload = {
          name: this.reward.name,
          point: this.reward.point,
          amount: this.reward.amount,
          id: this.id,
          index: this.index,
        };
        await Reward.dispatch("editReward", payload);
        this.$swal({ title: "Edit Success", icon: "success" });
        this.$router.push({ path: "/reward-admin" });
      }
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
  font-size: 2em;
  line-height: 1.6em;
  text-align: left;
  margin-top: 1em;
}
.infobottom {
  text-align: center;
}
.fileimage {
  margin-left: -7em;
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
img{
  width: 250px;
  height: 250px;
  margin: 0.5rem;
  filter: drop-shadow(0 0 0.5em rgb(255, 255, 255));
}
</style>