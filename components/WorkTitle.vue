<template>
  <div ref="titleContainer" class="overflow-hidden size-fit h-16 md:h-58 mb-14 md:mb-30 max-md:mx-auto">
    <h2 ref="title" class="text-black translate-y-30 md:translate-y-120 rotate-30 text-6xl md:text-[15rem] font-lausanne tracking-tight">
      Projets
    </h2>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const title = ref(null)
const titleContainer = ref(null)

onMounted(() => {
  setTimeout(() => {
    gsap.to(title.value, {
      y: 0,
      duration: .8,
      rotate: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleContainer.value,
        start: 'top 60%',
        end: 'bottom top'
      }
    })
  }, 1000)
})

</script>