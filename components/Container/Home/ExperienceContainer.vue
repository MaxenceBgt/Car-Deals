<template>
  <section class="experience-container">
    <img class="experience-image" src="/img/cover/car2.png" alt="Experience Car Image" />
    <div class="experience-content">
      <div class="experience-title-container">
        <p class="experience-subtitle">Best Service</p>
        <h2 class="experience-title">Vivez la meilleure expérience avec nos offres Turbo</h2>
        <div class="experience-line"></div>
      </div>

      <div class="experience-array-container">
        <HorizontalStepCard title="Des offres pour tous les budgets">
          Voiture économique ou familiale, nous avons la solution idéale pour vous. Louez en toute sérénité sans compromettre votre budget!
        </HorizontalStepCard>

        <HorizontalStepCard title="Le meilleur prix garanti">
          Profitez du meilleur prix garanti sur toutes nos locations de voitures. Trouvez l'offre parfaite, sans dépenser plus que nécessaire.
        </HorizontalStepCard>

        <HorizontalStepCard title="SUPPORT 24/7">
          Bénéficiez d'un support 24/7 pour une assistance complète, à tout moment. Nous sommes là pour vous aider, jour et nuit, où que vous soyez.
        </HorizontalStepCard>
      </div>
    </div>
  </section>
</template>


<style scoped>
.experience-container {
  @apply w-full flex flex-col lg:flex-row justify-between items-start;
}

.experience-content {
  @apply lg:px-12 flex flex-col gap-12;
}

.experience-array-container {
  @apply flex flex-col gap-8;
}


/*------ EXPERIENCE IMAGE ------*/
.experience-image {
  @apply w-full lg:w-1/2 aspect-[28/23] object-cover object-center;
}


/*------ EXPERIENCE TITLE CONTAINER ------*/
.experience-title-container {
  @apply w-full lg:w-fit flex flex-col items-start lg:items-center gap-4;
}

.experience-subtitle {
  @apply text-base font-normal tracking-font text-muted uppercase text-center;
}

.experience-title {
  @apply text-3xl max-w-[500px] text-4xl font-bold tracking-font text-foreground capitalize text-left;
}

.experience-line {
  @apply w-24 border border-border;
}
</style>
<script setup lang="ts">
</script>