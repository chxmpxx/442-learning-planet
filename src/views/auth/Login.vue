<template>
  <body>
    <div class="split-screen">
      <div class="left">
        <section class="copy">
          <h1>Learning<br />Planet</h1>
          <p>Education is the most powerful weapon.</p>
        </section>
      </div>
      <div class="right">
        <div class='form'>
          <section class="copy">
            <h2>Log in</h2>
            <span>Welcome</span>
          </section>
          <div class="input-container name">
            <label for="fname">Username</label>
            <input
              type="username"
              name="fname"
              v-model="form.username"
              placeholder="Username"
              id="fname"
            />
          </div>
          <div class="input-container password">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              v-model="form.password"
              placeholder="Password"
              id="password"
            />
            <i class="far fa-eye-slash"></i>
          </div>
          <div class="login-container">
            <p>
              Don't have an account?
              <a @click="register"><strong>Sign Up</strong></a>
            </p>
          </div>
          <button
            @click="login"
            class="login-btn"
            type="submit"
            :disabled="form.password.length < 3 || form.username == ''"
          >
            Log in
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
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  mounted(){
    if(this.isAuthen()){
      this.$swal("Restricted Area", "You have no permission", 'warning')
      this.$router.push('/home')
    }
  },
  methods: {
    async login() {
      // let res = await AuthService.login(this.form);
      let res = await AuthUser.dispatch("login", this.form);
      if (res.success) {
        this.$swal("Login Success", `Welcome, ${res.user.username}`, "success");
        this.$router.push("/home");
      } else {
        this.$swal("Login Failed", res.message, "error");
      }
    },
    register() {
      return this.$router.push({ path: "/register" });
    },
    isAuthen(){
      return AuthUser.getters.isAuthen
    }
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
  background: rgba(255, 255, 255, 1);
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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url("../../assets/loginbg.jpg");
  background-position: center;
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

.right , .form {
  width: 330px;
}

.form input[type="username"] , .form input[type="password"] {
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

.login-container p {
  font-size: 1em;
  text-align: left;
}

.login-btn {
  display: block;
  width: 100%;
  background: slateblue;
  color: white;
  font-weight: 700;
  border: none;
  padding: 0.75rem;
  border-radius: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.2s;
  font-size: 1.15em;
}

.login-btn:hover {
  background: darkslateblue;
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