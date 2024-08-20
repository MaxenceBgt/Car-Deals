<template>
  <NuxtLink :to="href" class="menu-link">
    <slot />
  </NuxtLink>
</template>


<script setup>
const _ = defineProps({
  href: {
    type: String,
    required: true
  }
})
</script>


<style scoped>
.menu-link {
  @apply text-base font-medium tracking-font text-secondary whitespace-nowrap relative cursor-pointer;
  @apply hover:text-foreground hover:transition-all hover:duration-300 transition-all duration-300;
  @apply py-1 lg:py-0;
}

.router-link-active {
  @apply text-foreground;
}

.menu-link::after {
  content: '';
  @apply w-0 h-px bg-foreground rounded-sm;
  @apply absolute -bottom-0.5 right-0 transition-all duration-300;
}

.menu-link:hover::after {
  content: '';
  @apply w-full left-0 transition-all duration-300;
}
</style>