<template>
    <div :class="`w-full h-72 border-2 border-gray-300 rounded-xl ${cardClass}`">
        <router-link class="w-full h-full flex flex-col justify-center items-center" :to="link">

            <!-- Icon div -->
            <div class="py-10">
                <component :is="icon" :class="`h-32 w-32 ${iconClass}`" />
            </div>
            
            <!-- Text  -->
            
            <p class="mt-auto py-4 text-center text-2xl font-bold"> {{ linkText }}</p>
        </router-link>
    </div>
</template>
<script setup>
import {RouterLink} from "vue-router"
defineProps({
    icon: {
        type: Function,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    linkText: {
        type: String,
        required: true,
    },
    iconClass: {
        type: String,
    },
    cardClass: {
        type: String,
    }
})
</script>