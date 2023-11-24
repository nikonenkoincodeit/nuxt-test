<template>
  <div
    v-if="toggle"
    class="my-date-picker"
    :style="{
      top: cursorPosition.top + 'px',
      left: cursorPosition.left + 'px',
    }"
  >
    <VueDatePicker :model-value="date" @update:model-value="handleDate" />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";

const editorSettingsStore = useEditorSettingsStore();
const editorDataStore = useEditorDataStore();

defineProps({
  cursorPosition: {
    type: Object,
  },
});

const toggle = computed(() => editorSettingsStore.showDatePicker);

const deadline = computed(() => editorDataStore.activeTarget?.deadline);
const text = computed(() => editorDataStore.activeTarget?.text);

const date = ref(null);

const handleDate = (modelData) => {
  date.value = modelData.toDateString();
  editorDataStore.updateTarget({ deadline: date.value });
};

watch(
  () => deadline.value,
  (val) => {
    const newText = text.value.slice(0, text.value.length - 1) + " " + val;
    editorDataStore.updateTarget({ text: newText });
    editorSettingsStore.toggleDatePicker(false);
  }
);

watch(
  () => toggle.value,
  (val) => {
    if (val) {
      editorSettingsStore.togglePopupTargetInput(false);
      editorSettingsStore.toggleListSuggestions(false);
    }
  }
);
</script>
  <style scoped>
.my-date-picker {
  position: absolute;
  width: 200px;
}
</style>