<template>
  <main>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <template v-for="dir in link.children" :key="dir._path">
            <NuxtLink :to="dir._path">
              {{ dir.title }}
            </NuxtLink>
          </template>
        </li>
      </ul>
    </ContentNavigation>
    <h1>Blog Content</h1>
  </main>
</template>