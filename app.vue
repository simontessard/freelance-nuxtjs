<template>
    <Header/>
    <BackHome/>
    <NuxtLayout>
      <div class="relative min-h-screen">
        <NuxtPage class="page-content"/>
      </div>
    </NuxtLayout>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import BackHome from '~/components/layout/BackHome.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<style>
.page-enter-active {
  transition: all .8s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.page-leave-active {
  transition: all .8s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.page-enter-active {
  z-index: 20;
  height: 100vh;
}

.page-enter-from {
  transform: translateY(100%) rotate(10deg) scale(1.4) translateX(-10%);
  /* clip-path: polygon(0% 100%, 0% 80%, 100% 100%, 100% 100%); */
  transition: all .8s cubic-bezier(0.55, 0.18, 0, 1.05);
}

/*
 .page-enter-to {
  clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
  transition: clip-path .9s cubic-bezier(0.55, 0.18, 0, 1.05);
}
*/

.page-leave-to {
  transform: rotate(-6deg) scale(1.3) translateY(-5%);
  opacity: 0;
  transition: all .7s ease-in-out;
}

</style>