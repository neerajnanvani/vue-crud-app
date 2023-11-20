<template>
    <div class="p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 place-content-center">
        <UserCard 
            v-for="user in users" 
            :key="user.id" 
            :user-id="user.id"
            :name="user.name"
            :gender="user.gender"
            :mail-id="user.email"
            :status="user.status"
        />
    </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import UserCard from "../components/UserCard.vue";
import { useUsersStore } from "../store";

const store = useUsersStore();

const users = ref([]);
onMounted(async () => {
    await store.loadUsers();
    users.value = store.getAllUsers;
})
</script>