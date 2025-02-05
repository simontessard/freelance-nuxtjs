<template>
  <nuxt-link href="/about" class="cursor-pointer flex gap-2.5 items-center group font-lausanne text-xl text-white overflow-hidden size-fit">

    <div class="relative size-11">
      <svg class="absolute z-10 top-0 bottom-0 left-0 right-0 m-auto -translate-x-10 transition-transform duration-300 md:group-hover:translate-x-0 stroke-black text-white size-4"
           viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#FFFFFF">
        <line class="cls-63ce7424ea57ea6c8380058e-1" x1="21.5" y1="12" x2="0.5" y2="12"></line>
        <polyline class="cls-63ce7424ea57ea6c8380058e-1" points="13.86 4.36 21.5 12 13.86 19.64"></polyline>
      </svg>

      <span class="block absolute top-0 left-0 right-0 bottom-0 m-auto size-2 border rounded-full"/>
      <span class="block size-11 scale-0 md:group-hover:scale-100 transition-transform duration-300 bg-white rounded-full"/>
    </div>

    <span class="-translate-x-2.5 md:group-hover:translate-x-0 transition-transform duration-300 h-7 relative">
      À propos
      <span class="absolute bottom-0.5 block bg-white h-0.25 w-full md:group-hover:translate-x-full transition-transform ease-in-out duration-500"/>
    </span>

  </nuxt-link>
</template>

<script setup>
</script>