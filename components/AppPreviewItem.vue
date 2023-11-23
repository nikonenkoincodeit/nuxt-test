<template>
  <div class="bg-gray-200 p-4 rounded">
    <div class="flex items-center mb-4">
      <img :src="icon" alt="icon" width="20" />
      <h2 class="text-xl font-bold ml-2">{{ title }}</h2>
    </div>
    <p class="text-gray-700">{{ text }}</p>
  </div>
</template>
  
  <script setup>
import icon from "~/assets/img/target.svg";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
  

  