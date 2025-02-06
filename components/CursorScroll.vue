<template>
  <div
      ref="cursor"
      class="cursor-follower max-md:hidden absolute z-200 size-28 rounded-full pointer-events-none flex items-center justify-center text-white text-lg font-lausanne"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <span class="flex relative size-28 rounded-full overflow-hidden">
      <span class="block absolute top-0 size-full rounded-full" :style="{backdropFilter: 'blur(20px)', backgroundColor: 'rgba(0,0,0,.10)'}"/>
      <span class="block size-fit absolute top-0 bottom-0 left-0 right-0 m-auto">Scroll</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Refs
const cursor = ref<HTMLElement | null>(null)
const position = ref({ x: 0, y: 0 })
const targetPosition = ref({ x: 0, y: 0 })
let animationFrame: number
let hoverTimeline: gsap.core.Timeline | null = null

// Mouse move handler
const handleMouseMove = (e: MouseEvent) => {
  targetPosition.value = {
    x: e.pageX,
    y: e.pageY
  }
}

// Animation loop
const animatePosition = () => {
  const ease = 0.1
  position.value = {
    x: position.value.x + (targetPosition.value.x - position.value.x) * ease,
    y: position.value.y + (targetPosition.value.y - position.value.y) * ease
  }
  animationFrame = requestAnimationFrame(animatePosition)
}

// GSAP animation initialization
const initGsapAnimation = () => {
  if (!cursor.value) return

  hoverTimeline = gsap.timeline({ paused: true })
      .to(cursor.value, {
        autoAlpha: 0,
        backdropFilter: 'blur(20px)',
        duration: 0.3,
        ease: 'power2.out'
      })
}

// Link hover handlers
const handleLinkEnter = () => {
  hoverTimeline?.play()
}

const handleLinkLeave = () => {
  hoverTimeline?.reverse()
}

// Link listeners management
const setupLinkListeners = () => {
  if (process.client) {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter)
      link.addEventListener('mouseleave', handleLinkLeave)
    })
  }
}

const removeLinkListeners = () => {
  if (process.client) {
    document.querySelectorAll('a').forEach(link => {
      link.removeEventListener('mouseenter', handleLinkEnter)
      link.removeEventListener('mouseleave', handleLinkLeave)
    })
  }
}

// Lifecycle hooks
onMounted(() => {
  if (process.client) {
    window.addEventListener('mousemove', handleMouseMove)
    setupLinkListeners()
    initGsapAnimation()
    animatePosition()
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('mousemove', handleMouseMove)
    removeLinkListeners()
    cancelAnimationFrame(animationFrame)
    hoverTimeline?.kill()
  }
})
</script>