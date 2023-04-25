<template>
<headerS />
<h2 class="text-center">Hello {{ name }} welcome to update Employee page</h2>
<div class="container">
    <form class="ams-card">
        <div class="ams-form-group">
            <input type="text" name="name" class="ams-form-control ams-form-control-lg" placeholder="Enter employee Name" v-model="employees.employeeName" />
        </div>
        <div class="ams-form-group">
            <input type="text" class="ams-form-control ams-form-control-lg" name="EmpId" placeholder="Enter employee Id" v-model="employees.employeeId" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="designation" class="ams-form-control ams-form-control-lg" placeholder="Enter designation" v-model="employees.designation" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="department" class="ams-form-control ams-form-control-lg" placeholder="Enter department" v-model="employees.department" />
        </div>
        <div class="ams-form-group">
            <input type="date" name="dateOfJoining" class="ams-form-control ams-form-control-lg" placeholder="Enter date Of Joining" v-model="employees.dateOfJoining" />
        </div>
        <div class="ams-form-group">
            <input type="tel" name="contactNo" class="ams-form-control ams-form-control-lg" placeholder="Enter contact Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model="employees.contactNo" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="personalEmail" class="ams-form-control ams-form-control-lg" placeholder="Enter personalEmail" v-model="employees.personalEmail" />
        </div>
        <div class="ams-form-group">
            <input type="text" name="officialEmail" class="ams-form-control ams-form-control-lg" placeholder="Enter officialEmail" v-model="employees.officialEmail" />
        </div>
        <button type="button" class="ams-btn-primary ams-btn ams-btn-block" v-on:click="updateEmployee">update Employee</button>
    </form>
</div>
</template>

<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "UpdateEmp",
  components: {
    HeaderS,
  },
  data() {
    return {
      employees: {
        employeeName: "",
        employeeId: "",
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
    async updateEmployee() {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const headers = { Authorization: token };
      const result = await axios.post(
        "http://localhost:3000/api/employees/updateEmployee",
        {
          employeeName: this.employees.employeeName,
          employeeId: this.employees.employeeId, // here we are updating with empId in request
          designation: this.employees.designation,
          department: this.employees.department,
          dateOfJoining: this.employees.dateOfJoining,
          contactNo: this.employees.contactNo,
          personalEmail: this.employees.personalEmail,
          officialEmail: this.employees.officialEmail,
        },
        { headers }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomeS" });
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user_info");
    const token = localStorage.getItem("token");
    const headers = { Authorization: token };
    console.log(this.$route);
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
    const result = await axios.post(
      "http://localhost:3000/api/employees/getEmployeeById",
      {
        employeeId: this.$route.params.id, // here we are updating with empId in request
      },
      { headers }
    );
    console.log(this.$route.params);
    console.warn(result.data);
    this.employees = result.data;
  },
};
</script>
