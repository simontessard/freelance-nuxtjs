<template>
  <div class="js-scroll-to-explore absolute z-12 top-0 left-0 flex flex-col items-end justify-end p-4 md:p-16 w-full h-screen">
    <p class="text-white size-fit font-lausanne text-sm md:text-lg opacity-60">Scroll to explore</p>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

onMounted(() => {

    ScrollTrigger.create({
      trigger: '.js-scroll-to-explore',
      start: '+1',
      end: '+40',
      scrub: 1,
      animation: gsap.to('.js-scroll-to-explore', {
        autoAlpha: 0,
        ease: 'power1.out'
      })
    })

})

</script>