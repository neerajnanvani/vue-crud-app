<template>
    <div>
        List
    </div>
</template>
<script setup>
import {onMounted} from "vue";
import { useUsersStore } from "../store";
const store = useUsersStore();

onMounted(async () => {
    await store.loadUsers();
    const users = store.getAllUsers;
    console.log({users})
})
</script>