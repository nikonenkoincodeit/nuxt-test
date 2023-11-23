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

const editorSettingsStore = useEditorSettingsStore();

defineProps({
  cursorPosition: {
    type: Object,
  },
});

const toggle = computed(() => editorSettingsStore.showDatePicker);

const date = ref(null);

const handleDate = (modelData) => {
  date.value = modelData;
};

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