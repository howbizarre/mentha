<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <pre>{{ navigation }}</pre>
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>