<script lang="ts" setup>
const articles = await queryContent('blog').sort({ date: 1 }).limit(5).find();
useHead({ title: 'Блог' });
</script>

<template>
  <main>
    <template v-for="article in articles" :key="article._path">
      <div @click="navigateTo(article._path)" class="cursor-pointer">
        <ContentRendererMarkdown :value="article.excerpt" />
      </div>

      <hr class="my-5 border-gray-200" />
    </template>
  </main>
</template>