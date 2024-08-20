<template>
  <HomePartContainer>
    <template #title>Découvrez la voiture parfaite</template>

    <template #buttons>
      <Swiper class="swiper-buttons-carousel"
        :spaceBetween="12"
        :freeMode="true"
        :breakpoints="{
          0: { slidesPerView: 4.5 },
          1024: { slidesPerView: 8 }
        }"

      >
        <SwiperSlide class="swiper-button-item" v-for="carBrand in carsBrands" :key="carBrand.id">
          <SelectButton :isActive="carBrand.id === carBrandActive" @click="updateCarBrand(carBrand.id)">
            {{ carBrand.name }}
          </SelectButton>
        </SwiperSlide>
      </Swiper>
    </template>

    <template #content>
      <div class="car-cards-grid">
        <CarCard v-for="car in carsArrayFiltered" :key="car.id" :carItem="car"/>
      </div>
    </template>

  </HomePartContainer>
</template>


<script setup>
import carsBrands from '~/assets/json/brands.json'
import carsArray from '~/assets/json/cars.json'

const carBrandActive = ref(0)
const carsArrayFiltered = ref(carsArray.filter(car => car.brand === carBrandActive.value))

const updateCarBrand = (carID) => {
  carBrandActive.value = carID
  carsArrayFiltered.value = carsArray.filter(car => car.brand === carBrandActive.value)
}
</script>


<style scoped>
.swiper-buttons-carousel {
  @apply w-full mt-1.5;
}

.swiper-button-item {
  @apply w-full;
}


.buttons-container {
  @apply w-full mt-1.5 flex items-center gap-5 flex-nowrap overflow-x-auto;
}

.car-cards-grid {
  @apply w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6;
}
</style>