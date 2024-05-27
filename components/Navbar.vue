<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li>
          <NuxtLink to="/" class="lead-text flex items-center justify-start">
            <Icon name="eva:home-outline" size="18" class="mr-1" /> {{ _t('Начало') }}
          </NuxtLink>
        </li>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path" class="lead-text flex items-center justify-start">
            <Icon v-if="link.icon" :name="link.icon" size="18" class="mr-1" /> {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>