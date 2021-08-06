<template>
    <div>
        <br>
        <h1>EXTRA PLANET</h1>
        <h2>PLEASE SELECT YOUR ACTION</h2>
        <br><br>
        <div class="mode">
            <div>
                <button @click="add"><b>ADD EXERCISE</b></button>
            </div>
            <div>
                <button @click="doEx"><b>DO EXERCISE</b></button>
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
export default {
    methods:{
        add(){
            return this.$router.push({name: 'AddExtra', params: {path: this.path}})
        },
        doEx(){
            return this.$router.push({name: 'XQuestionTable', params: {path: 'extra', type:'1'}})
        }
    },
    props:{
        path: ''
    }
}
</script>

<style lang="scss" scoped>
.mode{
    display: grid;
    grid-template-columns: 50% 50%;
}
h1 {
  color: gold;
  margin-top: -0.35em;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 3em;
}
h2 {
    margin-top: 9em;
    color: #ffffff;
    font-family: "8BITWONDERNominal";
    font-weight: normal;
    font-style: normal;
    font-size: 1.25em;
    animation: pulse 2s ease-in infinite;
    cursor: default;
}
button{
    font-size: 1.7em;
    position: relative;
    display: inline-block;
    padding: 25px 36px 25px 36px;
    margin: 10px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    border-radius: 40px;
    border-width: 0em;
    background: linear-gradient(90deg, #755bea, #ff72c0);
    // filter: drop-shadow(0 0 1em #755bea);
    //box-shadow: 5px 6px rgb(48, 42, 75);
}
button:hover{
    background: linear-gradient(90deg, tomato, #ffd13a);
    filter: drop-shadow(0 0 1.5em #755bea);
    color: #ffffff;
    border-color: #ffffff;
    transition: 0.5s;
}
.mode{
    padding: 0 15em 0 15em;
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
</style>