
<!-- ! -->
<!-- <script>
export default {
  name: "logoutPage",
  data() {
    return {
      name: '',
    }
  },
  methods: {
    logout() {
      // Clear local storage to log out user
      localStorage.clear();
      alert("logout successful");
      // After logout, redirect to the login page
      //window.location.href = '/login-Page';
      this.$router.push({ name: "loginPage" });
    },
  },
  mounted() {
    // Fetch the user's information when the component is mounted
    let user = localStorage.getItem("user_info");
    if (user) {
      this.name = JSON.parse(user).name;
    }
  },
};
</script>   -->




<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "logoutPage",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logout() {
      // Clear local storage to log out user
      localStorage.clear();
      console.log("localStorage cleared"); // add console.log() statement to check if local storage is cleared
      alert("logout successful");
      // After logout, redirect to the login page
      this.$router.push({ name: "loginPage" });
    },
  },
};
</script>
