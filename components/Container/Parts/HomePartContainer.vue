<template>
  <section class="home-part-container">
    <div class="title-container">
      <p class="container-subtitle">Best Service</p>
      <p class="container-title"><slot name="title"/></p>
      <slot name="buttons" />
    </div>

    <slot name="content" />
  </section>
</template>


<style scoped>
.home-part-container {
  @apply w-full flex flex-col gap-8 lg:gap-16 items-center overflow-hidden;
}


/*------- TITLE CONTAINER -------*/
.title-container {
  @apply w-full flex flex-col items-center gap-4;
}

.container-subtitle {
  @apply text-base font-normal tracking-font text-muted uppercase text-center;
}

.container-title {
  @apply text-4xl font-bold tracking-font text-foreground capitalize text-center;
}
</style>