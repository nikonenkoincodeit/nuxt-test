<template>
  <main class="py-10">
    <div class="container mx-auto px-5">
      <div class="content">
        <div class="border">
          <AppEditor />
        </div>
        <div class="border">
          <AppPreview />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";

import AppEditor from "~/components/AppEditor.vue";
import AppPreview from "~/components/AppPreview.vue";

import "@vuepic/vue-datepicker/dist/main.css";
</script>
<style scoped>
.content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
}
</style>

