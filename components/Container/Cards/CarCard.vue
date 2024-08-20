<template>
  <div class="car-card-container">
    <div class="car-image-container">
      <img class="car-image" :src="`/img/cars/${carItem.image}`" alt="Car image"/>
    </div>

    <div class="car-description-container">
      <p class="car-title">{{carItem.name}}</p>
      <p class="car-price">${{carItem.promo}} <span class="car-promo">${{carItem.price}}</span></p>
    </div>

    <Button>En Savoir Plus</Button>
  </div>
</template>


<script setup>
const _ = defineProps({
  carItem: {
    type: Object,
    required: true
  }
})
</script>


<style scoped>
.car-card-container {
  @apply w-full p-6 bg-card rounded-xl flex flex-col gap-6;
}


/*--------- CAR IMAGE ---------*/
.car-image-container {
  @apply w-full aspect-[6/5] rounded-md overflow-hidden;
}

.car-image {
  @apply w-full h-full  object-cover object-center;
}


/*--------- CAR DESCRIPTION ---------*/
.car-description-container {
  @apply flex flex-col gap-4;
}

.car-title {
  @apply text-lg font-bold tracking-font text-foreground uppercase;
}

.car-price {
  @apply text-base font-bold tracking-font text-primary;
}

.car-promo {
  @apply ml-5 text-muted line-through;
}
</style>