<template>
    <div class="flex space-x-4 p-4 items-center">
        <!-- Two breadcrumbs to show now like home and next route -->
        <router-link to="/">
            <HomeIcon class="w-6 h-6 hover:text-blue-800" />
        </router-link>
        <div v-if="route.name !='home'" class="flex space-x-4 items-center">
            <ChevronRightIcon  class="w-4 h-4" />
            <router-link :to="route.path" class="hover:text-blue-800">
                {{ currentRouteName }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import {HomeIcon, ChevronRightIcon} from '@heroicons/vue/24/outline';
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();

/**
 * Computed property to compute current route name
 */
const currentRouteName = computed(() => {
   return route.name ? route.name.replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); }) : '';
});

</script>
