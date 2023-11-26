<template>
  <div class="flex justify-between">
    <button
      :disabled="target"
      @click="addTarget"
      class="bg-white text-blue-500 hover:text-blue-700 text-left font-bold py-2 px-4 rounded border border-blue-500"
    >
      + Add new target in another year
    </button>
    <AppBaseline />
  </div>
</template>
  
  <script setup>
import { ref, computed } from "vue";
import AppBaseline from "./AppBaseline.vue";
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const target = computed(() => editorDataStore.checkArrayObjects);

const addTarget = () => {
  editorDataStore.addTargetInList();
};
</script>
  
  
  