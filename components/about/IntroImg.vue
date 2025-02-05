<template>
  <div class="bg-white w-full md:w-120 h-100 md:h-150">
    <div class="js-intro-img size-full" :style="{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'}">
      <CldImage
          src="sxf3nqt3cgtsqtea5dt5"
          width="auto"
          height="auto"
          loading="eager"
          alt="My Awesome Image"
          class="size-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
    gsap.to('.js-intro-img', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.3,
      delay: 0.4,
      ease: 'power4.inOut',
    })
})
</script>