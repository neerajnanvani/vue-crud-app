import { defineStore } from "pinia";
import axios from "axios";
import {showToaster} from "../modules/toster";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${import.meta.env.VITE_API_TOKEN}`
};

const api = 'https://gorest.co.in/public/v2/users';

export const useUsersStore = defineStore("users", {
    state: () => ({
        users: [],
    }),
    getters: {
        getAllUsers: (state) => state.users,
        getUser: (state) => {
            return (userId) => state.users.find((user) => user.id === userId);
        }
    },
    actions: {
        async loadUsers() {
            if(!this.users.length) {
                try {
                    const {data} = await axios.get(api);
                    this.users = data;
                } catch(error) {
                    showToaster(error, "error", "bottom-center");
                }
            }
        },
        async createUser(userInfo) {
            try {
                const {data} = await axios.post(api, userInfo, {headers});
                
                this.users.push(data);
            } catch(error) {
                showToaster(error, "error", "bottom-center");
            }
        }
    }
})