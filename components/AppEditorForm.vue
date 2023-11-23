<template>
  <div>
    <form @submit.prevent="submitForm" class="form w-full border my-4">
      <span ref="spanRef" class="hide">{{ inputText }}</span>
      <input
        id="textInput"
        ref="inputRef"
        v-model="inputText"
        @input="handleInput"
        @keydown="handleKeyDown"
        class="border p-2 w-full bg-gray-100 focus:border-blue-500"
      />
      <AppSuggestions
        :showSuggestions="showSuggestions"
        :cursorPosition="cursorPosition"
      />
      <!-- <div
        v-if="showSuggestions"
        class="list absolute mt-1 w-40"
        :style="{
          top: cursorPosition.top + 'px',
          left: cursorPosition.left + 'px',
        }"
      >
        <ul class="bg-white border rounded shadow-md">
          <li @click="addGoal" class="text-center py-2">insert target</li>
          <li @click="addDate" class="text-center py-2">insert deadline</li>
        </ul>
      </div> -->
    </form>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import AppSuggestions from "./AppSuggestions.vue";

const inputText = ref("");
const inputRef = ref(null);
const spanRef = ref(null);
const showSuggestions = ref(false);
const cursorPosition = ref({ top: 0, left: 0 });

const handleInput = (e) => {
  const lastChar = inputText.value.slice(-1);
  const lastCharIndex = inputText.selectionStart;

  if (lastChar === "/") {
    cursorPosition.value = {
      top: 10,
      left: spanRef.value.offsetWidth + 10,
    };
    showSuggestions.value = true;
  } else {
    showSuggestions.value = false;
  }
};

// const addGoal = () => {
//   inputText.value += " Добавить цель ";
//   showSuggestions.value = false;
// };

// const addDate = () => {
//   inputText.value += " Добавить дату ";
//   showSuggestions.value = false;
// };

const submitForm = () => {
  console.log("Форма отправлена:", inputText.value);
};

const handleKeyDown = (event) => {
  if (event.key === "Enter" || event.key === "Tab") {
    showSuggestions.value = false;
  }
};
</script>
  
  <style scoped>
.form {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}
.hide {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
#textInput:focus {
  outline: none;
}

#textInput:focus-visible:border-blue-500 {
  border-color: #4299e1;
}
</style>
  