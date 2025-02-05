<template>
  <nuxt-link to="/" class="js-back-home font-lausanne fixed z-99 top-4 md:top-6 lg:top-10 xl:top-14 left-4 md:left-6 lg:top-10 xl:left-16
  font-light text-xl md:text-3xl text-white">
    <span class="font-black">simon</span><span class="italic">tessard</span>
  </nuxt-link>
</template>

<script setup>
import {onMounted} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

onMounted(() => {

  ScrollTrigger.create({
    trigger: '.js-back-home',
    start: '+1',
    end: '+40',
    scrub: 1,
    animation: gsap.to('.js-back-home', {
      autoAlpha: 0,
      ease: 'power1.out'
    })
  })

})
</script>