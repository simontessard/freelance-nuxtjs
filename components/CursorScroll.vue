<template>
  <div
      class="cursor-follower absolute z-200 size-28 rounded-full pointer-events-none flex items-center justify-center text-white font-lausanne"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <span class="flex relative size-28 rounded-full overflow-hidden">
      <span class="block absolute top-0 size-full rounded-full" :style="{backdropFilter: '20px', backgroundColor: 'rgba(0,0,0,.15)'}"/>
      <span class="block size-fit absolute top-0 bottom-0 left-0 right-0 m-auto text-lg">Scroll</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: { x: 0, y: 0 },
      targetPosition: { x: 0, y: 0 }
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.handleMouseMove)
    this.animatePosition()
  },
  unmounted() {
    window.removeEventListener('mousemove', this.handleMouseMove)
    cancelAnimationFrame(this.animationFrame)
  },
  methods: {
    handleMouseMove(e) {
      this.targetPosition = {
        x: e.pageX,
        y: e.pageY
      }
    },
    animatePosition() {
      const ease = 0.1
      this.position = {
        x: this.position.x + (this.targetPosition.x - this.position.x) * ease,
        y: this.position.y + (this.targetPosition.y - this.position.y) * ease
      }
      this.animationFrame = requestAnimationFrame(this.animatePosition)
    }
  }
}
</script>