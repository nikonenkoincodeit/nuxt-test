<template>
  <AppRadioButtonList
    v-if="target"
    label="Target unit"
    :list="targetUnit"
    keyVal="targetUnit"
    @select-parameter="selectParameter"
  />
  <AppRadioButtonList
    v-if="targetDeadline"
    label="Deadline"
    :list="dateList"
    keyVal="deadline"
    @select-parameter="selectParameter"
  />
</template>

<script setup>
import AppRadioButtonList from "./AppRadioButtonList.vue";
import { useEditorDataStore } from "~/stores/editor-data";
import { targetUnit, dateList } from "~/data";

const editorDataStore = useEditorDataStore();

const index = computed(() => editorDataStore.getActiveItem);

const target = computed(
  () => editorDataStore.targetList[index.value]?.showPopupTarget
);

const targetDeadline = computed(
  () => editorDataStore.targetList[index.value]?.showPopupDeadline
);

const selectedUnit = computed(
  () => editorDataStore.targetList[index.value]?.targetUnit
);

const selectParameter = (value) => {
  console.log("value ", value);
};
</script>

<style>
</style>