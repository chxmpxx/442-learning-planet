<template>
  <div class="math">
    <NavBar />
    <MathPlanet />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import MathPlanet from "../components/MathPlanet.vue";

export default {
  name: "Math",
  components: {
    NavBar,
    MathPlanet,
  },
};
</script>

<style lang="scss" scoped>
.math {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // overflow: hidden;
  // position: absolute;
}
</style>
