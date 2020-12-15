<template>
  <div class="px-4 grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
    <div
      v-for="(item) in data"
      :key="item.id"
      class="group bg-white rounded hover:bg-yellow-400"
    >
      <div class="relative py-16 xl:py-24 px-6 z-10">
        <span
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-opacity-10 text-8xl z-1"
          :class="item.icon"
        ></span>
        <div>
          <h4 class="font-bold text-xl lg:text-2xl xl:text-3xl uppercase h-16 group-hover:text-white">
            <a :href="item.link" class="font-oswald hover:text-black">{{ item.title }}</a>
          </h4>
          <div class="text-base text-black text-opacity-50">
            <p class="group-hover:text-white">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    components: {
    },
    props: ["data"],
  };
</script>