<template>
  <div class="border rounded-lg baseline-box">
    <button
      v-if="!showDatepicker"
      @click="showDatepicker = true"
      class="px-5 rounded-md"
    >
      Выбрать дату
    </button>

    <VueDatePicker
      :model-value="date"
      @update:model-value="handleDate"
      v-if="showDatepicker"
    />

    <div v-if="selectedDate" class="mt-4 text-green-600">
      Вы выбрали: {{ selectedDate }}
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const props = defineProps({
  index: {
    type: Number,
  },
});
const showDatepicker = ref(false);
const selectedDate = ref(null);

const index = props.index;

const date = ref(null);

const handleDate = (modelData) => {
  date.value = modelData.toDateString();
  editorDataStore.updateTarget({ baseline: date.value }, index);
};
</script>

  <style scoped>
.baseline-box {
  position: absolute;
  right: 0;
  bottom: 2px;
}
</style>
  