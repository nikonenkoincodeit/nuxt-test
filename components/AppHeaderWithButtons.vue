<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold">Target definition</h1>
    <div class="flex gap-3">
      <button
        class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
        @click="selectTarget"
      >
        insert target
      </button>
      <button
        class="py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded"
        @click="selectDeadline"
      >
        insert deadline
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { useEditorSettingsStore } from "~/stores/editor-settings";

const editorSettingsStore = useEditorSettingsStore();

const selectTarget = () => {
  editorSettingsStore.togglePopupTargetInput(true);
};

const selectDeadline = () => {
  console.log(12345);
};
</script>
  
  <style scoped>
</style>