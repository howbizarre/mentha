<script lang="ts" setup>
useHead({
  title: "Ma Mentha",
  meta: [{ name: "description", content: "Something about the developer of this Nuxt Blog Template - Mentha" }]
});
</script>

<template>
  <div>
    <H1 :text="_t('Ma Mentha')" />
    <ContentDoc />
  </div>
</template>