<template>
  <div class="relative overflow-hidden">
    <div class="relative lg:absolute h-80 lg:h-auto w-full lg:w-2/4 inset-y-0 right-0 bg-center bg-cover bg-no-repeat " :style="{ 'background-image': 'url('+ data.image +')' }"></div>
    <blockquote class="w-full lg:w-2/4 float-left px-12 md:px-16 lg:px-24 py-10 lg:py-20 lg:py-32 lg:pr-32">
      <div class="relative my-8 pt-6 pl-6">
        <h6 class="text-black text-opacity-60 uppercase mb-8">{{ data.subTitle }}</h6>
        <h2 class="font-oswald uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ data.title }}</h2>
        <p class="z-10 text-black text-base text-opacity-60">{{ data.quote }}</p>
      </div>
    </blockquote>
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