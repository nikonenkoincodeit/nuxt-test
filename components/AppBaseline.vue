<template>
  <div class="border rounded-lg baseline-box" v-if="showBtnBaseline">
    <button
      type="button"
      v-if="!showDatepicker"
      @click="onClick"
      class="px-5 rounded-md"
    >
      Baseline {{ baseline }}
    </button>

    <VueDatePicker
      :model-value="date"
      @update:model-value="handleDate"
      v-if="showDatepicker"
    />
  </div>
</template>
  
  <script setup>
import { ref, watch } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const props = defineProps({
  index: {
    type: Number,
  },
});

const selectedDate = ref(null);
const date = ref(null);
const index = props.index;

const showDatepicker = computed(
  () => editorDataStore.targetList[index]?.showPopupBaseline
);

const baseline = computed(() => editorDataStore.targetList[index]?.baseline);

const handleDate = (modelData) => {
  date.value = modelData.toDateString();
  editorDataStore.updateTarget({ baseline: date.value }, index);
};

const onClick = () => {
  if (editorDataStore.targetList[index]?.baseline) return;
  editorDataStore.updateTarget({ showPopupBaseline: true }, index);
};

const showBtnBaseline = computed(
  () =>
    editorDataStore.targetList[index]?.deadline &&
    editorDataStore.targetList[index]?.target
);

watch(
  () => baseline.value,
  (val) => {
    if (val) {
      editorDataStore.updateTarget({ showPopupBaseline: false }, index);
    }
  }
);
</script>

  <style scoped>
.baseline-box {
  position: absolute;
  right: 0;
  bottom: 2px;
}
</style>
  