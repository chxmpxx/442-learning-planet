<template>
  <div class='squiz1'>
    <NavBar />
    <br><br><br><br><br>
    <h1><b>แบบฝึกหัดระบบสุริยะ</b></h1>
    <br><br>
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <Quiz />
    <button>SUBMIT</button>
    <br><br><br><br>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Quiz from '@/components/Quiz.vue'
export default {
    name: "SQuiz1",
    components: {
    NavBar,
    Quiz,
  },
}
</script>

<style lang="scss" scoped>
.squiz1 {
  font-family: 'Prompt';
  font-weight: normal;
  font-style: normal;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
      url("../../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
button{
  font-size: 1.7em;
  padding: 0.5em 1em 0.4em 1em;
  border-radius: 30px;
  transition: 0.5s;
  border-width: 1px;
}
button:hover{
  background-color: tomato;
  color: #ffffff;
  border-color: #ffffff;
  transition: 0.5s;
}
h1{
  margin-top: 0em;
  color: #ffffff;
  font-size: 3.3em;
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
</style>