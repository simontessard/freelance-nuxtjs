<!-- pages/index.vue -->
<template>
  <div>
    <Overlay/>

    <div class="relative z-20">
      <img
          src="/about.webp"
          alt="Strapi logo"
          class="w-full h-[150vh] object-cover"
      />
    </div>

  </div>
</template>

<script setup>
import Overlay from "~/components/overlay.vue";
</script>