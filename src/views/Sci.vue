<template>
  <div class="sci">
    <NavBar/>
    <SciPlanet/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import SciPlanet from '../components/SciPlanet.vue'

export default {
  name: "Sci",
  components: {
    NavBar,
    SciPlanet,
  }
}
</script>

<style lang="scss" scoped>
.sci{
  background: linear-gradient(#080e1a, #182b4c, #405a74, #a7dbff);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>