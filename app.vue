<script lang="ts" setup>
useHead({
  meta: [
    { charset: "utf-8" },
    { name: 'viewport', content: "width=device-width, initial-scale=1" }
  ],
  titleTemplate(titleChunk) {
    return titleChunk ? `${titleChunk} | Nuxt Blog Template` : "Mentha | Nuxt Blog Template";
  },
  htmlAttrs: {
    lang: "bg"
  }
});
</script>

<template>
  <div class="flex flex-row">
    <div class="h-lvh p-5 bg-gray-50 dark:bg-gray-950 drop-shadow-2xl sticky top-0 left-0">
      <Navbar />
    </div>

    <div class="w-full sm:max-w-[1024px] p-5 prose dark:prose-invert overflow-hidden">
      <NuxtPage />
    </div>
  </div>
</template>