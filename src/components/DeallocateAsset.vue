<template>
  <headerS />
   <h2 class="text-center">Deallocate Asset</h2>
  <div class="container">
    <form @submit.prevent="deallocateAsset" class="ams-card">
      <div class="ams-form-group">
        <label for="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" placeholder= "Enter Employee Id" v-model="employeeId" required class="ams-form-control ams-form-control-lg"/>
      </div>
      <div class="ams-form-group">
        <label for="assetId">Asset ID:</label>
        <input type="text" id="assetId" placeholder= "Enter Asset Id"  v-model="assetId" required class="ams-form-control ams-form-control-lg"/>
      </div>
      <button type="submit" class="ams-btn-primary ams-btn ams-btn-block">Deallocate Asset</button>
    </form>
  </div>
</template>
<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "DeallocateAsset",
  components: {
    HeaderS,
  },
  data() {
    return {
      employeeId: "",
      assetId:"",
    };
  },
  methods: {
    async deallocateAsset() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:3000/api/employees/asset/deAllocate",
          {
            employeeId: this.employeeId,
            assetId: this.assetId,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);
        alert("asset deallocated successfully")
        this.$router.push({ name: "HomeS" });
        // redirect to employee details page or display a success message
      } catch (error) {
        console.error(error);
        // display an error message
      }
    },
  },
};
</script>
