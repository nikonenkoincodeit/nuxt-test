import { useEditorSettingsStore } from "~/stores/editor-settings";

export const useEditorDataStore = defineStore("editor-data", () => {
  const editorSettingsStore = useEditorSettingsStore();

  const item = {
    target: "",
    deadline: "",
    baseline: "",
    targetUnit: "%",
    text: "",
  };

  const targets = ref([{ ...item }]);

  const activeTarget = computed(
    () => targets.value[editorSettingsStore.getActiveItem]
  );

  const targetList = computed(() => targets.value);

  function addTargetInList() {
    targets.value.push({ ...item });
  }

  function updateTarget(value, index = -1) {
    if (index === -1) index = targets.value.length - 1;
    targets.value[index] = { ...activeTarget.value, ...value };
  }

  return { activeTarget, targetList, addTargetInList, updateTarget };
});
