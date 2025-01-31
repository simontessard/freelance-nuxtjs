<!-- pages/index.vue -->
<template>
  <div>
    <Overlay/>

    <div class="relative z-20">
      <img
          src="/home.webp"
          alt="Strapi logo"
          class="w-full h-[150vh] object-cover"
      />
      <div v-for="article in articles" :key="article.id">
        <h2>{{ article.title }}</h2>
        <img
            v-if="article.cover"
            :src="'http://localhost:1337'+article.cover.formats.medium.url"
            :alt="article.cover.alternativeText"
            loading="lazy"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
const { find } = useStrapi()
const { data: articles } = await find('articles', {populate: '*'})
</script>