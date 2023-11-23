export const useEditorSettingsStore = defineStore("editor-settings", () => {
  const listSuggestions = ref(false);

  const showListSuggestions = computed(() => listSuggestions.value);

  function toggleListSuggestions(value) {
    listSuggestions.value = value;
  }

  //------------

  const popupTargetInput = ref(false);

  const showPopupTargetInput = computed(() => popupTargetInput.value);

  function togglePopupTargetInput(value) {
    popupTargetInput.value = value;
  }

  return {
    showListSuggestions,
    toggleListSuggestions,
    showPopupTargetInput,
    togglePopupTargetInput,
  };
});
