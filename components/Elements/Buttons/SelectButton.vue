<template>
  <button class="select-button" :class="{'select-button-active': isActive}">
    <slot></slot>
  </button>
</template>


<script setup>
const _ = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>


<style scoped>
.select-button {
  @apply w-full py-3 bg-transparent rounded-md border border-border brightness-100;
  @apply text-base font-medium tracking-font text-foreground  capitalize text-center;
  @apply hover:brightness-110 hover:transition-all hover:duration-300 transition-all duration-300;
}

.select-button-active {
  @apply bg-primary text-background;
}
</style>