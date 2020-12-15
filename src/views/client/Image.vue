<template>
  <div>
    <section class="top-panel">
      <div
        class="relative aspect-ratio-21/9 lg:aspect-ratio-30/9 bg-center bg-cover before:empty-content before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
        :style="{'background-image':'url('+ background +')'}"
      >
        <div class="absolute w-full top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4">
          <div class="text-center">
            <h2 class="font-oswald text-white text-center uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl">{{ name }}</h2>
            <breadcrumbs/>
          </div>
        </div>
      </div>
    </section>
    
    <section class="image">
      <div class="bg-black bg-opacity-5">
        <div class="container px-4 py-16 lg:py-18 xl:py-24 mx-auto">
          <h2 class="font-oswald text-center uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl mb-16">{{ title }}</h2>
            <masonry
              :cols="{default: 4, 1000: 3, 700: 2, 425: 1}"
              :gutter="{default: '2rem'}"
              v-viewer="options"
              class="images"
            >
              <template v-for="(image,index) in images">
                <!-- <figure @click="show"  class="images relative fas fa-search before:z-10 before:text-3xl before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:mt-40 before:text-white before:text-opacity-0 hover:before:text-opacity-100 hover:before:mt-0 after:empty-content after:absolute after:inset-0 after:bg-black after:bg-opacity-0 hover:after:bg-opacity-30 before:transition-all before:ease-default before:duration-300 after:transition after:ease-default after:duration-300"> -->
                  <img
                    :key="index"
                    :src="image.thumbnail" class="image mb-8 cursor-pointer"
                    :data-source="image.source"
                    :alt="image.source.split('?image=').pop()"
                  >
                <!-- </figure> -->
              </template>
            </masonry>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css';
  import Viewer from 'v-viewer';
  import Vue from 'vue';
  Vue.use(Viewer);
  const sourceImages = [];
  const base = parseInt((Math.random() * 60), 10) + 10;
  
  for (let i = 0; i < 120; i++) {
    const ranH = parseInt((Math.random() * 100), 10) + 200;
    sourceImages.push({
      thumbnail: `https://picsum.photos/id/${base + i}/346/${ranH}`,
      source: `https://picsum.photos/id/${base + i}/1440/900`
    })
  }

  export default {
    data() {
      return {
        name: this.$route.meta.breadcrumb,
        background: "http://runcrew.ancorathemes.com/wp-content/uploads/2016/05/header_bg.jpg",
        title: "Bộ sưu tập",
        options: {
          inline: false,
          button: true,
          navbar: true,
          title: true,
          toolbar: true,
          tooltip: true,
          movable: true,
          zoomable: true,
          rotatable: true,
          scalable: true,
          transition: true,
          fullscreen: true,
          keyboard: true,
          url: 'data-source'
        },
        images: [...sourceImages],
      };
    },
    // methods: {
    //   show () {
    //     const viewer = this.$el.querySelector('.images').$viewer
    //     viewer.show()
    //   }
    // },
    components: {
    },
  };
</script>
