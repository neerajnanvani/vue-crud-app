<template>
    <div class="flex md:flex-row flex-col w-full h-full items-center justify-center md:p-10 p-4 gap-6">
        <home-card
            link-text="Create User"
            link="/create"
            :icon="UserPlusIcon"
            icon-class="text-green-500"
            card-class="max-w-xl bg-purple-100/50 hover:bg-purple-200 hover:border-gray-400"
        />
        <home-card
            link-text="User List"
            link="/list"
            :icon="UserGroupIcon"
            icon-class="text-blue-500"
            card-class="max-w-xl bg-purple-100/50 hover:bg-purple-200 hover:border-gray-400"
        />
    </div>
</template>
<script setup>
import HomeCard from '../components/HomeCard.vue';
import { UserPlusIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
</script>