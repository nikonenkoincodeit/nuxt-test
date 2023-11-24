<template>
  <AppRadioButtonList
    v-if="target"
    label="Target unit"
    :list="targetUnit"
    method="updateTarget"
    keyVal="targetUnit"
    @select-parameter="selectParameter"
  />
  <AppRadioButtonList
    v-if="targetDeadline"
    label="Deadline"
    :list="dateList"
    method="updateTarget"
    keyVal="deadline"
    @select-parameter="selectParameter"
  />
</template>

<script setup>
import AppRadioButtonList from "./AppRadioButtonList.vue";
import { useEditorSettingsStore } from "~/stores/editor-settings";
import { useEditorDataStore } from "~/stores/editor-data";
import { targetUnit, dateList } from "~/data";

const editorSettingsStore = useEditorSettingsStore();
const editorDataStore = useEditorDataStore();

const target = computed(() => editorSettingsStore.showPopupTargetInput);

const targetDeadline = computed(() => editorSettingsStore.showDatePicker);

const selectedUnit = computed(() => editorDataStore.activeTarget?.targetUnit);

const selectParameter = (value) => {
  console.log("value ", value);
};
</script>

<style>
</style>