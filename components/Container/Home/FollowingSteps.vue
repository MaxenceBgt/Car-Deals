<template>
  <HomePartContainer>
    <template #title>Cars Deals en 3 étapes pratiques</template>

    <template #content>
      <div class="following-content">
        <StepCard title="Maintenance">
          Nos techniciens experts veillent à ce que votre voiture reste en parfait état, en fournissant des services d'entretien de premier ordre.
        </StepCard>

        <div class="arrow-icon"/>

        <StepCard title="Customisation">
          Personnalisez votre voiture pour qu'elle reflète votre style unique et vos préférences grâce à nos options de personnalisation haut de gamme.
        </StepCard>

        <div class="arrow-icon"/>

        <StepCard title="Financement">
          Ouvrez la porte à la voiture de vos rêves grâce à des solutions de financement flexibles adaptées à vos besoins.
        </StepCard>
      </div>
    </template>
  </HomePartContainer>
</template>


<style scoped>
.following-content {
  @apply w-full flex flex-col gap-12 lg:gap-0 lg:flex-row items-center;
}

.arrow-icon {
  @apply h-20 lg:w-28 lg:h-0 border-2 mb-3 lg:mr-3 lg:mb-0 border-border flex items-center justify-center relative;
  @apply after:content-[''] after:w-3 after:h-3 after:bg-border after:absolute lg:after:-right-3;
  @apply after:rotate-90 after:-bottom-3 lg:after:-bottom-1.5 lg:after:rotate-0;
}

.arrow-icon::after {
  clip-path: polygon(0 0, 0 100%, 100% 50%);
}
</style>
