<template>
  <nav class="flex flex-col justify-between h-full">
    <ul>
      <li>
        <NuxtLink to="/" :title="_t('Home Page')" class="nav-link flex items-center justify-center sm:justify-end h-10">
          <span class="hidden sm:block">{{ _t('Home') }}</span>
          <Icon name="eva:home-outline" size="18" class="sm:ml-1" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" :title="_t('About Page')" class="nav-link flex items-center justify-center sm:justify-end h-10">
          <span class="hidden sm:block">{{ _t('About') }}</span>
          <Icon name="eva:at-outline" size="18" class="sm:ml-1" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" :title="_t('Blog Page')" class="nav-link flex items-center justify-center sm:justify-end h-10">
          <span class="hidden sm:block">{{ _t('Blog') }}</span>
          <Icon name="eva:book-open-outline" size="18" class="sm:ml-1" />
        </NuxtLink>
      </li>
    </ul>

    <ul>
      <li>
        <ColorMode />
      </li>
      <li>
        <NuxtLink to="https://github.com/howbizarre/mentha" :title="_t('Mentha\'s GitHub repository')" target="_blank" class="nav-link flex items-center justify-center sm:justify-end h-10">
          <span class="hidden sm:block">{{ _t('GitHub') }}</span>
          <Icon name="mdi:github" size="18" class="sm:ml-1" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.nav-link {
  @apply font-sans font-semibold text-sm text-gray-600 dark:text-gray-400 hover:text-gray-950 hover:dark:text-gray-50 transition-colors duration-200;

  &.router-link-active {
    @apply text-gray-950 dark:text-gray-50;
  }
}
</style>