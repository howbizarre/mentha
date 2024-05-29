<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/types';

const path = 'blog';
const paginatedContent = ref([] as ParsedContent[]);
const countContent = await queryContent(path).count();
const hasLoad = computed(() => countContent > paginatedContent.value.length);
const showLoad = ref(false);

const paginateData = async (limit: number = 3, skip: number = 0) => {
  if (import.meta.dev) return await queryContent(path)
    .sort({ date: -1 })
    .limit(limit)
    .skip(skip)
    .find();

  return await queryContent(path)
    .where({ draft: false })
    .sort({ date: -1 })
    .limit(limit)
    .skip(skip)
    .find();
};

const paginate = async () => {
  const skip = paginatedContent.value.length;
  const data = await paginateData(3, skip);

  paginatedContent.value = [...paginatedContent.value, ...data];
};

onMounted(async () => {
  paginatedContent.value = await paginateData(3, 0);
  showLoad.value = true;
});

const articles = import.meta.dev
  ? await queryContent('blog').sort({ date: -1 }).limit(3).find()
  : await queryContent('blog').where({ draft: false }).sort({ date: -1 }).limit(3).find();

useHead({ title: 'ReFresh my Mint' });
</script>

<template>
  <div>
    <h1 class="-indent-20 ml-20">
      <Icon name="file-icons:mint" size="64" class="mr-1 text-teal-500" />
      {{ _t('ReFresh my Mint') }}
    </h1>

    <template v-for="article, cnt in paginatedContent" :key="article._path">
      <template v-if="article.excerpt">
        <div @click.capture="navigateTo(article._path)" class="cursor-pointer relative" :class="{ 'mb-10': ((cnt + 1) < articles.length) }">

          <div class="hover:bg-gray-50 dark:hover:bg-gray-950 rounded-tr-3xl rounded-br-3xl p-5 -ml-5 transition-colors duration-300 ease-in-out">
            <ClientOnly><small>{{ articleLocaleDate(article.date) }}</small></ClientOnly>
            <ContentRendererMarkdown :value="article.excerpt" />
          </div>
        </div>
      </template>

      <template v-else>
        <div @click.capture="navigateTo(article._path)" class="cursor-pointer relative" :class="{ 'mb-10': ((cnt + 1) < articles.length) }">

          <div class="hover:bg-gray-50 dark:hover:bg-gray-950 rounded-tr-3xl rounded-br-3xl p-5 -ml-5 transition-colors duration-300 ease-in-out">
            <ClientOnly><small>{{ articleLocaleDate(article.date) }}</small></ClientOnly>
            <h1>{{ article.title }}</h1>
          </div>
        </div>
      </template>
    </template>

    <template v-if="showLoad && hasLoad">
      <button @click="paginate" class="flex items-center px-5 pt-3 pb-2 -mb-5 mt-5 text-sm bg-gray-50 dark:bg-gray-950 hover:bg-gray-950 hover:dark:bg-gray-50 hover:text-white hover:dark:text-black transition-colors duration-300 rounded-tl-3xl rounded-tr-3xl float-end">
        <span>{{ _t('Load more articles') }}</span>
        <Icon name="eva:arrowhead-down-fill" size="18" class="ml-2" />
      </button>
    </template>
  </div>
</template>