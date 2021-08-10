<template>
  <div class="quiz">
    <h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โจทย์ :
      <input type="text" v-model="q.heading" style="width: 700px" />
    </h1>
    <div class="choice">
      <div>
        <button>A</button>
        &nbsp;&nbsp;<input type="text" v-model="q.c1" style="width: 700px" />
      </div>
      <div>
        <button>B</button>
        &nbsp;&nbsp;<input type="text" v-model="q.c2" style="width: 700px" />
      </div>
      <div>
        <button>C</button>
        &nbsp;&nbsp;<input type="text" v-model="q.c3" style="width: 700px" />
      </div>
      <div>
        <button>D</button>
        &nbsp;&nbsp;<input type="text" v-model="q.c4" style="width: 700px" />
      </div>
    </div>
    <h2>เฉลย : <input type="text" v-model="q.ans" style="width: 600px" /></h2>
    <div class="check">
      <div>
        <label for="point">&nbsp;&nbsp;&nbsp;Question Point : &nbsp;</label>
        <input type="number" v-model="q.points" style="text-align: center" />
        <br />
        <label for="point">&nbsp;&nbsp;&nbsp;Reward Point : &nbsp;</label>
        <input
          type="number"
          v-model="q.reward_points"
          style="text-align: center"
        />
      </div>
      <div>
        <button class="but" @click="approve">Approve</button>
        <button class="but" @click="disApprove">Disapprove</button>
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
import History from "../../store/HistoryApi";
import Extra from "../../store/extra";
import Question from "../../store/proposition";
import DocService from "../../services/DocService";
import moment from "moment";
export default {
  name: "Check",
  props: {
    id: "",
  },
  data() {
    return {
      q: {
        heading: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        ans: "",
        points: 0,
        reward_points: 0,
        user: "",
      },
    };
  },
  async created() {
    let question = await DocService.getWaitApproveById(this.id, "wait-approve");
    this.q.heading = question.Heading;
    this.q.c1 = question.choice1;
    this.q.c2 = question.choice2;
    this.q.c3 = question.choice3;
    this.q.c4 = question.choice4;
    this.q.ans = question.answer;
    this.q.user = question.users_permissions_user.id;
  },
  methods: {
    async disApprove() {
      await Question.dispatch("deleteQuestion", { id: this.id });
      this.$router.push("/wait");
      this.$swal({ title: "This question is disapprove", icon: "error" });
    },
    async approve() {
      if (this.q.points <= 0) {
        this.$swal(
          "Approve Failed",
          "Your question point must more than 0.",
          "error"
        );
      }
      if (this.q.reward_points <= 0) {
        this.$swal(
          "Approve Failed",
          "Your reward point must more than 0.",
          "error"
        );
      } else {
        let payload = {
          heading: this.q.heading,
          c1: this.q.c1,
          c2: this.q.c2,
          c3: this.q.c3,
          c4: this.q.c4,
          ans: this.q.ans,
          points: this.q.points,
        };
        await Extra.dispatch("addExtra", payload);
        let date = moment().toISOString();
        let payload1 = {
          date: moment(date).format("YYYY-MM-DD"),
          heading: "Add Question",
          point: this.q.reward_points,
          type: "get",
          id: this.q.user,
        };
        await History.dispatch("addHistory", payload1);
        await Question.dispatch("deleteQuestion", { id: this.id });
        this.$router.push("/wait");
        this.$swal({ title: "This question is approve", icon: "success" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz {
  color: #4b4b4b;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 0.3em;
  border-radius: 15px;
  border-color: tomato;
  margin: 0em 7em 5em 7em;
  padding: 1em 2em 2.5em 2em;
  text-align: left;
}
h1 {
  font-size: 2em;
  line-height: 1.6em;
  text-align: left;
}
h2 {
  font-size: 2em;
  line-height: 1.6em;
  text-align: center;
}
.choice {
  margin-top: 0.5em;
  font-size: 2em;
  padding-left: 5em;
}
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1em;
  padding: 0 0.4em 0 0.4em;
  margin-top: 0.5em;
  border-radius: 50%;
  transition: 0.5s;
  border-width: 1px;
}
button:hover {
  background-color: tomato;
  color: #ffffff;
  border-color: #ffffff;
  transition: 0.5s;
}
.check {
  font-size: 1.5em;
  text-align: center;
}
label {
  color: tomato;
}
input {
  width: 7em;
  // text-align: center;
}
.but {
  border-radius: 5px;
  border-width: 1px;
  width: 6.4em;
  height: 2em;
  margin: 0.5em 1em 0.5em 0em;
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