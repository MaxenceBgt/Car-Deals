<template>
  <section class="cover-container">
    <div class="cover-content">
      <p class="cover-title">Trouvez la voiture de vos rêves dès aujourd'hui</p>
      <p class="cover-subtitle">Chez Car Deals, nous faisons de l'achat d'une voiture une expérience, pas un tracas. Nous comprenons que votre temps est précieux, et nous nous efforçons de fournir un service client de premier ordre pour rendre votre parcours d'achat de voiture fluide et agréable.</p>
      <div class="cover-buttons-container">
        <Button>Prendre Contact</Button>
        <Button type="outline">En savoir plus</Button>
      </div>
    </div>

    <div class="cover-image-container">
      <img class="cover-image" src="/img/cover/car.png" alt="Car Deals Cover Image" />
    </div>
  </section>
</template>


<style scoped>
.cover-container {
  @apply w-full flex flex-col-reverse lg:flex-row gap-9 lg:gap-20 lg:items-center;
}


/*---------- COVER CONTENT ----------*/
.cover-content {
  @apply w-full flex flex-col gap-3 lg:gap-6;
}

.cover-title {
  @apply text-4xl lg:text-6xl font-bold tracking-font text-foreground capitalize;
}

.cover-subtitle {
  @apply text-base lg:text-lg font-medium tracking-font text-secondary;
}

.cover-buttons-container {
  @apply w-full flex flex-col lg:flex-row gap-1;
}


/*---------- COVER IMAGE CONTAINER ----------*/
.cover-image-container {
  @apply w-full aspect-[347/396] rounded-t-3xl bg-gradient-to-b from-[#53B9AB] to-[#25534D] relative;
  @apply flex items-center justify-center;
  @apply lg:w-[55%] lg:rounded-t-[56px]
}

.cover-image {
  @apply w-auto h-[75%] absolute -left-[8%] object-contain;
}

</style>