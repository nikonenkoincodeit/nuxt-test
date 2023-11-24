<template>
  <div>
    <form class="form w-full border mt-4 bg-gray-100">
      <span ref="spanRef" class="hide">{{ myText }}</span>
      <input
        id="textInput"
        ref="inputRef"
        @input="handleInput"
        @focus="onFocus"
        v-model.trim="myText"
        class="border p-2 w-full focus:border-blue-500 bg-gray-100"
      />
      <AppSuggestions :cursorPosition="cursorPosition" :index="index" />
      <AppInputTarget :cursorPosition="cursorPosition" :index="index" />
      <AppDatePicker :cursorPosition="cursorPosition" :index="index" />
    </form>
  </div>
</template>
    
    <script setup>
import { ref, computed } from "vue";
import AppSuggestions from "./AppSuggestions.vue";
import AppInputTarget from "./AppInputTarget.vue";
import AppDatePicker from "./AppDatePicker.vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";

const editorSettingsStore = useEditorSettingsStore();
const editorDataStore = useEditorDataStore();

const inputRef = ref(null);
const spanRef = ref(null);
const inputText = ref("");
const cursorPosition = ref({ top: 10, left: 0 });

const props = defineProps({
  index: {
    type: Number,
  },
});

const index = props.index - 1;

const myText = computed({
  get() {
    return editorDataStore.targetList[index]?.text;
  },
  set(value) {
    console.log(" index ", index);
    editorDataStore.updateTarget({ text: value }, index);
  },
});

const onFocus = () => {
  console.log("onFocus");
  editorSettingsStore.updateActiveItem(index);
};

const handleInput = (e) => {
  inputText.value = e.target.value.trim();
  const lastChar = inputText.value.slice(-1);
  editorSettingsStore.toggleListSuggestions(lastChar === "/");

  cursorPosition.value = {
    top: 10,
    left: spanRef.value.offsetWidth + 10,
  };
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
    