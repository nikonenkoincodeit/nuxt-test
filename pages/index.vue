<template>
  <main class="py-10">
    <div class="container mx-auto px-5">
      <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
      <div class="content">
        <div class="border">
          <AppEditor />
        </div>
        <div class="border">
          2
          <AppPreview />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import AppEditor from "~/components/AppEditor.vue";
import AppPreview from "~/components/AppPreview.vue";
</script>
<style scoped>
.content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
}
</style>

