<template>
  <div class="home">
    <NavBar />
    <Planet />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Planet from "@/components/Planet.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Planet,
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  position: absolute;
}
</style>
