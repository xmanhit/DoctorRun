<template>
  <VueSlickCarousel @afterChange="slideChange" v-bind="settings">
    <div
      v-for="(item, index) in data"
      :key="item.id"
      v-bind:style="{ 'padding-top': '50%' }"
      class="relative overflow-hidden"
    >
      <div
        v-bind:style="{ 'background-image': 'url(' + item.image + ')' }"
        class="animated absolute inset-0 bg-cover bg-center outline-none focus:outline-none after:empty-content after:bg-cover after:bg-center after:bg-black after:bg-opacity-50 after:absolute after:inset-0"
        :class="[(currentIndex === index) ? 'zoomInImage' : '']"
      >
      </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          class="text-center animatedText animatedFadeInUp"
          :class="[(currentIndex === index) ? 'fadeInUp' : '']"
        >
          <h1 class="font-oswald text-white uppercase font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-loose">{{ item.title }}</h1>
          <p class="text-white leading-normal capitalize text-opacity-75 text-base">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

  export default {
    props: ['data'],
    data() {
      return {
        settings: {
          lazyLoad: "ondemand",
          fade: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1000,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,
          cssEase:"ease-in-out",
          useTransform: true,
          useCSS: true,
          dots: true,
          dotsClass: "master-dots",
        },
        currentIndex: 0,
      };
    },
    methods: {
      slideChange(index){
        this.currentIndex = index;
      }
    },
    components: { VueSlickCarousel },
  };
</script>