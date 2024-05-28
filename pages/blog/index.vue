<script lang="ts" setup>
const articles = await queryContent('blog').sort({ date: 1 }).limit(5).find();
useHead({ title: 'ReFresh my Mint' });
</script>

<template>
  <main>
    <h1 class="mb-10">
      <Icon name="file-icons:mint" size="64" class="mr-1 text-teal-500" />
      {{ _t('ReFresh my Mint') }}
    </h1>

    <template v-for="article in articles" :key="article._path">
      <div @click="navigateTo(article._path)" class="cursor-pointer">
        <ContentRendererMarkdown :value="article.excerpt" />
      </div>

      <hr class="my-5 border-gray-200" />
    </template>
  </main>
</template>