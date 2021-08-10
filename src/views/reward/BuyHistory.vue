<template>
  <div class="buyhis">
    <Navbar />
    <br /><br /><br /><br /><br /><br />
    <div class="table"><buy-history></buy-history></div>
  </div>
</template>

<script>
import BuyHistory from "../../components/BuyHistory.vue";
import Navbar from "../../components/NavBar.vue";
import AuthUser from "../../store/AuthUser";
export default {
  components: {
    BuyHistory,
    Navbar,
  },
  mounted() {
    if (!this.isAuthen()) {
      this.$swal("Restricted Area", "You have no permission", "warning");
      this.$router.push("/");
    } else if (!this.isAdmin()) {
      this.$swal("Restricted Area", "You have no permission", "warning");
      this.$router.push("/home");
    }
  },
  methods: {
    isAdmin() {
      return AuthUser.getters.isAdmin === 3;
    },
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style lang="scss" scoped>
.buyhis {
  font-family: "PressStart2PRegular";
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
}
</style>