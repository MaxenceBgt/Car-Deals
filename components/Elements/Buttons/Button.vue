<template>
  <NuxtLink :to="href" class="button" :class="{
    'default': type === ButtonType.Default,
    'outline': type === ButtonType.Outline,
    'ghost': type === ButtonType.Ghost}"
  >
    <slot></slot>
  </NuxtLink>
</template>


<script setup lang="ts">
const _ = defineProps({
  type: {
    type: String,
    default: 'default'
  },

  href: {
    type: String,
    default: '#'
  }
});

enum ButtonType {
  Default = 'default',
  Outline = 'outline',
  Ghost = 'ghost',
  Destructive = 'destructive'
}
</script>


<style scoped>
.button {
  @apply px-4 py-3 bg-transparent rounded-md brightness-100;
  @apply text-base font-medium tracking-font capitalize text-center;
  @apply hover:brightness-110 hover:transition-all hover:duration-300 transition-all duration-300;
}

.default {
  @apply bg-primary text-background;
}

.outline {
  @apply border border-border text-foreground;
}

.ghost {
  @apply text-foreground;
}
</style>