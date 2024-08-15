<template>
  <button class="hamburger-button">
    <span class="hamburger-line" :class="{'line-open': isHambugerOpen}"></span>
    <span class="hamburger-line" :class="{'line-open': isHambugerOpen}"></span>
    <span class="hamburger-line" :class="{'line-open': isHambugerOpen}"></span>
    <span class="hamburger-line" :class="{'line-open': isHambugerOpen}"></span>
  </button>
</template>


<script setup>
const _ = defineProps({
  isHambugerOpen: {
    type: Boolean,
    default: false
  }
})
</script>



<style scoped>
.hamburger-button {
  @apply w-10 h-[30px] rotate-0 cursor-pointer transition-all duration-500 relative;
}

.hamburger-line {
  @apply w-full h-1 bg-foreground rounded-xl opacity-100 absolute left-0;
  @apply rotate-0 transition-all duration-300;
  @apply first:top-0 last:top-[26px];
}


.hamburger-line:nth-child(2), .hamburger-line:nth-child(3) {
  @apply top-[13px];
}


/*-------- OPEN HAMBURGER --------*/
.line-open {
  @apply first:w-0 first:top-[13px] first:left-1/2;
  @apply last:w-0 last:top-[13px] last:left-1/2
}

.line-open:nth-child(2) {
  @apply rotate-45;
}

.line-open:nth-child(3) {
  @apply -rotate-45;
}
</style>