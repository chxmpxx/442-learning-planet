    <template>
  <div>
    <div>
      <div>
        <div>
          <h1>Login</h1>

          <div>
            <h1>Username</h1>
            <input type="username" v-model="form.username" />
          </div>
          <div>
            <h1>Password</h1>
            <input type="password" v-model="form.password" />
          </div>

          <button
            @click="login"
            type="submit"
            :disabled="form.password.length < 3 || form.username == ''"
          >
            Login
          </button>
        </div>
        <div>
          <label>Not registered? </label>
          <label @click="register">Create an account</label>
        </div>
      </div>
    </div>
  </div>
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
  },
};
</script>
    <style scoped>
</style>



