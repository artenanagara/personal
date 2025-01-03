<template>
    <div class="w-full flex justify-between px-20 py-5 text-black">
        <div>
            <router-link to="/" class="text-xl font-bold italic">Artena.</router-link>
        </div>
        <div class="space-x-4">
            <router-link to="/about" class="text-base">About</router-link>
            <router-link to="/projects" class="text-base">Projects</router-link>
            <router-link to="/contact" class="text-base">Contact</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Navbar",
    };
</script>

<style scoped>

</style>
