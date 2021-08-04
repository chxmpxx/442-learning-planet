<template>
  <div>
    <h1>Register</h1>
    <div>
      <h1>Username</h1>
      <input type="username" v-model="form.username" />
    </div>
    <div>
      <h1>Email</h1>
      <input type="email" v-model="form.email" />
    </div>
    <div>
      <h1>Password</h1>
      <input type="password" v-model="form.password" />
    </div>
    <div>
      <h1>Confirm password</h1>
      <input type="password" v-model="confirm_password" />
    </div>
    <button
      @click="register"
      type="submit"
      :disabled="
        form.password.length < 3 ||
        confirm_password.length < 3 ||
        form.password !== confirm_password ||
        form.username == '' ||
        form.email == ''
      "
    >
      Register
    </button>
    <div>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
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