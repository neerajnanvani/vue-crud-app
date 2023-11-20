<template>
    <div class="flex justify-center p-5 ">
        <form class="flex flex-col border border-gray-100 w-full rounded-lg p-10" @submit="submitData">
            <div class="flex md:flex-row flex-col py-4 gap-y-3 gap">
                <label for="name" class="text-lg font-semibold w-1/4">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    v-model="user.name" 
                    class="border border-gray-200 md:ml-3 md:w-3/4 rounded-md outline-none p-1 focus:border-purple-400"
                />
            </div>

            <div v-if="route.name === 'createUser'" class="flex  md:flex-row flex-col py-4 gap-y-3 gap"> 
                <label for="gender" class="text-lg font-semibold w-1/4">Gender</label>
                <div class="px-4">
                    <input type="radio" name="gender" value="male" v-model="user.gender" class="accent-purple-700"/>
                    <label class="text-base font-medium mx-2 mr-12">
                        Male
                    </label>
                    <input type="radio" name="gender" value="female" v-model="user.gender" class="accent-purple-700"/>
                    <label class="text-base font-medium mx-2">
                        Female
                    </label>
                </div>
            </div>

            <div class="flex  md:flex-row flex-col py-4 gap-y-3 gap">
                <label for="email" class="text-lg font-semibold w-1/4">Email</label>
                <input type="email" name="email" v-model="user.email"
                    class="border border-gray-200 md:ml-3 md:w-3/4 rounded-md outline-none p-1 focus:border-purple-400"
                />
            </div>

            <div class="flex  md:flex-row flex-col py-4 gap-y-3 gap">    
                <label class="text-lg font-semibold w-1/4" for="status">Status</label>
                <div class="px-4">
                    <input type="radio" name="status" value="active" v-model="user.status" class="accent-green-500" />
                    <label class="text-base font-medium mx-2 mr-12">
                        Active
                    </label>
                    <input type="radio" name="status" value="inactive" v-model="user.status" class="accent-red-500" />
                    <label  class="text-base font-medium mx-2">
                        Inactive
                    </label>
                </div>
            </div>
            
            <button 
                class="px-4 py-3 border border-purple-200 w-fit self-center mt-10 rounded-md text-base font-bold
                    hover:bg-purple-700 hover:text-white"
            >
                Submit
            </button>
        </form>

    </div>
</template>
<script setup>
import { useUsersStore } from "../store";
import { ref, onMounted } from "vue";
import { showToaster } from "../modules/toster";
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
    userInfo: Object,
})

const store = useUsersStore();
const router = useRouter();
const route = useRoute();

// reactive data property to store user values
const user = ref({
    name: "",
    email: "",
    gender: "",
    status: "",
});

/**
 * On component mounted update user object values if current route is update user page
 */
onMounted(() => {
    if(route.name === 'updateUser') {
        user.value = props.userInfo;
    }
})

/**
 * Method to validate form values that is any empty value available
 */
const validate = () => {
    const formValues = Object.keys(user.value);
    for(let i = 0; i < formValues.length; ++i) {
        if(!user.value[formValues[i]]) {
            showToaster(`The value for ${formValues[i]} should be filled/selected.`, 'error', 'bottom-right');
            return false;
        }
    }

    return true;
}

/**
 * Method to submit data to corresponding api
 * 
 * @param {Event} e - The form submit event
 */
const submitData = async (e) => {

    e.preventDefault();

    const isformValidated = validate();

    if(isformValidated) {
        try {  

            if(route.name === "createUser") {
                await store.createUser(user.value);
                setTimeout(() => {
                showToaster("User created successfully", "success", "top-right")
                },500);

            } else {
                await store.updateUser(
                    user.value.id, 
                    {name:user.value.name, email: user.value.email, status: user.value.status}
                );
                setTimeout(() => {
                    showToaster("User updated successfully", "success", "top-right")
                }, 500);
            }
            
            router.push("/list")
        } catch(error) {
            showToaster(error, "error", "bottom-right")
        }

    }

}
</script>