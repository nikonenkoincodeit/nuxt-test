<template>
  <div class="baseline-box" v-if="showBtnBaseline">
    <button type="button" class="border rounded-lg py-2 px-4" @click="onClick">
      Baseline {{ baseline }}
    </button>

    <VueDatePicker
      class="date-picker"
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

const selectedDate = ref(null);
const date = ref(null);

const showDatepicker = computed(() => editorDataStore.getShowPopupBaseline);

const baseline = computed(() => editorDataStore.getBaseline);

const handleDate = (modelData) => {
  date.value = modelData.toDateString();
  editorDataStore.updateBaseline(date.value);
};

const onClick = () => {
  if (baseline.value) return;
  editorDataStore.togglePopupBaseline(true);
};

const showBtnBaseline = computed(
  () =>
    editorDataStore.targetList[0]?.deadline &&
    editorDataStore.targetList[0]?.target
);

watch(
  () => baseline.value,
  (val) => {
    if (val) {
      editorDataStore.togglePopupBaseline(false);
    }
  }
);
</script>

  <style scoped>
.baseline-box {
  position: relative;
}
.date-picker {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
  