<template>
  <div class="horizontal-step-container">
    <div class="step-card-icon">
      <LucideMapPin class="step-icon" />
    </div>

    <div class="step-card-content">
      <p class="step-card-title">{{ title }}</p>
      <p class="step-card-description"><slot /></p>
    </div>
  </div>
</template>


<script setup>
const _ = defineProps({
  title: {
    type: String,
    required: true,
  }
});
</script>


<style scoped>
.horizontal-step-container {
  @apply flex items-start gap-3;
}


/*------- STEP CARD ICON -------*/
.step-card-icon {
  @apply w-16 h-16 bg-[#F1F0EF] rounded-sm border border-card shadow-step;
  @apply flex items-center justify-center shrink-0;
}

.step-icon {
  @apply w-6 h-6 text-primary;
}


/*------- STEP CARD CONTENT -------*/
.step-card-content {
  @apply flex flex-grow flex-col gap-1.5;
}

.step-card-title {
  @apply text-base font-bold tracking-font text-foreground uppercase;
}

.step-card-description {
  @apply max-w-[350px] text-sm font-normal tracking-font text-secondary;
}
</style>