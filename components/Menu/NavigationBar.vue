<template>
  <section class="navigation-bar-container">
    <NuxtLink to="/" class="logo-container">
      <img class="logo-image" src="/logo.png" alt="logo" />
      <p class="logo-title">Car Deals</p>
    </NuxtLink>

    <div class="menu-container">
      <MenuLink href="/rental">Location</MenuLink>
      <MenuLink href="/cars">Véhicules</MenuLink>
      <MenuLink href="/stores">Nos points de vente</MenuLink>
      <MenuLink href="/services">Services</MenuLink>
    </div>

    <div class="buttons-container">
      <Button type="ghost" href="/signup">S'inscrire</Button>
      <Button type="default" href="/contact">Prendre contact</Button>
    </div>

    <HamburgerButton @click="updateMobileMenuState" :isHambugerOpen="isMobileMenuOpen"/>
    <MobileNavigationMenu :isMobileMenuOpen="isMobileMenuOpen" />
  </section>
</template>


<script setup>
const isMobileMenuOpen = ref(false);

const updateMobileMenuState = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>


<style scoped>
.navigation-bar-container {
  @apply w-full h-20 px-6 md:px-20 bg-background border-b border-border;
  @apply flex items-center justify-between fixed top-0 left-0 z-50;
}


/*-------- LOGO CONTAINER --------*/
.logo-container {
  @apply flex items-center gap-2;
}

.logo-image {
  @apply w-8 aspect-square;
}

.logo-title {
  @apply text-2xl font-bold tracking-font text-foreground;
}


/*-------- MENU CONTAINER --------*/
.menu-container {
  @apply items-center gap-6 hidden lg:flex;
}


/*-------- BUTTONS CONTAINER --------*/
.buttons-container {
  @apply items-center gap-0.5 hidden lg:flex;
}
</style>