<template>
  <div class="relative overflow-hidden">
    <div class="relative lg:absolute h-80 lg:h-auto w-full lg:w-2/4 inset-y-0 left-0 bg-center bg-cover bg-no-repeat " :style="{ 'background-image': 'url('+ data.image +')' }"></div>
    <blockquote class="w-full lg:w-2/4 float-right px-12 md:px-16 lg:px-24 py-10 lg:py-20 lg:py-32 lg:pr-32">
      <div class="relative my-8 pt-6 pl-6">
        <i class="absolute top-0 left-0 z-0 text-6xl text-black text-opacity-10 fas fa-quote-left"></i>
        <p class="z-10 text-black text-base text-opacity-60">{{ data.quote }}</p>
        <div class="author flex justify-start items-center mt-12">
          <div class="photo mr-6"><img class="rounded-full w-16" :src="data.user.avatar" alt="avatar"></div>
          <div class="info uppercase">
            <p class="font-oswald name text-xl font-bold">{{ data.user.name }}</p>
            <p class="position text-sm text-black text-opacity-50">{{ data.user.position }}</p>
          </div>
        </div>
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