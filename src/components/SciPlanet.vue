<template>
  <div class="sciplanet">
    <div class="star">
      <div>
        <a href="http://localhost:8080/sci/02">
          <img 
            class="star2" 
            src="../assets/star/star2b.png" 
            alt="star2" width="15%" title="ดาวน้ำฟ้าและดาวสุริยะ">
        </a>
        <a href="http://localhost:8080/sci/04">
          <img 
            class="star4" 
            src="../assets/star/star4b.png" 
            alt="star4" width="15%" title="ดาวบรรยากาศ">
        </a>
        <a href="http://localhost:8080/sci/06">
          <img 
            class="star6" 
            src="../assets/star/star6b.png" 
            alt="star6" width="15%" title="ดาวเอกภพ">
        </a>
          
      </div>
      <div>
        <a href="http://localhost:8080/sci/01">
          <img 
            class="star1" 
            src="../assets/star/star1a.png" 
            alt="star1" width="15%" title="ดาวระบบสุริยะ">
        </a>
        <a href="http://localhost:8080/sci/03">
          <img 
            class="star3" 
            src="../assets/star/star3b.png" 
            alt="star3" width="15%" title="ดาวโลกและการเปลี่ยนแปลง">
        </a>
        <a href="http://localhost:8080/sci/05">
          <img 
            class="star5" 
            src="../assets/star/star5b.png" 
            alt="star5" width="15%" title="ดาวแสง">
        </a>
      </div>
    </div>
    <div class="textinfo">
      <h1 id="info">CHOOSE YOUR SCIENCE STAR</h1>
    </div>
    <img class="scibg" src="../assets/sci-rocketplanet.png" alt="scibg" width="100%">

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

}
</script>

<style lang="scss" scoped>
.sciplanet{
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
  border-width: 1.5px;
  border-radius: 15px;
  padding: 0em 1.5em 0.5em 13.5em;
  margin-top: 6.7em;
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
.scibg{
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
  margin-left: -13em;
  margin-top: -5em;
}
.star2{
  margin-left: 15em;
}
.star3{
  margin-left: 15em;
  margin-top: -5em;
}
.star4{
  margin-left: 15em;
}
.star5{
  margin-left: 15em;
  margin-top: -5em;
}
.star6{
  margin-left: 15em;
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
.star5:hover{
  filter: drop-shadow(0 0 0.5em #A7DBFF);
}
.star6:hover{
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