<template>
  <section class="relative z-20 h-[125dvh] md:h-[250vh]">

    <CursorScroll/>

    <div class="absolute z-11 left-0 top-0 bg-black/25 size-full"/>

    <CldImage
        src="sxf3nqt3cgtsqtea5dt5"
        width="auto"
        height="auto"
        loading="eager"
        alt="My Awesome Image"
        class="absolute z-10 left-0 top-0 size-full object-cover object-top bg-black"
    />

    <ScrollToExplore/>

    <div class="js-home-hero relative z-20 px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-38 pt-50 md:pt-80 xl:pt-110 2xl:pt-130">
      <Paragraph>
        Architecte du web passionné <br/>
        façonnant des interfaces innovantes <br/>
        pour rendre votre présence en ligne marquante.
      </Paragraph>
      <div class="xl:mb-10 2xl:mb-20">
        <PageTitle title="Web" className="-mb-12"/>
        <PageTitle title="Developer" className="-mb-12"/>
        <PageTitle title="Freelance" />
      </div>
      <Paragraph>
        Là pour sublimer votre travail <br/>
        et vous accompagner dans vos projets. <br/>
        Contactez-moi pour discuter de votre projet.
      </Paragraph>
      <div class="flex max-md:flex-col max-md:gap-8 md:items-center md:justify-between">
        <MainCTA/>
        <div class="flex max-md:flex-col gap-4 md:gap-20">
          <ul class="flex flex-col gap-4">
            <HomeHeroLink title="03 34 43 43 43" href="/about" />
            <HomeHeroLink title="contact@simon.fr" href="/about" />
          </ul>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import Paragraph from "~/components/Paragraph.vue";
import {gsap} from "gsap";
import {onMounted, onUnmounted} from "vue";
import MainCTA from "~/components/ui/MainCTA.vue";
import ScrollToExplore from "~/components/ScrollToExplore.vue";
import HomeHeroLink from "~/components/ui/HomeHeroLink.vue";

let animation: any;

onMounted(() => {
  setTimeout(() => {
    animation = gsap.to('.js-home-hero', {
      y: '-200px',
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '.js-home-hero',
        start: '+1',
        scrub: 1,
        end: 'bottom top'
      }
    })
  }, 1000)
})


// Nettoyer l'animation quand le composant est détruit
onUnmounted(() => {
  if (animation) {
    // Tuer l'animation et son ScrollTrigger
    if (animation.scrollTrigger) {
      animation.scrollTrigger.kill();
    }
    animation.kill();
  }
});

</script>