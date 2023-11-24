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

const props = defineProps({
  cursorPosition: {
    type: Object,
  },
  index: {
    type: Number,
  },
});

const index = props.index;

const toggle = computed(
  () => editorDataStore.targetList[index]?.showPopupDeadline
);

const deadline = computed(() => editorDataStore.targetList[index]?.deadline);
const text = computed(() => editorDataStore.targetList[index]?.text);

const date = ref(null);

const handleDate = (modelData) => {
  date.value = modelData.toDateString();
  editorDataStore.updateTarget({ deadline: date.value }, index);
};

watch(
  () => deadline.value,
  (val) => {
    const newText = text.value.slice(0, text.value.length - 1) + " " + val;
    editorDataStore.updateTarget({ text: newText }, index);
    editorDataStore.updateTarget({ showPopupDeadline: false }, index);
  }
);

watch(
  () => toggle.value,
  (val) => {
    if (val) {
      editorDataStore.updateTarget({ showPopupList: false }, index);
      editorDataStore.updateTarget({ showPopupTarget: false }, index);
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