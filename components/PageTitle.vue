<template>
  <div :class="className" class="size-fit overflow-hidden h-26 xl:h-70 2xl:h-86 2xl:-translate-x-5">
    <h1 ref="pageTitle" class="rotate-[20deg] font-lausanne tracking-tight translate-y-[200%] opacity-0 font-light text-white text-5xl xl:text-[16rem] 2xl:text-[19rem] 2xl:leading-103">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  className: {
    type: String,
    required: false
  }
})

const pageTitle = ref(null)

onMounted(() => {
  gsap.to(pageTitle.value, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.6,
    rotate: 0,
    ease: 'power1.out'
  })
})

</script>