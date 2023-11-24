<template>
  <div>
    <button
      @click="addTarget"
      :disabled="target"
      class="w-full bg-white text-blue-500 hover:text-blue-700 text-left font-bold py-2 px-4 rounded border border-blue-500 mb-2"
    >
      + Add new target in another year
    </button>
  </div>
</template>
  
  <script setup>
import { ref, computed } from "vue";
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const target = computed(() => {
  return !["target", "date", "baseline"]
    .map((key) => {
      return editorDataStore.activeTarget[key];
    })
    .every((item) => !!item);
});

const addTarget = () => {
  editorDataStore.addTargetInList();
};
</script>
  
  
  