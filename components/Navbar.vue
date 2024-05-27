<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li>
          <NuxtLink to="/" class="nav-link flex items-center justify-center sm:justify-end h-8">
            <span class="hidden sm:inline-block">{{ _t('Начало') }}</span>
            <Icon name="eva:home-outline" size="18" class="sm:ml-1" />
          </NuxtLink>
        </li>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="nav-link flex items-center justify-center sm:justify-end h-8">
            <span class="hidden sm:inline-block">{{ link.title }}</span>
            <Icon v-if="link.icon" :name="link.icon" size="18" class="sm:ml-1" />
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<style>
.nav-link {
  @apply font-sans text-xl text-gray-400 hover:text-gray-950 transition-colors duration-200;

  &.router-link-active.router-link-exact-active {
    @apply text-gray-950;
  }
}
</style>