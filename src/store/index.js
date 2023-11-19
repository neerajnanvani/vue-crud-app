import { defineStore } from "pinia";
import axios from "axios";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': import.meta.env.VITE_API_KEY
  }

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

                    const {data} = await axios.get('https://gorest.co.in/public/v2/users', headers);
                    this.users = JSON.parse(JSON.stringify(data));
                } catch(error) {
                    console.log(error)
                }
            }
        }
    }
})