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
      <AppSuggestions :cursorPosition="cursorPosition" />
      <AppInputTarget :cursorPosition="cursorPosition" />
    </form>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import AppSuggestions from "./AppSuggestions.vue";
import AppInputTarget from "./AppInputTarget.vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";

const editorSettingsStore = useEditorSettingsStore();

const inputText = ref("");
const inputRef = ref(null);
const spanRef = ref(null);
const cursorPosition = ref({ top: 10, left: 0 });

const handleInput = (e) => {
  const lastChar = inputText.value.slice(-1);
  //   const lastCharIndex = inputText.selectionStart
  editorSettingsStore.toggleListSuggestions(lastChar === "/");

  cursorPosition.value = {
    top: 10,
    left: spanRef.value.offsetWidth + 10,
  };
};

const submitForm = () => {
  console.log("Форма отправлена:", inputText.value);
};

const handleKeyDown = (event) => {
  if (event.key === "Enter" || event.key === "Tab") {
    editorSettingsStore.togglePopupTargetInput(false);
    editorSettingsStore.toggleListSuggestions(false);
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
  