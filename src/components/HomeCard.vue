<template>
    <div :class="`w-full md:h-72 h-56 border-2 border-gray-300 rounded-xl ${cardClass}`">
        <router-link class="w-full h-full flex flex-col justify-center items-center" :to="link">

            <!-- Icon div -->
            <div class="py-10">
                <component :is="icon" :class="`md:h-32 md:w-32 h-24 w-24 ${iconClass}`" />
            </div>
            
            <!-- Text  -->
            
            <p class="mt-auto py-4 text-center md:text-2xl text-lg font-bold"> {{ linkText }}</p>
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