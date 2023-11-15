<!-- <template>
  <headerS />
  <h1>Hello {{ name }}, welcome to add employee page</h1>
  <form class="add">
    <input
      type="text"
      name="employeeName"
      placeholder="Enter Employe Name"
      v-model="employees.employeeName"
    />
    <input
      type="text"
      name="EmployeeId"
      placeholder="Enter Employee Id"
      v-model="employees.employeeId"
    />
    <input
      type="text"
      name="designation"
      placeholder="Enter Designation"
      v-model="employees.designation"
    />
    <input
      type="text"
      name="department"
      placeholder="Enter Department"
      v-model="employees.department"
    />
    <input
      type="date"
      name="dateOfJoining"
      placeholder="Enter Date Of Joining"
      v-model="employees.dateOfJoining"
    />
    <input
      type="tel"
      name="contactNo"
      placeholder="Enter Contact Number"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
      v-model="employees.contactNo"
    />
    <input
      type="text"
      name="personalEmail"
      placeholder="Enter personal Email"
      v-model="employees.personalEmail"
    />
    <input
      type="text"
      name="officialEmail"
      placeholder="Enter official Email"
      v-model="employees.officialEmail"
    />
    <button type="button" v-on:click="addEmployee">Add Employee</button>
  </form>
</template> -->
<template>
<headerS />
<h2 class="text-center">Hello {{ name }}, welcome to add employee page</h2>
<div class="container">
    <form class="ams-card">
        <div class="ams-form-group">
            <input type="text" name="employeeName" placeholder="Enter employee name" class="ams-form-control ams-form-control-lg" v-model="employees.employeeName" />
        </div>
        <!-- <div class="ams-form-group">
            <input type="text" name="EmployeeId" placeholder="Enter employee Id" class="ams-form-control ams-form-control-lg" v-model="employees.employeeId" />
        </div> -->
        <div class="ams-form-group">
            <input type="text" name="designation" placeholder="Enter designation" class="ams-form-control ams-form-control-lg" v-model="employees.designation" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="department" class="ams-form-control ams-form-control-lg" placeholder="Enter department" v-model="employees.department" />
        </div>
        <div class="ams-form-group">
            <input type="date" name="dateOfJoining" class="ams-form-control ams-form-control-lg" placeholder="Enter date Of Joining" v-model="employees.dateOfJoining" />
        </div>
        <div class="ams-form-group">
            <input type="tel" name="contactNo" class="ams-form-control ams-form-control-lg" placeholder="Enter contact number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model="employees.contactNo" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="personalEmail" class="ams-form-control ams-form-control-lg" placeholder="Enter personal Email" v-model="employees.personalEmail" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="officialEmail" class="ams-form-control ams-form-control-lg" placeholder="Enter official Email" v-model="employees.officialEmail" />
        </div>
        <button type="button" class="ams-btn-primary ams-btn ams-btn-block" v-on:click="addEmployee">Add Employee</button>
    </form>
</div>
</template>

<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "AddEmp",
  components: {
    HeaderS,
  },
  data() {
    return {
      name: "",
      employees: {
        employeeName: "",
        designation: "",
        department: "",
        dateOfJoining: "",
        contactNo: "",
        personalEmail: "",
        officialEmail: "",
      },
    };
  },
  methods: {
    async addEmployee() {
      const token = localStorage.getItem("token"); // Get the token from local storage
      console.log(this.employees);
      const result = await axios.post(
        "http://localhost:3000/api/employees/addEmployee",
        {
          employeeName: this.employees.employeeName,
          employeeId: this.employees.employeeId,
          designation: this.employees.designation,
          department: this.employees.department,
          dateOfJoining: this.employees.dateOfJoining,
          contactNo: this.employees.contactNo,
          personalEmail: this.employees.personalEmail,
          officialEmail: this.employees.officialEmail,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (result.status == 201) {
        alert("created successfully");
        this.$router.push({ name: "HomeS" });
      }
      console.log("result", result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user_info", "token");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
  },
};
</script>
