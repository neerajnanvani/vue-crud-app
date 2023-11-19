import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {router} from "./router";
import Vue3Toasity from 'vue3-toastify';

import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(Vue3Toasity).mount('#app');
