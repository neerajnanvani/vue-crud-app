<template>
    <RouterLink 
        :to="`/user/${userId}`" 
        :class="`max-w-xl border border-gray-200 rounded-xl h-48 flex flex-col p-5 shadow-md ${customClass} group hover:p-2 hover:bg-gray-300/10`"
    >
        <p class="text-center p-3 text-2xl font-bold text-blue-900 truncate">{{name}}</p>

        <div 
            class="flex text-wrap items-center text-base font-light justify-center text-blue-700 overflow-hidden gap-x-4"
        >
            <EnvelopeIcon 
                class="h-6"
            /> 
            <p class=" truncate">
                {{mailId}}
            </p>
                
        </div>

        <div class="flex justify-between mt-auto px-6 capitalize text-base font-semibold">
            <p>{{gender}}</p>
            <button>
                <PencilIcon class="h-6 w-6 hidden group-hover:block mb-5 text-blue-700" />
            </button>
            <p class="flex items-center"> 
                <InformationCircleIcon :class="[status === 'active' ? 'text-green-500': ' text-red-500','w-4 h-4 mr-3']" /> 
                {{status}} 
            </p>
        </div>
    </RouterLink>
</template>
<script setup>
import { EnvelopeIcon, InformationCircleIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";

defineProps({
    userId: {
        type: Number,
        required: true,
    },
    name: {
        type:String,
        required:true,
    },
    mailId: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    customClass: {
        type: String,
    }
})
</script>
