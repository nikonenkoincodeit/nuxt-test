export const useEditorDataStore = defineStore("editor-data", () => {
  const item = {
    target: "",
    deadline: "",
    baseline: "",
    targetUnit: "%",
    text: "",
  };

  const targets = ref([{ ...item }]);

  const activeTarget = computed(() => targets.value.at(-1));

  const targetList = computed(() => targets.value);

  function addTargetInList() {
    targets.value.push({ ...item });
  }

  function updateTarget(value) {
    const index = targets.value.length - 1;
    targets.value[index] = { ...activeTarget.value, ...value };
  }

  return { activeTarget, targetList, addTargetInList, updateTarget };
});
