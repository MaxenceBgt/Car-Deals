<template>
  <div class="step-card-container">
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
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
});

</script>


<style scoped>
.step-card-container {
  @apply flex flex-col items-center gap-6;
}


/*------- STEP CARD ICON -------*/
.step-card-icon {
  @apply w-20 h-20 bg-[#F1F0EF] rounded-sm border border-card shadow-step;
  @apply flex items-center justify-center;
}

.step-icon {
  @apply w-8 h-8 text-primary;
}


/*------- STEP CARD CONTENT -------*/
.step-card-content {
  @apply flex flex-col items-center gap-3.5;
}

.step-card-title {
  @apply text-xl font-bold tracking-font text-foreground capitalize text-center;
}

.step-card-description {
  @apply text-lg font-normal tracking-font text-secondary text-center;
}
</style>