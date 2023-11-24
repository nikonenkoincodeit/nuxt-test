<template>
  <div
    v-if="toggle"
    class="flex items-center justify-center shadow-md bg-gray-200 border p-2 absolute h-auto"
    :style="{
      top: cursorPosition.top + 'px',
      left: cursorPosition.left + 'px',
    }"
  >
    <form class="bg-white rounded">
      <input
        ref="inputRef"
        v-model.trim="inputText"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="target"
        @change="onChange"
      />
    </form>

    <div class="ml-4">
      <p class="text-gray-700 text-xl">{{ targetUnit }}</p>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed, watch } from "vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const props = defineProps({
  cursorPosition: {
    type: Object,
  },
  index: {
    type: Number,
  },
});

const inputRef = ref(null);
const inputText = ref("");
const index = props.index;

const toggle = computed(
  () => editorDataStore.targetList[index]?.showPopupTarget
);

const targetUnit = computed(
  () => editorDataStore.targetList[index]?.targetUnit
);

const onChange = () => {
  let text = editorDataStore.targetList[index]?.text;
  if (text) text = text.slice(0, text.length - 1);
  const newText = text + " " + inputText.value + targetUnit.value;
  editorDataStore.updateTarget({ target: inputText.value }, index);
  editorDataStore.updateTarget({ text: newText }, index);
  editorDataStore.updateTarget({ showPopupTarget: false }, index);
  inputText.value = "";
};

watch(
  () => inputRef.value,
  (val) => {
    if (val) inputRef.value.focus();
  }
);

watch(
  () => toggle.value,
  (val) => {
    if (val) {
      editorDataStore.updateTarget({ showPopupList: false }, index);
      editorDataStore.updateTarget({ showPopupDeadline: false }, index);
    }
  }
);
</script>
  
  <style scoped>
</style>
  