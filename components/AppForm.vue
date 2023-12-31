<template>
  <div>
    <form class="form w-full border bg-gray-100">
      <span ref="spanRef" class="hide">{{ myText }}</span>
      <input
        id="textInput"
        ref="inputRef"
        @input="handleInput"
        @focus="onFocus"
        v-model.trim="myText"
        class="border p-2 w-full focus:border-blue-500 bg-gray-100"
      />
      <AppSuggestions
        :cursorPosition="cursorPosition"
        :index="index"
        v-if="toggleList"
      />
      <AppInputTarget
        :cursorPosition="cursorPosition"
        :index="index"
        v-if="toggleTarget"
      />
      <AppDatePicker
        :cursorPosition="cursorPosition"
        :index="index"
        v-if="toggle"
      />
    </form>
  </div>
</template>
    
<script setup>

const editorDataStore = useEditorDataStore();

const inputRef = ref(null);
const spanRef = ref(null);
const inputText = ref("");
const cursorPosition = ref({ top: 10, left: 0 });

const props = defineProps({
  index: {
    type: Number,
  },
});

const index = props.index - 1;

const toggle = computed(
  () => editorDataStore.targetList[index]?.showPopupDeadline
);

const toggleTarget = computed(
  () => editorDataStore.targetList[index]?.showPopupTarget
);

const toggleList = computed(
  () => editorDataStore.targetList[index]?.showPopupList
);

const myText = computed({
  get() {
    return editorDataStore.targetList[index]?.text;
  },
  set(value) {
    editorDataStore.updateTarget({ text: value }, index);
  },
});

const onFocus = () => {
  editorDataStore.updateActiveItem(index);
};

const handleInput = (e) => {
  inputText.value = e.target.value.trim();
  const lastChar = inputText.value.slice(-1);
  editorDataStore.updateTarget({ showPopupList: lastChar === "/" }, index);
};

watch(
  () => myText.value,
  async () => {
    await nextTick();
    cursorPosition.value = {
      top: 10,
      left: spanRef.value.offsetWidth + 10,
    };
  }
);
</script>
    
<style scoped>
.form {
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
    