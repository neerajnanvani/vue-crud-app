import Home from "../views/Home.vue";
import UsersList from "../views/UsersList.vue";
import CreateUser from "../views/CreateUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
import NotFound from "../views/404.vue";

import { createRouter, createWebHistory } from 'vue-router';

// all routes 
const routes = [
    { 
        path: '/',
        name: "home",
        component: Home
    },
    { 
        path: '/create',
        name: "createUser",
        component: CreateUser
    },
    { 
        path: '/list',
        name: "usersList", 
        component: UsersList 
    },
    {
        path: "/user/:id",
        name: "updateUser",
        component: UpdateUser
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'notFound', 
        component: NotFound 
    },
    { 
        path: '/404', 
        name: 'notFound', 
        component: NotFound 
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
