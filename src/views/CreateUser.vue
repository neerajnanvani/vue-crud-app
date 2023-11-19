<template>
    <div>
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" />

            <label for="gender">Gender</label>
            <input type="radio" name="gender" value="male" />
            <label>
                Male
            </label>
            <input type="radio" name="gender" value="female" />
            <label>
                Female
            </label>


            <label for="email">Email</label>
            <input type="email" name="email">

            <label for="status">Status</label>
            <input type="radio" name="status" value="active" />
            <label>
                Active
            </label>
            <input type="radio" name="status" value="inactive" />
            <label>
                Inactive
            </label>


        </form>
    </div>
</template>
<script setup>

</script>