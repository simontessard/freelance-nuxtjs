<template>

  <header>
    <nav>
      <ul class="js-nav fixed z-99 top-4 md:top-6 lg:top-10 xl:top-14 right-4 md:right-6 lg:right-10 xl:right-16 flex size-fit gap-10">
        <HeaderLink title="À propos" href="/about"/>
      </ul>
    </nav>
  </header>

</template>

<script setup>
const { $gsap } = useNuxtApp()
import {onMounted} from "vue";
import HeaderLink from "~/components/ui/HeaderLink.vue";

onMounted(() => {
  setTimeout(() => {
    $gsap.to('.js-nav', {
      autoAlpha: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.js-nav',
        start: '+1',
        end: '+40',
        scrub: 1,
      }
    })
  }, 1000)
})
</script>