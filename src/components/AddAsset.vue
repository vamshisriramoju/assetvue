<template>
  <headerS />
   <h2 class="text-center">Allocate Asset</h2>
  <div class="container">
    <form @submit.prevent="allocateAsset" class="ams-card">
      <div class="ams-form-group">
        <label for="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" placeholder= "Enter Employee Id" v-model="employeeId" required class="ams-form-control ams-form-control-lg"/>
      </div>
       <div class="ams-form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder= "Enter Category name" v-model="name" required class="ams-form-control ams-form-control-lg"/>
      </div>
      <div class="ams-form-group">
        <label for="model">Model:</label>
        <input type="text" id="model"  placeholder= "Enter Model name" v-model="model" required class="ams-form-control ams-form-control-lg"/>
      </div>
      <!-- <div class="ams-form-group">
        <label for="serialNumber">serialNumber:</label>
        <input type="text" id="serialNumber" placeholder= "Enter serial number"  v-model="serialNumber" required class="ams-form-control ams-form-control-lg"/>
      </div> -->
      <div class="ams-form-group">
        <label for="assignedDate">Assigned Date:</label>
        <input type="date" id="assignedDate" placeholder= "Enter assigned date" v-model="assignedDate" required class="ams-form-control ams-form-control-lg"/>
      </div>
      <button type="submit" class="ams-btn-primary ams-btn ams-btn-block" >Allocate Asset</button>
    </form>
  </div>
</template>

<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "AllocateAsset",
  components: {
    HeaderS,
  },
  data() {
    return {
      employeeId: "",
      name: "",
      model: "",
      serialNumber: "",
      assignedDate: "",
    };
  },
  methods: {
    async allocateAsset() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:3000/api/employees/asset/allocate",
          {
            employeeId: this.employeeId,
            asset: {
              name: this.name,
              model: this.model,
              assignedDate: this.assignedDate,
            },
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);
        alert(`asset ${this.name} added sucessfully to ${this.employeeId}`)
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
