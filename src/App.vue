<template>
  <div class="">

    <!-- Header -->
    <nav class="flex w-full justify-center p-4 border border-gray-500">
      <router-link to="/" class="text-base font-semibold">
          Vue 3 CRUD App
      </router-link>
    </nav>
    <Breadcrumbs />

    <!-- Main View -->
    <router-view class="w-full h-full" />
  </div>
</template>
<script setup>
import {RouterLink} from "vue-router";
import Breadcrumbs from "./components/Breadcrumbs.vue";
</script>
