// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi', '@nuxt/image', '@nuxtjs/cloudinary'],
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: {
      name: 'page',
    }
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/<your-cloud-name>/image/fetch/'
    }
  },

  compatibilityDate: '2025-01-14'
})