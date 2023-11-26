export const useEditorDataStore = defineStore("editor-data", () => {
  const item = {
    target: "",
    deadline: "",
    baseline: "",
    targetUnit: "%",
    text: "",
    showPopupList: false,
    showPopupTarget: false,
    showPopupDeadline: false,
    showPopupBaseline: false,
  };

  const targets = ref([{ ...item }]);

  const targetList = computed(() => targets.value);

  const targetListLength = computed(() => targets.value.length);

  function addTargetInList() {
    targets.value.push({ ...item });
  }

  function onDragChange(items) {
    targets.value = items;
  }

  //--------

  const activeItem = ref(0);

  const getActiveItem = computed(() => activeItem.value);

  function updateActiveItem(num) {
    activeItem.value = num;
  }

  function updateTarget(value, num) {
    const data = targetList.value[num];
    targets.value[num] = { ...data, ...value };
  }

  const checkArrayObjects = computed(() => {
    for (let i = 0; i < targetList.value.length; i++) {
      const obj = targetList.value[i];
      if (obj.target === "" || obj.deadline === "" || obj.baseline === "") {
        return true;
      }
    }
    return false;
  });

  return {
    targetList,
    targetList,
    targetListLength,
    addTargetInList,
    getActiveItem,
    updateActiveItem,
    updateTarget,
    checkArrayObjects,
    onDragChange,
  };
});
