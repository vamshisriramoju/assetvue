<template>
  <headerS />
  <h1>Hello {{ name }}, welcome to home page</h1>
  <div>
    <h6 class = "m-b20">{{ totalEmployees }}</h6>
    <h6 class ="m-b20"> {{ totalAllocatedAssets }}</h6>
  </div>
  <div class="main">
    <h2 class ="text-left m-b10">Recent Activity</h2>
    <table class="ams-table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Employee Name</th>
          <th>Employee Id</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Date Of Joining</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in employees" :key="index">
          <!-- <tr v-for="item in employees" :key="item.id"> -->
          <td>{{ index + 1 }}</td>
          <td>{{ item.employeeName }}</td>
          <td>{{ item.employeeId }}</td>
          <td>{{ item.designation }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.dateOfJoining }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "HomeS",
  data() {
    return {
      name: "",
      employees: [],
    };
  },
  components: {
    HeaderS,
  },
  computed: {
    totalEmployees() {
      return `Total Employees: ${this.employees.length}`;
    },
    totalAllocatedAssets() {
      let count = 0;
      for (const employee of this.employees) {
        count += employee.assets.length;
      }
      return `Total Allocated Assets: ${count}`;
    },
  },
  methods: {
    async loadData() {
      const token = localStorage.getItem("token");
      let user = localStorage.getItem("user_info", "token");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "signUp" });
      }
      let result = await axios.get(
        "http://localhost:3000/api/employees/getEmployees",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.warn(result);
      this.employees = result.data.employees
        .map((employee) => {
          employee.employeeName =
            employee.employeeName.charAt(0).toUpperCase() +
            employee.employeeName.slice(1);
          return employee;
        })
        .sort((a, b) => new Date(b.dateOfJoining) - new Date(a.dateOfJoining));
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
