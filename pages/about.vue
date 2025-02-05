<!-- pages/index.vue -->
<template>
  <div>

    <div class="relative z-20 bg-black h-screen flex gap-80 2xl:gap-90 pt-50 2xl:pt-60 px-30">

      <div>
        <h2 class="text-white text-9xl font-lausanne leading-30 size-fit mb-12">
          À propos
        </h2>
        <p class="text-white font-lausanne text-xl max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <CldImage
          src="sxf3nqt3cgtsqtea5dt5"
          width="500"
          height="600"
          loading="eager"
          alt="My Awesome Image"
          class="test w-150 h-200 object-cover"
      />

    </div>

    <WorkSection />

  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {gsap} from "gsap";

</script>