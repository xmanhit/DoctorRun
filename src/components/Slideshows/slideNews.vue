<template>
  <VueSlickCarousel class="news" v-bind="settings">
    <div
      v-for="(item) in data"
      :key="item.id"
      class="relative px-4 outline-none"
    >
      <div class="rounded overflow-hidden bg-white">
        <div>
          <a
            class="relative block fas fa-link before:z-10 before:text-3xl before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:mt-40 before:text-white before:text-opacity-0 hover:before:text-opacity-100 hover:before:mt-0 after:empty-content after:absolute after:inset-0 after:bg-black after:bg-opacity-0 hover:after:bg-opacity-30 before:transition-all before:ease-default before:duration-300 after:transition after:ease-default after:duration-300"
            :href="item.link"
            v-on:dragstart="dragstart"
          >
          <span class="block aspect-ratio-square bg-center bg-cover" :style="{'background-image': 'url('+ item.image +')'}"></span>
          </a>
        </div>
        
        <div class="px-8 py-6">
          <div class="clamp-2 h-14 font-oswald font-bold uppercase text-xl text-center mb-2">{{ item.title }}</div>
        </div>
        <div class="px-8 py-6">
          <div class="text-center text-xs text-black opacity-80">
            <span class="uppercase">
              <a :href="item.link" class="date">{{ item.date }}</a>
            </span>
            <span class="mx-4">|</span>
            <span>
              <a title="Comments" class="mr-3" :href="item.link"><i class="far fa-comment-alt mr-2"></i><span>{{ item.comment }}</span></a>
              <a title="Like" :href="item.link"><i class="far fa-heart mr-2"></i><span>{{ item.like }}</span></a>
            </span>
          </div>
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
          draggable: true,
          arrows: false,
          dots: true,
          dotsClass: "out master-dots",
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight: true,
          infinite: true,
           responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ],
        },
      };
    },
    methods: {
      dragstart: function(e) {
        return e.returnValue = false;
      }
    },
    components: { VueSlickCarousel },
  };
</script>