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
      <li @click="addTarget" class="text-center py-2">insert target</li>
      <li @click="addDeadline" class="text-center py-2">insert deadline</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";

defineProps({
  cursorPosition: {
    type: Object,
  },
});

const editorSettingsStore = useEditorSettingsStore();

const toggle = computed(() => editorSettingsStore.getListSuggestions);

const addTarget = () => {
  console.log(123);
  editorSettingsStore.toggleListSuggestions(false);
};

const addDeadline = () => {
  console.log(5555);
  editorSettingsStore.toggleListSuggestions(false);
};
</script>

<style scoped>
</style>