<template>
    <div >
        <div style="padding-top: 100px">
            <label for="name">Name:</label>
            <input type="text" v-model='reward.name'>
        </div>
        <div>
            <label for="point">Point:</label>
            <input type="number" v-model="reward.point">
        </div>
        <div>
            <label for="stock">Stock: </label>
            <input type="number" v-model="reward.amount">
        </div>
        <div>
            <label for="type">Upload image :</label>
            <input type="file" @change="handleChange" style="padding-left:630px"/>
            <div>
                <img :src="getApi()+reward.image.url" id="img-preview">
            </div>
        </div>
        <div>
            <button @click="edit">Edit</button>
            <button @click="deleteR">Delete</button>
        </div>
        <div>
            <button @click="back">Back</button>
        </div>
  </div>
</template>

<script>
import Reward from '../store/RewardApi'
import RewardService from '../services/RewardService'
import UploadImage from '../services/UploadService'
let api_endpoint = process.env.VUE_APP_USER_ENDPOINT
export default {
  props: {
    id: "",
    index: "",
  },
  data() {
    return {
      reward: {
          image:{
              url:''
          }
      },
      file: "",
      response: ''
    };
  },
  async created() {
    this.reward = await RewardService.getRewardById(this.id);
  },
  methods: {
    back() {
      this.$router.push("/reward-admin");
    },
    getApi(){
        return api_endpoint
    },
    handleChange(event) {
        this.file = event.target.files[0];
        if(this.file){
            var src = URL.createObjectURL(event.target.files[0])
            var preview = document.getElementById('img-preview')
            preview.src = src
        }
    },
    async uploadImage() {
        const data = new FormData();
        data.append("files", this.file);
        this.response = await UploadImage.uploadImage(data)
    },
    async edit() {
        if (this.file) {
            await this.uploadImage();
        }
        this.putReward();
    },
    async deleteR(){
        await Reward.dispatch('deleteReward',{id:this.id})
        this.$router.push('/reward-admin')
        this.$swal({title:'Delete Success', icon: 'success'})    
    },
    async putReward() {
        if(this.file){
            let payload = {
                name: this.reward.name,
                point: this.reward.point,
                amount: this.reward.amount,
                image: this.response.data[0].id,
                id: this.id,
                index: this.index
            };
            await Reward.dispatch("editRewardWithImage", payload);
            this.$swal({ title: "Edit Success", icon: "success" });
            this.$router.push({ path: "/reward-admin" });
        }else{
            let payload = {
                name: this.reward.name,
                point: this.reward.point,
                amount: this.reward.amount,
                id: this.id,
                index: this.index
            }
            await Reward.dispatch("editReward", payload);
            this.$swal({ title: "Edit Success", icon: "success" });
            this.$router.push({ path: "/reward-admin" });
        }
    },
}

}
</script>

<style>
</style>