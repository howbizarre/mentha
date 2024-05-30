<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: 'https://www.gravatar.com/avatar/b4df506f43ebfc616c2ae9983ea69399ced4b86c669c628e6c057f14828df30e?s=200&d=identicon'
  }
})
</script>

<template>
  <div class="p-5 -ml-5 bg-gray-50 dark:bg-gray-950 rounded-e-3xl sm:flex items-center">
    <img :src="src" alt="Avatar" class="w-200 h-200 rounded-full p-3 m-auto" />

    <div class="p-3">
      <slot name="description" />
    </div>
  </div>
</template>