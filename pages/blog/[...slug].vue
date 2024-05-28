<template>
  <div class="w-full">
    <ContentDoc>
      <template #doc>
        <article>
          <ContentRenderer :value="doc" style="max-width: 100% !important;overflow: hidden !important; background-color: red !important;" />
        </article>
      </template>

      <template #not-found>
        <h2>Document not found</h2>
      </template>

      <template #empty>
        <h2>Document is empty</h2>
      </template>
    </ContentDoc>
  </div>
</template>