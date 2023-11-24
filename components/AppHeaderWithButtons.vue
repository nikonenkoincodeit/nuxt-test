<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-3">Target definition</h1>
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
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const index = computed(() => editorDataStore.getActiveItem);

const data = computed(() => editorDataStore.targetList[index.value]);

const showBtnTarget = computed(
  () => !editorDataStore.targetList[index.value]?.target
);

const showBtnDeadline = computed(
  () => !editorDataStore.targetList[index.value]?.deadline
);

const selectTarget = () => {
  editorDataStore.updateTarget({ showPopupTarget: true }, index.value);
};

const selectDeadline = () => {
  editorDataStore.updateTarget({ showPopupDeadline: true }, index.value);
};
</script>
  
  <style scoped>
</style>