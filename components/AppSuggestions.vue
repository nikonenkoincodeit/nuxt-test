<template>
  <div
    class="list absolute mt-1 w-40 popup"
    :style="{
      'z-index': 100,
      top: cursorPosition.top + 'px',
      left: cursorPosition.left + 'px',
    }"
  >
    <ul class="bg-white border rounded shadow-md">
      <li>
        <button
          type="button"
          @click="addTarget"
          :disabled="targetBtn"
          class="text-center py-2 w-full hover:bg-gray-300"
        >
          insert target
        </button>
      </li>
      <li>
        <button
          type="button"
          :disabled="deadlineBtn"
          @click="addDeadline"
          class="text-center py-2 w-full hover:bg-gray-300"
        >
          insert deadline
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
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

const targetBtn = computed(() => !!editorDataStore.targetList[index]?.target);
const deadlineBtn = computed(
  () => !!editorDataStore.targetList[index]?.deadline
);

const addTarget = () => {
  editorDataStore.updateTarget({ showPopupTarget: true }, index);
};

const addDeadline = () => {
  editorDataStore.updateTarget({ showPopupDeadline: true }, index);
};

const closePopup = (event) => {
  if (!event.target.closest(".popup")) {
    editorDataStore.updateTarget({ showPopupList: false }, index);
  }
};

onMounted(() => {
  window.addEventListener("click", closePopup);
  editorDataStore.updateTarget({ showPopupDeadline: false }, index);
  editorDataStore.updateTarget({ showPopupTarget: false }, index);
});

onUnmounted(() => {
  window.removeEventListener("click", closePopup);
});
</script>

<style scoped>
.list {
  z-index: 100;
}
button:disabled {
  opacity: 0.6;
}
</style>