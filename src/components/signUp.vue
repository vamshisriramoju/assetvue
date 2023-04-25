<template>
  <img class="logo" src="../assets/signup.png" />
  <div class="container">
    <h1 class="text-center">Welcome To Asset Management</h1>
    <div class="ams-card">
      <h2 class="m-b20">Signup here</h2>
      <div class="ams-form-group">
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter your Name"
          required
          class="ams-form-control ams-form-control-lg"
        />
      </div>
      <div class="ams-form-group">
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="Enter your Email"
          required
          class="ams-form-control ams-form-control-lg"
        />
      </div>
      <div class="ams-form-group">
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter password"
          required
          class="ams-form-control ams-form-control-lg"
        />
      </div>
      <button v-on:click="signUp" class="ams-btn-primary ams-btn ams-btn-block">
        Sign Up
      </button>
      <p class="m-b20"><router-link to="/">login</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      );
      console.log(result);
      if (result.status == 201) {
        alert("signup success");
        localStorage.setItem("user_info", JSON.stringify(result.data));
        this.$router.push({ name: "loginPage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user_info");
    if (user) {
      this.router.push({ name: "loginPage" });
    }
  },
};
</script>
