<template>
  <div
    v-if="showSuggestions"
    class="list absolute mt-1 w-40"
    :style="{
      top: cursorPosition.top + 'px',
      left: cursorPosition.left + 'px',
    }"
  >
    <ul class="bg-white border rounded shadow-md">
      <li @click="addTarget" class="text-center py-2">insert target</li>
      <li @click="addDeadline" class="text-center py-2">insert deadline</li>
    </ul>
  </div>
</template>

<script setup>
// import { inject } from "vue";

defineProps({
  cursorPosition: {
    type: Object,
  },
  showSuggestions: {
    type: Boolean,
  },
});

const addTarget = () => {
  console.log(123);
};

const addDeadline = () => {
  console.log(5555);
};
</script>

<style scoped>
</style>