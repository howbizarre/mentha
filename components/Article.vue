<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

defineProps<{
  article: ParsedContent;
  last: boolean;
}>();
</script>

<template>
  <div @click.capture="navigateTo(article._path)" class="cursor-pointer" :class="{ 'mb-5': last }">

    <div class="hover:bg-gray-50 dark:hover:bg-gray-950 rounded-e-3xl p-5 -ml-5 transition-colors duration-300 ease-in-out">
      <ClientOnly><small>{{ articleLocaleDate(article.date) }}</small></ClientOnly>

      <template v-if="article.excerpt">
        <ContentRendererMarkdown :value="article.excerpt" />
      </template>
      <template v-else>
        <h1>{{ article.title }}</h1>
      </template>
    </div>
  </div>
</template>