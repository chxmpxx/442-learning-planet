<template>
  <div class="leaderpage">
    <h1>Leaderboard</h1>
    <div class="select_time">
      <h2 style="margin:10px 0px;" class="timetext">Time Select</h2>
      <div>
        <div style="margin-bottom: 10px" class="date">
          <input type="date" v-model="date.first" />
          <span class="arrow">&#8596;</span>
          <input type="date" v-model="date.second" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <table>
          <thead class="tableheader">
            <tr>
              <th colspan="5">USE BOARD</th>
            </tr>
          </thead>
          <tr class="subtopic">
            <th>RANKED</th>
            <th>NAME</th>
            <th>POINTS</th>
          </tr>
          <tr
            v-for="(member, index) in sortedArry_use"
            :key="index"
            class="sub"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ member.username }}</td>
            <td>{{ member.point }}</td>
          </tr>
        </table>
      </div>
      <div class="column">
        <table>
          <thead class="tableheader">
            <tr>
              <th colspan="5">EARN BOARD</th>
            </tr>
          </thead>
          <tr class="subtopic">
            <th>RANKED</th>
            <th>NAME</th>
            <th>POINTS</th>
          </tr>
          <tr
            v-for="(member, index) in sortedArry_get"
            :key="index"
            class="sub"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ member.username }}</td>
            <td>{{ member.point }}</td>
          </tr>
        </table>
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
import moment from "moment";
import Member from "../store/member";
export default {
  data() {
    return {
      members: [],
      get: [],
      use: [],
      total_get: 0,
      total_use: 0,
      data_get: [],
      data_use: [],
      date: {
        first: "",
        second: "",
      },
    };
  },
  created() {
    this.fetchMember();
  },
  beforeUpdate() {
    this.calpoint();
    this.mergeArr();
  },
  methods: {
    async fetchMember() {
      await Member.dispatch("fetchMember");
      this.members = Member.getters.members;
      this.calpoint();
      this.mergeArr();
    },
    calpoint() {
      this.use = [];
      this.get = [];
      this.members.forEach((element) => {
        this.total_get = 0;
        this.total_use = 0;
        element.histories.forEach((check) => {
          if (this.date.first == "" || this.date.second == "") {
            if (check.type == "get") {
              this.total_get += parseInt(check.point);
            } else {
              this.total_use += parseInt(check.point);
            }
          } else {
            if (
              moment(moment(this.date.first).format("YYYY/MM/DD")).isBefore(
                moment(this.date.second).format("YYYY/MM/DD")
              )
            ) {
              if (
                moment(moment(check.date).format("YYYY/MM/DD")).isBetween(
                  moment(this.date.first).format("YYYY/MM/DD"),
                  moment(this.date.second).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              } else if (
                moment(moment(check.date).format("YYYY/MM/DD")).isSame(
                  moment(this.date.first).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              } else if (
                moment(moment(check.date).format("YYYY/MM/DD")).isSame(
                  moment(this.date.second).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              }
            } else if (
              moment(moment(this.date.first).format("YYYY/MM/DD")).isAfter(
                moment(this.date.second).format("YYYY/MM/DD")
              )
            ) {
              if (
                moment(moment(check.date).format("YYYY/MM/DD")).isBetween(
                  moment(this.date.second).format("YYYY/MM/DD"),
                  moment(this.date.first).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              } else if (
                moment(moment(check.date).format("YYYY/MM/DD")).isSame(
                  moment(this.date.first).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              } else if (
                moment(moment(check.date).format("YYYY/MM/DD")).isSame(
                  moment(this.date.second).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              }
            } else {
              if (
                moment(moment(check.date).format("YYYY/MM/DD")).isSame(
                  moment(this.date.first).format("YYYY/MM/DD")
                )
              ) {
                if (check.type === "get") {
                  this.total_get += parseInt(check.point);
                } else {
                  this.total_use += parseInt(check.point);
                }
              }
            }
          }
        });
        let obj = {
          username: "",
          point: 0,
        };
        obj.username = element.username;
        obj.point = this.total_get;
        this.get.push(obj);
        let obj1 = {
          username: "",
          point: 0,
        };
        obj1.username = element.username;
        obj1.point = this.total_use;
        this.use.push(obj1);
      });
    },
    mergeArr() {
      this.data_get = this.members.map((item, i) =>
        Object.assign({}, item, this.get[i])
      );
      this.data_use = this.members.map((item, i) =>
        Object.assign({}, item, this.use[i])
      );
    },
  },
  computed: {
    sortedArry_get: function() {
      function compare(a, b) {
        if (parseInt(a.point) < parseInt(b.point)) {
          return 1;
        }
        if (parseInt(a.point) > parseInt(b.point)) {
          return -1;
        }
        return 0;
      }
      return this.data_get.sort(compare);
    },
    sortedArry_use: function() {
      function compare(a, b) {
        if (parseInt(a.point) < parseInt(b.point)) {
          return 1;
        }
        if (parseInt(a.point) > parseInt(b.point)) {
          return -1;
        }
        return 0;
      }
      return this.data_use.sort(compare);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  text-align: center;
}

.row {
  margin-top: 1em;
  display: flex;
  color: white;
  width: 60vw;
}

.column {
  flex: 50%;
}
.tableheader {
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 2.25em;
}

.subtopic,
.sub {
  font-family: "PressStart2PRegular";
  font-weight: normal;
  font-style: normal;
  font-size: 1.25em;
}
////////////////////////////////////
.leaderpage {
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
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  color: white;
  font-family: "PressStart2PRegular";
  font-weight: normal;
  font-style: normal;
  font-size: 1em;
  background: rgba(255, 109, 83, 0.3);
}
table {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  border-spacing: 0px;
}
th {
  padding: 10px;
}
td {
  padding-top: 5px;
  padding-bottom: 5px;
}
.select_time {
  background: rgba(255, 109, 83, 0.8);
  width: 50vw;
  height: 7em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
}
h1 {
  color: gold;
  margin-top: 0px;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 3em;
  margin-top: -5em;
}
.useboard,
.earnboard {
  margin-right: -2.5em;
}

.usetable,
.earntable {
  margin-left: 8em;
}

.date {
  color: black;
  font-family: "SecuelaRegular";
  font-weight: normal;
  font-style: normal;
  font-size: 1.5em;
  margin-top: -0.75em;
}

.timetext {
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  font-size: 1.25em;
  padding-top: 0.3em;
  color: white;
}

.arrow {
  color: white;
  font-size: 2em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  position: relative;
  top: 0.125em;
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