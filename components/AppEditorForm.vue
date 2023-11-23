<template>
  <div>
    <form
      @submit.prevent="submitForm"
      class="form w-full border mt-4 bg-gray-100"
    >
      <span ref="spanRef" class="hide">{{ inputText }}</span>
      <input
        id="textInput"
        ref="inputRef"
        v-model="inputText"
        @input="handleInput"
        @keydown="handleKeyDown"
        class="border p-2 w-full focus:border-blue-500 bg-gray-100"
      />
      <AppSuggestions :cursorPosition="cursorPosition" />
      <AppInputTarget :cursorPosition="cursorPosition" />
      <AppDatePicker :cursorPosition="cursorPosition" />
    </form>
    <AppAddNewTarget />
    <AppButtonList />
  </div>
</template>
  
  <script setup>
import { ref, computed } from "vue";
import AppSuggestions from "./AppSuggestions.vue";
import AppInputTarget from "./AppInputTarget.vue";
import AppButtonList from "./AppButtonList.vue";
import AppAddNewTarget from "./AppAddNewTarget.vue";
import AppDatePicker from "./AppDatePicker.vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";

const editorSettingsStore = useEditorSettingsStore();
const editorDataStore = useEditorDataStore();

const inputRef = ref(null);
const spanRef = ref(null);
const cursorPosition = ref({ top: 10, left: 0 });

const inputText = computed({
  get() {
    return editorDataStore.activeTarget?.text;
  },
  set(value) {
    editorDataStore.updateTarget({ text: value });
  },
});

const dateList = [
  { label: "Year", value: "year" },
  { label: "Month", value: "month" },
  { label: "Day", value: "day" },
];

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
  console.log(inputText.value);
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
  padding-bottom: 30px;
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
  