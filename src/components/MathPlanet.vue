<template>
  <div class="mathplanet">
    <div class="star">
      <div>
          <img 
            class="star2" 
            src="../assets/star/star2a.png" 
            alt="star2" width="15%" title="ดาวเศษส่วนทศนิยม"
            @click="choose(2)">
          <img 
            class="star4" 
            src="../assets/star/star4a.png" 
            alt="star4" width="15%" title="ดาวเรขาคณิต"
            @click="choose(4)">
      </div>
      <div>
          <img 
            class="star1" 
            src="../assets/star/star1a.png" 
            alt="star1" width="15%" title="ดาวบวกลบคูณหารทั่วไป"
            @click="choose(1)">
          <img 
            class="star3" 
            src="../assets/star/star3a.png" 
            alt="star3" width="15%" title="ดาวจำนวนร้อยละ"
            @click="choose(3)">
      </div>
    </div>
    <div class="textinfo">
      <h1 id="info">CHOOSE YOUR OWN ADVENTURE</h1>
    </div>
    <img class="mathbg" src="../assets/math-rocketplanet.png" alt="mathbg" width="100%">

    <!-- Block Rotation-->
    <!-- <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div> -->
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
export default {
  data(){
    return{
      path: '',
    }
  },
  async created(){
    this.path = this.$route.params.path
  },
  methods:{
    choose(type){
      if(type===2){
        this.$router.push({name: 'MT2', params: {path:'math', type: 2}})
      }else if(type===1){
        this.$router.push({name: 'MT1', params: {path:'math', type: 1}})
      }else if(type===3){
        this.$router.push({name: 'MT3', params: {path:'math', type: 3}})
      }else if(type===4){
        this.$router.push({name: 'MT4', params: {path:'math', type: 4}})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mathplanet{
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
    url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
}
.textinfo {
  // border-width: 1.5px;
  // border-radius: 15px;
  padding: 0em 1.5em 0.5em 13.5em;
  margin-top: 7em;
}
h1 {
  color: #ffffff;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 1.25em;
  text-shadow: 0 0 20px #fff;
  animation: pulse 2s ease-in infinite;
  cursor: default;
}
.mathbg{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}

//-----------star---------------------------
.star{
  margin-top: -2.6em;
}
.star1{
  margin-left: -18em;
  margin-top: -5em;
}
.star2{
  margin-left: 17em;
}
.star3{
  margin-left: 20em;
  margin-top: -5em;
}
.star4{
  margin-left: 20em;
}
.star1:hover{
  filter: drop-shadow(0 0 0.5em #A7DBFF);
}
.star2:hover{
  filter: drop-shadow(0 0 0.5em #A7DBFF);
}
.star3:hover{
  filter: drop-shadow(0 0 0.5em #A7DBFF);
}
.star4:hover{
  filter: drop-shadow(0 0 0.5em #A7DBFF);
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
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