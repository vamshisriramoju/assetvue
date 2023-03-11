<template>
<router-view/>
</template>

<script>



export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 100px;
}

.register input, .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
}

.register button , .login button {
  width: 320px;
  height: 40px;
  color: white;
  border-radius: 10px;
  background-color: blue;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

</style>

