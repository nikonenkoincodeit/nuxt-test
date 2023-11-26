<template>
  <div
    class="my-date-picker popup"
    :style="{
      'z-index': 100,
      top: cursorPosition.top + 'px',
      left: cursorPosition.left + 'px',
    }"
  >
    <VueDatePicker :model-value="date" @update:model-value="handleDate" />
  </div>
</template>
  
  <script setup>
import VueDatePicker from "@vuepic/vue-datepicker";

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

const closePopup = (event) => {
  if (!event.target.closest(".popup")) {
    editorDataStore.updateTarget({ showPopupDeadline: false }, index);
  }
};

onMounted(() => {
  window.addEventListener("click", closePopup);
  editorDataStore.updateTarget({ showPopupList: false }, index);
  editorDataStore.updateTarget({ showPopupTarget: false }, index);
});

onUnmounted(() => {
  window.removeEventListener("click", closePopup);
});
</script>
  <style scoped>
.my-date-picker {
  position: absolute;
  width: 200px;
}
</style>