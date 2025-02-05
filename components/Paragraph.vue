<template>
  <p ref="split" class="text-lg md:text-3xl text-white max-w-2xl font-lausanne font-light leading-7 md:leading-10 mb-12 md:mb-20">
    <slot>
      Architecte du web passionné <br/>
      façonnant des interfaces innovantes <br/>
      pour rendre votre présence en ligne marquante.
    </slot>
  </p>
</template>

<script setup>

import SplitType from 'split-type'
import {gsap} from "gsap";
import {onMounted, ref} from "vue";

const split = ref(null)

onMounted(() => {

  setTimeout(() => {
    const split = new SplitType(split.value, {
      types: 'lines',
      linesClass: 'line',
    })

    split.lines.forEach((line, index) => {
      const wrapper = document.createElement('span')
      wrapper.classList.add('inline-block')
      wrapper.classList.add('overflow-hidden')
      wrapper.classList.add('h-6')
      wrapper.classList.add('md:h-8')

      const lineContent = line.cloneNode(true)
      lineContent.classList.add('translate-y-32')
      lineContent.classList.add('md:translate-y-40')
      lineContent.classList.add('rotate-20')

      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(lineContent)
      line.remove()
    })

    gsap.to('.line', {
      y: 0,
      rotate: 0,
      stagger: 0.05,
      duration: 1.3,
      delay: 0.6,
      ease: 'power4.out',
    })
  }, 1000)
})
</script>