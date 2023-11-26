<template>
  <AppRadioButtonList
    v-if="target"
    label="Target unit"
    :list="targetUnit"
    keyVal="targetUnit"
  />
  <AppRadioButtonList
    v-if="targetDeadline"
    label="Deadline"
    :list="dateList"
    keyVal="deadline"
  />
  <AppRadioButtonList
    v-if="showBtnBaseline"
    label="Baseline"
    :list="dateList"
    keyVal="baseline"
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

const showBtnBaseline = computed(
  () =>
    editorDataStore.targetList[index.value]?.deadline &&
    editorDataStore.targetList[index.value]?.target &&
    editorDataStore.targetList[index.value]?.showPopupBaseline
);

const selectParameter = (value) => {
  console.log("value ", value);
};
</script>

<style>
</style>