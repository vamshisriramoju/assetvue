<template>
  <headerS />
  <div>
    <h1>Employee Details</h1>
    <!-- <form @submit.prevent="searchEmployee">
      <label for="search-input">Search by Employee ID:</label>
      <input
        type="text"
        id="search-input"
        placeholder="Enter Employee ID"
        v-model="searchQuery"
      />
      <button type="submit">Search</button>
    </form> -->
    <!-- <div v-if="employee">
      <div class="employee-details">
        <div class="employee-details-row">
          <div class="employee-details-label">Employee Name:</div>
          <div class="employee-details-value">{{ employee.employeeName }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Employee ID:</div>
          <div class="employee-details-value">{{ employee.employeeId }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Designation:</div>
          <div class="employee-details-value">{{ employee.designation }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Department:</div>
          <div class="employee-details-value">{{ employee.department }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Date of Joining:</div>
          <div class="employee-details-value">{{ employee.dateOfJoining }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Contact No:</div>
          <div class="employee-details-value">{{ employee.contactNo }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Personal Email:</div>
          <div class="employee-details-value">{{ employee.personalEmail }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Official Email:</div>
          <div class="employee-details-value">{{ employee.officialEmail }}</div>
        </div>
        <div class="employee-details-row">
          <div class="employee-details-label">Assets:</div>
          <div class="employee-details-value">
            <ul class="assets-list">
              <li v-for="(asset, index) in employee.assets" :key="index">
                <span
                  >Name: {{ asset.name }} - Model: {{ asset.model }} -
                  serialNumber: {{ asset.serialNumber }} - Assigned Date:
                  {{
                    new Date(asset.assignedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  AssetID:{{ asset._id }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="ams-card">
      <div class="text-left" v-if="employee">
        <div class="emp-contnt">
          <label>Employee Name :</label>
          <span>{{ employee.employeeName }}</span>
        </div>
        <div class="emp-contnt">
          <label>Employee ID :</label>
          <span>{{ employee.employeeId }}</span>
        </div>
        <div class="emp-contnt">
          <label>Designation :</label>
          <span>{{ employee.designation }}</span>
        </div>
        <div class="emp-contnt">
          <label>Department :</label>
          <span>{{ employee.department }}</span>
        </div>
        <div class="emp-contnt">
          <label>Date of Joining :</label>
          <span>{{ employee.dateOfJoining }}</span>
        </div>
        <div class="emp-contnt">
          <label>Contact No :</label>
          <span>{{ employee.contactNo }}</span>
        </div>
        <div class="emp-contnt">
          <label>Personal Email :</label>
          <span>{{ employee.personalEmail }}</span>
        </div>
        <div class="emp-contnt">
          <label>Official Email :</label>
          <span>{{ employee.officialEmail }}</span>
        </div>
        <h3 class="m-t20">Assets :</h3>
        <ul class="assets-list">
          <li v-for="(asset, index) in employee.assets" :key="index">
            <label> <span> Name : </span>{{ asset.name }} </label>
            <label> <span>Model : </span>{{ asset.model }}</label>
            <!-- <label>
              <span>serialNumber:</span>
              {{ asset.serialNumber }}
            </label> -->
            <label
              ><span> Assigned Date :</span>
              {{
                new Date(asset.assignedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            </label>
            <label><span>Asset ID :</span>{{ asset._id }}</label>
              <hr class="dashed">
          </li>
         
        </ul>
       
      </div>
      <div v-else class="text-center">
        <p>No employee found.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emp-contnt {
  display: flex;
  align-items: baseline;
  padding: 10px 0;
}

.emp-contnt label {
  width: 20%;
  font-size: 14px;
  color: #abb3c5;
}

.emp-contnt span {
  font-size: 14px;
}

.assets-list {
  padding-left: 0px;
  font-size: 14px;
}

.assets-list label {
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
}

.assets-list span {
  width: 20%;
  color: #abb3c5;
}

@media screen and (min-width: 768px) {
  .employee-details {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .employee-details-row {
    margin-bottom: 0;
    width: calc(50% - 5px);
  }

  .asset-name {
    font-weight: bold;
    text-transform: uppercase;
  }

  .asset-model {
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }
}
</style>

<script>
import HeaderS from "./HeaderS.vue";
import axios from "axios";

export default {
  name: "EmployeeDetails",
  components: {
    HeaderS,
  },
  data() {
    return {
      searchQuery: "",
      employee: null,
    };
  },
  // methods: {
  //   async searchEmployee() {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const response = await axios.post(
  //         "http://localhost:3000/api/employees/getEmployeeById",
  //         // {
  //         //   employeeId: this.searchQuery,
  //         // },
  //         {
  //       employeeId: this.$route.params.id, // here we are updating with empId in request
  //     },
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );
  //       this.employee = response.data;
  //     } catch (error) {
  //       console.error(error);
  //       this.employee = null;
  //     }
  //   },
  // },

  //

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
    this.employee = result.data;
  },
};
</script>
