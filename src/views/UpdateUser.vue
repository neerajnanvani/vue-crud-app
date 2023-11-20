<template>
    <div>
        <UserForm 
            v-if="currentUserData !== null" 
            :user-info="currentUserData"
        />
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useUsersStore } from "../store";
import { showToaster } from "../modules/toster";
import UserForm from '../components/UserForm.vue';

const route = useRoute();
const router = useRouter();
const store = useUsersStore();

const currentUserData = ref(null);

onMounted(async () => {
    const id = route.params.id;

    const users = store.getAllUsers;

    if(users.length == 0) {
        await store.loadUsers();
    }

    const currentUser = store.getUser(id);

    if(currentUser === undefined) {
        setTimeout(() => {
            showToaster(`No User Found for ${id}`, "error", "top-right");
        },500);

        router.push("/404");
    } else {
        currentUserData.value = currentUser;
    }
})

</script>