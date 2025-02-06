<template>
  <li ref="project" :class="['', className]">
    <nuxt-link :href="href" target="_blank" class="block size-full">
      <div
          class="overflow-hidden size-full bg-red-200 mb-3.5"
          :style="{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }"
          ref="imgContainer"
      >
        <div ref="imgScale" class="size-full scale-110">
          <nuxt-img
              loading="eager"
              quality="90"
              format="webp"
              :src="imageUrl"
              :alt="imageAlt"
              class="size-full object-cover"
          />
        </div>
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
const imgScale = ref(null)

onMounted(() => {
  setTimeout(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: project.value,
        start: 'top 40%',
        end: 'bottom center',
      }
    })

    tl.to(imgContainer.value, {
      duration: .7,
      ease: 'power4.inOut',
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    })
    tl.to(imgScale.value, {
      duration: 1,
      ease: 'power4.inOut',
      scale: 1,
    }, '<')
  }, 1000)
})

</script>