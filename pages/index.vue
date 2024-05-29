<script lang="ts" setup>
useHead({
  title: "",
  meta: [{ name: "description", content: "This is a blog template powered by **Nuxt** framework" }]
});
</script>

<template>
  <div>
    <h1 class="-indent-20 ml-20">
      <Icon name="file-icons:mint" size="64" class="mr-1 text-teal-500" />
      {{ _t('Mentha your Mind') }}
    </h1>

    <ContentDoc />
  </div>
</template>