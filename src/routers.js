import HomeS from "./components/HomeS.vue";
import signUp from "./components/signUp.vue";
import loginPage from "./components/loginPage.vue";
import AddEmp from "./components/AddEmp.vue";
import UpdateEmp from "./components/UpdateEmp.vue";
import EmpList from "./components/EmpList.vue";
import EmployeeDetails from "./components/EmpById.vue";
import addAsset from "./components/AddAsset.vue";
import DeallocateAsset from "./components/DeallocateAsset.vue";
import logoutPage from "./components/logoutPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "loginPage",
    component: loginPage,
    path: "/",
    //path: '/', redirect: '/login-Page' ,
  },
  {
    name: "HomeS",
    component: HomeS,
    path: "/home-page",
  },
  {
    name: "signUp",
    component: signUp,
    path: "/sign-Up",
  },
  {
    name: "AddEmp",
    component: AddEmp,
    path: "/add",
  },
  {
    name: "UpdateEmp",
    component: UpdateEmp,
    path: "/update/:id",
  },
  {
    name: "EmpList",
    component: EmpList,
    path: "/employees",
  },
  {
    name: "EmployeeDetails",
    component: EmployeeDetails,
    // path: "/getEmployeeById",
    path: "/getEmployee/:id",
  },

  {
    name: "addAsset",
    component: addAsset,
    path: "/allocateAsset",
  },
  {
    name: "DeallocateAsset",
    component: DeallocateAsset,
    path: "/deallocateAsset",
  },
  {
    name: "logoutPage",
    component: logoutPage,
    path: "/logout-Page",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
