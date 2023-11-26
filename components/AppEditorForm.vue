<template>
  <div>
    <AppForm v-for="item of list" :key="item" :index="item" />
    <AppAddNewTarget />
    <AppButtonList />
  </div>
</template>
  
  <script setup>
import { ref, computed } from "vue";

import AppButtonList from "./AppButtonList.vue";
import AppAddNewTarget from "./AppAddNewTarget.vue";
import AppForm from "./AppForm.vue";
import { useEditorDataStore } from "~/stores/editor-data";

const editorDataStore = useEditorDataStore();

const inputRef = ref(null);
const spanRef = ref(null);
const cursorPosition = ref({ top: 10, left: 0 });

const list = computed(() => editorDataStore.targetList.length);

</script>
  
  <style scoped>
.form {
  margin-top: 20px;
  padding-bottom: 30px;
  position: relative;
}
.hide {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
#textInput:focus {
  outline: none;
}

#textInput:focus-visible:border-blue-500 {
  border-color: #4299e1;
}
</style>
  