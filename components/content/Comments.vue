<template>
  <div class="p-3 text-sm leading-relaxed bg-orange-200/50 border border-orange-500/25 text-black dark:bg-orange-800/50 dark:text-white rounded-lg relative">
    <Icon name="ph:chats-duotone" size="24" class="rounded-full inline-block text-orange-500 absolute bottom-2 right-2" />

    <p class="!m-0 !leading-normal">
      If you have an opinion or questions about the article, don't hesitate to share them.
    </p>

    <p class="!leading-normal !mt-3">
      <NuxtLink to="https://github.com/howbizarre/mentha/discussions/1" target="_blank" class="inline-flex items-center !border-none justify-start transition-colors duration-300 hover:!text-orange-500">
        <Icon name="fluent:arrow-join-20-regular" size="24" class="mr-1 rounded-full inline-block text-black dark:text-white" />
        Join the open discussion on GitHub.
      </NuxtLink>
    </p>
  </div>
</template>