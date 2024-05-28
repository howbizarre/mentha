<script lang="ts" setup>
const articles = await queryContent('blog').sort({ date: -1 }).limit(3).find();

useHead({ title: 'ReFresh my Mint' });
</script>

<template>
  <main class="container">
    <h1 class="mb-10">
      <Icon name="file-icons:mint" size="64" class="mr-1 text-teal-500" />
      {{ _t('ReFresh my Mint') }}
    </h1>

    <template v-for="article, cnt in articles" :key="article._path">
      <template v-if="article.excerpt">
        <div @click="navigateTo(article._path)" class="cursor-pointer relative" :class="((cnt + 1) < articles.length) ? 'mb-10' : ''">

          <div class="hover:bg-gray-50 dark:hover:bg-gray-950 p-5 -ml-5 transition-colors duration-300 ease-in-out">
            <small>{{ new Date(article.date).toLocaleDateString() }}</small>
            <ContentRendererMarkdown :value="article.excerpt" />
          </div>
        </div>
      </template>
    </template>
  </main>
</template>