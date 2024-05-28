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
      <button @click="isDark = !isDark" :aria-label="_t('Switch color mode')" class="nav-link flex items-center justify-center sm:justify-end h-8">
        <template v-if="isDark">
          <span class="hidden sm:block">{{ _t('Light') }}</span>
          <Icon name="eva:sun-outline" size="18" class="sm:ml-1" />
        </template>
        <template v-else>
          <span class="hidden sm:block">{{ _t('Dark') }}</span>
          <Icon name="eva:moon-outline" size="18" class="sm:ml-1" />
        </template>
      </button>
    </ClientOnly>
</template>