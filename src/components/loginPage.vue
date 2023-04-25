<!-- <template>
  <h1>Welcome To Asset Management</h1>
  <h2>login here</h2>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter your Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="login">login</button>
    <p><router-link to="/sign-Up"> signup </router-link></p>
  </div>
</template> -->
<template>
  <div class="container">
    <h1 class="text-center">Welcome To Asset Management</h1>

    <div class="ams-card">
      <h2 class ="m-b20">login here</h2>
      <div class="ams-form-group">
        <input
          type="text"
          v-model="email"
          placeholder="Enter your Email"
          class="ams-form-control ams-form-control-lg"
        />
      </div>
      <div class="ams-form-group">
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
          class="ams-form-control ams-form-control-lg"
        />
      </div>
      <button
        type="primary"
        v-on:click="login"
        class="ams-btn-primary ams-btn ams-btn-block"
      >
        login
      </button>
      <p class ="m-b20"><router-link to="/sign-Up"> Signup </router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginPage",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async login() {
      try {
        let result = await axios.post("http://localhost:3000/api/users/login", {
          email: this.email,
          password: this.password,
        });
        console.log(result);
        if (result.status == 200) {
          alert("login successfully");
          localStorage.setItem("token", result.data.token); // Set the token in local storage
          localStorage.setItem("user_info", JSON.stringify(result.data.user));
          this.$router.push({ name: "HomeS" });
        } else {
          console.log("Login failed with status code " + result.status);
          alert("Invalid Credentials");
        }
      } catch (error) {
        console.log(error.response.data.message);
        alert("you have entered an invalid Credentials");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user_info", "token");
    if (user) {
      this.$router.push({ name: "HomeS" });
    }
  },
};
</script>
