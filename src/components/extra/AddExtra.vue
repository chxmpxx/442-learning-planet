<template>
  <div>
    <h1>ADD EXTRA QUESTION</h1>
    <br /><br /><br />
    <div class="quiz">
      <div>
        <label for="head"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Question : &nbsp;</label
        >
        <input type="text" v-model="form.q" style="width: 1050px" />
      </div>
      <br />
      <div class="choice" style="width: 100%">
        <div>
          <label for="c1">&nbsp;&nbsp;&nbsp;Choice A : &nbsp;</label>
          <input type="text" v-model="form.c1" style="width: 400px" />

          <label for="c2"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Choice B : &nbsp;
          </label>
          <input type="text" v-model="form.c2" style="width: 400px" />
        </div>
        <div>
          <label for="c3">&nbsp;&nbsp;&nbsp;Choice C : &nbsp;</label>
          <input type="text" v-model="form.c3" style="width: 400px" />

          <label for="c4"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Choice D : &nbsp;
          </label>
          <input type="text" v-model="form.c4" style="width: 400px" />
        </div>
      </div>
      <br />
      <div class="answer">
        <div>
          <label for="ans" style="">Answer : &nbsp;</label>
          <input type="text" v-model="form.ans" style="width: 400px" />
        </div>
        <div class="butbottom">
          <button
            style="width: 130px"
            @click="send"
            :disabled="
              this.form.q == '' ||
              this.form.c1 == '' ||
              this.form.c2 == '' ||
              this.form.c3 == '' ||
              this.form.c4 == '' ||
              this.form.ans == ''
            "
          >
            SEND
          </button>
          <button style="width: 130px" @click="back">CANCEL</button>
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
import AuthUser from "../../store/AuthUser";
import Proposation from "../../store/proposition";
export default {
  data() {
    return {
      form: {
        q: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        ans: "",
      },
    };
  },
  methods: {
    back() {
      return this.$router.push({
        name: "ExtraSelect",
        params: { path: this.path },
      });
    },
    async send() {
      let payload = {
        q: this.form.q,
        c1: this.form.c1,
        c2: this.form.c2,
        c3: this.form.c3,
        c4: this.form.c4,
        ans: this.form.ans,
        id: AuthUser.getters.user.id,
      };
      let res = await Proposation.dispatch("addQuestion", payload);
      if (res.success) {
        this.$swal({ title: "Send Success", icon: "success" });
        this.$router.push({ name: "ExtraSelect", params: { path: this.path } });
      } else {
        this.$swal("Send Failed!", res.message, "error");
      }
    },
  },
  props: {
    path: "",
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
.quiz {
  color: #4b4b4b;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 0.3em;
  border-radius: 15px;
  border-color: tomato;
  margin: 0em 7em 5em 7em;
  padding: 2em 2em 2em 2em;
  text-align: left;
}
.choice {
  padding-left: 2em;
}
label {
  font-size: 1.5em;
  line-height: 1.6em;
  text-align: left;
  margin-top: 1em;
}
input {
  font-size: 1.5em;
  line-height: 1.6em;
  text-align: left;
}
.answer {
  text-align: center;
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
// .butbottom{
//   margin-left: 7em;
// }

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