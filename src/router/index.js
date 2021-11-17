import { createRouter, createWebHistory } from "vue-router";
import UserProfile from "../components/UserProfile";
import Main from "../components/Main";

const routes = [
  {
    path: "/",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Main,
  },
  {
    path: "/user/:nickname",
    name: "userProfile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
