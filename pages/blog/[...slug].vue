<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>