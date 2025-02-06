<!-- pages/index.vue -->
<template>
  <div>

    <div class="relative z-20 bg-black min-h-screen flex max-lg:flex-col gap-20 gap-22 xl:gap-80 2xl:gap-90 pt-30 md:pt-40 2xl:pt-50 px-4 md:px-6 lg:px-14 2xl:px-30">

      <div class="pt-20">
        <h2 class="text-white text-4xl md:text-7xl xl:text-8xl 2xl:text-9xl font-lausanne leading-7 xl:leading-25 2xl:leading-30 size-fit mb-6 md:mb-12">
          À propos
        </h2>
        <p class="text-white font-lausanne md:text-xl max-w-xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <MainCTA text="Accueil" href="/"/>
      </div>

      <IntroImg/>

    </div>

    <WorkSection />

  </div>
</template>

<script setup>
import IntroImg from "~/components/about/IntroImg.vue";
import MainCTA from "~/components/ui/MainCTA.vue";


</script>