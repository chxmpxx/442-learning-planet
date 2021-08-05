<template>
  <div class="mainplanet">
    <div class="planet">
        <img
          class="planet1"
          src="../assets/planet1.png"
          alt="planet1"
          width="15%"
          @click="clickM('math')"
        />
        <img
          class="planet2"
          src="../assets/planet2.png"
          alt="planet2"
          width="15%"
          @click="clickS('sci')"
        />
        <img
          class="planet3"
          src="../assets/planet3.png"
          alt="planet3"
          width="22%"
        />
    </div>

    <div class="textinfo">
      <h1 id="info">CHOOSE YOUR OWN ADVENTURE</h1>
    </div>
    <img
      class="planetbg"
      src="../assets/planetbg.png"
      alt="planetbg"
      width="100%"
    />

    <!-- Block Rotation-->
    <div class="stars">
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
export default {
  methods:{
    clickM(path){
      this.$router.push({name: 'Maths', params:{path: path}})
    },
    clickS(path){
      this.$router.push({name: 'Sci', params: {path:path}})
    },
    // clickX(path){
    //   this.$router.push({name: 'Extra'})
    // }
  }
};
</script>

<style lang="scss" scoped>
.mainplanet {
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
.planet {
  position: fixed;
  margin-left: 115px;
  z-index: 1;
  transform: scale(1.1);
}
.planet img {
  margin: 4em;
  margin-top: -14em;
}
.planet1 {
  opacity: 0.9;
  transition: 0.5s;
}
.planet2 {
  opacity: 0.9;
  transition: 0.5s;
}
.planet3 {
  opacity: 0.9;
  transition: 0.5s;
}
.planet1:hover {
  transition: 0.25s;
  opacity: 1;
  filter: drop-shadow(0 0 2em violet);
  transform: scale(1.1);
}
.planet2:hover {
  transition: 0.25s;
  opacity: 1;
  filter: drop-shadow(0 0 2em lightblue);
  transform: scale(1.1);
}
.planet3:hover {
  transition: 0.25s;
  opacity: 1;
  filter: drop-shadow(0 0 2em green);
  transform: scale(1.1);
}
.planetbg {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  filter: drop-shadow(0 0 0.5em #fff);
  z-index: 1;
}
.textinfo {
  //background-color: #ffffff;
  // border-width: 1.5px;
  // border-radius: 15px;
  padding: 0em 1.5em 0.5em 1.5em;
  margin-top: 7.5em;
}
h1 {
  color: #ffffff;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  text-shadow: 0 0 20px #fff;
  animation: pulse 2s ease-in infinite;
  cursor: default;
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
//shooting star
@mixin sp-layout {
  @media screen and (max-width: 1920px) {
    @content;
  }
}
@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}
.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
  opacity: 0.3;
  z-index: 0;
}
.star {
  $star-count: 50;
  --star-color: var(--primary-color);
  --star-tail-length: 10em;
  --star-tail-height: 3px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, #fff, #fff);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
    tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
  @include sp-layout {
    // For mobile performance, tail-fade animation will be removed QAQ
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }
  @for $i from 1 through $star-count {
    &:nth-child(#{$i}) {
      --star-tail-length: #{random_range(500em, 750em) / 100};
      --top-offset: #{random_range(0vh, 10000vh) / 100};
      --fall-duration: #{random_range(6000, 12000s) / 1000};
      --fall-delay: #{random_range(0, 10000s) / 1000};
    }
  }
  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, #fff, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
}
@keyframes fall {
  to {
    transform: translate3d(-350em, 0, 0);
  }
}
@keyframes tail-fade {
  0%,
  50% {
    width: var(--star-tail-length);
    opacity: 1;
  }
  70%,
  80% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}
@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
</style>