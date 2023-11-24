<template>
  <div
    v-if="toggle"
    class="list absolute mt-1 w-40"
    :style="{
      top: cursorPosition.top + 'px',
      left: cursorPosition.left + 'px',
    }"
  >
    <ul class="bg-white border rounded shadow-md">
      <li>
        <button
          :disabled="targetBtn"
          type="button"
          @click="addTarget"
          class="text-center py-2 w-full hover:bg-gray-300"
        >
          insert target
        </button>
      </li>
      <li>
        <button
          :disabled="deadlineBtn"
          type="button"
          @click="addDeadline"
          class="text-center py-2 w-full hover:bg-gray-300"
        >
          insert deadline
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";

const editorSettingsStore = useEditorSettingsStore();
const editorDataStore = useEditorDataStore();

defineProps({
  cursorPosition: {
    type: Object,
  },
});

const targetBtn = computed(() => !!editorDataStore.activeTarget?.target);
const deadlineBtn = computed(() => !!editorDataStore.activeTarget?.deadline);

const toggle = computed(
  () =>
    editorSettingsStore.showListSuggestions &&
    !(
      editorDataStore.activeTarget?.target &&
      editorDataStore.activeTarget?.deadline
    )
);

const addTarget = () => {
  editorSettingsStore.togglePopupTargetInput(true);
};

const addDeadline = () => {
  editorSettingsStore.toggleDatePicker(true);
};

watch(
  () => toggle.value,
  (val) => {
    if (val) {
      editorSettingsStore.toggleDatePicker(false);
      editorSettingsStore.togglePopupTargetInput(false);
    }
  }
);
</script>

<style scoped>
.list {
  z-index: 100;
}
button:disabled {
  opacity: 0.6;
}
</style>