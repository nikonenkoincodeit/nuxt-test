<template>
  <div class="popup">
    <label class="block font-bold text-gray-700 mb-2">{{ label }}</label>
    <div>
      <template v-for="item in list" :key="item.value">
        <label class="inline-flex items-center mr-4">
          <input
            type="radio"
            :value="item.value"
            v-model="selectedValue"
            class="form-radio text-indigo-600 h-5 w-5"
          />
          <span class="ml-2">{{ item.label }}</span>
        </label>
      </template>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { useEditorDataStore } from "~/stores/editor-data";
const editorDataStore = useEditorDataStore();

const index = computed(() => editorDataStore.getActiveItem);

const data = computed(() => editorDataStore.targetList[index.value]);

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
  keyVal: {
    type: String,
    required: true,
  },
});

const selectedValue = computed({
  get() {
    if (props.keyVal === "baseline") return editorDataStore.getBaseline;
    else return data.value[props.keyVal];
  },
  set(value) {
    if (props.keyVal === "baseline") editorDataStore.updateBaseline(value);
    else editorDataStore.updateTarget({ [props.keyVal]: value }, index.value);
  },
});
</script>
  
  <style scoped>
</style>
  