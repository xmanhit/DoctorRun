<template>
  <VueSlickCarousel class="event-slider" v-bind="settings">
    <div
      v-for="(item) in data"
      :key="item.id"
      class="py-12 outline-none focus:outline-none"
    >
      <table class="table-auto w-full">
        <tbody class="">
          <tr class="">
            <td class="w-full block lg:inline-grid lg:w-15/100">
              <span class="font-oswald text-white leading-normal text-6xl block text-center lg:text-left font-bold tracking-tighter">{{ item.date }}</span>
            </td>
            <td class="w-full block lg:inline-grid lg:w-1/5">
              <span class="text-white leading-normal text-sm block text-center lg:text-left text-opacity-25">
                {{ item.time }}
              </span>
            </td>
            <td class="w-full block lg:inline-grid lg:w-30/100">
              <h4 class="text-white text-3xl text-center lg:text-left font-bold">
                <a class="font-oswald leading-normal uppercase hover:text-yellow-400" v-on:dragstart="dragstart" :href="item.link">{{ item.title }}</a>
              </h4>
            </td>
            <td class="w-full block lg:inline-grid lg:w-1/5">
              <span class="text-white leading-normal block text-center lg:text-left text-sm text-opacity-25">
                {{ item.location }}
              </span>
            </td>
            <td class="w-full block lg:inline-grid lg:w-15/100">
              <span class="text-white leading-tight text-center py-6 lg:text-right block">
                <a v-on:dragstart="dragstart" :href="item.link" class="font-oswald inline-block text-center bg-yellow-400 border-2 border-yellow-400 text-white active:bg-transparent active:text-yellow-400 text-base font-bold uppercase px-10 py-3 rounded-full hover:bg-transparent hover:text-yellow-400 outline-none focus:outline-none ease-linear transition-all duration-150">Xem Thêm</a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
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
          dots: true,
          dotsClass: "out master-dots",
          arrows: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 5000,
          vertical: true,
          verticalSwiping: true
        },
      };
    },
    methods: {
      dragstart: function(e) {
        return e.returnValue = false;
      }
    },
    components: { VueSlickCarousel },
}
</script>