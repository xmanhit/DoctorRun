<template>
  <div class="px-4 py-8">
    <slider-vertical :data="data"/>
  </div>
</template>
<script>
import SliderVertical from '../Slideshows/SliderVertical.vue';
  export default {
    data() {
      return {
      };
    },
    components: {
        SliderVertical
    },
    props: ["data"],
  };
</script>