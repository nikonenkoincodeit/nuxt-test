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
        id="targetInput"
        v-model="inputText"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="target"
      />
    </form>

    <div class="ml-4">
      <p class="text-gray-700 text-xl">{{ inputText }}</p>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed, watch } from "vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";

const editorSettingsStore = useEditorSettingsStore();

defineProps({
  cursorPosition: {
    type: Object,
  },
});

const inputText = ref("");

const toggle = computed(() => editorSettingsStore.showPopupTargetInput);

watch(
  () => toggle.value,
  (val) => {
    if (val) {
      editorSettingsStore.toggleDatePicker(false);
      editorSettingsStore.toggleListSuggestions(false);
    }
  }
);
</script>
  
  <style scoped>
</style>
  