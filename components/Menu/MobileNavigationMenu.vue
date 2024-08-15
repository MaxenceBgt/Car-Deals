<template>
  <section class="mobile-navigation-menu" :class="{'mobile-menu-open': isMobileMenuOpen}">
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
  </section>
</template>


<script setup>
const _ = defineProps({
  isMobileMenuOpen: {
    type: Boolean,
    default: false
  }
})
</script>


<style scoped>
.mobile-navigation-menu {
  @apply w-full h-full max-h-0 px-4  bg-background overflow-hidden;
  @apply flex flex-col gap-5 fixed top-20 left-0 z-50 transition-all duration-500;
}

.mobile-menu-open {
  @apply max-h-[330px] py-6 border-b border-border transition-all duration-500;
}


/*-------- MENU CONTAINER --------*/
.menu-container {
  @apply flex flex-col items-center gap-3;
}


/*-------- BUTTONS CONTAINER --------*/
.buttons-container {
  @apply flex flex-col gap-0.5;
}
</style>