import { createRouter, createWebHistory } from "vue-router";
import SigninView from "../views/SigninView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "signin",
            component: SigninView,
        },
        {
            path: "/home",
            name: "home",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/HomeView.vue"),
        },
    ],
});

export default router;
