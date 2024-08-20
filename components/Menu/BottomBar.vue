<template>
  <section class="bottom-bar-container">
    <div class="footer-content">
      <div class="logo-container">
        <img class="logo-image" src="/logo.png" alt="logo" />
        <p class="logo-title">Car Deals</p>
      </div>

      <div class="footer-content-container">
        <p class="container-title">Adresse</p>
        <p class="container-description">Level 1, 12 Sample St, Sydney NSW 2000</p>
      </div>

      <div class="footer-content-container">
        <p class="container-title">Contact</p>
        <a class="container-description" href="tel:+44 126-085-62343">+44 126-085-62343</a>
        <a class="container-description" href="mailto:contact@cardeals.com">contact@cardeals.com</a>
      </div>

      <div class="social-media-container">
        <LucideInstagram class="social-media-icon" />
        <LucideFacebook class="social-media-icon" />
        <LucideTwitter class="social-media-icon" />
        <LucideLinkedin class="social-media-icon" />
        <LucideYoutube class="social-media-icon" />
      </div>
    </div>

    <div class="policy-container">
      <p class="policy-text">© 2024 Car Deals. All rights reserved.</p>

      <div class="right-container">
        <a href="/terms" class="policy-text policy-link">Terms & Conditions</a>
        <a href="/privacy" class="policy-text policy-link">Privacy Policy</a>
      </div>
    </div>
  </section>
</template>


<style scoped>
.bottom-bar-container {
  @apply w-full mt-9 px-20 py-9 border-t border-border flex flex-col gap-6;
}

.footer-content {
  @apply flex flex-col items-center md:items-start gap-6;
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


/*-------- FOOTER CONTENT CONTAINER --------*/
.footer-content-container {
  @apply flex flex-col items-center md:items-start gap-2;
}

.container-title {
  @apply text-base font-bold tracking-font text-foreground capitalize text-center md:text-left;
}

.container-description {
  @apply text-sm font-medium tracking-font text-secondary text-center md:text-left;
}


/*-------- SOCIAL MEDIA CONTAINER --------*/
.social-media-container {
  @apply flex items-center gap-3;
}

.social-media-icon {
  @apply w-6 h-6 text-secondary cursor-pointer;
  @apply hover:text-foreground hover:transition-all hover:duration-300 transition-all duration-300;
}


/*-------- POLICY CONTAINER --------*/
.policy-container {
  @apply w-full pt-6 border-t border-border flex flex-col-reverse gap-8 items-center justify-between;
  @apply md:flex-row md:gap-0;
}

.right-container {
  @apply flex items-center gap-6;
}

.policy-text {
  @apply text-sm font-medium tracking-font text-muted;
}

.policy-link {
  @apply hover:text-foreground hover:transition-all hover:duration-300 transition-all duration-300;
}
</style>