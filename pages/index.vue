<script lang="ts" setup>
useHead({
  title: "",
  meta: [{ name: "description", content: "This is a blog template powered by **Nuxt** framework" }]
});
</script>

<template>
  <div>
    <H1 :text="_t('Mentha - Nuxt Blog Template')" />
    <ContentDoc />
    <div class="text-center">Live long and prosper 🖖</div>
  </div>
</template>