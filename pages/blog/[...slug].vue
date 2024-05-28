<template>
  <div>
    <ContentDoc>
      <template #doc>
        <ContentRenderer :value="doc" />
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