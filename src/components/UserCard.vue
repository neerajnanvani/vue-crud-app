<template>
    <div :class="`max-w-xl border border-gray-200 rounded-xl h-48 flex flex-col p-5 shadow-md ${customClass}`">
        <p class="text-center p-3 text-2xl font-bold text-blue-900">{{name}}</p>

        <a 
            :href="`mailto:${mailId}`" 
            class="flex items-center text-lg font-light justify-center hover:text-blue-700"
        >
            <EnvelopeIcon 
                class="w-6 h-6 mx-4"
            /> 
            {{mailId}}
        </a>

        <div class="flex justify-between mt-auto px-6 capitalize text-base font-semibold">
            <p>{{gender}}</p>
            <p class="flex items-center"> 
                <InformationCircleIcon :class="[status === 'active' ? 'text-green-500': ' text-red-500','w-4 h-4 mr-3']" /> 
                {{status}} 
            </p>
        </div>
    </div>
</template>
<script setup>
import { EnvelopeIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";

defineProps({
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
