<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/types';

const path = 'blog';
const paginatedContent = ref([] as ParsedContent[]);
const countContent = await queryContent(path).count();
const hasLoad = computed(() => countContent > paginatedContent.value.length);
const showLoad = ref(false);

const paginateData = async (limit: number = 3, skip: number = 0) => {
  if (import.meta.dev) {
    return await queryContent(path)
      .sort({ date: -1 })
      .limit(limit)
      .skip(skip)
      .find();
  }

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

useHead({
  title: "Mentha Freshener",
  meta: [{ name: "description", content: "Demo with some number of Articles on Mentha Nuxt Blog Template" }]
});
</script>

<template>
  <div>
    <H1 :text="_t('Mentha Freshener')" />

    <template v-for="article, cnt in paginatedContent" :key="article._path">
      <Article :article="article" :last="((cnt + 1) < paginatedContent.length)" />
    </template>

    <template v-if="showLoad && hasLoad">
      <button @click="paginate" class="flex items-center px-5 pt-3 pb-2 -mb-5 mt-5 text-sm bg-gray-50 dark:bg-gray-950 hover:bg-gray-950 hover:dark:bg-gray-50 hover:text-white hover:dark:text-black transition-colors duration-300 rounded-t-3xl float-end">
        <span>{{ _t('Load more articles') }}</span>
        <Icon name="eva:arrowhead-down-fill" size="18" class="ml-2" />
      </button>
    </template>
  </div>
</template>