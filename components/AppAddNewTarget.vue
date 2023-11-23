<template>
  <div>
    <button
      @click="addTarget"
      class="w-full bg-white text-blue-500 hover:text-blue-700 text-left font-bold py-2 px-4 rounded border border-blue-500 mb-2"
    >
      + Add new target in another year
    </button>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const addTarget = () => {
  console.log(111);
};
</script>
  
  <style scoped>
</style>
  