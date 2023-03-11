<template>
  <img class="logo" src="../assets/signup.png" />
  <h1>Welcome To Asset Management</h1>
  <h2>login here</h2>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter your Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="login">login</button>
    <p><router-link to="/sign-up"> </router-link> signup</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginPage",
  data() {
    return {
      email: " ",
      password: " ",
    };
  },

  methods: {
   async  login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
       if (result.status == 200 && result.data.length > 0) {
        alert("login successfully");
        localStorage.setItem("user_info", JSON.stringify(result.data[0]));
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
