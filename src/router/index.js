import Home from "../views/Home.vue";
import UsersList from "../views/UsersList.vue";
import CreateUser from "../views/CreateUser.vue";


import { createRouter, createWebHistory } from 'vue-router';

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
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
