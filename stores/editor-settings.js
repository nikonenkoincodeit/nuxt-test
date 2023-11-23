export const useEditorSettingsStore = defineStore("editor-settings", () => {
  const listSuggestions = ref(false);

  const getListSuggestions = computed(() => listSuggestions.value);

  function toggleListSuggestions(value) {
    listSuggestions.value = value;
  }

  //------------

  return { getListSuggestions, toggleListSuggestions };
});
