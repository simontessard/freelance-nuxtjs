<template>
  <li class="group overflow-hidden font-lausanne text-white text-xl font-light ">
    <nuxt-link :href="href" class="relative">
      {{ title }}
      <span class="absolute -bottom-0.5 block bg-white h-0.25 w-full -translate-x-full md:group-hover:translate-x-0 transition-transform ease-in-out duration-500"/>
    </nuxt-link>
  </li>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>