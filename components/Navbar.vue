<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li>
          <NuxtLink to="/" class="lead-text flex items-center justify-center sm:justify-end h-8">
            <span class="hidden sm:inline-block">{{ _t('Начало') }}</span>
            <Icon name="eva:home-outline" size="18" class="sm:ml-1" />
          </NuxtLink>
        </li>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="lead-text flex items-center justify-center sm:justify-end h-8">
            <span class="hidden sm:inline-block">{{ link.title }}</span>
            <Icon v-if="link.icon" :name="link.icon" size="18" class="sm:ml-1" />
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>