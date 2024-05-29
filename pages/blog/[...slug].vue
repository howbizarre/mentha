<script setup lang="ts">
const route = useRoute();
const slug = ref(route.params.slug);
const path = `/blog/${slug.value}`;

const { data: surround } = await useAsyncData(`[slug-${slug.value}]`, () => {
  return import.meta.dev
    ? queryContent()
      .only(['title', '_path', 'date'])
      .sort({ date: -1 })
      .findSurround(path, { before: 1, after: 1 })
    : queryContent()
      .where({ draft: false })
      .only(['title', '_path', 'date'])
      .sort({ date: -1 })
      .findSurround(path, { before: 1, after: 1 })
}, { default: () => [] });

const [prev, next] = surround.value || [];
</script>

<template>
  <div>
    <ContentDoc>
      <template v-slot="{ doc }">
        <ClientOnly><small>{{ articleLocaleDate(doc.date) }}</small></ClientOnly>
        <ContentRenderer :value="doc" />
      </template>

      <template #not-found>
        <h2>Document not found</h2>
      </template>

      <template #empty>
        <h2>Document is empty</h2>
      </template>
    </ContentDoc>

    <hr class="h-px my-10 border-0 !border-t-[1px] border-t-gray-50 dark:border-b-gray-950 !border-b-[1px] border-b-gray-300 dark:border-t-gray-700" />

    <div class="grid gap-8 sm:grid-cols-2">
      <ContentRenderer v-if="next" :value="next">
        <NuxtLink :to="`${next._path}`" class="flex justify-start items-start px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300">
          <div class="mr-2 inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
            <Icon name="material-symbols:arrow-left-alt-rounded" size="24" />
          </div>

          <div>
            <ClientOnly><small>{{ articleLocaleDate(next.date) }}</small></ClientOnly>
            <h1 class="mb-0">{{ next.title }}</h1>
          </div>
        </NuxtLink>
      </ContentRenderer>

      <div v-else class="hidden sm:block px-6 py-8">&nbsp;</div>

      <ContentRenderer v-if="prev" :value="prev">
        <NuxtLink :to="`${prev._path}`" class="flex justify-end items-start px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300 text-right">
          <div>
            <ClientOnly><small>{{ articleLocaleDate(prev.date) }}</small></ClientOnly>
            <h1 class="mb-0">{{ prev.title }}</h1>
          </div>

          <div class="ml-2 inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
            <Icon name="material-symbols:arrow-right-alt-rounded" size="24" />
          </div>
        </NuxtLink>
      </ContentRenderer>
    </div>
  </div>
</template>