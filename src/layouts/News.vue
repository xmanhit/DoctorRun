<template>
  <div>
    <section class="top-panel">
      <div
        class="relative aspect-ratio-30/9 bg-center bg-cover before:empty-content before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
        :style="{'background-image':'url('+ background +')'}"
      >
        <div class="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4">
          <div class="text-center">
            <h2 class="font-oswald font-bold text-white text-7xl leading-normal uppercase">{{ name }}</h2>
            <breadcrumbs/>
          </div>
        </div>
      </div>
    </section>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
  export default {
    data() {
      console.log(this.$route.meta.breadcrumb);
      return {
        name: this.$route.meta.breadcrumb,
        background: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/05/header_bg.jpg",
      }
    }
  }
</script>