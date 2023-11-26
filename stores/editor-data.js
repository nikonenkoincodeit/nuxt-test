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

  const baseline = ref("");

  const getBaseline = computed(() => baseline.value);

  function updateBaseline(value) {
    baseline.value = value;
  }

  const showPopupBaseline = ref(false);

  const getShowPopupBaseline = computed(() => showPopupBaseline.value);

  function togglePopupBaseline(value) {
    showPopupBaseline.value = value;
  }

  //----

  const btnBaseline = ref(true);

  const getBtnBaseline = computed(() => btnBaseline.value);

  function toggleBtnBaseline(value) {
    btnBaseline.value = value;
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
      if (obj.target === "" || obj.deadline === "") {
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
    getBaseline,
    updateBaseline,
    getShowPopupBaseline,
    togglePopupBaseline,
    getBtnBaseline,
    toggleBtnBaseline,
  };
});
