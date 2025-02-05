<template>
  <li ref="project" :class="['', className]">
    <nuxt-link :href="href" target="_blank" class="block size-full">
      <div
          class="img-container overflow-hidden size-full mb-3.5"
          :style="{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }"
          ref="imgContainer"
      >
        <nuxt-img
            loading="eager"
            quality="90"
            ref="img"
            :src="imageUrl"
            :alt="imageAlt"
            class="size-full scale-110 object-cover object-center"
        />
      </div>

      <h3 class="text-black text-2xl font-lausanne tracking-tight">
        {{ title }}
      </h3>
    </nuxt-link>
  </li>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})

const project = ref(null)
const imgContainer = ref(null)
const img = ref(null)

onMounted(() => {
  setTimeout(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: project.value,
        start: 'top 35%',
        end: 'bottom center',
      }
    })

    tl.to(imgContainer.value, {
      duration: .7,
      ease: 'power4.inOut',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    })
    tl.to(img.value, {
      duration: 1,
      ease: 'power4.inOut',
      scale: 1
    }, '<')
  }, 1000)
})

</script>