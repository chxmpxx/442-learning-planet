<template>
    <div style="padding-top: 100px">
        <div>
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
            <input type="file" @change="handleChange" />
        </div>
        <div>
            <button @click="edit">Edit</button>
            <button>Delete</button>
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
export default {
    props:{
        id: '',
        index: ''
    },
    data(){
        return{
            reward: {},
            file: '',
        }
    },
    async created(){
        this.reward = await RewardService.getRewardById(this.id)
    },
    methods:{
        back(){
            this.$router.push('/rewardadmin')
        },
        handleChange(event) {
            this.file = event.target.files[0];
        },
        async uploadImage() {
            const data = new FormData();
            data.append("files", this.file);
            this.response = await UploadImage(data)
        },
        async edit() {
            if (this.file) {
                await this.uploadImage();
            }
            this.postReward();
            await Reward.dispatch("fetchReward");
            },
            async postReward() {
            let payload = {
                name: this.form.name,
                point: this.form.point,
                amount: this.form.amount,
                image: this.respone.data[0].id,
            };
            await Reward.dispatch("addReward", payload);
            this.$swal({ title: "Add Success", icon: "success" });
            this.$router.push({ path: "/rewardadmin" });
        },
    }

}
</script>

<style>

</style>