<template>
  <body>
    <div class="split-screen">
      <div class="left">
        <section class="copy">
          <h1>Register</h1>
          <p>Let the fun begin.</p>
        </section>
      </div>
      <div class="right">
        <div class='form'>
          <section class="copy">
            <h2>Register</h2>
          </section>
          <div class="input-container name">
            <label>Username</label>
            <input type="username" v-model="form.username" placeholder="Username"/>
          </div>
          <div class="input-container email">
            <label>Email</label>
            <input type="email" v-model="form.email" placeholder="Email"/>
          </div>
          <div class="input-container password">
            <label>Password</label>
            <input type="password" v-model="form.password" placeholder="Password"/>
          </div>
          <div class="input-container confirmedPassword">
            <label>Confirm Password</label>
            <input type="password" v-model="confirm_password" placeholder="Confirm Password"/>
            <i class="far fa-eye-slash"></i>
          </div>
          <button
            @click="register"
            type="submit"
            class="register-btn"
            :disabled="
              form.password.length < 6 ||
                confirm_password.length < 6 ||
                form.password !== confirm_password ||
                form.username == '' ||
                form.email == ''
            "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// import AuthService from "@/services/AuthService";
import AuthUser from "@/store/AuthUser";

export default {
  name: "Register",
  data() {
    return {
      form: { username: "", email: "", password: "" },
      confirm_password: "",
    };
  },
  methods: {
    async register() {
      // let res = await AuthService.register(this.form);
      let res = await AuthUser.dispatch("register", this.form);
      if (res.success) {
        this.$swal(
          "Register Success",
          `Welcome ${res.user.username}`,
          "success"
        );
        this.$router.push({ path: "/home" });
      } else {
        this.$swal("Register Failed", res.message, "error");
      }
    },
    cancel() {
      return this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
label{
  text-align: left;
}
:root {
  font-size: 100%;
  font-size: 16px;
  line-height: 1.5;
  --primary-blue: #233975;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

h1 {
  font-size: 8rem;
  font-weight: 700;
}

.left .copy p {
  font-size: 1.5em;
  font-weight: 700;
}

h2 {
  font-size: 5rem;
  font-weight: 700;
}

.right {
  margin-top: -1em;
  // background: rgba(255, 255, 255);
}

.right a {
  text-decoration: none;
  color: tomato;
  cursor: pointer;
}

.right a:hover {
  text-decoration: underline;
  color: tomato;
}

.small {
  font-size: 80%;
  text-align: center;
}

.split-screen {
  display: flex;
  flex-direction: column;
}

.left {
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("../../assets/registerbg.jpg");
  background-position: right;
  background-size: cover;
}

.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left .copy {
  color: white;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscaling;
}

.left p {
  font-weight: 400;
}

.right .copy {
  color: black;
  text-align: center;
  padding: 1em;
}

.right .copy p {
  font-size: 0.875rem;
}

.right .copy span {
  font-size: 2rem;
  font-weight: bold;
}

.right .form {
  width: 330px;
}

.form input[type="username"], .form input[type="email"], .form input[type="password"] {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  padding: 0.75em;
  margin-bottom: 1.25rem;
  font-size: 1.15em;
  font-weight: bold;
}

label {
  display: block;
  margin-bottom: 0.6rem;
  font-size: 1.75rem;
}

.input-container .password {
  position: relative;
}

.input-container .password i {
  position: absolute;
  top: 43px;
  right: 16px;
}

.register-btn {
  display: block;
  width: 100%;
  background: tomato;
  color: white;
  font-weight: 700;
  border: none;
  padding: 0.75rem;
  border-radius: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.2s;
  font-size: 1.15em;
  margin-top: 1.2em;
}

.register-btn:hover {
  background: rgb(226, 98, 75);
  cursor: pointer;
  transition: 0.2s;
}

@media screen and (min-width: 900px) {
  .split-screen {
    flex-direction: row;
    height: 100vh;
  }
  .left,
  .right {
    display: flex;
    width: 50%;
    height: auto;
  }
}
</style>