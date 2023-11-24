export const useEditorSettingsStore = defineStore("editor-settings", () => {
  const item = { suggestions: false, target: false, datePicker: false };

  const setting = ref([{ ...item }]);

  const activeItem = ref(0);

  const getActiveItem = computed(() => activeItem.value);

  const allSetting = computed(() => setting.value);

  function updateActiveItem(value) {
    activeItem.value = +value;
  }

  function addActiveItem() {
    setting.value.push({ ...item });
  }

  //---------

  function toggleListSuggestions(value) {
    setting.value[getActiveItem.value].suggestions = value;
  }

  //------------

  const showPopupTargetInput = computed(
    () => setting.value[getActiveItem.value].target
  );

  function togglePopupTargetInput(value) {
    setting.value[getActiveItem.value].target = value;
  }

  //------------

  const showDatePicker = computed(
    () => setting.value[getActiveItem.value].datePicker
  );

  function toggleDatePicker(value) {
    setting.value[getActiveItem.value].datePicker = value;
  }

  return {
    toggleListSuggestions,
    showPopupTargetInput,
    togglePopupTargetInput,
    showDatePicker,
    toggleDatePicker,
    updateActiveItem,
    addActiveItem,
    getActiveItem,
    allSetting,
  };
});
