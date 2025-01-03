<template>
    <div class="flex flex-col gap-2 w-2/4">
        <img :src="image" class="w-full h-96 object-cover">
        <div class="w-full flex justify-between">
            <h2 class="font-medium text-xl">{{ title }}</h2>
            <p class="font-normal text-sm text-gray-500">{{ category }}</p>
        </div>
    </div> 
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>