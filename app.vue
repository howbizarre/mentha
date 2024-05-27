<script lang="ts" setup>
useHead({
  meta: [
    { charset: "utf-8" },
    { name: 'viewport', content: "width=device-width, initial-scale=1" }
  ],
  titleTemplate(titleChunk) {
    return titleChunk && titleChunk !== 'Начало' ? `${titleChunk} | Нана` : "Нана | Свежа дива мента";
  },
  htmlAttrs: {
    lang: "bg"
  }
});
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style>
html, body, table, input { @apply font-serif; }
h1, h2, h3, h4, h5, h6, .lead-text { @apply font-sans; }

h1 { @apply text-4xl; }
h2 { @apply text-3xl; }
h3 { @apply text-2xl; }
h4, .lead-text { @apply text-xl; }
h5 { @apply text-lg; }
h6 { @apply text-base; }

.page-enter-active, .page-leave-active { transition: all 0.3s ease-in-out; }

.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: scale(0.95);
}

.layout-enter-active, .layout-leave-active { transition: all 0.3s ease-in-out; }

.layout-enter-from, .layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: scale(0.95);
}
</style>
