<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold">Target definition</h1>
    <div class="flex gap-3">
      <button
        v-if="showBtnTarget"
        class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
        @click="selectTarget"
      >
        insert target
      </button>
      <button
        v-if="showBtnDeadline"
        class="py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded"
        @click="selectDeadline"
      >
        insert deadline
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";

const editorSettingsStore = useEditorSettingsStore();
const editorDataStore = useEditorDataStore();

const showBtnTarget = computed(() => !editorDataStore.activeTarget?.target);

const showBtnDeadline = computed(() => !editorDataStore.activeTarget?.deadline);

const selectTarget = () => {
  editorSettingsStore.togglePopupTargetInput(true);
};

const selectDeadline = () => {
  editorSettingsStore.toggleDatePicker(true);
};
</script>
  
  <style scoped>
</style>