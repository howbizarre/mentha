<script lang="ts" setup>
useHead({
  meta: [
    { charset: "utf-8" },
    { name: 'viewport', content: "width=device-width, initial-scale=1" }
  ],
  titleTemplate(titleChunk) {
    return titleChunk ? `${titleChunk} | Mentha` : "Mentha | Fresh your Mint";
  },
  htmlAttrs: {
    lang: "bg"
  }
});
</script>

<template>
  <div class="flex flex-row">
    <div class="h-dvh p-5 bg-gray-50 dark:bg-gray-950 drop-shadow-2xl sticky top-0 left-0">
      <Navbar />
    </div>

    <div class="w-full h-auto p-5">
      <div class="prose dark:prose-invert">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>