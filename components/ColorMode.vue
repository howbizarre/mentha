<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <ClientOnly>
    <NuxtLink @click.prevent="isDark = !isDark" :to="`#${colorMode.value}`" :title="_t('Change Color Mode')" class="nav-link flex items-center justify-center sm:justify-end h-10">
      <template v-if="isDark">
        <span class="hidden sm:block">{{ _t('Light') }}</span>
        <Icon name="eva:sun-outline" size="18" class="sm:ml-1" />
      </template>
      <template v-else>
        <span class="hidden sm:block">{{ _t('Dark') }}</span>
        <Icon name="eva:moon-outline" size="18" class="sm:ml-1" />
      </template>
    </NuxtLink>
  </ClientOnly>
</template>