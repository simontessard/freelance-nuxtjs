<template>
  <nuxt-link :href="href" class="cursor-pointer flex gap-2.5 items-center group font-lausanne text-xl text-white overflow-hidden size-fit">

    <div class="relative size-11">
      <svg class="absolute z-10 top-0 bottom-0 left-0 right-0 m-auto -translate-x-10 transition-transform duration-300 md:group-hover:translate-x-0 fill-black size-4" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"/>
      </svg>

      <span class="block absolute top-0 left-0 right-0 bottom-0 m-auto size-2 border rounded-full"/>
      <span class="block size-11 scale-0 md:group-hover:scale-100 transition-transform duration-300 bg-white rounded-full"/>
    </div>

    <span class="-translate-x-2.5 md:group-hover:translate-x-0 transition-transform duration-300 h-7 relative">
      {{ text }}
      <span class="absolute bottom-0.5 block bg-white h-0.25 w-full md:group-hover:translate-x-full transition-transform ease-in-out duration-500"/>
    </span>

  </nuxt-link>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>