<template>
  <img class="logo" src="../assets/signup.png" />
  <h1>Welcome To Asset Management</h1>
  <h2>signup</h2>
  <div class="register">
    <input type="text" v-model="name" placeholder=" Enter your Name" />
    <input type="text" v-model="email" placeholder=" Enter your Email" />
    <input type="password" v-model="password" placeholder=" Enter password" />
    <button v-on:click="signUp">Sign Up</button>
    <p><router-link to="/login-page">login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      name: " ",
      email: " ",
      password: " ",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        alert("signup success");
        localStorage.setItem("user_info", JSON.stringify(result.data));
        this.$router.push({ name: "HomeS" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user_info");
    if (user) {
      this.router.push({ name: "Homes" });
    }
  },
};
</script>
