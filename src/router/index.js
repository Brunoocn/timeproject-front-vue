import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import Home from "../views/HomePage.vue";
import CustomerPage from "../views/CustomerPage.vue";
import ActivityPage from "../views/ActivityPage.vue";
import TeamPage from "../views/TeamPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/main",
    name: "Main",
    component: Home,
    children: [
      {
        path: "/customers",
        name: "Customers",
        component: CustomerPage,
        meta: {
          role: "Master|Admin",
        },
      },
      {
        path: "/activity",
        name: "Activity",
        component: ActivityPage,
        meta: {
          role: "Master|Admin",
        },
      },
      {
        path: "/teams",
        name: "Teams",
        component: TeamPage,
        meta: {
          role: "Master|Admin",
        },
      },
      {
        path: "/projects",
        name: "Projects",
        component: ProjectPage,
        meta: {
          role: "Master|Admin",
        },
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.role) {
    const role = to.meta.role;
    const allow = Vue.prototype.$gates.hasAnyRole(role);
    if (!allow) next({ name: "NotFound" });
    else next();
  } else {
    next();
  }
});

export default router;
