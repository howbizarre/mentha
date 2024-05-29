<script setup lang="ts">
defineProps<{
  text: string;
  icon?: string;
}>();
</script>

<template>
  <h1 class="-indent-12 ml-12">
    <Icon :name="icon ?? 'file-icons:mint'" size="42" class="text-teal-500" />
    {{ text }}
  </h1>
</template>