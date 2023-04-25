<template>
  <div class="nav">
    <!-- <router-link to="/">HomeS</router-link> -->
    <router-link to="/home-page">Home</router-link>
    <router-link to="/add">Add Employee</router-link>
    <router-link to="/employees">Employees list</router-link>
    <!-- <router-link to="/getEmployeeById">Employee Details</router-link>  -->
    <router-link to="/allocateAsset">Add Asset</router-link>
    <router-link to="/deallocateAsset">Deallocate Asset</router-link>
     <a v-on:click="logout" href="#">Logout</a>  
  </div>
</template>
<script>
export default {
  name: "HeaderS",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "loginPage" });
    },
  },
};
</script>



<style>
.nav {
  background-color: #fff  ;
  overflow: hidden;box-shadow:0px 0px 12px rgba(0, 0, 0, 0.12);margin-bottom: 30px;
}

.nav a {
  float: left;
  color: #000;
 padding:15px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  margin-right: 25px;
}

.nav a:hover,.nav a.router-link-active.router-link-exact-active {
  background:#26A9E0;color:#fff
  
 
}
.nav a:last-child{float: right;margin-right:0;}
</style>
