<template>
  <main class="content">
    <ContentDoc>
      <template #doc>
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h2>Document not found</h2>
      </template>
      
      <template #empty>
        <h2>Document is empty</h2>
      </template>
    </ContentDoc>
  </main>
</template>