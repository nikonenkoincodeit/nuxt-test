<template>
  <AppPreviewItem
    v-for="item in list"
    :key="item + '1'"
    title="target"
    :text="item.text"
    :baseline="item.baseline"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import { useEditorDataStore } from "~/stores/editor-data";

import AppPreviewItem from "~/components/AppPreviewItem.vue";

const editorDataStore = useEditorDataStore();

const list = computed(() => editorDataStore.targetList);
</script>

