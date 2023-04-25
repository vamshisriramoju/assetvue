<template>
  <headerS />
  <div class="main">
    <div class="emp-list">
      <h2 class="text-center">Employees List</h2>
      <div class="ams-form-group">
        <input
          type="text"
          v-model="search"
          class="ams-form-control ams-form-control-lg"
          placeholder="Search by name or empId"
        />
      </div>
    </div>
    <table class="ams-table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Employee Name</th>
          <th>Employee Id</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Date Of Joining</th>
          <th>ContactNo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in filteredEmployees" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ employee.employeeName }}</td>
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.designation }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.dateOfJoining }}</td>
          <td>{{ employee.contactNo }}</td>
          <td>
            <router-link
              :to="`/getEmployee/${employee.employeeId}`"
              class="ams-link"
              >view</router-link
            >
            <router-link :to="`/update/${employee.employeeId}`" class="ams-link"
              >update</router-link
            >
            <!-- <button v-on:click="deleteEmployee(employee.employeeId)">
              Delete
            </button> -->
            <button
              v-on:click="deleteEmployee(employee.employeeId)"
              class="red-clr"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex-btn">
      <button
        class="ams-btn-primary ams-btn"
        @click="prevPage"
        :disabled="page === 1"
      >
        Prev
      </button>
      <button
        class="ams-btn-primary ams-btn"
        @click="nextPage"
        :disabled="page >= totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "EmpList",
  components: {
    HeaderS,
  },

  data() {
    return {
      employees: [],
      search: "",
      page: "1",
      limit: "6",
      totalPages: "30",
    };
  },
  computed: {
    filteredEmployees() {
      const start = (this.page - 1) * this.limit;
      const end = start + this.limit;
      return this.employees
        .filter(
          (employee) =>
            employee.employeeName
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            employee.employeeId
              .toLowerCase()
              .includes(this.search.toLowerCase())
        )
        .map((employee) => {
        employee.employeeName = employee.employeeName.charAt(0).toUpperCase() + employee.employeeName.slice(1);
        return employee;
      })
        .slice(start, end);
    },
  },
  methods: {
    viewEmployee() {
      this.$router.push({ name: "EmployeeDetails" });
    },

    async fetchEmployees() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/api/employees/getEmployees?page=${this.page}&limit=${this.limit}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        this.employees = response.data.employees;
       //this.employees.sort((a, b) => (a.employeeId > b.employeeId) ? 1 : -1); // sort by employeeId
        this.totalPages = response.data.totalPages;
        this.totalPages = Math.ceil(this.employees.length / this.limit);
      } catch (error) {
        console.log(error);
      }
    },
    prevPage() {
      this.page--;
    },
    nextPage() {
      this.page++;
    },
    deleteEmployee(employeeId) {
      const token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:3000/api/employees/deleteEmployee",
          {
            employeeId: employeeId,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.fetchEmployees();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchEmployees();
  },
};
</script>
