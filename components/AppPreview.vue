<template>
  <div class="bg-gray-200">
    <div class="flex items-center p-2">
      <img :src="icon" alt="icon" width="20" />
      <h2 class="text-xl font-bold ml-2">Target</h2>
    </div>
    <draggable :list="list" tag="transition-group">
      <template #item="{ element }">
        <div class="bg-gray-200 p-4 rounded mb-1">
          <p class="text-gray-700 mb-2">{{ element.text }}</p>
        </div>
      </template>
    </draggable>
    <p class="text-right m-1">
      <span class="border border-gray-500 rounded">Baseline {{}}</span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import draggable from "vuedraggable";
import { useEditorDataStore } from "~/stores/editor-data";
import icon from "~/assets/img/target.svg";

const editorDataStore = useEditorDataStore();

const list = computed({
  get() {
    return editorDataStore.targetList;
  },
  set(value) {
    return editorDataStore.onDragChange(value);
  },
});
</script>

