<template>
  <div>
    <nav class="navbar navbar-custom" style="z-index: 1">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" @click="click('/home')"
            ><img src="../assets/logo.png" class="logo"
          /></a>
          <a class="navbar-name" @click="click('/home')">Learning Planet</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <!-- <li class="active"><a href="#">Home</a></li> -->
          <li><a @click="click('/rewards')">Reward</a></li>
          <li><a @click="click('/leaderboard')">Leaderboard</a></li>
          <li><a @click="click('/history')">History</a></li>
          <li><a @click="click('/wait')">Wait</a></li>
          <li><a @click="click('/')">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    click(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.logo {
  width: 44px;
  aspect-ratio: auto 128 / 128;
  height: 44px;
  margin-right: 3px;
  margin-top: -1.7em;
}

.navbar {
  width: 100% !important;
  height: 7% !important;
  position: fixed;
  margin: 0 !important;
}

.navbar-name {
  text-decoration: none !important;
}

.container-fluid {
  margin-top: 10px;
}

.navbar-custom {
  background: rgba(255, 109, 83, 0.8);
}

.navbar-custom .navbar-name,
.navbar-custom .navbar-text {
  color: white;
  font-size: 1.3em;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
}

.nav.navbar-nav.navbar-right li a {
  position: relative;
  color: white;
  font-family: "8BITWONDERNominal";
  font-weight: normal;
  font-style: normal;
  background-color: transparent;
  font-size: 1em;
  margin-top: -0.8em;
  right: 20px;
}

.navbar-brand {
  margin-top: 0.4em;
}

.nav.navbar-nav.navbar-right li a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0em;
  content: "";
  display: block;
  height: 0.25em;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.nav.navbar-nav.navbar-right li a:hover:after {
  width: 100%;
  left: 0;

  .nav > li > a:hover {
    transition: 0.25s;
    background-color: white;
  }
  .nav > li > a {
    transition: 0.25s;
  }
}
</style>
