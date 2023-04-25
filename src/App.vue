<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:30px;
  margin-top:30px;
}
body {
  padding: 0;
  margin: 0;
}
.logo {
  width: 100px;
}

.register input,
.login input, .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  font-size: 18px;
}

.register button,
.login button ,.add button {
  width: 320px;
  height: 40px;
  color: white;
  border-radius: 10px;
  background-color: #3368FF  ;
  cursor: pointer;
  font-size: 18px;
}

</style>
