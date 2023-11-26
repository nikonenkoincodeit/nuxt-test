<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold py-3">Target definition</h1>
    <div class="flex gap-3">
      <button
        v-if="showBtnTarget"
        class="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded popup"
        @click="selectTarget"
      >
        insert target
      </button>
      <button
        v-if="showBtnDeadline"
        class="py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded popup"
        @click="selectDeadline"
      >
        insert deadline
      </button>

      <button
        v-if="showBtnBaseline"
        class="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded popup"
        @click="selectBaseline"
      >
        insert baseline
      </button>
    </div>
  </div>
</template>
  
  <script setup>

const editorDataStore = useEditorDataStore();

const index = computed(() => editorDataStore.getActiveItem);

const data = computed(() => editorDataStore.targetList[index.value]);

const showBtnTarget = computed(
  () => !editorDataStore.targetList[index.value]?.target
);

const showBtnDeadline = computed(
  () => !editorDataStore.targetList[index.value]?.deadline
);

const showBtnBaseline = computed(
  () =>
    !showBtnTarget.value &&
    !showBtnDeadline.value &&
    !editorDataStore.getBaseline
);

const selectTarget = () => {
  editorDataStore.updateTarget({ showPopupTarget: true }, index.value);
};

const selectDeadline = () => {
  editorDataStore.updateTarget({ showPopupDeadline: true }, index.value);
};

const selectBaseline = () => {
  editorDataStore.togglePopupBaseline(true);
};
</script>
  
 