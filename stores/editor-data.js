export const useEditorSettingsStore = defineStore("store-editor", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { doubleCount, increment };
});
