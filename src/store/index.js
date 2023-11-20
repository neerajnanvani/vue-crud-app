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
    // State to store the users
    state: () => ({
        users: [],
    }),
    // Getters to get all users or specific user
    getters: {
        getAllUsers: (state) => state.users,
        getUser: (state) => {
            return (userId) => state.users.find((user) => {
                return user.id == Number(userId);
            } );
        }
    },
    // actions to call api's and load, create and update users
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
        },
        async updateUser(userId, userInfo) {
            try {
                const userIndex = this.users.findIndex((user) => user.id === userId);

                if(!userIndex) {
                    return;
                }

                await axios.patch(`${api}/${userId}`, userInfo, {headers});
                
                this.users[userIndex] = {...this.users[userIndex], ...userInfo};
            } catch(error) {
                showToaster(error, "error", "bottom-center");
            }
        }
    }
})