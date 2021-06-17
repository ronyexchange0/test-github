import {createRouter, createWebHistory} from "vue-router";
import home from "../pages/home";
import about from "../pages/about";
import repoDetails from "../pages/repoDetails";

const routes = [
    {
        path: "/",
        name: "Home",
        component: home
    },
    {
        path: "/about",
        name: "About",
        component: about
    },
    {
        path: "/repo/:id",
        name: "RepoDetails",
        component: repoDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes   
})

export default router